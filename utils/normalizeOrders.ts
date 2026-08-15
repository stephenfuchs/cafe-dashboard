import {
    imagesCategory,
    imagesDefault,
    imagesItem,
    itemCategoryAssignment,
    itemCategoryMap,
    itemNameMap,
} from "~/server/utils/mappings";
import {
    buildModifierCategoryMap,
    normalizeModifier,
} from "~/utils/normalizeModifier";
import { isRefundedItem, isVoidedItem } from "~/utils/normalizeSaleStatus";
import { normalizeDiscounts } from "~/utils/normalizeDiscounts";
import type { OrdersQuery } from "~/src/gql/graphql";
import type {
    NormalizedModifier,
    NormalizedOrder,
    NormalizedSale,
} from "~/types/analytics";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];
type LineItem = NonNullable<NonNullable<Order["lineItems"]>[number]>;

// `imagesItem` is static for the lifetime of the application.
// Build the entries array once rather than recreating it for every line item.
const imageMappings = Object.entries(imagesItem);

const isCoffeePotItem = (name: string) => {
    return name === "coffee pot";
};

const isDonationItem = (normalizedName: string, normalizedCategory: string) => {
    return (
        normalizedCategory === "donations" ||
        normalizedName.includes("donation")
    );
};

const extractCoffeeFlavor = (modifiers: NormalizedModifier[]) => {
    const flavorModifier = modifiers.find(
        (modifier) => modifier.category === "flavor",
    );

    return flavorModifier?.selection ?? "unknown";
};

export const normalizeSale = (
    item: LineItem,
    orderId: string,
    closedAt: string,
    discountsByUid: Map<string, NonNullable<Order["discounts"]>[number]>,
): NormalizedSale | null => {
    const originalName = item.name?.trim().toLowerCase() ?? "";

    const modifierCategoryMapBySelection = item.modifiers?.length
        ? buildModifierCategoryMap(item)
        : new Map<string, string>();

    const normalizedName = itemNameMap[originalName] ?? originalName;

    const rawCategory =
        item.itemVariation?.item?.categories?.[0]?.category?.name
            ?.trim()
            .toLowerCase() ?? "";

    const mappedCategory = itemCategoryMap[rawCategory] ?? rawCategory;

    const normalizedCategory =
        mappedCategory || itemCategoryAssignment[normalizedName] || "unknown";

    const baseQuantity = Number(item.quantity ?? 0);

    const grossSales = item.grossSalesMoney?.amount ?? 0;

    const totalSales = item.totalMoney?.amount ?? 0;

    const totalDiscounts = item.totalDiscountMoney?.amount ?? 0;

    const rawImage = String(item.itemVariation?.item?.images?.[0]?.url ?? "");

    const normalizedImage =
        imageMappings.find(([key]) => rawImage.includes(key))?.[1] ?? rawImage;

    const categoryImage = imagesCategory[normalizedCategory] ?? imagesDefault;

    const modifiers =
        item.modifiers
            ?.map((modifier) => {
                if (!modifier) return null;

                return normalizeModifier(
                    modifier,
                    originalName,
                    baseQuantity,
                    modifierCategoryMapBySelection,
                );
            })
            .filter(
                (modifier): modifier is NonNullable<typeof modifier> =>
                    modifier !== null,
            ) ?? [];

    const discounts = normalizeDiscounts(item, discountsByUid);

    const isCoffeePot = isCoffeePotItem(normalizedName);

    const isDonation = isDonationItem(normalizedName, normalizedCategory);

    const sizeModifier = modifiers.find(
        (modifier) => modifier.selection === "half pot",
    );

    const quantity = sizeModifier ? baseQuantity * 0.5 : baseQuantity;

    const refunded = isRefundedItem(item);

    const voided = isVoidedItem(item);

    return {
        id: String(item.uid ?? ""),

        orderId,

        name: normalizedName,
        originalName,

        category: normalizedCategory,

        quantity,

        grossSales,
        totalSales,
        totalDiscounts,

        refunded,
        voided,

        isDonation,
        isCoffeePot,

        modifiers,

        discounts,

        image: {
            item: normalizedImage || imagesDefault,
            category: categoryImage,
        },

        timestamp: closedAt,
    };
};

export const normalizeOrder = (
    order: Order,
    returnedLineItemUids: Set<string> = new Set(),
): NormalizedOrder => {
    const discountsByUid = new Map(
        (order.discounts ?? []).map((discount) => [
            String(discount?.uid ?? ""),
            discount,
        ]),
    );

    // Normalize each line item once. The normalized sale is used by both
    // ordinary item sales and coffee-pot analytics, which avoids repeating
    // the same mapping work while preserving their different inclusion rules.
    const normalizedLineItems =
        order.lineItems
            ?.map((item) => {
                if (!item) return null;

                return normalizeSale(
                    item,
                    order.id ?? "",
                    order.closedAt ?? "",
                    discountsByUid,
                );
            })
            .filter(
                (sale): sale is NonNullable<typeof sale> => sale !== null,
            ) ?? [];

    const sales = normalizedLineItems.filter((sale) => {
        if (returnedLineItemUids.has(sale.id)) {
            return false;
        }

        return !sale.isCoffeePot && !sale.refunded && !sale.voided;
    });

    const brewedCoffee = normalizedLineItems
        .filter((sale) => sale.isCoffeePot)
        .map((sale) => ({
            orderId: order.id ?? "",

            flavor: extractCoffeeFlavor(sale.modifiers),
            quantity: sale.quantity,
            timestamp: order.closedAt ?? "",
        }));

    const grossSales = sales.reduce((sum, sale) => sum + sale.grossSales, 0);

    const netSales = sales.reduce((sum, sale) => sum + sale.totalSales, 0);

    const discounts = sales.reduce((sum, sale) => sum + sale.totalDiscounts, 0);

    const refunds =
        order.refunds?.reduce(
            (sum, refund) => sum + (refund?.amountMoney?.amount ?? 0),
            0,
        ) ?? 0;

    const tenders =
        order.tenders
            ?.map((tender) => {
                if (!tender) return null;

                return {
                    type: tender.type ?? "UNKNOWN",
                    amount: tender.amountMoney?.amount ?? 0,
                };
            })
            .filter(
                (tender): tender is NonNullable<typeof tender> =>
                    tender !== null,
            ) ?? [];

    return {
        id: order.id ?? "",
        closedAt: order.closedAt ?? "",
        grossSales,
        netSales,
        discounts,
        refunds,
        tenders,
        sales,
        brewedCoffee,
    };
};
