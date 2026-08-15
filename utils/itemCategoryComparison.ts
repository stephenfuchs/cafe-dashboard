import type { CategoryTotals } from "~/utils/itemCategoryAnalytics";
import { imagesDefault } from "~/server/utils/mappings";

export const buildCategoryComparison = (
    currentCategoryTotals: Map<string, CategoryTotals>,
    previousCategoryTotals: Map<string, CategoryTotals>,
): CategoryTotals[] => {
    const allCategories = new Set([
        ...currentCategoryTotals.keys(),
        ...previousCategoryTotals.keys(),
    ]);

    return Array.from(allCategories).map((category) => {
        const current = currentCategoryTotals.get(category);
        const previous = previousCategoryTotals.get(category);

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
};
