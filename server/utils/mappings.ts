// Item Image Mappings
export const imagesCategory: Record<string, string> = {
    bagels: "/img/category-bagels.png",
    "baked goods": "/img/category-baked_goods.png",
    barista: "/img/category-barista.png",
    donations: "/img/category-donations.png",
    "drink cooler": "/img/category-drink_cooler.png",
    "nica angels": "/img/category-nica.png",
    snacks: "/img/category-snacks.png",
    wine: "/img/category-wine.png",
};

export const imagesCoffee: Record<string, string> = {
    regular: "/img/coffee-regular.png",
    hazelnut: "/img/coffee-hazelnut.png",
    "french vanilla": "/img/coffee-vanilla.png",
    caramel: "/img/coffee-caramel.png",
    decaf: "/img/coffee-decaf.png",
};

export const imagesDefault = "/img/item-default.png";

// Item Name Mappings
export const itemNameMap: Record<string, string> = {
    "cup of coffee": "coffee donation",
    "hot tea": "coffee donation",
    "cookies (2 for $1)": "cookies",
    "cookies (2 for $1.00)": "cookies",
    "hot chocolate": "hot cocoa",
    "donation": "donation (general giving)",
    "cake ball / pop": "cake pop",
    "chai tea latte": "chai latte",
    "chai tea": "chai latte",
    "iced chai latte": "chai latte",
    "iced latte": "latte",
    "cup of milk": "milk",
    "custom amount": "coffee donation",
    "tazo tea": "coffee donation",
    "danish / turnover": "danish",
    "holiday cookie": "cookies",
    "juice box": "juice",
    "organic milk": "milk",
    "starbucks frappuccino": "frappuccino",
    "hot dog meal": "hot dog",
    "wine donation white": "white wine",
    "wine donation red": "red wine",
    "premium white wine": "white wine",
    "premium red wine": "red wine",
    "iced coffee": "americano",
};

export const itemCategoryMap: Record<string, string> = {
    "hot drinks": "barista",
    "cold drinks": "drink cooler",
    "bakery items": "baked goods",
}

export const itemCategoryAssignment: Record<string, string> = {
    "apple juice": "drink cooler",
    "chips": "snacks",
    "breakfast pizza": "baked goods",
    "pop": "drink cooler",
    "scone": "baked goods",
    "donut": "baked goods",
    "cupcake": "baked goods",
    "frappuccino": "drink cooler",
    "powerade": "drink cooler",
    "orange juice": "drink cooler",
    "vitamin water": "drink cooler",
    "unsweetened tea": "drink cooler",
    "steamer": "barista",
}



// Modifier Name Mappings
export const modifierNameMap: Record<string, string> = {
    "mocha (chocolate sauce)": "mocha",
    "plain ol boring hot cocoa for linda": "no add-on",
    "double chocolate": "chocolate",
    "everything but the bagel seasonings": "everything seasoning",
    "reg cream cheese": "regular cream cheese",
};
export const modifierCategoryMap: Record<string, string> = {
    "pop flavor": "flavor",
    "sparkling ice flavor": "flavor",
    "iced tea variety": "variety",
    "latte flavors & additions": "flavor",
    "drink topping": "add-ons",
    "add-ons (chai)": "add-ons",
    "add-ons (cocoa)": "add-ons",
    "milk options": "milk",
    "size (cocoa)": "size",
    "cookie flavor": "flavor",
    "danish flavor": "flavor",
    "muffin flavor": "flavor",
    "bagel flavor": "flavor",
    "bagel cook type": "cook type",
    "bagel topping": "topping",
    "bagel preparation": "preparation",
    "english muffin cook type": "cook type",
    "english muffin spread": "spread",
    "breakfast sandwich": "modifications",
};

export const modifierSkipped = ["ask for order name"];

export const modifierCategoryAssignment: Record<string, string> = {
    "hazelnut praline": "flavor",
    "caramel cookie": "flavor",
    "apple pie": "flavor",
    "white pumpkin": "flavor",
    coconut: "flavor",
    blueberry: "flavor",
    "cinnamon raisin": "bagel flavor",
    "honey wheat": "bagel flavor",
    "coffee cake": "muffin flavor",
    "double chocolate": "muffin flavor",
    chocolate: "muffin flavor",
};
