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
    name: string;
    category: string | null;
    quantity: number;
    grossSales: number;
    imgItem: string;
    imgCategory: string;
}

interface Modifier {
    name: string;
}

export function useItemSales(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
    exclude: string[] = [],
) {
    const categoryImages: Record<string, string> = {
        bagels: "/img/category-bagels.png",
        "baked goods": "/img/category-baked_goods.png",
        barista: "/img/category-barista.png",
        donations: "/img/category-donations.png",
        "drink cooler": "/img/category-drink_cooler.png",
        "nica angels": "/img/category-nica.png",
        snacks: "/img/category-snacks.png",
        wine: "/img/category-wine.png",
    };

    const defaultImage = "/img/item-default.png";
    // const exclude = ["coffee pot"];

    const nameMappings: Record<string, string> = {
        "cup of coffee": "coffee donation",
        "hot tea": "coffee donation",
        "cookies (2 for $1)": "cookies",
    };

    const calcSalesData = (ordersArray: Order[]) => {
        const data: Record<string, SalesData> = {};

        try {
            ordersArray.forEach((order) => {
                if (!order) {
                    console.warn("Malformed order:", order);
                    return;
                }

                if (Array.isArray(order.lineItems)) {
                    order.lineItems.forEach((item) => {
                        let name = item?.name?.toLowerCase() || "Unknown Item";

                        if (nameMappings[name]) {
                            name = nameMappings[name];
                        }

                        const category =
                            item?.itemVariation?.item?.categories?.[0]?.category?.name?.toLowerCase() ||
                            "";
                        const quantity = Number(item?.quantity || 0);
                        const grossSales = Number(
                            item?.grossSalesMoney?.amount || 0,
                        );
                        const imgItem =
                            item.itemVariation?.item?.images?.[0]?.url ||
                            defaultImage;
                        const imgCategory =
                            categoryImages[category] || defaultImage;

                        if (exclude.includes(name)) return;

                        if (!data[name]) {
                            data[name] = {
                                name,
                                category,
                                quantity,
                                grossSales,
                                imgItem,
                                imgCategory,
                            };
                        } else {
                            data[name].quantity += quantity;
                            data[name].grossSales += grossSales;
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

    const salesList = computed(() => {
        // Ensure orders and previousOrders are not empty or undefined
        const currentOrdersData = orders.value || [];
        const previousOrdersData = previousOrders.value || [];

        // Early return if no data to process
        if (currentOrdersData.length === 0 || previousOrdersData.length === 0)
            return [];

        const currentSales = calcSalesData(currentOrdersData);
        const previousSales = calcSalesData(previousOrdersData);

        const allItems = new Set([
            ...Object.keys(currentSales),
            ...Object.keys(previousSales),
        ]);

        const filteredItems = Array.from(allItems);

        // const filteredItems = Array.from(allItems).filter((item) => {
        //     const current = currentSales[item];
        //     return current?.quantity > 0; // Exclude items with no sales in the current period
        // });

        const filteredCurrentSales = Object.entries(currentSales)
            .filter(([key]) => !exclude.includes(key))
            .sort(([, a], [, b]) => b.quantity - a.quantity);
        const filteredPreviousSales = Object.entries(previousSales)
            .filter(([key]) => !exclude.includes(key))
            .sort(([, a], [, b]) => b.quantity - a.quantity);

        const currentSortOrder = new Map(
            filteredCurrentSales.map(([key], index) => [key, index + 1]),
        );
        const previousSortOrder = new Map(
            filteredPreviousSales.map(([key], index) => [key, index + 1]),
        );

        return filteredItems.map((item) => {
            const current: SalesData | undefined = currentSales[item];
            const previous: SalesData | undefined = previousSales[item];

            const trendQuantity =
                (current?.quantity || 0) - (previous?.quantity || 0);
            const trendGrossSales =
                (current?.grossSales || 0) - (previous?.grossSales || 0);

            return {
                name: current?.name || previous?.name || "Unknown Item",
                category: current?.category || previous?.category || null,
                quantity: current?.quantity || 0,
                grossSales: current?.grossSales || 0,
                imgItem: current?.imgItem || previous?.imgItem || defaultImage,
                imgCategory:
                    current?.imgCategory ||
                    previous?.imgCategory ||
                    defaultImage,
                trendQuantity,
                trendGrossSales,
                currentSortOrder: currentSortOrder.get(item) || 0,
                previousSortOrder: previousSortOrder.get(item) || 0,
            };
        });
    });

    return {
        salesList,
    };
}
