// import tailwindcssPrimeui from "tailwindcss-primeui";
import PrimeUI from "tailwindcss-primeui";

export default {
    content: ["srcDir/**/*.{vue,js,jsx,mjs,ts,tsx}", "nuxt.config.ts"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Open Sans"],
            },
        },
    },

    darkMode: ["selector", '[class~="dark"]'],
    // plugins: [tailwindcssPrimeui],
    plugins: [PrimeUI],
};
