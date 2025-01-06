<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const selected = ref("All");
const options = ref(["All", "9:00", "10:30"]);

const filters = useFilters();

// Create a computed property to adjust the time range based on the selected value
const timeFilteredStartDate = computed(() => {
    let date = new Date(filters.startDate.value);
    if (selected.value === "9:00") {
        date.setHours(8, 0, 0, 0);
    } else if (selected.value === "10:30") {
        date.setHours(9, 45, 0, 0);
    } else {
        date = filters.startDate.value;
    }
    return date;
});

const timeFilteredEndDate = computed(() => {
    let date = new Date(filters.startDate.value);
    if (selected.value === "9:00") {
        date.setHours(9, 44, 59, 999);
    } else if (selected.value === "10:30") {
        date.setHours(10, 59, 59, 999);
    } else {
        date = filters.endDate.value;
    }
    return date;
});

const { netSales, grossSales, discounts, cashPayments, cardPayments } =
    useOrders(timeFilteredStartDate, timeFilteredEndDate, "orders");
</script>

<template>
    <UiAppCard>
        <template #title
            >{{ selected !== "All" ? selected : "" }} Sales Summary</template
        >
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">shopping_basket</div>
                <div class="flex-1 text-base font-semibold text-color">
                    Gross Sales
                </div>
                <div class="text-base font-semibold text-color">
                    {{ formatCurrency(grossSales) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">percent</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Discounts
                </div>
                <div
                    class="text-sm font-medium text-orange-600 dark:text-orange-300"
                >
                    ({{ formatCurrency(discounts) }})
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">payments</div>
                <div class="flex-1 font-medium text-color">Net Sales</div>
                <div class="text-base font-semibold text-color">
                    {{ formatCurrency(netSales) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">universal_currency</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Cash Payments
                </div>
                <div
                    class="text-sm font-medium text-green-600 dark:text-green-300"
                >
                    {{ formatCurrency(cashPayments) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">credit_card</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Card Payments
                </div>
                <div
                    class="text-sm font-medium text-green-600 dark:text-green-300"
                >
                    {{ formatCurrency(cardPayments) }}
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">paid</div>
                <div class="flex-1 text-sm font-medium text-color">Fees</div>
                <div
                    class="text-sm font-medium text-orange-600 dark:text-orange-300"
                >
                    ($8.41)
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">account_balance</div>
                <div class="flex-1 font-semibold text-color">Net Total</div>
                <div class="text-base font-semibold text-color">$492.76</div>
            </div>
        </div>
    </UiAppCard>
</template>
