<script setup type="ts">
import { calcChange } from "~/server/utils/calcChange";

const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { itemTotals } = useDiscounts(orders, previousOrders);

const topItems = computed(() => {
    return [...itemTotals.value].sort((a, b) => b.quantity - a.quantity)
});

const trendQuantity = computed(() =>
    itemTotals.value?.reduce(
        (sum, discount) => sum + (discount.trendQuantity || 0),
        0,
    ),
);

const currentTotalQuantity = computed(() =>
    itemTotals.value?.reduce(
        (sum, discount) => sum + (discount?.quantity || 0),
        0,
    ),
);
const previousTotalQuantity = computed(() =>
    itemTotals.value?.reduce(
        (sum, discount) => sum + (discount?.prevQuantity || 0),
        0,
    ),
);

const percentChange = computed(() => {
    return calcChange(previousTotalQuantity.value, currentTotalQuantity.value)
})
</script>

<template>
    <UiAppCard>
        <template #title> Discounted Items </template>
        <template #options>
            <div class="flex items-center gap-4">
                <Tag
                    :severity="
                        trendQuantity > 0
                            ? 'success'
                            : trendQuantity < 0
                              ? 'danger'
                              : 'secondary'
                    "
                    :value="currentTotalQuantity"
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
        </template>
        <SalesList :source="topItems" type="item" />
    </UiAppCard>
</template>
