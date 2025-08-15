<script setup lang="ts">
const props = defineProps<{
    setPageTitle: (title: string) => void;
}>();

props.setPageTitle("Discounts");

useSeoMeta({
    title: "Discounts",
    description: "Overview of applied discounts.",
});
</script>

<template>
    <div class="grid gap-6 xl:grid-cols-3">
        <div class="col-span-1 xl:col-span-2">
            <DiscountsType />
        </div>
        <div
            class="col-span-1 flex flex-col gap-6 overflow-y-scroll lg:sticky lg:top-0 lg:h-lvh"
        >
            <DiscountsItemsList />
        </div>
    </div>
</template>
