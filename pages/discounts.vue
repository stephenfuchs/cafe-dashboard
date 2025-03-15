<script setup>
definePageMeta({
    title: "Discounts",
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

    <!-- <DiscountsTypes />
    <div class="grid gap-6 lg:grid-cols-3">
        <DiscountsList class="col-span-1 lg:col-span-2" />
        <div
            class="col-span-1 flex flex-col gap-6 overflow-y-scroll lg:sticky lg:top-0 lg:h-lvh"
        >
        </div>
    </div> -->
</template>
