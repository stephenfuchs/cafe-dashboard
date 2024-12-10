import tailwindcssPrimeui from "tailwindcss-primeui";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Source Sans 3"', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [tailwindcssPrimeui],
};
