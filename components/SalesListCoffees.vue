<script setup type="ts">
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(
    orders,
    previousOrders,
    [],
);

const coffees = computed(() => {
    const coffeeNames = ["regular", "hazelnut", "french vanilla", "caramel", "decaf"]
    let filteredList = salesList.value.filter((item) => coffeeNames.includes(item.name));

    return filteredList.sort((a,b) => b.quantity - a.quantity);
});
</script>

<template>
    <UiAppCard full>
        <template #title> Brewed Coffees </template>
        <template #options>
            <Tag severity="success" value="$19.00" />
        </template>
        <SalesList :source="coffees" type="coffee" />
    </UiAppCard>
</template>
