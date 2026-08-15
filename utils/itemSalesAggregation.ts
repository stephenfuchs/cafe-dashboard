import type { NormalizedSale } from "~/types/analytics";
import { imagesCoffee, imagesDefault } from "~/server/utils/mappings";
import type {
    AggregatedItem,
    AggregatedModifier,
    AggregatedModifierSet,
} from "~/types/itemSalesAnalytics";

const aggregateModifiers = (
    sale: NormalizedSale,
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

export const aggregateSales = (
    sales: NormalizedSale[],
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
