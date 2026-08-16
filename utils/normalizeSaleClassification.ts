import type { NormalizedModifier } from "~/types/analytics";

export const isCoffeePotItem = (name: string) => {
    return name === "coffee pot";
};

export const isDonationItem = (
    normalizedName: string,
    normalizedCategory: string,
) => {
    return (
        normalizedCategory === "donations" ||
        normalizedName.includes("donation")
    );
};

export const extractCoffeeFlavor = (modifiers: NormalizedModifier[]) => {
    const flavorModifier = modifiers.find(
        (modifier) => modifier.category === "flavor",
    );

    return flavorModifier?.selection ?? "unknown";
};
