import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useNormalizedOrders } from "~/composables/useNormalizedOrders";
import {
    imagesCategory,
    imagesCoffee,
    imagesDefault,
} from "~/server/utils/mappings";

interface AggregatedModifier {
    selection: string;
    count: number;
    previousCount: number;
}

interface AggregatedModifierSet {
    modifiers: {
        category: string;
        selection: string;
    }[];
    count: number;
}

interface AggregatedItem {
    name: string;
    category: string | null;

    quantity: number;
    previousQuantity: number;
    trendQuantity: number;

    grossSales: number;
    previousGrossSales: number;
    trendGrossSales: number;

    totalSales: number;
    totalDiscounts: number;

    imgItem: string;
    imgCategory: string;
    imgCoffee: string;

    modifiers: Record<string, AggregatedModifier[]>;
    modifierSets: AggregatedModifierSet[];
}

interface AggregatedCategory {
    category: string;
    grossSales: number;
    previousGrossSales: number;
    trendGrossSales: number;
    image: string;
}

export const useItemSalesAnalytics = (
    start: Ref<TZDate | null>,
    end: Ref<TZDate | null>,
    previousStart: Ref<TZDate | null>,
    previousEnd: Ref<TZDate | null>,
) => {
    const { sales: currentSales, isLoading } = useNormalizedOrders(start, end);

    const { sales: previousSales, isLoading: prevIsLoading } =
        useNormalizedOrders(previousStart, previousEnd);

    /**
     * Aggregate modifier selections belonging to an individual sale.
     *
     * A NormalizedSale represents a line item. If the line item quantity
     * is greater than one, each modifier applies to each item in that
     * line-item quantity.
     */
    const aggregateModifiers = (
        sale: (typeof currentSales.value)[number],
    ): {
        modifiers: Record<string, AggregatedModifier[]>;
        modifierSets: AggregatedModifierSet[];
    } => {
        const modifiers: Record<string, AggregatedModifier[]> = {};

        sale.modifiers.forEach((modifier) => {
            const category = modifier.category;
            const selection = modifier.selection;

            if (!modifiers[category]) {
                modifiers[category] = [];
            }

            const existingModifier = modifiers[category].find(
                (item) => item.selection === selection,
            );

            const count = modifier.count;

            if (existingModifier) {
                existingModifier.count += count;
            } else {
                modifiers[category].push({
                    selection,
                    count,
                    previousCount: 0,
                });
            }
        });

        /**
         * Build the modifier combination for this individual sale.
         *
         * Multiple selections belonging to the same modifier category
         * are combined into one comma-separated selection.
         *
         * This preserves the existing modifier-set behavior.
         */
        const groupedModifiers = new Map<string, Set<string>>();

        sale.modifiers.forEach((modifier) => {
            if (!groupedModifiers.has(modifier.category)) {
                groupedModifiers.set(modifier.category, new Set());
            }

            groupedModifiers.get(modifier.category)!.add(modifier.selection);
        });

        const currentModifierSet = Array.from(groupedModifiers.entries()).map(
            ([category, selections]) => ({
                category,
                selection: Array.from(selections).join(", "),
            }),
        );

        const modifierSets: AggregatedModifierSet[] =
            currentModifierSet.length > 0
                ? [
                      {
                          modifiers: currentModifierSet,
                          count: sale.quantity,
                      },
                  ]
                : [];

        return {
            modifiers,
            modifierSets,
        };
    };

    const mergeModifiers = (
        target: Record<string, AggregatedModifier[]>,
        source: Record<string, AggregatedModifier[]>,
    ) => {
        Object.entries(source).forEach(([category, categoryModifiers]) => {
            if (!target[category]) {
                target[category] = [];
            }

            categoryModifiers.forEach((modifier) => {
                const existingModifier = target[category].find(
                    (item) => item.selection === modifier.selection,
                );

                if (existingModifier) {
                    existingModifier.count += modifier.count;
                } else {
                    target[category].push({
                        ...modifier,
                    });
                }
            });
        });
    };

    const mergeModifierSets = (
        target: AggregatedModifierSet[],
        source: AggregatedModifierSet[],
    ) => {
        source.forEach((newSet) => {
            const existingSet = target.find(
                (set) =>
                    JSON.stringify(set.modifiers) ===
                    JSON.stringify(newSet.modifiers),
            );

            if (existingSet) {
                existingSet.count += newSet.count;
            } else {
                target.push({
                    modifiers: newSet.modifiers.map((modifier) => ({
                        ...modifier,
                    })),
                    count: newSet.count,
                });
            }
        });
    };

    const aggregateSales = (
        sales: typeof currentSales.value,
    ): Record<string, AggregatedItem> => {
        const totals: Record<string, AggregatedItem> = {};

        for (const sale of sales) {
            if (!sale.name) {
                continue;
            }

            const { modifiers, modifierSets } = aggregateModifiers(sale);

            const existing = totals[sale.name];

            if (existing) {
                existing.quantity += sale.quantity;
                existing.grossSales += sale.grossSales;
                existing.totalSales += sale.totalSales;
                existing.totalDiscounts += sale.totalDiscounts;

                mergeModifiers(existing.modifiers, modifiers);
                mergeModifierSets(existing.modifierSets, modifierSets);

                continue;
            }

            totals[sale.name] = {
                name: sale.name,
                category: sale.category,

                quantity: sale.quantity,
                previousQuantity: 0,
                trendQuantity: 0,

                grossSales: sale.grossSales,
                previousGrossSales: 0,
                trendGrossSales: 0,

                totalSales: sale.totalSales,
                totalDiscounts: sale.totalDiscounts,

                imgItem: sale.image.item || imagesDefault,
                imgCategory: sale.image.category || imagesDefault,
                imgCoffee: imagesCoffee[sale.name] ?? imagesDefault,

                modifiers,
                modifierSets,
            };
        }

        return totals;
    };

    const currentItemTotals = computed(() =>
        aggregateSales(currentSales.value),
    );

    const previousItemTotals = computed(() =>
        aggregateSales(previousSales.value),
    );

    const items = computed(() => {
        const allItems = new Set([
            ...Object.keys(currentItemTotals.value),
            ...Object.keys(previousItemTotals.value),
        ]);

        const currentSortOrder = new Map(
            Object.entries(currentItemTotals.value)
                .sort(([, a], [, b]) => b.quantity - a.quantity)
                .map(([name], index) => [name, index + 1]),
        );

        const previousSortOrder = new Map(
            Object.entries(previousItemTotals.value)
                .sort(([, a], [, b]) => b.quantity - a.quantity)
                .map(([name], index) => [name, index + 1]),
        );

        return Array.from(allItems).map((name) => {
            const current = currentItemTotals.value[name];
            const previous = previousItemTotals.value[name];

            const quantity = current?.quantity ?? 0;
            const previousQuantity = previous?.quantity ?? 0;

            const grossSales = current?.grossSales ?? 0;
            const previousGrossSales = previous?.grossSales ?? 0;

            /**
             * Build modifier data from the UNION of current and previous
             * modifier selections.
             *
             * This intentionally keeps modifiers that existed only in the
             * previous period so their negative trend remains visible.
             */
            const modifierCategories = new Set([
                ...Object.keys(current?.modifiers ?? {}),
                ...Object.keys(previous?.modifiers ?? {}),
            ]);

            const modifiers: Record<string, AggregatedModifier[]> = {};

            modifierCategories.forEach((category) => {
                const currentModifiers = current?.modifiers[category] ?? [];

                const previousModifiers = previous?.modifiers[category] ?? [];

                const selections = new Set([
                    ...currentModifiers.map((modifier) => modifier.selection),
                    ...previousModifiers.map((modifier) => modifier.selection),
                ]);

                modifiers[category] = Array.from(selections).map(
                    (selection) => {
                        const currentModifier = currentModifiers.find(
                            (modifier) => modifier.selection === selection,
                        );

                        const previousModifier = previousModifiers.find(
                            (modifier) => modifier.selection === selection,
                        );

                        return {
                            selection,
                            count: currentModifier?.count ?? 0,
                            previousCount: previousModifier?.count ?? 0,
                        };
                    },
                );
            });

            return {
                name: current?.name ?? previous?.name ?? "Unknown Item",

                category: current?.category ?? previous?.category ?? null,

                quantity,
                previousQuantity,
                trendQuantity: quantity - previousQuantity,

                grossSales,
                previousGrossSales,
                trendGrossSales: grossSales - previousGrossSales,

                totalSales: current?.totalSales ?? 0,
                totalDiscounts: current?.totalDiscounts ?? 0,

                imgItem: current?.imgItem ?? previous?.imgItem ?? imagesDefault,

                imgCategory:
                    current?.imgCategory ??
                    previous?.imgCategory ??
                    imagesDefault,

                imgCoffee:
                    current?.imgCoffee ?? previous?.imgCoffee ?? imagesDefault,

                modifiers,

                modifierSets: current?.modifierSets ?? [],

                currentSortOrder: currentSortOrder.get(name) ?? 0,

                previousSortOrder: previousSortOrder.get(name) ?? 0,
            };
        });
    });

    const currentCategoryTotals = computed(() => {
        const totals = new Map<
            string,
            {
                category: string;
                grossSales: number;
                previousGrossSales: number;
                trendGrossSales: number;
                image: string;
            }
        >();

        for (const sale of currentSales.value) {
            const category = sale.category ?? "unknown";

            const existing = totals.get(category);

            if (existing) {
                existing.grossSales += sale.grossSales;
                continue;
            }

            totals.set(category, {
                category,
                grossSales: sale.grossSales,
                previousGrossSales: 0,
                trendGrossSales: 0,
                image: imagesCategory[category] ?? imagesDefault,
            });
        }

        return totals;
    });

    const previousCategoryTotals = computed(() => {
        const totals = new Map<
            string,
            {
                category: string;
                grossSales: number;
                previousGrossSales: number;
                trendGrossSales: number;
                image: string;
            }
        >();

        for (const sale of previousSales.value) {
            const category = sale.category ?? "unknown";

            const existing = totals.get(category);

            if (existing) {
                existing.grossSales += sale.grossSales;
                continue;
            }

            totals.set(category, {
                category,
                grossSales: sale.grossSales,
                previousGrossSales: 0,
                trendGrossSales: 0,
                image: imagesCategory[category] ?? imagesDefault,
            });
        }

        return totals;
    });

    const categories = computed<AggregatedCategory[]>(() => {
        const allCategories = new Set([
            ...currentCategoryTotals.value.keys(),
            ...previousCategoryTotals.value.keys(),
        ]);

        return Array.from(allCategories).map((category) => {
            const current = currentCategoryTotals.value.get(category);
            const previous = previousCategoryTotals.value.get(category);

            const grossSales = current?.grossSales ?? 0;
            const previousGrossSales = previous?.grossSales ?? 0;

            return {
                category,
                grossSales,
                previousGrossSales,
                trendGrossSales: grossSales - previousGrossSales,
                image: current?.image ?? previous?.image ?? imagesDefault,
            };
        });
    });

    return {
        items,
        categories,
        isLoading,
        prevIsLoading,
    };
};
