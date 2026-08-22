export interface NormalizedModifier {
    id: string;
    name: string;

    category: string;
    selection: string;

    ordinal: number;

    count: number;
}

export interface NormalizedDiscount {
    uid: string;
    name: string;

    amount: number;
}

export interface NormalizedSale {
    id: string;

    orderId: string;

    name: string;
    originalName: string;

    category: string;

    quantity: number;

    grossSales: number;
    totalSales: number;
    totalDiscounts: number;

    refunded: boolean;
    voided: boolean;

    isDonation: boolean;

    // IMPORTANT: Coffee pots are operational events, not item sales
    isCoffeePot: boolean;

    modifiers: NormalizedModifier[];

    discounts: NormalizedDiscount[];

    image: {
        item: string;
        category: string;
    };

    timestamp: string;
}

export interface BrewedCoffeeEvent {
    orderId: string;

    flavor: string;

    quantity: number;

    timestamp: string;
}

export interface NormalizedOrder {
    id: string;
    closedAt: string;
    sales: NormalizedSale[];
    brewedCoffee: BrewedCoffeeEvent[];
}
