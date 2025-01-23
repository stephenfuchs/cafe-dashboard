<script setup type="ts">
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const itemCount = 5;

const { topResults } = useSalesList(
    orders,
    previousOrders,
    "coffee",
    [],
    itemCount,
);
</script>

<template>
    <UiAppCard full>
        <template #title> Brewed Coffees </template>
        <template #options>
            <Tag severity="success" value="$19.00" />
        </template>
        <SalesList :products="topResults" />
    </UiAppCard>
</template>
