// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Aura, {
    primitive: {
        green: {
            50: "#f7faf7",
            100: "#dae7d8",
            200: "#bdd4ba",
            300: "#a0c19b",
            400: "#82ae7d",
            500: "#659b5e",
            600: "#568450",
            700: "#476d42",
            800: "#385534",
            900: "#283e26",
            950: "#192718",
        },
        orange: {
            50: "#fef7f7",
            100: "#fbdad7",
            200: "#f7bdb8",
            300: "#f4a099",
            400: "#f08379",
            500: "#ed665a",
            600: "#c9574d",
            700: "#a6473f",
            800: "#823832",
            900: "#5f2924",
            950: "#3b1a17",
        },
        blue: {
            50: "#f4f9fa",
            100: "#c8e2e8",
            200: "#9ccbd7",
            300: "#70b3c5",
            400: "#459cb3",
            500: "#1985a1",
            600: "#157189",
            700: "#125d71",
            800: "#0e4959",
            900: "#0a3540",
            950: "#062128",
        },
        purple: {
            50: "#f9f5f7",
            100: "#e1cfdb",
            200: "#c9a9be",
            300: "#b182a1",
            400: "#995c85",
            500: "#813668",
            600: "#6e2e58",
            700: "#5a2649",
            800: "#471e39",
            900: "#34162a",
            950: "#200e1a",
        },
    },
    semantic: {
        primary: {
            50: "{purple.50}",
            100: "{purple.100}",
            200: "{purple.200}",
            300: "{purple.300}",
            400: "{purple.400}",
            500: "{purple.500}",
            600: "{purple.600}",
            700: "{purple.700}",
            800: "{purple.800}",
            900: "{purple.900}",
            950: "{purple.950}",
        },
        colorScheme: {
            surface: {
                50: "{gray.50}",
                100: "{gray.100}",
                200: "{gray.200}",
                300: "{gray.300}",
                400: "{gray.400}",
                500: "{gray.500}",
                600: "{gray.600}",
                700: "{gray.700}",
                800: "{gray.800}",
                900: "{gray.900}",
                950: "{gray.950}",
            },
        },
    },
});

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
            "Open+Sans": [300, 400, 500, 600, 700, 800], // Explicitly list all weights and italics
        },
        display: "swap", // Matches the `@import` example
        preconnect: true, // For improved performance
    },

    primevue: {
        options: {
            pt: {
                directives: {
                    tooltip: {
                        root: {
                            class: "max-md:!hidden",
                        },
                    },
                },
                button: {
                    label: {
                        class: "md:hidden text-xs text-color font-semibold",
                    },
                },
                slider: {
                    handle: {
                        class: "bg-red-500",
                    },
                },
                selectButton: {
                    root: {
                        class: "border-surface-200 dark:border-surface-700 border",
                    },
                    pcToggleButton: {
                        root: {
                            class: "border-0 dark:bg-surface-900 text-sm text-muted-color font-semibold data-[p-checked=true]:text-color",
                        },
                    },
                },
                datePicker: {
                    pcInputText: {
                        root: {
                            class: "border-surface-200 dark:border-surface-700 dark:bg-surface-900 text-sm text-color font-semibold",
                        },
                    },
                    dropdown: {
                        class: "border-surface-200 dark:border-surface-700",
                    },
                },
            },
            ripple: true,
            theme: {
                options: {
                    cssLayer: {
                        // Allow Tailwind classes to take precedence over PrimeVue styles
                        // https://github.com/primefaces/primevue/issues/4529#issuecomment-2366946468
                        name: "primevue",
                        order: "tailwind-base, primevue, tailwind-utilities",
                    },
                },
                preset: MyPreset,
            },
        },
    },
});
