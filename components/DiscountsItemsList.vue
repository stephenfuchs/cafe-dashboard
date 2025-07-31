<script setup type="ts">
import { calcChange } from "~/server/utils/calcChange";

const filters = useFilters();
const { orders, isLoading } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders, isLoading: prevIsLoading } = useOrders(
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
                <UiAppTrendIndicator
                    :value="percentChange"
                    percentage
                    :isLoading="isLoading"
                    :prevIsLoading="prevIsLoading"
                />
                <UiAppBadgeStatus
                    :value="currentTotalQuantity"
                    :trendValue="trendQuantity"
                    :isLoading="isLoading"
                    :prevIsLoading="prevIsLoading"
                />
            </div>
        </template>
        <UiAppCardList
            :source="topItems"
            type="item"
            :isLoading="isLoading"
            :prevIsLoading="prevIsLoading"
        />
    </UiAppCard>
</template>
