// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
    css: ["@material-symbols/font-400"],

    compatibilityDate: "2024-12-03",
    modules: [
        "@nuxtjs/tailwindcss",
        "@primevue/nuxt-module",
        "@nuxtjs/google-fonts",
    ],
    runtimeConfig: {
        // The private keys which are only available server-side
        squareApiSecret: process.env.NUXT_SQUARE_API_SECRET,
    },

    googleFonts: {
        families: {
            "Source+Sans+3": true,
        },
    },

    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Aura,
            },
        },
    },
});
