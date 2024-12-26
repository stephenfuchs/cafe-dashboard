<template>
    <div class="flex min-h-dvh flex-col-reverse gap-5 md:flex-row">
        <LayoutAppNavigation />
        <main class="flex-1 p-5">
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
