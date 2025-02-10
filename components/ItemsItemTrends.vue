<script setup>
import {
    excludeDonations,
} from "../server/utils/excludes";

const filters = useFilters();


const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(orders, previousOrders, excludeDonations);

const topTrending = computed(() => {
    return [...salesList.value]
        .sort((a, b) => b.trendQuantity - a.trendQuantity)
        .slice(0, 5);
});

const bottomTrending = computed(() => {
    return [...salesList.value]
        .sort((a, b) => a.trendQuantity - b.trendQuantity)
        .slice(0, 5);
});

const selected = ref("Top");
const options = ref(["Top", "Bottom"]);
</script>

<template>
    <UiAppCard>
        <template #title> {{ selected }} Trending Items </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Top'">
            <SalesList :source="topTrending" type="item" />
        </div>
        <div v-else-if="selected === 'Bottom'">
            <SalesList :source="bottomTrending" type="item" />
        </div>
    </UiAppCard>
</template>
