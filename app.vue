<script setup lang="ts">
const pageTitle = ref("");

useHead({
    titleTemplate: (title) =>
        title ? `${title} | West Ridge Café` : "West Ridge Café",
    bodyAttrs: {
        class: "bg-surface-100 dark:bg-surface-950",
    },
    meta: [
        // Android / general theme color
        { name: "theme-color", content: "#f1f5f9" },

        // Light/dark mode theme colors
        {
            name: "theme-color",
            content: "#f1f5f9",
            media: "(prefers-color-scheme: light)",
        },
        {
            name: "theme-color",
            content: "#020617",
            media: "(prefers-color-scheme: dark)",
        },

        // iOS status bar style
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
    ],
});

const setPageTitle = (title: string) => {
    pageTitle.value = title;
};
</script>

<template>
    <NuxtLoadingIndicator />
    <div
        class="flex min-h-screen flex-col-reverse gap-5 overflow-visible md:flex-row"
    >
        <LayoutAppNavigation />
        <main class="flex-1 p-5 md:ml-24">
            <LayoutAppHeader :page="pageTitle" />
            <NuxtPage :setPageTitle="setPageTitle" />
        </main>
    </div>
</template>
