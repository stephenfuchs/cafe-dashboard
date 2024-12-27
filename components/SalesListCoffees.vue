<template>
    <UiAppCard>
        <template #title> Brewed Coffees </template>
        <template #options>
            <Tag severity="success" value="$19.00" />
        </template>
        <SalesList :products="coffees" />
    </UiAppCard>
</template>

<script setup>
const coffees = ref([
    {
        item: "Regular",
        img: "/img/coffee-regular.png",
        quantity: 2.5,
        trend: 1,
    },
    {
        item: "French Vanilla",
        img: "/img/coffee-vanilla.png",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Caramel",
        img: "/img/coffee-caramel.png",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Hazelnut",
        img: "/img/coffee-hazelnut.png",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Decaf",
        img: "/img/coffee-decaf.png",
        quantity: 1,
        trend: 1,
    },
]);
</script>
