import {
    imagesCategory,
    imagesDefault,
    imagesItem,
    itemCategoryAssignment,
    itemCategoryMap,
    itemNameMap,
    modifierCategoryAssignment,
    modifierCategoryMap,
    modifierGlobalNameMap,
    modifierItemNameMap,
    modifierSkipped,
} from "~/server/utils/mappings";
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

// REFUND DETECTION
const isRefundedItem = (item: LineItem) => {
    return Boolean(item.totalMoney?.amount && item.totalMoney.amount < 0);
};

// VOIDED DETECTION
const isVoidedItem = (item: LineItem) => {
    return (
        Number(item.quantity ?? 0) === 0 && (item.totalMoney?.amount ?? 0) === 0
    );
};

export const normalizeModifier = (
    modifier: NonNullable<LineItem["modifiers"]>[number],
    item: LineItem,
): NormalizedModifier | null => {
    const itemName = item.name?.trim().toLowerCase() ?? "";

    const originalSelection = modifier?.name?.trim().toLowerCase() ?? "";

    if (!originalSelection || modifierSkipped.includes(originalSelection)) {
        return null;
    }

    const globalNormalizedSelection =
        modifierGlobalNameMap[originalSelection] ?? originalSelection;

    const itemSpecificSelection =
        modifierItemNameMap[itemName]?.[globalNormalizedSelection] ??
        globalNormalizedSelection;

    const modifierListInfos = item.itemVariation?.item?.modifierListInfos ?? [];

    const matchingModifierList = modifierListInfos.find((info) =>
        info?.modifierList?.modifiers?.some(
            (mod) => mod?.name?.trim().toLowerCase() === originalSelection,
        ),
    );

    const rawCategory =
        matchingModifierList?.modifierList?.name?.trim().toLowerCase() ?? "";

    const mappedCategory = modifierCategoryMap[rawCategory] ?? rawCategory;

    const normalizedCategory =
        mappedCategory ||
        modifierCategoryAssignment[itemSpecificSelection] ||
        "other";

    return {
        id: String(modifier?.uid ?? ""),

        name: itemSpecificSelection,

        category: normalizedCategory,
        selection: itemSpecificSelection,

        ordinal: 0,

        count: Number(item.quantity ?? 0),
    };
};

export const normalizeSale = (
    item: LineItem,
    order: Order,
    discountsByUid: Map<string, NonNullable<Order["discounts"]>[number]>,
): NormalizedSale | null => {
    const originalName = item.name?.trim().toLowerCase() ?? "";

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

                return normalizeModifier(modifier, item);
            })
            .filter(
                (modifier): modifier is NonNullable<typeof modifier> =>
                    modifier !== null,
            ) ?? [];

    const discounts =
        item.appliedDiscounts?.map((appliedDiscount) => {
            const uid = String(appliedDiscount?.discountUid ?? "");

            const discount = discountsByUid.get(uid);

            return {
                uid,
                name:
                    discount?.name?.trim().toLowerCase() ?? "unknown discount",
                amount: appliedDiscount?.appliedMoney?.amount ?? 0,
            };
        }) ?? [];

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

        orderId: order.id ?? "",

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

        timestamp: order.closedAt ?? "",
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

                return normalizeSale(item, order, discountsByUid);
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
