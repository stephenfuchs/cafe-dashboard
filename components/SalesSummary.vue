<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const selected = ref<"All" | "9:00" | "10:30">("All");
const options = ref<Array<"All" | "9:00" | "10:30">>(["All", "9:00", "10:30"]);

const filters = useFilters();

const {
    netSales,
    grossSales,
    discounts,
    cashPayments,
    cardPayments,
    fees,
    netTotal,
    isLoading,
} = useOrders(filters.startDate, filters.endDate);
</script>

<template>
    <UiAppCard full>
        <!-- <template #title
            >{{ selected !== "All" ? selected : "" }} Sales Summary</template
        > -->
        <template #title>Sales Summary</template>
        <!-- <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template> -->
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">shopping_basket</div>
                <div class="flex-1 text-base font-semibold text-color">
                    Gross Sales
                </div>
                <Skeleton
                    v-if="isLoading"
                    height="1.5rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-base font-semibold text-color">
                    {{ formatCurrency(grossSales ?? 0) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">percent</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Discounts
                </div>
                <Skeleton
                    v-if="isLoading"
                    height="1.25rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-sm font-medium text-red-500">
                    ({{ formatCurrency(discounts ?? 0) }})
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">payments</div>
                <div class="flex-1 font-medium text-color">Net Sales</div>
                <Skeleton
                    v-if="isLoading"
                    height="1.5rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-base font-semibold text-color">
                    {{ formatCurrency(netSales ?? 0) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">universal_currency</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Cash Payments
                </div>
                <Skeleton
                    v-if="isLoading"
                    height="1.25rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-sm font-medium text-green-500">
                    {{ formatCurrency(cashPayments ?? 0) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">credit_card</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Card Payments
                </div>
                <Skeleton
                    v-if="isLoading"
                    height="1.25rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-sm font-medium text-green-500">
                    {{ formatCurrency(cardPayments ?? 0) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">paid</div>
                <div class="flex-1 text-sm font-medium text-color">Fees</div>
                <Skeleton
                    v-if="isLoading"
                    height="1.25rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-sm font-medium text-red-500">
                    ({{ formatCurrency(fees ?? 0) }})
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">account_balance</div>
                <div class="flex-1 font-semibold text-color">Net Total</div>
                <Skeleton
                    v-if="isLoading"
                    height="1.5rem"
                    width="3.75rem"
                ></Skeleton>
                <div v-else class="text-base font-semibold text-color">
                    {{ formatCurrency(netTotal ?? 0) }}
                </div>
            </div>
        </div>
    </UiAppCard>
</template>
