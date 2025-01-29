<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { discountsList, itemTotals } = useDiscounts(orders, previousOrders);

// const filteredSalesList = computed(() => {
//     let filteredList = salesList.value.filter((item) => item.quantity > 0);

//     if (categoryFilter.value !== "all items") {
//         filteredList = filteredList.filter(
//             (item) => item.category === categoryFilter.value,
//         );
//     }

//     return filteredList;
// });
</script>

<template>
    <div class="flex flex-col gap-6">
        <UiAppCard noTitle v-for="item in itemTotals" :key="item.name">
            <div
                class="grid grid-rows-2 items-center gap-4 xl:grid-cols-2 xl:grid-rows-1"
            >
                <div class="flex items-center gap-4">
                    <img
                        :src="item.imgItem"
                        :alt="`Image of ` + item.name"
                        class="w-16 rounded bg-neutral-100 lg:w-20 dark:bg-neutral-700"
                    />
                    <h3
                        class="flex-1 truncate text-lg font-bold uppercase text-color"
                    >
                        <span
                            class="block text-xs font-medium text-muted-color"
                            >{{ item.category }}</span
                        >

                        {{ item.name }}
                    </h3>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex-1">
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >Quantity</span
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
                            >Discount</span
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
