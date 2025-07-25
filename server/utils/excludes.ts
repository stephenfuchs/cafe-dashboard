// Exclude non-cafe events (Wine to Water, Summer Adventure, etc) that used Square for processing
export const excludeDate: Set<string> = new Set([
    "10-21-2017",
    "11-10-2018",
    "11-09-2019",
    "11-12-2021",
    "11-13-2021",
    "11-11-2022",
    "11-12-2022",
    "07-23-2025",
]);

// Exclude items from being processed
export const excludeItem: Set<string> = new Set(["Silent Auction"]);

export const excludeDonations: Array<string> = [
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

export const excludeCoffeePots: Array<string> = [
    "coffee pot",
    "regular",
    "caramel",
    "decaf",
    "french vanilla",
    "hazelnut",
];
