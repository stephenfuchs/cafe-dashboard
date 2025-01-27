<script setup type="ts">
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const selected = ref("Items");
const options = ref(["Items", "Categories"]);

const exclude = ["coffee pot", "coffee donation"];

const { salesList: items } = useSalesList(
    orders,
    previousOrders,
    exclude,
);
const { salesList: categories } = useSalesList(
    orders,
    previousOrders,
    [],
);

const topItems = computed(() => {
    return [...items.value]
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5);
});

const topCategories = computed(() => {
    // Reduce to get unique categories with summed grossSales
    const uniqueCategories = categories.value.reduce((acc, item) => {
        const existingCategory = acc.find(c => c.category === item.category);
        if (existingCategory) {
            // If the category already exists, sum the grossSales
            existingCategory.grossSales += item.grossSales;
        } else {
            // If the category doesn't exist, add a new entry
            acc.push({ ...item });
        }
        return acc;
    }, []);

    // Sort the unique categories by grossSales
    return uniqueCategories
        .sort((a, b) => b.grossSales - a.grossSales)
        .slice(0, 5);
});
</script>

<template>
    <UiAppCard full>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Items'">
            <SalesList :source="topItems" type="item" />
        </div>
        <div v-else-if="selected === 'Categories'">
            <SalesList :source="topCategories" type="category" money />
        </div>
    </UiAppCard>
</template>
