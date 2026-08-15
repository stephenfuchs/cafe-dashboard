export interface AggregatedModifier {
    selection: string;
    count: number;
    previousCount: number;
}

export interface AggregatedModifierSet {
    modifiers: {
        category: string;
        selection: string;
    }[];
    count: number;
}

export interface AggregatedItem {
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

export interface ItemComparison extends AggregatedItem {
    currentSortOrder: number;
    previousSortOrder: number;
}
