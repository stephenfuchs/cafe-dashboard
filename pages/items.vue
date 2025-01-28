<script setup>
definePageMeta({
    title: "Item Sales",
});
</script>

<template>
    <div class="grid gap-6 lg:grid-cols-3">
        <ItemsList class="col-span-1 lg:col-span-2" />
        <div
            class="col-span-1 flex flex-col gap-6 overflow-y-scroll lg:sticky lg:top-0 lg:h-lvh"
        >
            <ItemsDonations />
            <ItemsTrends />
        </div>
    </div>
</template>
