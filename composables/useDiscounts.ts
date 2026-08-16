import type { NormalizedSale } from "~/types/analytics";
import { imagesDiscount, imagesDefault } from "~/server/utils/mappings";

interface DiscountItem {
    name: string;
    count: number;
    value: number;
    imgItem: string;
}

interface DiscountTotal {
    totalValue: number;
    count: number;
    imgDiscount: string;
    items: DiscountItem[];
}

interface DiscountItemTotal {
    name: string;
    imgItem: string;
    totalValue: number;
    count: number;
}

interface DiscountAggregates {
    discounts: Record<string, DiscountTotal>;
    items: Record<string, DiscountItemTotal>;
}

export function useDiscounts(
    sales: Ref<NormalizedSale[]>,
    previousSales: Ref<NormalizedSale[]>,
) {
    /**
     * Aggregate discount totals and item totals in a single pass through
     * the sales. Both views are derived from the same discount records, so
     * traversing the sales separately would repeat the same work.
     */
    const aggregateDiscounts = (
        salesArray: NormalizedSale[],
    ): DiscountAggregates => {
        const discounts: Record<string, DiscountTotal> = {};
        const items: Record<string, DiscountItemTotal> = {};

        for (const sale of salesArray) {
            for (const discount of sale.discounts) {
                const discountName = discount.name;
                const discountValue = discount.amount;
                const imgDiscount =
                    imagesDiscount[discountName] ?? imagesDefault;
                const itemName = sale.name;
                const imgItem = sale.image.item;

                if (!discounts[discountName]) {
                    discounts[discountName] = {
                        totalValue: 0,
                        count: 0,
                        imgDiscount,
                        items: [],
                    };
                }

                const discountTotal = discounts[discountName];

                const existingItem = discountTotal.items.find(
                    (item) =>
                        item.name === itemName && item.imgItem === imgItem,
                );

                if (existingItem) {
                    existingItem.count += 1;
                    existingItem.value += discountValue;
                } else {
                    discountTotal.items.push({
                        name: itemName,
                        count: 1,
                        value: discountValue,
                        imgItem,
                    });
                }

                discountTotal.totalValue += discountValue;
                discountTotal.count += 1;

                if (!items[itemName]) {
                    items[itemName] = {
                        name: itemName,
                        imgItem,
                        totalValue: 0,
                        count: 0,
                    };
                }

                items[itemName].totalValue += discountValue;
                items[itemName].count += 1;
            }
        }

        return {
            discounts,
            items,
        };
    };

    const currentAggregates = computed(() =>
        aggregateDiscounts(sales.value || []),
    );

    const previousAggregates = computed(() =>
        aggregateDiscounts(previousSales.value || []),
    );

    const discountTotals = computed(() => {
        const current = currentAggregates.value;
        const previous = previousAggregates.value;

        const discountNames = new Set([
            ...Object.keys(current.discounts),
            ...Object.keys(previous.discounts),
        ]);

        return Array.from(discountNames).map((discountName) => {
            const currentDiscount = current.discounts[discountName] || {
                totalValue: 0,
                count: 0,
                imgDiscount: imagesDefault,
                items: [],
            };

            const previousDiscount = previous.discounts[discountName] || {
                totalValue: 0,
                count: 0,
                imgDiscount: imagesDefault,
                items: [],
            };

            return {
                name: discountName,
                imgDiscount: currentDiscount.imgDiscount,
                quantity: currentDiscount.count,
                countPrev: previousDiscount.count,
                trendCount: currentDiscount.count - previousDiscount.count,
                trendQuantity: currentDiscount.count - previousDiscount.count,
                value: currentDiscount.totalValue,
                valuePrev: previousDiscount.totalValue,
                trendValue:
                    currentDiscount.totalValue - previousDiscount.totalValue,
                items: currentDiscount.items,
            };
        });
    });

    const itemTotals = computed(() => {
        const current = currentAggregates.value;
        const previous = previousAggregates.value;

        const itemNames = new Set([
            ...Object.keys(current.items),
            ...Object.keys(previous.items),
        ]);

        return Array.from(itemNames).map((name) => {
            const currentItem = current.items[name] || {
                name,
                imgItem: imagesDefault,
                totalValue: 0,
                count: 0,
            };

            const previousItem = previous.items[name] || {
                name,
                imgItem: imagesDefault,
                totalValue: 0,
                count: 0,
            };

            const imgItem =
                currentItem.imgItem !== imagesDefault
                    ? currentItem.imgItem
                    : previousItem.imgItem;

            return {
                name,
                imgItem,
                quantity: currentItem.count,
                prevQuantity: previousItem.count,
                value: currentItem.totalValue,
                trendQuantity: currentItem.count - previousItem.count,
                trendValue: currentItem.totalValue - previousItem.totalValue,
            };
        });
    });

    return {
        discountTotals,
        itemTotals,
    };
}
