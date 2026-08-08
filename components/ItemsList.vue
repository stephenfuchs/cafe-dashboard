<script setup>
const filters = useFilters();

const { items, isLoading, prevIsLoading } = useItemSalesAnalytics(
    filters.startDate,
    filters.endDate,
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const categoryFilter = ref("all items");
const categoryOptions = [
    "all items",
    "baked goods",
    "toaster",
    "barista",
    "drink cooler",
];

const filteredSalesList = computed(() => {
    let filteredList = items.value.filter(
        (item) => item.quantity > 0 && item.category !== "donations",
    );

    if (categoryFilter.value !== "all items") {
        filteredList = filteredList.filter(
            (item) => item.category === categoryFilter.value,
        );
    }

    return filteredList.map((item) => ({
        name: item.name,
        category: item.category ?? "unknown",
        quantity: item.quantity,
        value: item.grossSales,
        imgItem: item.imgItem,
        trendQuantity: item.trendQuantity,
        trendValue: item.trendGrossSales,
        currentSortOrder: item.currentSortOrder,
        previousSortOrder: item.previousSortOrder,
        modifiers: item.modifiers,
        modifierSets: item.modifierSets,
    }));
});

const sortOptions = ref([
    { optionLabel: "Quantity", value: "!quantity" },
    { optionLabel: "Item", value: "name" },
]);
const sortKey = ref(sortOptions.value[0]);
const sortOrder = ref(-1);
const sortField = ref("quantity");

const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf("!") === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

const dataviewPassthrough = {
    header: {
        class: "border-none p-0 mb-6 bg-transparent",
    },
    content: {
        class: "bg-transparent",
    },
};
</script>

<template>
    <DataView
        :value="filteredSalesList"
        :sortOrder="sortOrder"
        :sortField="sortField"
        :pt="dataviewPassthrough"
    >
        <template #empty>
            <div v-if="isLoading || prevIsLoading" class="flex flex-col gap-6">
                <Skeleton class="w-full" height="7rem"></Skeleton>
                <Skeleton class="w-full" height="7rem"></Skeleton>
                <Skeleton class="w-full" height="7rem"></Skeleton>
            </div>
            <div v-else class="mt-10">
                <UiAppNoData />
            </div>
        </template>
        <template #header>
            <UiAppCard noTitle class="flex justify-between">
                <Select
                    size="small"
                    v-model="sortKey"
                    :options="sortOptions"
                    optionLabel="optionLabel"
                    @change="onSortChange($event)"
                />
                <UiAppCardSelector
                    :options="categoryOptions"
                    v-model:selected="categoryFilter"
                />
            </UiAppCard>
        </template>
        <template #list="slotProps">
            <div class="flex flex-col gap-6">
                <UiAppCardItem
                    v-for="item in slotProps.items"
                    type="item"
                    :key="item.name"
                    :item
                />
            </div>
        </template>
    </DataView>
</template>
