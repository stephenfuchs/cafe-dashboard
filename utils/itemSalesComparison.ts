import type {
    AggregatedItem,
    AggregatedModifier,
    ItemComparison,
} from "~/types/itemSalesAnalytics";

export interface ItemSalesTotals {
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
    modifierSets: {
        modifiers: {
            category: string;
            selection: string;
        }[];
        count: number;
    }[];
}

export const buildItemComparison = (
    currentItemTotals: Record<string, AggregatedItem>,
    previousItemTotals: Record<string, AggregatedItem>,
): ItemComparison[] => {
    const allItems = new Set([
        ...Object.keys(currentItemTotals),
        ...Object.keys(previousItemTotals),
    ]);

    const currentSortOrder = new Map(
        Object.entries(currentItemTotals)
            .sort(([, a], [, b]) => b.quantity - a.quantity)
            .map(([name], index) => [name, index + 1]),
    );

    const previousSortOrder = new Map(
        Object.entries(previousItemTotals)
            .sort(([, a], [, b]) => b.quantity - a.quantity)
            .map(([name], index) => [name, index + 1]),
    );

    return Array.from(allItems).map((name) => {
        const current = currentItemTotals[name];
        const previous = previousItemTotals[name];

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

            modifiers[category] = Array.from(selections).map((selection) => {
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
            });
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

            imgItem: current?.imgItem ?? previous?.imgItem ?? "",
            imgCategory: current?.imgCategory ?? previous?.imgCategory ?? "",
            imgCoffee: current?.imgCoffee ?? previous?.imgCoffee ?? "",

            modifiers,

            modifierSets: current?.modifierSets ?? [],

            currentSortOrder: currentSortOrder.get(name) ?? 0,
            previousSortOrder: previousSortOrder.get(name) ?? 0,
        };
    });
};
