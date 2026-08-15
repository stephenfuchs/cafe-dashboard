import type { NormalizedSale } from "~/types/analytics";
import { imagesCategory, imagesDefault } from "~/server/utils/mappings";

export interface CategoryTotals {
    category: string;
    grossSales: number;
    previousGrossSales: number;
    trendGrossSales: number;
    image: string;
}

export const aggregateCategoryTotals = (
    sales: NormalizedSale[],
): Map<string, CategoryTotals> => {
    const totals = new Map<string, CategoryTotals>();

    for (const sale of sales) {
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
};
