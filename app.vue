<template>
    <NuxtLoadingIndicator />
    <div
        class="flex min-h-screen flex-col-reverse gap-5 overflow-visible md:flex-row"
    >
        <LayoutAppNavigation />
        <main class="flex-1 p-5 md:ml-24">
            <LayoutAppHeader :page="pageTitle" />
            <NuxtPage />
        </main>
    </div>
</template>

<script setup>
const pageTitle = ref("");

// Watch for route changes
const route = useRoute();

watchEffect(() => {
    // Update the title whenever the route changes
    pageTitle.value = route.meta.title || "Dashboard";
    useHead({
        title: pageTitle.value,
    });
});
useHead({
    bodyAttrs: {
        class: "bg-surface-100 dark:bg-surface-950",
    },
});
</script>
