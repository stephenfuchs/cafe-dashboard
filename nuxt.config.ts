// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

const MyPreset = definePreset(Aura, {
    primitive: {
        green: {
            50: "#f0fdf4",
            100: "#dcfce7",
            200: "#bbf7d0",
            300: "#86efac",
            400: "#4ade80",
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
            900: "#14532d",
            950: "#052e16",
        },
        orange: {
            50: "#fff7ed",
            100: "#ffedd5",
            200: "#fed7aa",
            300: "#fdba74",
            400: "#fb923c",
            500: "#f97316",
            600: "#ea580c",
            700: "#c2410c",
            800: "#9a3412",
            900: "#7c2d12",
            950: "#431407",
        },
        blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554",
        },
        purple: {
            50: "#faf5ff",
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
            800: "#6b21a8",
            900: "#581c87",
            950: "#3b0764",
        },
        violet: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
            950: "#2e1065",
        },
    },
    semantic: {
        primary: {
            50: "{violet.50}",
            100: "{violet.100}",
            200: "{violet.200}",
            300: "{violet.300}",
            400: "{violet.400}",
            500: "{violet.500}",
            600: "{violet.600}",
            700: "{violet.700}",
            800: "{violet.800}",
            900: "{violet.900}",
            950: "{violet.950}",
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
    components: {
        button: {
            colorScheme: {
                light: {
                    text: {
                        secondary: {
                            color: "var(--p-text-muted-color)",
                        },
                    },
                },
            },
        },
    },
});

export default defineNuxtConfig({
    pages: true,
    devtools: { enabled: true },

    compatibilityDate: "2024-12-03",
    modules: [
        "@nuxtjs/tailwindcss",
        "@primevue/nuxt-module",
        "@nuxtjs/google-fonts",
    ],
    runtimeConfig: {
        // The private keys which are only available server-side
        squareApiSecret: process.env.NUXT_SQUARE_API_SECRET,
        squareLocationSecret: process.env.NUXT_SQUARE_LOCATION_SECRET,
        squareMerchantSecret: process.env.NUXT_SQUARE_MERCHANT_SECRET,
    },

    googleFonts: {
        families: {
            "Open+Sans": [300, 400, 500, 600, 700, 800], // Explicitly list all weights and italics
            "Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,-25": true,
            "Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,1,-25": true,
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
                            class: "max-md:!hidden text-sm text-color font-normal",
                        },
                    },
                },
                slider: {
                    handle: {
                        class: "bg-red-500",
                    },
                },
                selectButton: {
                    root: {
                        class: "border-surface-200 dark:border-surface-700 border rounded-lg",
                    },
                    pcToggleButton: {
                        root: {
                            class: "capitalize flex-auto border-0 bg-surface-400/15 dark:bg-surface-900 text-sm text-muted-color font-medium data-[p-checked=true]:text-color data-[p-checked=true]:font-semibold",
                        },
                    },
                },
                select: {
                    root: {
                        class: "border-surface-200 dark:border-surface-700 border dark:bg-surface-900",
                    },
                    label: {
                        class: "text-sm text-color font-semibold",
                    },
                    option: {
                        class: "text-sm",
                    },
                },
                datePicker: {
                    root: {
                        class: "flex-1",
                    },
                    pcInputText: {
                        root: {
                            class: "border-surface-200 dark:border-surface-700 dark:bg-surface-900 text-sm text-color font-semibold rounded-lg",
                        },
                    },
                    dropdown: {
                        class: "border-surface-200 dark:border-surface-700",
                    },
                },
            },
            ripple: false,
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
