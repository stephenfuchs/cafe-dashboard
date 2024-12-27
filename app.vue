<template>
    <div
        class="flex min-h-screen flex-col-reverse gap-5 overflow-visible md:flex-row"
    >
        <LayoutAppNavigation />
        <main class="flex-1 p-5 md:ml-24">
            <LayoutAppHeader page="Sales Overview" />
            <NuxtPage />
        </main>
    </div>
</template>

<script setup>
useHead({
    bodyAttrs: {
        class: "bg-surface-0 dark:bg-surface-900",
    },
});
</script>
