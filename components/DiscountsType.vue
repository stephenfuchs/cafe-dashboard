<script setup>
const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { discountTotals } = useDiscounts(orders, previousOrders);

const sortOptions = ref([
    { optionLabel: "Claims", value: "!quantity" },
    { optionLabel: "Discount", value: "name" },
    { optionLabel: "Value", value: "!value" },
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

const trendValue = computed(() =>
    discountTotals.value?.reduce(
        (sum, discount) => sum + (discount.trendValue || 0),
        0,
    ),
);

const currentTotalValue = computed(() =>
    discountTotals.value?.reduce(
        (sum, discount) => sum + (discount?.value || 0),
        0,
    ),
);


const dataviewPassthrough = {
    header: {
        class: "border-none p-0 mb-6 bg-transparent",
    },
    content: {
        class: "bg-transparent"
    }
};
</script>

<template>
    <DataView
        :value="discountTotals.filter((discount) => discount.quantity > 0)"
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
                <div class="flex items-center gap-4">
                    <UiAppTrendIndicator :value="trendValue" money/>
                    <UiAppBadgeStatus icon :value="currentTotalValue" :trendValue="trendValue" money />
                </div>
            </UiAppCard>
        </template>
        <template #list="slotProps">
            <div class="flex flex-col gap-6">
                <UiAppCardItem
                    v-for="item in slotProps.items"
                    type="discount"
                    :key="item.name"
                    :item
                />
            </div>
        </template>
    </DataView>
</template>
