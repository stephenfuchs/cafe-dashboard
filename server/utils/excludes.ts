// Exclude Wine to Water events that used Square for processing
export const excludeDate: Set<string> = new Set([
    "10-21-2017", "11-10-2018", "11-09-2019", "11-12-2021", "11-13-2021", "11-11-2022", "11-12-2022"
]);

// Exclude items from being processed
export const excludeItem: Set<string> = new Set([
    "Silent Auction"
]);

export const globalExclude: Array<string> = [
    "Hot Dog",
    "HOT DOG",
    "HOT DOG MEAL ",
    "PIZZA SLICE ",
    "PREMIUM RED WINE",
    "PREMIUM WHITE WINE ",
    "RED WINE",
    "WHITE WINE",
    "WINE DONATION RED",
    "WINE DONATION WHITE",
    "SACRED SAND T-SHIRT",
    "SACRED SAND T-SHIRT ",
    "The Voice ",
    "The Voice (plain Cover) ",
];

export const donationsExclude: Array<string> = [
    "coffee pot",
    "coffee donation",
    "card ministry donation",
    "donation (general giving)",
    "next gen events",
    "nica angels donation",
    "ukraine donations",
    "regular",
    "caramel",
    "decaf",
    "french vanilla",
    "hazelnut",
];