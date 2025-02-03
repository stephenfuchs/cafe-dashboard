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
            modifierListInfos?: {
                modifierList?: {
                    name: string;
                    modifiers?: { name: string }[];
                };
            }[];
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
    imgCoffee: string;
    modifiers: Record<
        string,
        { selection: string; count: number; previousCount: number }[]
    >;
    modifierSets: {
        modifiers: { category: string; selection: string }[];
        count: number;
    }[];
}

interface Modifier {
    name: string;
}

export function useSalesList(
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

    const coffeeImages: Record<string, string> = {
        regular: "/img/coffee-regular.png",
        hazelnut: "/img/coffee-hazelnut.png",
        "french vanilla": "/img/coffee-vanilla.png",
        caramel: "/img/coffee-caramel.png",
        decaf: "/img/coffee-decaf.png",
    };

    const defaultImage = "/img/item-default.png";

    const nameMappings: Record<string, string> = {
        "cup of coffee": "coffee donation",
        "hot tea": "coffee donation",
        "cookies (2 for $1)": "cookies",
    };

    const calcSalesData = (ordersArray: Order[]): Record<string, SalesData> => {
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

                        let quantity = Number(item?.quantity || 0);
                        const grossSales = Number(
                            item?.grossSalesMoney?.amount || 0,
                        );

                        if (name === "coffee pot" && item.modifiers?.length) {
                            name = item.modifiers![1].name?.toLowerCase();

                            if (item.modifiers![0].name === "HALF POT") {
                                quantity = Number(item?.quantity) / 2;
                            }
                        }

                        const imgItem =
                            item.itemVariation?.item?.images?.[0]?.url ||
                            defaultImage;
                        const imgCategory =
                            categoryImages[category] || defaultImage;
                        const imgCoffee = coffeeImages[name] || defaultImage;

                        if (!name || exclude.includes(name)) return;

                        const modifiers: Record<
                            string,
                            {
                                selection: string;
                                count: number;
                                previousCount: number;
                            }[]
                        > = {};

                        const modifierSets: {
                            modifiers: {
                                category: string;
                                selection: string;
                            }[];
                            count: number;
                        }[] = [];

                        if (
                            Array.isArray(item.modifiers) &&
                            item.itemVariation?.item?.modifierListInfos
                        ) {
                            const currentSet: {
                                category: string;
                                selection: string;
                            }[] = [];

                            item.modifiers.forEach((modifier) => {
                                const modifierName =
                                    modifier.name?.toLowerCase();
                                let categoryName = "unknown category";

                                item.itemVariation?.item?.modifierListInfos?.forEach(
                                    (modListInfo) => {
                                        if (
                                            modListInfo.modifierList?.modifiers?.some(
                                                (mod) =>
                                                    mod.name.toLowerCase() ===
                                                    modifierName,
                                            )
                                        ) {
                                            categoryName =
                                                modListInfo.modifierList.name.toLowerCase();
                                        }
                                    },
                                );

                                if (!modifiers[categoryName]) {
                                    modifiers[categoryName] = [];
                                }

                                const existingModifier = modifiers[
                                    categoryName
                                ].find((mod) => mod.selection === modifierName);
                                if (existingModifier) {
                                    existingModifier.count += quantity;
                                } else {
                                    modifiers[categoryName].push({
                                        selection: modifierName,
                                        count: quantity,
                                        previousCount: 0,
                                    });
                                }

                                currentSet.push({
                                    category: categoryName,
                                    selection: modifierName,
                                });
                            });

                            if (currentSet.length > 0) {
                                currentSet.sort(
                                    (a, b) =>
                                        a.category.localeCompare(b.category) ||
                                        a.selection.localeCompare(b.selection),
                                );

                                const existingSet = modifierSets.find(
                                    (set) =>
                                        JSON.stringify(set.modifiers) ===
                                        JSON.stringify(currentSet),
                                );

                                if (existingSet) {
                                    existingSet.count += quantity;
                                } else {
                                    modifierSets.push({
                                        modifiers: currentSet,
                                        count: quantity,
                                    });
                                }
                            }
                        }

                        // **Added logic to merge duplicate modifier categories**
                        Object.keys(modifiers).forEach((category) => {
                            if (modifiers[category].length > 1) {
                                const uniqueSelections = new Map<
                                    string,
                                    number
                                >();

                                modifiers[category].forEach((mod) => {
                                    if (uniqueSelections.has(mod.selection)) {
                                        uniqueSelections.set(
                                            mod.selection,
                                            uniqueSelections.get(
                                                mod.selection,
                                            )! + mod.count,
                                        );
                                    } else {
                                        uniqueSelections.set(
                                            mod.selection,
                                            mod.count,
                                        );
                                    }
                                });

                                const mergedSelections = Array.from(
                                    uniqueSelections.keys(),
                                ).join(" ");
                                const totalCount = Math.max(
                                    ...Array.from(uniqueSelections.values()),
                                );

                                modifiers[category] = [
                                    {
                                        selection: mergedSelections,
                                        count: totalCount,
                                        previousCount: 0,
                                    },
                                ];
                            }
                        });

                        modifierSets.forEach((set) => {
                            const mergedModifiers: { [key: string]: string[] } =
                                {};

                            set.modifiers.forEach((mod) => {
                                const { category, selection } = mod;
                                if (!mergedModifiers[category]) {
                                    mergedModifiers[category] = [];
                                }

                                if (
                                    !mergedModifiers[category].includes(
                                        selection,
                                    )
                                ) {
                                    mergedModifiers[category].push(selection);
                                }
                            });

                            // Now merge the selections with a space separator for each category
                            set.modifiers = Object.entries(mergedModifiers).map(
                                ([category, selections]) => ({
                                    category,
                                    selection: selections.join(" "), // Join selections with a space
                                }),
                            );
                        });

                        if (!data[name]) {
                            data[name] = {
                                name,
                                category,
                                quantity,
                                grossSales,
                                imgItem,
                                imgCategory,
                                imgCoffee,
                                modifiers,
                                modifierSets,
                            };
                        } else {
                            data[name].quantity += quantity;
                            data[name].grossSales += grossSales;

                            Object.entries(modifiers).forEach(
                                ([category, mods]) => {
                                    if (!data[name].modifiers[category]) {
                                        data[name].modifiers[category] = [];
                                    }

                                    mods.forEach((mod) => {
                                        const existingMod = data[
                                            name
                                        ].modifiers[category].find(
                                            (m) =>
                                                m.selection === mod.selection,
                                        );
                                        if (existingMod) {
                                            existingMod.count += mod.count;
                                        } else {
                                            data[name].modifiers[category].push(
                                                mod,
                                            );
                                        }
                                    });
                                },
                            );

                            modifierSets.forEach((newSet) => {
                                const existingSet = data[
                                    name
                                ].modifierSets.find(
                                    (set) =>
                                        JSON.stringify(set.modifiers) ===
                                        JSON.stringify(newSet.modifiers),
                                );

                                if (existingSet) {
                                    existingSet.count += newSet.count;
                                } else {
                                    data[name].modifierSets.push(newSet);
                                }
                            });
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

        return Array.from(allItems).map((item) => {
            const current: SalesData | undefined = currentSales[item];
            const previous: SalesData | undefined = previousSales[item];

            const trendQuantity =
                (current?.quantity || 0) - (previous?.quantity || 0);
            const trendGrossSales =
                (current?.grossSales || 0) - (previous?.grossSales || 0);

            const previousModifiers = Object.entries(
                current?.modifiers || {},
            ).reduce(
                (acc, [category, mods]) => {
                    acc[category] = mods.map((mod) => {
                        const previousMod = previous?.modifiers[category]?.find(
                            (prevMod) => prevMod.selection === mod.selection,
                        );

                        const previousCount = previousMod?.count || 0;

                        return { ...mod, previousCount };
                    });
                    return acc;
                },
                {} as Record<
                    string,
                    {
                        selection: string;
                        count: number;
                        previousCount: number;
                    }[]
                >,
            );

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
                imgCoffee:
                    current?.imgCoffee || previous?.imgCoffee || defaultImage,
                trendQuantity,
                trendGrossSales,
                currentSortOrder: currentSortOrder.get(item) || 0,
                previousSortOrder: previousSortOrder.get(item) || 0,
                modifiers: previousModifiers,
                modifierSets: current?.modifierSets,
            };
        });
    });

    return {
        salesList,
    };
}
