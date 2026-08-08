<script setup lang="ts">
const filters = useFilters();

const { items, categories, isLoading, prevIsLoading } = useItemSalesAnalytics(
    filters.startDate,
    filters.endDate,
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const selected = ref("Items");
const options = ref(["Items", "Categories"]);

const topItems = computed(() => {
    return [...items.value]
        .filter((item) => item.quantity > 0 && item.category !== "donations")
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5)
        .map((item) => ({
            name: item.name,
            quantity: item.quantity,
            trendQuantity: item.trendQuantity,
            imgItem: item.imgItem,
        }));
});

const topCategories = computed(() => {
    return [...categories.value]
        .sort((a, b) => b.grossSales - a.grossSales)
        .slice(0, 5)
        .map((category) => ({
            category: category.category,
            value: category.grossSales,
            trendValue: category.trendGrossSales,
            imgCategory: category.image,
        }));
});
</script>

<template>
    <UiAppCard full>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Items'">
            <UiAppCardList
                :source="topItems"
                type="item"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </div>
        <div v-else-if="selected === 'Categories'">
            <UiAppCardList
                :source="topCategories"
                type="category"
                money
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </div>
    </UiAppCard>
</template>
