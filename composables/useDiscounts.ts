import type { NormalizedSale } from "~/types/analytics";
import { imagesDiscount, imagesDefault } from "~/server/utils/mappings";

interface DiscountItem {
    name: string;
    count: number;
    value: number;
    imgItem: string;
}

export function useDiscounts(
    sales: Ref<NormalizedSale[]>,
    previousSales: Ref<NormalizedSale[]>,
) {
    const calcDiscountTotals = (salesArray: NormalizedSale[]) => {
        return salesArray
            .flatMap((sale) =>
                sale.discounts.map((discount) => ({
                    discountName: discount.name,
                    discountValue: discount.amount,
                    imgDiscount: imagesDiscount[discount.name] ?? imagesDefault,
                    itemName: sale.name,
                    imgItem: sale.image.item,
                })),
            )
            .reduce<
                Record<
                    string,
                    {
                        totalValue: number;
                        count: number;
                        imgDiscount: string;
                        items: DiscountItem[];
                    }
                >
            >((acc, discount) => {
                const {
                    discountName,
                    discountValue,
                    imgDiscount,
                    itemName,
                    imgItem,
                } = discount;

                if (!acc[discountName]) {
                    acc[discountName] = {
                        totalValue: 0,
                        count: 0,
                        imgDiscount,
                        items: [],
                    };
                }

                const existingItem = acc[discountName].items.find(
                    (item) =>
                        item.name === itemName && item.imgItem === imgItem,
                );

                if (existingItem) {
                    existingItem.count += 1;
                    existingItem.value += discountValue;
                } else {
                    acc[discountName].items.push({
                        name: itemName,
                        count: 1,
                        value: discountValue,
                        imgItem,
                    });
                }

                acc[discountName].totalValue += discountValue;
                acc[discountName].count += 1;

                return acc;
            }, {});
    };

    const calcDiscountItems = (salesArray: NormalizedSale[]) => {
        return salesArray
            .flatMap((sale) =>
                sale.discounts.map((discount) => ({
                    name: sale.name,
                    imgItem: sale.image.item,
                    discountValue: discount.amount,
                })),
            )
            .reduce<
                Record<
                    string,
                    {
                        name: string;
                        imgItem: string;
                        totalValue: number;
                        count: number;
                    }
                >
            >((acc, discount) => {
                const { name, imgItem, discountValue } = discount;

                if (!acc[name]) {
                    acc[name] = {
                        name,
                        imgItem,
                        totalValue: 0,
                        count: 0,
                    };
                }

                acc[name].totalValue += discountValue;
                acc[name].count += 1;

                return acc;
            }, {});
    };

    const discountTotals = computed(() => {
        const currentTotals = calcDiscountTotals(sales.value || []);
        const previousTotals = calcDiscountTotals(previousSales.value || []);

        const discountNames = new Set([
            ...Object.keys(currentTotals),
            ...Object.keys(previousTotals),
        ]);

        return Array.from(discountNames).map((discountName) => {
            const current = currentTotals[discountName] || {
                totalValue: 0,
                count: 0,
                imgDiscount: imagesDefault,
                items: [],
            };

            const previous = previousTotals[discountName] || {
                totalValue: 0,
                count: 0,
                imgDiscount: imagesDefault,
                items: [],
            };

            return {
                name: discountName,
                imgDiscount: current.imgDiscount,
                quantity: current.count,
                countPrev: previous.count,
                trendCount: current.count - previous.count,
                trendQuantity: current.count - previous.count,
                value: current.totalValue,
                valuePrev: previous.totalValue,
                trendValue: current.totalValue - previous.totalValue,
                items: current.items,
            };
        });
    });

    const itemTotals = computed(() => {
        const currentItems = calcDiscountItems(sales.value || []);

        const previousItems = calcDiscountItems(previousSales.value || []);

        const itemNames = new Set([
            ...Object.keys(currentItems),
            ...Object.keys(previousItems),
        ]);

        return Array.from(itemNames).map((name) => {
            const current = currentItems[name] || {
                name,
                imgItem: imagesDefault,
                totalValue: 0,
                count: 0,
            };

            const previous = previousItems[name] || {
                name,
                imgItem: imagesDefault,
                totalValue: 0,
                count: 0,
            };

            const imgItem =
                current.imgItem !== imagesDefault
                    ? current.imgItem
                    : previous.imgItem;

            return {
                name,
                imgItem,
                quantity: current.count,
                prevQuantity: previous.count,
                value: current.totalValue,
                trendQuantity: current.count - previous.count,
                trendValue: current.totalValue - previous.totalValue,
            };
        });
    });

    return {
        discountTotals,
        itemTotals,
    };
}
