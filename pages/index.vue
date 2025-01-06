<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";

definePageMeta({
    title: "Sales Overview",
});

const filters = useFilters();
const { compareValue } = useComparison();

const { orders, netSales, transactions, grossSales, avgTransaction } =
    useOrders(filters.startDate, filters.endDate, "orders"); // Assume orders is a reactive ref
const {
    orders: prevOrders,
    netSales: prevNetSales,
    transactions: prevTransactions,
    grossSales: prevGrossSales,
    avgTransaction: prevAvgTransaction,
} = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
    "preOrders",
);
</script>

<template>
    <div class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <SalesStat
                title="Gross Sales"
                :value="formatCurrency(grossSales)"
                :percent="calcChange(prevGrossSales, grossSales)"
                :vs="compareValue"
                :vsValue="formatCurrency(prevGrossSales)"
            />
            <SalesStat
                title="Net Total"
                :value="formatCurrency(netSales)"
                :percent="calcChange(prevNetSales, netSales)"
                vs="last week"
                :vsValue="formatCurrency(prevNetSales)"
            />
            <SalesStat
                title="Transactions"
                :value="transactions"
                :percent="calcChange(prevTransactions, transactions)"
                vs="last week"
                :vsValue="prevTransactions"
            />
            <SalesStat
                title="Average Sale"
                :value="formatCurrency(avgTransaction)"
                :percent="calcChange(prevAvgTransaction, avgTransaction)"
                vs="last week"
                :vsValue="formatCurrency(prevAvgTransaction)"
            />
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-3 xl:col-span-2">
                <SalesListItems />
            </div>
            <div class="col-span-6 lg:col-span-3 xl:col-span-2">
                <SalesListCoffees />
            </div>
            <div class="col-span-6 lg:col-span-2">
                <SalesSummary />
            </div>
            <div class="col-span-6 lg:col-span-4 xl:col-span-6">
                <SalesChart />
            </div>
        </div>
    </div>
</template>
