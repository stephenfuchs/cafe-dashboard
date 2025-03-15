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

const trendingModifiers = computed(() => {
    const trending = [];
    salesList.value.forEach((item) => {
        Object.entries(item.modifiers).forEach(([category, mods]) => {
            mods.forEach((mod) => {
                trending.push({
                    imgItem: item.imgItem,
                    category,
                    name: mod.selection + " " + item.name,
                    quantity: mod.count,
                    trendQuantity: mod.count - mod.previousCount,
                });
            });
        });
    });

    return trending;
});

const topTrending = computed(() => {
    return trendingModifiers.value
        .sort((a, b) => b.trendQuantity - a.trendQuantity)
        .slice(0, 5);
});

const bottomTrending = computed(() => {
    return trendingModifiers.value
        .sort((a, b) => a.trendQuantity - b.trendQuantity)
        .slice(0, 5);
});

const selected = ref("Top");
const options = ref(["Top", "Bottom"]);
</script>

<template>
    <UiAppCard>
        <template #title> {{ selected }} Trending Modifiers</template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Top'">
            <UiAppCardList :source="topTrending" type="item" />
        </div>
        <div v-else-if="selected === 'Bottom'">
            <UiAppCardList :source="bottomTrending" type="item" />
        </div>
    </UiAppCard>
</template>
