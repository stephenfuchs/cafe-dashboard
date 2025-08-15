<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";

const props = defineProps<{
    setPageTitle: (title: string) => void;
}>();

props.setPageTitle("Sales Overview");

useSeoMeta({
    title: "Dashboard",
    description: "Dashboard overview of key sales metrics.",
});

const filters = useFilters();

const { netTotal, transactions, grossSales, avgTransaction, isLoading } =
    useOrders(filters.startDate, filters.endDate); // Assume orders is a reactive ref
const {
    netTotal: prevNetTotal,
    transactions: prevTransactions,
    grossSales: prevGrossSales,
    avgTransaction: prevAvgTransaction,
    isLoading: prevIsLoading,
} = useOrders(filters.comparisonStartDate, filters.comparisonEndDate);
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:grid-cols-4">
            <SalesStat
                title="Gross Sales"
                :value="formatCurrency(grossSales)"
                :percent="calcChange(prevGrossSales, grossSales)"
                :vsValue="formatCurrency(prevGrossSales)"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
            <SalesStat
                title="Net Total"
                :value="formatCurrency(netTotal)"
                :percent="calcChange(prevNetTotal, netTotal)"
                :vsValue="formatCurrency(prevNetTotal)"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
            <SalesStat
                title="Transactions"
                :value="transactions"
                :percent="calcChange(prevTransactions, transactions)"
                :vsValue="prevTransactions"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
            <SalesStat
                title="Average Sale"
                :value="formatCurrency(avgTransaction)"
                :percent="calcChange(prevAvgTransaction, avgTransaction)"
                :vsValue="formatCurrency(prevAvgTransaction)"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-3 2xl:col-span-2">
                <SalesListItems />
            </div>
            <div class="col-span-6 lg:col-span-3 2xl:col-span-2">
                <SalesListCoffees />
            </div>
            <div class="col-span-6 lg:col-span-2">
                <SalesSummary />
            </div>
            <div class="col-span-6 lg:col-span-4 2xl:col-span-6">
                <SalesChart />
            </div>
        </div>
    </div>
</template>
