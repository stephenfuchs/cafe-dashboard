import {
    imagesDiscount,
    imagesDefault,
    itemNameMap,
    itemCategoryMap,
    itemCategoryAssignment,
} from "../server/utils/mappings";

interface AppliedDiscount {
    appliedMoney?: { amount?: number };
    discountUid?: string;
}

interface Discount {
    uid?: string;
    name?: string;
}

interface LineItem {
    name?: string;
    itemVariation?: {
        item?: {
            categories?: { category?: { name?: string } }[];
            images?: { url?: string }[];
        };
    };
    appliedDiscounts?: AppliedDiscount[];
}

interface Order {
    lineItems: LineItem[];
    discounts: Discount[];
}

interface DiscountData {
    name: string;
    category: string;
    imgItem: string;
    imgDiscount: string;
    discountValue: number;
    discountUid: string;
    discountName: string;
}

interface DiscountItem {
    name: string;
    count: number;
    value: number;
    imgItem: string;
}

export function useDiscounts(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
) {
    const calcDiscountData = (ordersArray: Order[]): DiscountData[] => {
        return ordersArray.flatMap((order) =>
            order.lineItems
                .filter((item) => item.appliedDiscounts?.length)
                .flatMap((item) => {
                    let name =
                        item?.name?.trim().toLowerCase() || "unknown item";
                    let category =
                        item?.itemVariation?.item?.categories?.[0]?.category?.name?.toLowerCase() ||
                        "unknown category";

                    if (itemNameMap[name]) {
                        name = itemNameMap[name];
                    }
                    if (itemCategoryMap[category]) {
                        category = itemCategoryMap[category];
                    }

                    if (category === "unknown category") {
                        category = itemCategoryAssignment[name];
                    }

                    if (!name) return [];

                    const imgItem =
                        item.itemVariation?.item?.images?.[0]?.url ||
                        imagesDefault;

                    return (
                        item.appliedDiscounts?.map((discount) => {
                            const discountValue = Number(
                                discount.appliedMoney?.amount || 0,
                            );
                            const discountUid = discount.discountUid || "";
                            const discountObj = order.discounts.find(
                                (d) => d.uid === discountUid,
                            );
                            const discountName =
                                discountObj?.name?.trim().toLowerCase() ||
                                "unknown discount";
                            const imgDiscount =
                                imagesDiscount[discountName] || imagesDefault;

                            return {
                                name,
                                category,
                                imgItem,
                                imgDiscount,
                                discountValue,
                                discountUid,
                                discountName,
                            };
                        }) || []
                    );
                }),
        );
    };

    const calcDiscountTotals = (discounts: DiscountData[]) => {
        return discounts.reduce<
            Record<
                string,
                {
                    totalValue: number;
                    count: number;
                    imgDiscount: string;
                    items: DiscountItem[];
                }
            >
        >(
            (
                acc,
                { discountName, discountValue, imgDiscount, name, imgItem },
            ) => {
                if (!acc[discountName]) {
                    acc[discountName] = {
                        totalValue: 0,
                        count: 0,
                        imgDiscount,
                        items: [],
                    };
                }

                const existingItem = acc[discountName].items.find(
                    (item) => item.name === name && item.imgItem === imgItem,
                );

                if (existingItem) {
                    existingItem.count += 1;
                    existingItem.value += discountValue;
                } else {
                    const newItem: DiscountItem = {
                        name: name,
                        count: 1,
                        value: discountValue,
                        imgItem: imgItem,
                    };

                    acc[discountName].items.push(newItem);
                }

                acc[discountName].totalValue += discountValue;
                acc[discountName].count += 1;
                acc[discountName].imgDiscount = imgDiscount;

                return acc;
            },
            {},
        );
    };

    const calcDiscountItems = (items: DiscountData[]) => {
        return items.reduce<
            Record<
                string,
                {
                    name: string;
                    imgItem: string;
                    totalValue: number;
                    count: number;
                }
            >
        >((acc, { name, imgItem, discountValue }) => {
            if (!acc[name]) {
                acc[name] = { name, imgItem, totalValue: 0, count: 0 };
            }

            acc[name].totalValue += discountValue;
            acc[name].count += 1;
            acc[name].imgItem = imgItem;

            return acc;
        }, {});
    };

    const discountTotals = computed(() => {
        const currentSales = calcDiscountData(orders.value || []);
        const previousSales = calcDiscountData(previousOrders.value || []);

        const currentTotals = calcDiscountTotals(currentSales);
        const previousTotals = calcDiscountTotals(previousSales);

        return Object.keys({ ...currentTotals, ...previousTotals }).map(
            (discountName) => {
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
            },
        );
    });

    const itemTotals = computed(() => {
        const currentSales = calcDiscountData(orders.value || []);
        const previousSales = calcDiscountData(previousOrders.value || []);

        const currentItems = calcDiscountItems(currentSales);
        const previousItems = calcDiscountItems(previousSales);

        return Object.keys({ ...currentItems, ...previousItems }).map(
            (name) => {
                const current = currentItems[name] || {
                    totalValue: 0,
                    count: 0,
                    imgItem: imagesDefault,
                };
                const previous = previousItems[name] || {
                    totalValue: 0,
                    count: 0,
                    imgItem: imagesDefault,
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
            },
        );
    });

    return {
        discountTotals,
        itemTotals,
    };
}
