// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
    compatibilityDate: "2024-12-03",
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],

    css: ["primeicons/primeicons.css"],

    primevue: {
        options: {
            ripple: true,
            theme: {
                preset: Aura,
            },
        },
    },
});
