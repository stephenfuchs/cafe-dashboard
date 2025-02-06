interface ModifierListInfo {
    modifierList?: {
        name: string;
        ordinal: number;
        modifiers?: { name: string }[];
    };
}

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
            modifierListInfos?: ModifierListInfo[];
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

import {
    imagesCategory,
    imagesCoffee,
    imagesDefault,
    nameMappings,
    modifierNameMappings,
    modifierCategoryMappings,
    skippedModifiers,
    modifierCategoryAssignment,
} from "../server/utils/mappings";

export function useSalesList(
    orders: Ref<Order[]>,
    previousOrders: Ref<Order[]>,
    exclude: string[] = [],
) {
    const calcSalesData = (ordersArray: Order[]): Record<string, SalesData> => {
        const data: Record<string, SalesData> = {};

        ordersArray.forEach((order) => {
            if (!order.lineItems) return;

            order.lineItems.forEach((item) => {
                let name = item?.name?.toLowerCase() || "Unknown Item";
                const category =
                    item?.itemVariation?.item?.categories?.[0]?.category?.name?.toLowerCase() ||
                    "";
                let quantity = Number(item?.quantity || 0);
                const grossSales = Number(item?.grossSalesMoney?.amount || 0);
                const imgItem =
                    item.itemVariation?.item?.images?.[0]?.url || imagesDefault;
                const imgCategory = imagesCategory[category] || imagesDefault;
                const imgCoffee = imagesCoffee[name] || imagesDefault;

                if (nameMappings[name]) {
                    name = nameMappings[name];
                }

                if (name === "coffee pot" && item.modifiers?.length) {
                    name = item.modifiers![1].name?.toLowerCase();
                    if (item.modifiers![0].name === "HALF POT") quantity /= 2;
                }

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

                const processModifiers = (
                    itemModifiers: Modifier[],
                    modifierListInfos: ModifierListInfo[],
                ) => {
                    const currentSet: {
                        category: string;
                        selection: string;
                        ordinal?: number;
                    }[] = [];

                    itemModifiers?.forEach((modifier) => {
                        let modifierName = modifier.name?.toLowerCase();
                        let categoryName = "unknown category";
                        let ordinal = Number.MAX_SAFE_INTEGER;

                        if (modifierCategoryAssignment[modifierName]) {
                            categoryName =
                                modifierCategoryAssignment[modifierName];
                            modifierListInfos.forEach((modListInfo) => {
                                if (
                                    modListInfo.modifierList?.name.toLowerCase() ===
                                    categoryName
                                ) {
                                    ordinal =
                                        modListInfo.modifierList.ordinal ??
                                        ordinal;
                                }
                            });
                        } else {
                            modifierListInfos.forEach((modListInfo) => {
                                if (
                                    modListInfo.modifierList?.modifiers?.some(
                                        (mod) =>
                                            mod.name.toLowerCase() ===
                                            modifierName,
                                    )
                                ) {
                                    categoryName =
                                        modListInfo.modifierList.name.toLowerCase();
                                    ordinal =
                                        modListInfo.modifierList.ordinal ??
                                        ordinal;
                                }
                            });
                        }

                        if (skippedModifiers.includes(categoryName)) return;

                        categoryName =
                            modifierCategoryMappings[categoryName] ||
                            categoryName;
                        modifierName =
                            modifierNameMappings[modifierName] || modifierName;

                        if (!modifiers[categoryName]) {
                            modifiers[categoryName] = [];
                        }
                        const existingModifier = modifiers[categoryName].find(
                            (mod) => mod.selection === modifierName,
                        );

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
                            ordinal,
                        });
                    });

                    currentSet.sort(
                        (a, b) =>
                            (a.ordinal ?? Number.MAX_SAFE_INTEGER) -
                            (b.ordinal ?? Number.MAX_SAFE_INTEGER),
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
                };

                if (
                    Array.isArray(item.modifiers) &&
                    item.itemVariation?.item?.modifierListInfos
                ) {
                    processModifiers(
                        item.modifiers,
                        item.itemVariation.item.modifierListInfos,
                    );
                }

                // **Added logic to merge duplicate modifier categories**
                Object.keys(modifiers).forEach((category) => {
                    if (modifiers[category].length > 1) {
                        const uniqueSelections = new Map<string, number>();
                        modifiers[category].forEach((mod) => {
                            uniqueSelections.set(
                                mod.selection,
                                (uniqueSelections.get(mod.selection) || 0) +
                                    mod.count,
                            );
                        });

                        const mergedSelections = Array.from(
                            uniqueSelections.keys(),
                        ).join(", ");
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
                    const mergedModifiers: { [key: string]: string[] } = {};

                    set.modifiers.forEach((mod) => {
                        if (!mergedModifiers[mod.category]) {
                            mergedModifiers[mod.category] = [];
                        }

                        if (
                            !mergedModifiers[mod.category].includes(
                                mod.selection,
                            )
                        ) {
                            mergedModifiers[mod.category].push(mod.selection);
                        }
                    });

                    set.modifiers = Object.entries(mergedModifiers).map(
                        ([category, selections]) => ({
                            category,
                            selection: selections.join(", "),
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

                    Object.entries(modifiers).forEach(([category, mods]) => {
                        if (!data[name].modifiers[category]) {
                            data[name].modifiers[category] = [];
                        }

                        mods.forEach((mod) => {
                            const existingMod = data[name].modifiers[
                                category
                            ].find((m) => m.selection === mod.selection);
                            if (existingMod) {
                                existingMod.count += mod.count;
                            } else {
                                data[name].modifiers[category].push(mod);
                            }
                        });
                    });

                    modifierSets.forEach((newSet) => {
                        const existingSet = data[name].modifierSets.find(
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
        });

        return data;
    };

    const salesList = computed(() => {
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
            const current = currentSales[item];
            const previous = previousSales[item];

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

                        return {
                            ...mod,
                            previousCount: previousMod?.count || 0,
                        };
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
                imgItem: current?.imgItem || previous?.imgItem || imagesDefault,
                imgCategory:
                    current?.imgCategory ||
                    previous?.imgCategory ||
                    imagesDefault,
                imgCoffee:
                    current?.imgCoffee || previous?.imgCoffee || imagesDefault,
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
