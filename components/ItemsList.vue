<script setup>
const filters = useFilters();
const exclude = [
    "coffee pot",
    "coffee donation",
    "card ministry donation",
    "donation (general giving)",
    "next gen events",
    "nica angels donation",
    "ukraine donations",
    "regular",
    "caramel",
    "decaf",
    "french vanilla",
    "hazelnut",
];

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(orders, previousOrders, exclude);

const categoryFilter = ref("all items");
const categoryOptions = ["all items", "baked goods", "barista", "drink cooler"];

const filteredSalesList = computed(() => {
    let filteredList = salesList.value.filter((item) => item.quantity > 0);

    if (categoryFilter.value !== "all items") {
        filteredList = filteredList.filter(
            (item) => item.category === categoryFilter.value,
        );
    }

    return filteredList;
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
        class: "border-none p-0 mb-6",
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
                <ItemsListItem
                    v-for="item in slotProps.items"
                    :key="item.name"
                    :item
                />
            </div>
        </template>
    </DataView>
</template>
