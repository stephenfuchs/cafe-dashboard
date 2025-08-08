// Item Image Mappings
export const imagesCategory: Record<string, string> = {
    toaster: "/img/category-toaster.png",
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

export const imagesDiscount: Record<string, string> = {
    "cafe volunteer": "volunteer-activism-outline",
    comp: "money-off",
    "cookie card": "cookie-outline",
    "bagel card": "adjust-outline",
    "loyalty card": "loyalty-outline",
    "custom discount": "price-change-outline",
    musician: "artist-outline",
    sample: "glass-cup-outline",
};

export const imagesItem: Record<string, string> = {
    // Americano
    "19a8edf8bea957bc3fed2674fb22ed16e58b5e20/original.jpeg":
        "da48c8f2fce4aaa2d5fb450ecaee9ef74ccc40a9/original.png",
    // Chai Latte
    "d4d76a084281e6879367edc6cdb0b7095a577793/original.jpeg":
        "7798ede6c21a2655e687b3c8c7e01acd9c9aaf81/original.png",
    // Cupcake
    "5e93fcd6302a7c488bcf326e0ee335643beb13c9/original.png":
        "d43b52b572ff8cb41925d92d8f52b0ce2f29d537/original.png",
    // Donut
    "2462525b0768c5ab9d357c925edad85d508900d9/original.png":
        "08f241035b13cd2f811839f5d12806b22f1ed4cf/original.png",
    // Granola Bar
    "ccf865831e9b92e5aec9af72cd233759b6a7f83c/original.png":
        "2230fce73600107cedc773fc3985c3d2effb483a/original.png",
    // Fruit Snacks
    "6b62fb7e2257b9e89cdedf5e2517acd17477669a/original.png":
        "52d8eadd51d97e531645698556dcf2a3dddc39d9/original.png",
    // Hotdog
    "c8dab5948d02b88f4cf547e64dc765cf1088739f/original.png":
        "f6b5c7ce583b8ad49401a9bcc8c0f0d820881dd2/original.png",
    // Iced Tea
    "08025a202205a4ca2391c10c6d5ce81179690169/original.jpeg":
        "ca266497f306db0381a6be3da511ea6750039ded/original.png",
    // Juice
    "42304e22e6c2cafc5c8d4900157e326b986932e0/original.png":
        "0f48c61c09f84043c7c97fd84819d79d9230f7f0/original.png",
    // Juice
    "27cd50f3602d645c7ba52608e050afddf50f4a72/original.png":
        "0f48c61c09f84043c7c97fd84819d79d9230f7f0/original.png",
    // Milk
    "68ebc4084544d5b71124b4024279cbd3634657a3/original.png":
        "9c90ee8d0d22a8ddafcd5debe153e9c6841b3879/original.png",
    // Nica
    "2f205e84525d1170eb0162d40e6b986ce664cc43/original.png":
        "510b50015917067334e5cb0d94a7e44b69877d28/original.png",
    // Oatmeal
    "991217b7e98186aacc52c695cb19938fcfa0f046/original.png":
        "fad169b588034204a07c92e74966ef02a527df86/original.png",
    // Pizza
    "452b643e9e788b3da6d00d06307f776f596db256/original.png":
        "a06d712a1b59e659cadcb544ea0c8e5f89d68d04/original.png",
    // Powerade
    "5084c7438d623025bccebfcb322640e4b08f9869/original.png":
        "03453661b8f7511a6e373ccf8e89cf7ebddf74ce/original.png",
    // Scone
    "12c6fe6e984b1271e1e8e2342d0a0301fc04e689/original.jpeg":
        "2d036c2558982c4302c58681ae612b153a97a803/original.png",
    // Thin Mint Brownie
    "d03645bb347a9247b803c14c56b6f21180a36d03/original.jpeg":
        "2749cf98b3f9355eac4ca7012476966e9d54cc1c/original.png",
    // Vitamin Water
    "61273ed94e9ac281d5bae3867e691a0256f6f4ea/original.png":
        "fa6887ea321c1bf60ad574664a597e284ebe6a65/original.png",
};

export const imagesDefault = "/img/item-default.png";

// Item Name Mappings
export const itemNameMap: Record<string, string> = {
    "cup of coffee": "coffee donation",
    "hot tea": "coffee donation",
    "cookies (2 for $1)": "cookies",
    "cookies (2 for $1.00)": "cookies",
    "hot chocolate": "hot cocoa",
    donation: "donation (general giving)",
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
    "unsweetened tea": "iced tea",
    "sweet tea": "iced tea",
    "apple juice": "juice",
    "orange juice": "juice",
};

export const itemCategoryMap: Record<string, string> = {
    "hot drinks": "barista",
    "cold drinks": "drink cooler",
    "bakery items": "baked goods",
    bagels: "toaster",
};

export const itemCategoryAssignment: Record<string, string> = {
    "avocado toast": "toaster",
    americano: "barista",
    "apple juice": "drink cooler",
    "chai latte": "barista",
    "cake pop": "baked goods",
    "iced chai latte": "barista",
    "chai tea": "barista",
    chips: "snacks",
    "breakfast pizza": "baked goods",
    pop: "drink cooler",
    powerade: "drink cooler",
    scone: "baked goods",
    donut: "baked goods",
    cupcake: "baked goods",
    frappuccino: "drink cooler",
    "la croix": "drink cooler",
    "orange juice": "drink cooler",
    "vitamin water": "drink cooler",
    "unsweetened tea": "drink cooler",
    steamer: "barista",
    juice: "drink cooler",
};

export const itemModifierAssignment: Record<
    string,
    { name: string; count: number }[]
> = {
    "sweet tea": [{ name: "sweetened", count: 1 }],
    "unsweetened tea": [{ name: "unsweetened", count: 1 }],
    "apple juice": [{ name: "apple", count: 1 }],
    "orange juice": [{ name: "orange", count: 1 }],
};

// 1. Remap modifier names
// 2. Remap modifier category names
// 3. Assign deleted modifiers to category

// Global Modifier Selection Renaming
export const modifierGlobalNameMap: Record<string, string> = {
    "no whip": "no add-on",
    whip: "whipped cream",
    "whip cream": "whipped cream",
    marshmallow: "marshmallows",
    "mocha (chocolate sauce)": "mocha",
    special: "other",
    soy: "soy milk",
    oat: "oat milk",
    whole: "whole milk",
    skim: "skim milk",
    "2%": "2% milk",
    "2 %": "2% milk",
    "regular (no syrup)": "no flavor",
};

export const modifierItemNameMap: Record<string, Record<string, string>> = {
    bagel: {
        "asiago cheese": "cheese",
        wheat: "honey wheat",
        "everything but the bagel seasonings": "everything seasoning",
        "reg cream cheese": "regular cream cheese",
        "cream cheese: regular": "regular cream cheese",
        "cream cheese - regular": "regular cream cheese",
        "cream cheese: strawberry": "strawberry cream cheese",
        "cream cheese - strawberry": "strawberry cream cheese",
        strawberry: "strawberry cream cheese",
        "cream cheese: veggie": "veggie cream cheese",
        "cream cheese - veggie": "veggie cream cheese",
        "chive & onion": "chive & onion cream cheese",
        "cream cheese: chive & onion": "chive & onion cream cheese",
        "cream cheese - chive & onion": "chive & onion cream cheese",
        "butter & cream cheese": "regular cream cheese, butter",
        uncooked: "untoasted",
        "janes bagel double toasted with butter and cream cheese":
            "double toasted",
        "john's bagel after first service lots of butter": "toasted",
        "john's bagel after first service": "toasted",
        "johns bagel after first service": "toasted",
        "the jon doyle bagel cheese bagel with chive or veggie cream cheese and bagel sprinkles":
            "toasted",
        "the doyel slacker bagel cheese bagel with chive or veggie cream cheese and bagel sprinkles":
            "toasted",
    },
    muffin: {
        "blueberry crumb": "blueberry",
        "pumpkin swirl": "pumpkin",
        chocolate: "double chocolate",
    },
    "hot cocoa": {
        "regular (16oz)": "large (16oz)",
        none: "no add-on",
        plain: "no flavor",
        "chocolate strawberry": "strawberry",
        "plain ol boring hot cocoa for linda": "no add-on",
        "plain ol boring hot chocolate for linda": "no add-on",
    },
    latte: {
        "chris mocha": "mocha",
        pumpkin: "pumpkin spice",
        none: "no add-on",
        regular: "no flavor",
        "regular (no syrup)": "no flavor",
        "extra shot of espresso": "xtra shot espresso",
    },
    cappuccino: {
        "extra shot of espresso": "xtra shot espresso",
        none: "no add-on",
        regular: "no flavor",
        cinnamon: "cinnamon powder",
    },
    "chai latte": {
        cinnamon: "cinnamon powder",
        "extra shot of espresso": "xtra shot espresso",
        none: "no add-on",
        regular: "no flavor",
    },
    juice: {
        red: "fruit punch",
        "super fruit punch": "fruit punch",
        purple: "grape",
        "goodness grapeness": "grape",
        "berry good lemonade": "berry",
        blue: "berry",
        "apple ever after": "apple",
    },
    powerade: {
        red: "fruit punch",
        blue: "berry blast",
        purple: "grape",
    },
    "red wine": {
        cab: "cabernet",
    },
    "white wine": {
        chard: "chardonnay",
    },
    pop: {
        orange: "crush (orange)",
    },
};

export const modifierCategoryMap: Record<string, string> = {
    "add-ons (chai)": "add-ons",
    "add-ons (cocoa)": "add-ons",
    "bagel cook type": "toast level",
    "bagel flavor": "flavor",
    "bagel preparation": "preparation",
    "bagel topping": "topping",
    "breakfast sandwich": "modifications",
    "cookie flavor": "flavor",
    "cake pop": "flavor",
    "danish flavor": "flavor",
    "drink topping": "add-ons",
    "english muffin cook type": "toast level",
    "english muffin spread": "spread",
    "gatorade flavor": "flavor",
    "iced tea variety": "variety",
    "juice flavor": "flavor",
    "latte flavors & additions": "flavor",
    "milk options": "milk",
    "muffin flavor": "flavor",
    "pop flavor": "flavor",
    "size (cocoa)": "size",
    "sparkling ice flavor": "flavor",
};

export const modifierSkipped = ["ask for order name"];

export const modifierCategoryAssignment: Record<string, string> = {
    "chocolate chip": "flavor",
    gingerbread: "flavor",
    "large (16oz)": "size",
    "lemon apricot": "flavor",
    other: "flavor",
    regular: "flavor",
    vanilla: "flavor",
    // Latte & Cocoa Flavors
    almond: "flavor",
    "apple pie": "flavor",
    blueberry: "flavor",
    "blueberry crumble": "flavor",
    butterscotch: "flavor",
    caramel: "flavor",
    "caramel cookie": "flavor",
    cinnamon: "flavor",
    coconut: "flavor",
    "frosted gingerbread": "flavor",
    "hazelnut breeze": "flavor",
    "hazelnut praline": "flavor",
    "lucky pistachio": "flavor",
    "irish cream": "flavor",
    mocha: "flavor",
    "peppermint bark": "flavor",
    "pumpkin cookie dough": "flavor",
    "pumpkin spice": "flavor",
    "raspberry white chocolate": "flavor",
    "white peppermint": "flavor",
    "white pumpkin": "flavor",
    // Bagel Flavors
    "cinnamon raisin": "bagel flavor",
    "honey wheat": "bagel flavor",
    // Bagel Toppings
    "blueberry cream cheese": "topping",
    "everything seasoning": "topping",
    "cream cheese on the side": "topping",
    "pumpkin cream cheese": "topping",
    "regular cream cheese, butter": "topping",
    // Muffin Flavors
    "apple cinnamon pecan": "muffin flavor",
    "banana nut": "muffin flavor",
    "caramel apple": "muffin flavor",
    "caramel crunch": "muffin flavor",
    "carrot cake": "muffin flavor",
    "chocolate chunk": "muffin flavor",
    "cinnamon crunch": "muffin flavor",
    "coffee cake": "muffin flavor",
    "cookies & cream": "muffin flavor",
    "double chocolate": "muffin flavor",
    "triple berry": "muffin flavor",
    // Milk
    "2% milk": "milk",
    "skim milk": "milk",
    "soy milk": "milk",
    "whole milk": "milk",
    // Add-Ons
    "cinnamon powder": "add-ons",
    "extra shot of espresso": "add-ons",
    "no add-on": "add-ons",
    sprinkles: "add-ons",
    "the works": "add-ons",
    "whipped cream": "add-ons",
    // Pop Flavors
    coke: "flavor",
    "diet coke": "flavor",
    "diet pepsi": "flavor",
    pepsi: "flavor",
    "crush (orange)": "flavor",
    "diet mountain dew": "flavor",
    "mountain dew": "flavor",
    "root beer": "flavor",
    "diet root beer": "flavor",
    sprite: "flavor",
    "diet sprite": "flavor",
    "dr pepper": "flavor",
    "diet dr pepper": "flavor",
    // Cookie Flavors
    "oatmeal raisin": "flavor",
    // Drink Flaors
    apple: "flavor",
    berry: "flavor",
    "berry blast": "flavor",
    "coconut pineapple": "flavor",
    "fruit punch": "flavor",
    grape: "flavor",
    "grape raspberry": "flavor",
    lemon: "flavor",
    lemonade: "flavor",
    orange: "flavor",
    "power c": "flavor",
    "purple (grape)": "flavor",
    red: "flavor",
    revive: "flavor",
    "white (glacier cherry)": "flavor",
    xxx: "flavor",
    sweetened: "variety",
    unsweetened: "variety",
    // Wine Varieties
    blend: "variety",
    cabernet: "variety",
    chardonnay: "variety",
    "pinot noir": "variety",
    riesling: "variety",
    sparkling: "variety",
    // Pizza Toppings
    sausage: "flavor",
    cheese: "flavor",
    pepperoni: "flavor",
};
