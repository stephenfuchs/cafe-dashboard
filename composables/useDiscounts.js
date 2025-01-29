export function useDiscounts(orders, previousOrders) {
    // loop through all lineItems arrays to find any containing appliedDiscounts array
    // find associated order item
    // find discount type by linking discountUid to id of discounts array for order
    // return array of discounts: item, amount, discount type
    //
    // use discounts array to calculate total amount for each discount type (current & previous)
    // create money & item total breakdown by item type
    //
    // use discounts array to calculate total money & count for each discount item (current & previous)

    const nameMappings = {
        "cup of coffee": "coffee donation",
        "hot tea": "coffee donation",
        "cookies (2 for $1)": "cookies",
    };

    const defaultImage = "/img/item-default.png";

    const calcDiscountData = (ordersArray) => {
        const data = [];

        try {
            ordersArray.forEach((order) => {
                if (!order) {
                    console.warn("Malformed order:", order);
                    return;
                }

                if (
                    Array.isArray(order.discounts) &&
                    order.discounts.length > 0
                ) {
                    if (Array.isArray(order.lineItems)) {
                        order.lineItems.forEach((item) => {
                            if (
                                Array.isArray(item.appliedDiscounts) &&
                                item.appliedDiscounts.length > 0
                            ) {
                                let name =
                                    item?.name?.toLowerCase() || "Unknown Item";

                                if (nameMappings[name]) {
                                    name = nameMappings[name];
                                }

                                const category =
                                    item?.itemVariation?.item?.categories?.[0]?.category?.name?.toLowerCase() ||
                                    "";
                                const imgItem =
                                    item.itemVariation?.item?.images?.[0]
                                        ?.url || defaultImage;

                                const discountValue = Number(
                                    item?.appliedDiscounts?.[0]?.appliedMoney
                                        ?.amount || 0,
                                );
                                const discountUid =
                                    item?.appliedDiscounts?.[0]?.discountUid ||
                                    "";

                                const discount = order.discounts.find(
                                    (d) => d.uid === discountUid,
                                );

                                const discountName =
                                    discount?.name.toLowerCase() ||
                                    "Unknown Discount";

                                data.push({
                                    name,
                                    category,
                                    imgItem,
                                    discountValue,
                                    discountUid,
                                    discountName,
                                });
                            }
                        });
                    }
                }
            });

            return data;
        } catch (error) {
            console.error("Error processing orders:", error);
            return [];
        }
    };

    const calcDiscountTotals = (discounts) => {
        return discounts.reduce((acc, discount) => {
            const { discountName, discountValue } = discount;

            if (!acc[discountName]) {
                acc[discountName] = { totalValue: 0, count: 0 };
            }

            acc[discountName].totalValue += discountValue;
            acc[discountName].count += 1;

            return acc;
        }, {});
    };

    const calcDiscountItems = (items) => {
        const itemMap = items.reduce((acc, item) => {
            const { name, discountValue } = item;

            if (!acc[name]) {
                acc[name] = { name, totalValue: 0, count: 0 };
            }

            acc[name].totalValue += discountValue;
            acc[name].count += 1;

            return acc;
        }, {});

        return Object.values(itemMap);
    };

    const discountsList = computed(() => {
        const currentOrdersData = orders.value || [];
        const previousOrdersData = previousOrders.value || [];

        // Early return if no data to process
        if (currentOrdersData.length === 0 || previousOrdersData.length === 0)
            return [];

        const currentSales = calcDiscountData(currentOrdersData);
        const previousSales = calcDiscountData(previousOrdersData);

        const allItems = new Set([
            ...Object.keys(currentSales),
            ...Object.keys(previousSales),
        ]);

        return Array.from(allItems).map((item) => {
            const current = currentSales[item];
            const previous = previousSales[item];

            return {
                name: current?.name || previous?.name || "Unknown Item",
                category:
                    current?.category ||
                    previous?.category ||
                    "Unknown Category",
                imgItem: current?.imgItem || previous?.imgItem || defaultImage,
                discountValue:
                    current?.discountValue || previous?.discountValue || 0,
                discountUid:
                    current?.discountUid || previous?.discountUid || "",
                discountName:
                    current?.discountName ||
                    previous?.discountName ||
                    "Unknown Discount",
            };
        });
    });

    const discountTotals = computed(() => {
        const currentOrdersData = orders.value || [];

        // Early return if no data to process
        if (currentOrdersData.length === 0) return [];

        const currentSales = calcDiscountData(currentOrdersData);
        const totalsMap = calcDiscountTotals(currentSales);

        return Object.entries(totalsMap).map(
            ([discountName, { totalValue, count }]) => ({
                discountName,
                totalValue,
                count,
            }),
        );
    });

    const itemTotals = computed(() => {
        const currentOrdersData = orders.value || [];

        if (currentOrdersData.length === 0) return [];

        const currentSales = calcDiscountData(currentOrdersData);

        const itemMap = currentSales.reduce((acc, item) => {
            const { name, category, imgItem, discountValue } = item;

            if (!acc[name]) {
                acc[name] = {
                    name,
                    category,
                    imgItem,
                    totalValue: 0,
                    count: 0,
                };
            }

            acc[name].totalValue += discountValue;
            acc[name].count += 1;

            return acc;
        }, {});

        return Object.values(itemMap).sort((a, b) => b.count - a.count);
    });

    return {
        discountsList,
        discountTotals,
        itemTotals,
    };
}
