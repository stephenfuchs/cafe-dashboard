<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { discountTotals } = useDiscounts(orders, previousOrders);
</script>

<template>
    <div class="mb-6 grid gap-6 lg:grid-cols-5">
        <UiAppCard stat v-for="item in discountTotals" :key="item.name">
            <template #title>
                {{ item.discountName }}
            </template>
            <div class="grid grid-cols-4 grid-rows-1 items-center gap-4">
                <img
                    :src="item.imgItem"
                    :alt="`Image of ` + item.discountName"
                    class="col-span-1 size-12 rounded bg-neutral-100 dark:bg-neutral-700"
                />
                <div class="col-span-3 flex items-center gap-4">
                    <div class="flex-1">
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >Claims</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ item.count }}
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >Value</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ formatCurrency(item.totalValue) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UiAppCard>
    </div>
</template>
