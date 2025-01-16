interface LineItem {
    name?: string;
    quantity?: number;
    grossSalesMoney?: { amount: number };
    itemVariation?: {
        item?: {
            categories?: {
                category?: { name?: string };
            }[];
            images?: { url: string }[];
        };
    };
    modifiers?: Modifier[];
}

interface ReturnLineItem {
    name?: string;
    value?: number;
}

interface Return {
    returnLineItems?: ReturnLineItem[];
}

interface Order {
    lineItems?: LineItem[];
    returns?: Return[];
}

interface SalesData {
    item: string;
    quantity: number;
    trend: number;
    img: string;
}

interface Modifier {
    name: string;
}

export function useSalesList(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
    type: "item" | "category" | "coffee",
    exclude: string[] = [],
    itemCount: number,
) {
    // Helper function to calculate item quantities
    const calcQuantities = (ordersArray: Order[]): Record<string, number> => {
        const data: Record<string, number> = {};

        try {
            ordersArray.forEach((order) => {
                if (!order) {
                    console.warn("Malformed order:", order);
                    return;
                }

                if (Array.isArray(order.lineItems)) {
                    order.lineItems.forEach((item) => {
                        let name: string | undefined;
                        let value: number = 0;

                        if (type === "item") {
                            name = item?.name;
                            value = Number(item?.quantity || 0);
                        } else if (type === "category") {
                            name =
                                item?.itemVariation?.item?.categories?.[0]
                                    ?.category?.name;
                            value = Number(item?.grossSalesMoney?.amount || 0);
                        } else if (type === "coffee") {
                            if (item?.name === "COFFEE POT") {
                                name = item.modifiers![1].name!;

                                if (item.modifiers![0].name === "HALF POT") {
                                    value = Number(item?.quantity) / 2;
                                } else {
                                    value = Number(item?.quantity || 0);
                                }
                            }
                        }

                        if (!name || exclude.includes(name)) return;

                        data[name] = (data[name] || 0) + value;
                    });
                }

                if (type === "item" && Array.isArray(order.returns)) {
                    order.returns.forEach((returnItem) => {
                        if (Array.isArray(returnItem.returnLineItems)) {
                            returnItem.returnLineItems.forEach(
                                (returnedItem) => {
                                    const name = returnedItem?.name;
                                    if (!name || exclude.includes(name)) return;

                                    const value = Number(
                                        returnedItem?.value || 0,
                                    );

                                    data[name] = (data[name] || 0) - value;
                                },
                            );
                        }
                    });
                }
            });

            return data;
        } catch (error) {
            console.error("Error processing orders:", error);
            return {};
        }
    };

    const currentSales = computed(() => calcQuantities(orders.value || []));
    const previousSales = computed(() =>
        calcQuantities(previousOrders.value || []),
    );

    const fullList = computed<SalesData[]>(() => {
        const allItems = new Set([
            ...Object.keys(currentSales.value),
            ...Object.keys(previousSales.value),
        ]);

        const categoryImages: Record<string, string> = {
            BAGELS: "/img/category-bagels.png",
            "BAKED GOODS": "/img/category-baked_goods.png",
            BARISTA: "/img/category-barista.png",
            DONATIONS: "/img/category-donations.png",
            "DRINK COOLER": "/img/category-drink_cooler.png",
            "NICA ANGELS": "/img/category-nica.png",
            SNACKS: "/img/category-snacks.png",
            WINE: "/img/category-wine.png",
        };

        const coffeeImages: Record<string, string> = {
            REGULAR: "/img/coffee-regular.png",
            HAZELNUT: "/img/coffee-hazelnut.png",
            "FRENCH VANILLA": "/img/coffee-vanilla.png",
            CARAMEL: "/img/coffee-caramel.png",
            DECAF: "/img/coffee-decaf.png",
        };

        return Array.from(allItems).map((item) => {
            const currentQuantity = currentSales.value[item] || 0;
            const previousQuantity = previousSales.value[item] || 0;
            const trend = currentQuantity - previousQuantity;

            let image = "/img/item-default.png"; // default image

            if (type === "item") {
                orders.value.forEach((order) => {
                    order.lineItems?.forEach((lineItem) => {
                        if (lineItem?.name === item) {
                            image =
                                lineItem?.itemVariation?.item?.images?.[0]
                                    ?.url || image;
                        }
                    });
                });
            } else if (type === "category") {
                image = categoryImages[item] || image;
            } else if (type === "coffee") {
                image = coffeeImages[item] || image;
            }

            return {
                item: item?.toLowerCase(),
                quantity: currentQuantity,
                trend,
                img: image,
            };
        });
    });

    const topResults = computed<SalesData[]>(() =>
        fullList.value
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, itemCount),
    );

    return {
        fullList,
        topResults,
    };
}
