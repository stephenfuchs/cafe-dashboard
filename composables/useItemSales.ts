interface LineItem {
    name?: string;
    quantity?: number;
}

interface ReturnLineItem {
    name?: string;
    quantity?: number;
}

interface Return {
    returnLineItems?: ReturnLineItem[];
}

interface Order {
    lineItems?: LineItem[];
    returns?: Return[];
}

interface ItemSales {
    item: string;
    quantity: number;
    trend: number;
    img: string;
}

export function useItemSales(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
    exclude: string[] = [],
    itemCount: number = 5,
) {
    // Helper function to calculate item quantities
    const calcQuantities = (ordersArray: Order[]): Record<string, number> => {
        const itemQuantities: Record<string, number> = {};

        try {
            ordersArray.forEach((order) => {
                if (!order) {
                    console.warn("Malformed order:", order);
                    return;
                }

                if (Array.isArray(order.lineItems)) {
                    order.lineItems.forEach((item) => {
                        const itemName = item?.name?.toLowerCase();
                        if (!itemName || exclude.includes(itemName)) return;

                        const quantity = Number(item?.quantity || 0); // Ensure quantity is a number
                        if (itemQuantities[itemName]) {
                            itemQuantities[itemName] += quantity;
                        } else {
                            itemQuantities[itemName] = quantity;
                        }
                    });
                }

                if (Array.isArray(order.returns)) {
                    order.returns.forEach((returnItem) => {
                        if (Array.isArray(returnItem.returnLineItems)) {
                            returnItem.returnLineItems.forEach(
                                (returnedItem) => {
                                    const itemName =
                                        returnedItem?.name?.toLowerCase();
                                    if (!itemName || exclude.includes(itemName))
                                        return;

                                    const quantity = Number(
                                        returnedItem?.quantity || 0,
                                    );
                                    if (itemQuantities[itemName]) {
                                        itemQuantities[itemName] -= quantity;
                                    } else {
                                        itemQuantities[itemName] = -quantity;
                                    }
                                },
                            );
                        }
                    });
                }
            });

            return itemQuantities;
        } catch (error) {
            console.error("Error processing orders:", error);
            return {};
        }
    };

    const currentSales = computed(() => calcQuantities(orders.value || []));
    const previousSales = computed(() =>
        calcQuantities(previousOrders.value || []),
    );

    const fullItemList = computed<ItemSales[]>(() => {
        const allItems = new Set([
            ...Object.keys(currentSales.value),
            ...Object.keys(previousSales.value),
        ]);

        return Array.from(allItems).map((item) => {
            const currentQuantity = currentSales.value[item] || 0;
            const previousQuantity = previousSales.value[item] || 0;
            const trend = currentQuantity - previousQuantity;

            return {
                item,
                quantity: currentQuantity,
                trend,
                img: `/img/item-${item
                    .toLowerCase()
                    .replace(/\s+/g, "_")
                    .replace(/[^a-z0-9-]/g, "")}.png`,
            };
        });
    });

    const topItems = computed<ItemSales[]>(() =>
        fullItemList.value
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, itemCount),
    );

    return {
        fullItemList,
        topItems,
    };
}
