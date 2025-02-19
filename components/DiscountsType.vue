<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";
const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { discountTotals } = useDiscounts(orders, previousOrders);

const sortOptions = ref([
    { optionLabel: "Claims", value: "!count" },
    { optionLabel: "Discount", value: "discountName" },
    { optionLabel: "Value", value: "!value" },
]);
const sortKey = ref(sortOptions.value[0]);
const sortOrder = ref(-1);
const sortField = ref("count");

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
const previousTotalValue = computed(() =>
    discountTotals.value?.reduce(
        (sum, discount) => sum + (discount?.valuePrev || 0),
        0,
    ),
);

const percentChange = computed(() => {
    return calcChange(previousTotalValue.value, currentTotalValue.value);
});

const dataviewPassthrough = {
    header: {
        class: "border-none p-0 mb-6",
    },
};
</script>

<template>
    <DataView
        :value="discountTotals.filter((discount) => discount.count > 0)"
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
                    <Tag
                        :severity="
                            trendValue > 0
                                ? 'success'
                                : trendValue < 0
                                  ? 'danger'
                                  : 'secondary'
                        "
                        :value="formatCurrency(currentTotalValue)"
                    />
                    <div
                        class="flex w-1/2 gap-1 text-sm font-semibold"
                        :class="{
                            'text-green-500': percentChange >= 0,
                            'text-orange-500': percentChange < 0,
                            'text-muted-color': percentChange === 0,
                        }"
                    >
                        <div class="material-symbols-outlined flex-1 text-end">
                            {{
                                percentChange > 0
                                    ? "trending_up"
                                    : percentChange < 0
                                      ? "trending_down"
                                      : "trending_flat"
                            }}
                        </div>
                        <div class="flex-1">
                            {{
                                (percentChange < 0
                                    ? Math.abs(percentChange)
                                    : percentChange
                                ).toFixed(2)
                            }}%
                        </div>
                    </div>
                </div>
            </UiAppCard>
        </template>
        <template #list="slotProps">
            <div class="flex flex-col gap-6">
                <DiscountsTypeDiscount
                    v-for="discount in slotProps.items"
                    :key="discount.name"
                    :discount
                />
            </div>
        </template>
    </DataView>
</template>
