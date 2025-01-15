<script setup>
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const selected = ref("Items");
const options = ref(["Items", "Categories"]);

const exclude = ["COFFEE POT", "COFFEE DONATION"];
const itemCount = 5;

const { topItems } = useItemSales(orders, previousOrders, exclude, itemCount);
</script>

<template>
    <UiAppCard>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <SalesList :products="topItems" />
    </UiAppCard>
</template>
