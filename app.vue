<script setup lang="ts">
const pageTitle = ref("");

useHead({
    titleTemplate: (title) =>
        title ? `${title} | West Ridge Café` : "West Ridge Café",
    bodyAttrs: {
        class: "bg-surface-100 dark:bg-surface-950",
    },
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
