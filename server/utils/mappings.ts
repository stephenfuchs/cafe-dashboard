export const categoryImages: Record<string, string> = {
    bagels: "/img/category-bagels.png",
    "baked goods": "/img/category-baked_goods.png",
    barista: "/img/category-barista.png",
    donations: "/img/category-donations.png",
    "drink cooler": "/img/category-drink_cooler.png",
    "nica angels": "/img/category-nica.png",
    snacks: "/img/category-snacks.png",
    wine: "/img/category-wine.png",
};

export const coffeeImages: Record<string, string> = {
    regular: "/img/coffee-regular.png",
    hazelnut: "/img/coffee-hazelnut.png",
    "french vanilla": "/img/coffee-vanilla.png",
    caramel: "/img/coffee-caramel.png",
    decaf: "/img/coffee-decaf.png",
};

export const defaultImage = "/img/item-default.png";

export const nameMappings: Record<string, string> = {
    "cup of coffee": "coffee donation",
    "hot tea": "coffee donation",
    "cookies (2 for $1)": "cookies",
};
export const modifierNameMappings: Record<string, string> = {
    "mocha (chocolate sauce)": "mocha",
    "plain ol boring hot cocoa for linda": "no add-on",
};
export const modifierCategoryMappings: Record<string, string> = {
    "pop flavor": "flavor",
    "sparkling ice flavor": "flavor",
    "iced tea variety": "variety",
    "add-ons (chai)": "add-ons",
    "add-ons (cocoa)": "add-ons",
    "size (cocoa)": "size",
    "cookie flavor": "flavor",
    "danish flavor": "flavor",
    "bagel flavor": "flavor",
    "bagel cook type": "cook type",
    "bagel topping": "topping",
    "bagel preparation": "preparation",
    "english muffin cook type": "cook type",
    "english muffin spread": "spread",
};

export const skippedModifiers = ["ask for order name"];
