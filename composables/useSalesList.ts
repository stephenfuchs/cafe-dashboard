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
    count?: number;
}

import {
    imagesCategory,
    imagesCoffee,
    imagesDefault,
    imagesItem,
    itemNameMap,
    itemCategoryMap,
    itemCategoryAssignment,
    itemModifierAssignment,
    modifierGlobalNameMap,
    modifierItemNameMap,
    modifierCategoryMap,
    modifierSkipped,
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
                let name =
                    item?.name?.trimEnd().toLowerCase() || "Unknown Item";
                const originalName = name;

                let category =
                    item?.itemVariation?.item?.categories?.[0]?.category?.name?.toLowerCase() ||
                    "unknown category";
                let quantity = Number(item?.quantity || 0);
                const grossSales = Number(item?.grossSalesMoney?.amount || 0);

                if (itemNameMap[name]) {
                    name = itemNameMap[name];
                }

                // Fix historical data for items that split modifiers into
                // individial items by assigning item names as modifier names.
                if (!item.modifiers) {
                    item.modifiers = [];
                }

                Object.entries(itemModifierAssignment).forEach(
                    ([itemName, modifiers]) => {
                        if (originalName.includes(itemName)) {
                            modifiers.forEach((modifier) => {
                                item.modifiers!.push(modifier);
                            });
                        }
                    },
                );

                if (itemCategoryMap[category]) {
                    category = itemCategoryMap[category];
                }

                if (
                    category === "unknown category" ||
                    (itemCategoryAssignment[name] &&
                        category !== itemCategoryAssignment[name])
                ) {
                    category = itemCategoryAssignment[name];
                }

                if (name === "coffee pot" && item.modifiers?.length) {
                    name = item.modifiers![1].name?.toLowerCase();
                    if (item.modifiers![0].name === "HALF POT") quantity /= 2;
                }

                if (!name || exclude.includes(name)) return;

                const imgItemOriginal =
                    item.itemVariation?.item?.images?.[0]?.url;
                let imgItem = imagesDefault;

                if (imgItemOriginal) {
                    // Extract the part after /files/
                    const tail = imgItemOriginal.split("/files/")[1];
                    if (tail && imagesItem[tail]) {
                        imgItem = imgItemOriginal.replace(
                            tail,
                            imagesItem[tail],
                        );
                    } else {
                        imgItem = imgItemOriginal;
                    }
                }
                const imgCategory = imagesCategory[category] || imagesDefault;
                const imgCoffee = imagesCoffee[name] || imagesDefault;

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

                        if (modifierItemNameMap[name]?.[modifierName]) {
                            modifierName =
                                modifierItemNameMap[name][modifierName];
                        }

                        if (modifierGlobalNameMap[modifierName]) {
                            modifierName = modifierGlobalNameMap[modifierName];
                        }

                        if (modifierListInfos) {
                            if (modifierCategoryAssignment[modifierName]) {
                                categoryName =
                                    modifierCategoryAssignment[modifierName];

                                const categoryInfo = modifierListInfos.find(
                                    (modListInfo) =>
                                        modListInfo.modifierList?.name.toLowerCase() ===
                                        categoryName,
                                );
                                ordinal =
                                    categoryInfo?.modifierList?.ordinal ??
                                    ordinal;
                            } else {
                                const matchingCategory = modifierListInfos.find(
                                    (modListInfo) =>
                                        modListInfo.modifierList?.modifiers?.some(
                                            (mod) =>
                                                mod.name.toLowerCase() ===
                                                modifierName,
                                        ),
                                );
                                if (matchingCategory) {
                                    categoryName =
                                        matchingCategory?.modifierList?.name.toLowerCase() ??
                                        "unknown category";
                                    ordinal =
                                        matchingCategory?.modifierList
                                            ?.ordinal ?? ordinal;
                                }
                            }
                        } else {
                            categoryName =
                                modifierCategoryAssignment[modifierName] ||
                                "unknown category";
                        }

                        if (modifierSkipped.includes(categoryName)) return;

                        categoryName =
                            modifierCategoryMap[categoryName] || categoryName;
                        modifiers[categoryName] = modifiers[categoryName] || [];

                        const existingModifier = modifiers[categoryName].find(
                            (mod) => mod.selection === modifierName,
                        );

                        if (existingModifier) {
                            const modCount = modifier.count ?? quantity;
                            existingModifier.count += modCount;
                        } else {
                            modifiers[categoryName].push({
                                selection: modifierName,
                                count: modifier.count ?? quantity,
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

                processModifiers(
                    item.modifiers ?? [],
                    item.itemVariation?.item?.modifierListInfos ?? [],
                );

                // Group multiple modifier selections in modifiers list into one comma seperated selection
                Object.entries(modifiers).forEach(([category, mods]) => {
                    if (mods.length > 1) {
                        const uniqueSelections = mods.reduce((acc, mod) => {
                            acc.set(
                                mod.selection,
                                (acc.get(mod.selection) || 0) + mod.count,
                            );
                            return acc;
                        }, new Map<string, number>());

                        modifiers[category] = [
                            {
                                selection: Array.from(
                                    uniqueSelections.keys(),
                                ).join(", "),
                                count: Math.max(...uniqueSelections.values()),
                                previousCount: 0,
                            },
                        ];
                    }
                });

                // Group multiple modifier selections in modifierSet into one comma seperated selection
                modifierSets.forEach((set) => {
                    const mergedModifiers = set.modifiers.reduce<
                        Record<string, Set<string>>
                    >((acc, mod) => {
                        if (!acc[mod.category]) {
                            acc[mod.category] = new Set();
                        }
                        acc[mod.category].add(mod.selection);
                        return acc;
                    }, {});

                    set.modifiers = Object.entries(mergedModifiers).map(
                        ([category, selections]) => ({
                            category,
                            selection: Array.from(selections).join(", "),
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
                    const item = data[name];
                    item.quantity += quantity;
                    item.grossSales += grossSales;

                    Object.entries(modifiers).forEach(([category, mods]) => {
                        if (!item.modifiers[category]) {
                            item.modifiers[category] = [];
                        }

                        const categoryModifiers = new Map(
                            item.modifiers[category].map((mod) => [
                                mod.selection,
                                mod,
                            ]),
                        );

                        mods.forEach((mod) => {
                            if (categoryModifiers.has(mod.selection)) {
                                categoryModifiers.get(mod.selection)!.count +=
                                    mod.count;
                            } else {
                                categoryModifiers.set(mod.selection, mod);
                            }
                        });

                        item.modifiers[category] = Array.from(
                            categoryModifiers.values(),
                        );
                    });

                    const existingSets = new Map(
                        item.modifierSets.map((set) => [
                            JSON.stringify(set.modifiers),
                            set,
                        ]),
                    );

                    modifierSets.forEach((newSet) => {
                        const key = JSON.stringify(newSet.modifiers);
                        if (existingSets.has(key)) {
                            existingSets.get(key)!.count += newSet.count;
                        } else {
                            existingSets.set(key, newSet);
                        }
                    });

                    item.modifierSets = Array.from(existingSets.values());
                }
            });
        });

        return data;
    };

    const salesList = computed(() => {
        const currentOrdersData = orders.value || [];
        const previousOrdersData = previousOrders.value || [];

        // Early return if no data to process
        if (currentOrdersData.length === 0 && previousOrdersData.length === 0)
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
                value: current?.grossSales || 0,
                imgItem: current?.imgItem || previous?.imgItem || imagesDefault,
                imgCategory:
                    current?.imgCategory ||
                    previous?.imgCategory ||
                    imagesDefault,
                imgCoffee:
                    current?.imgCoffee || previous?.imgCoffee || imagesDefault,
                trendQuantity,
                trendValue: trendGrossSales,
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
