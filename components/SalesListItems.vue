<template>
    <UiAppCard>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <SalesList :products="topItems" />
    </UiAppCard>
</template>

<script setup>
const selected = ref("Items");
const options = ref(["Items", "Categories"]);

const topItems = ref([
    {
        item: "Bagel",
        img: "/img/item-bagel.png",
        quantity: 26,
        trend: 22,
    },
    {
        item: "Hot Cocoa",
        img: "/img/item-hotcocoa.png",
        quantity: 15,
        trend: 15,
    },
    {
        item: "Latte",
        img: "/img/item-latte.png",
        quantity: 13,
        trend: 12,
    },
    {
        item: "Chai Latte",
        img: "/img/item-chai.png",
        quantity: 11,
        trend: 2,
    },
    {
        item: "Danish",
        img: "/img/item-danish.png",
        quantity: 4,
        trend: 7,
    },
]);
</script>
