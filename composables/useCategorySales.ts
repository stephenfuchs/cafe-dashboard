interface LineItem {
    name?: string;
    quantity?: number;
    grossSalesMoney?: { amount: number };
    itemVariation?: {
        item?: {
            categories?: {
                category?: { name?: string; images?: { url: string }[] };
            }[];
        };
    };
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

interface CategorySales {
    item: string;
    quantity: number;
    trend: number;
    img: string;
}

export function useCategorySales(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
    itemCount: number = 5,
) {
    const calcQuantities = (ordersArray: Order[]): Record<string, number> => {
        const categoryData: Record<string, number> = {}; // Object to store sales totals for each cateogry

        try {
            ordersArray.forEach((order) => {
                if (!order) {
                    console.warn("Malformed order:", order);
                    return;
                }

                if (Array.isArray(order.lineItems)) {
                    // Loop through each lineItem item to find each item's category & associated money
                    order.lineItems.forEach((item) => {
                        const categoryEntry =
                            item?.itemVariation?.item?.categories?.[0]
                                ?.category;
                        const categoryName = categoryEntry?.name;
                        const itemMoney = Number(
                            item?.grossSalesMoney?.amount || 0,
                        );

                        if (!categoryName) return; // Skip if item has no category

                        // If category exists in categoryData, add money to total, else add new category to categoryData with initial value
                        if (categoryData[categoryName]) {
                            categoryData[categoryName] += itemMoney;
                        } else {
                            categoryData[categoryName] = itemMoney;
                        }
                    });
                }
            });

            return categoryData;
        } catch (error) {
            console.error("Error processing orders:", error);
            return {};
        }
    };

    // Compute the current period's sales totals
    const currentSales = computed(() => calcQuantities(orders.value || []));

    // Compute the previous period's sales totals
    const previousSales = computed(() =>
        calcQuantities(previousOrders.value || []),
    );

    // Define a mapping of category names to their associated image
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

    // Compute the full list of category sales data
    const fullCategoryList = computed<CategorySales[]>(() => {
        const allCategories = new Set([
            ...Object.keys(currentSales.value),
            ...Object.keys(previousSales.value),
        ]);

        return Array.from(allCategories).map((item) => {
            const currentTotalMoney = currentSales.value[item] || 0;
            const previousTotalMoney = previousSales.value[item] || 0;
            const trend = currentTotalMoney - previousTotalMoney;

            const categoryImage =
                categoryImages[item] || "/img/default-item.png";

            return {
                item: item?.toLowerCase(),
                quantity: currentTotalMoney,
                trend,
                img: categoryImage,
            };
        });
    });

    // Sort categories by value & item count
    const topCategories = computed<CategorySales[]>(() =>
        fullCategoryList.value
            .sort((a, b) => b.quantity - a.quantity)
            .slice(0, itemCount),
    );

    return {
        topCategories,
        fullCategoryList,
    };
}
