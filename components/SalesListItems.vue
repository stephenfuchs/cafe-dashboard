<script setup type="ts">
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

const { topResults: topItems } = useSalesList(
    orders,
    previousOrders,
    "item",
    exclude,
    itemCount,
);
const { topResults: topCategories } = useSalesList(
    orders,
    previousOrders,
    "category",
    [],
    itemCount,
);
</script>

<template>
    <UiAppCard>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Items'">
            <SalesList :products="topItems" />
        </div>
        <div v-else-if="selected === 'Categories'">
            <SalesList :products="topCategories" money />
        </div>
    </UiAppCard>
</template>
