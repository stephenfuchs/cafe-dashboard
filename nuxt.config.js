// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
    compatibilityDate: "2024-12-03",
    modules: ["@nuxtjs/tailwindcss", "@primevue/nuxt-module"],
    app: {
        head: {
            link: [
                {
                    rel: "stylesheet",
                    href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20,300,0,0",
                },
            ],
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
