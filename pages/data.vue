<script setup>
definePageMeta({
    title: "Data",
});
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();

const {
    orders, // Default to an empty array if undefined
    netSales,
    transactions,
    fees,
    payments, // Default to an empty array if undefined
} = useOrders(filters.startDate, filters.endDate, "orders");

console.log(payments);

const {
    orders: prevOrders,
    netSales: prevNetSales,
    transactions: prevTransactions,
} = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
    "preOrders",
); // Assume orders is a reactive ref
</script>

<template>
    <div class="grid grid-cols-1">
        <div>
            <h3 class="mt-4 text-lg font-bold">Payments</h3>
            <div v-if="orders.length > 0" class="flex flex-col gap-4">
                <div v-for="(payment, index) in payments" :key="payment.id">
                    <h2 class="text-lg font-bold">
                        Payment Number: {{ index + 1 }} // Payment ID:
                        {{ payment.id }}
                    </h2>
                    <p>Fee: {{ payment.processingFee }}</p>
                </div>
            </div>
            <div v-else>
                <p>No payments found for this date.</p>
            </div>
        </div>
    </div>
    <div class="grid grid-cols-2">
        <div>
            <h3 class="mt-4 text-lg font-bold">
                Total Money for All Orders: {{ formatCurrency(netSales) }}
            </h3>
            <p>Total Orders: {{ transactions }}</p>
            <div v-if="orders.length > 0" class="flex flex-col gap-4">
                <div v-for="(order, index) in orders" :key="order.id">
                    <h2 class="text-lg font-bold">
                        Order Number: {{ index + 1 }} // Order ID:
                        {{ order.id }}
                    </h2>
                    <p>Closed At: {{ order.closedAt }}</p>
                    <div v-for="item in order.lineItems" :key="item.uid">
                        <p>
                            Item Name: {{ item.name }} (Quantity:
                            {{ item.quantity }})
                        </p>
                        <p>Total Net Sale: {{ order.totalMoney }}</p>
                    </div>
                    <p v-for="(refund, index) in order.refunds" :key="index">
                        Refund {{ index + 1 }} Amount:
                        {{ refund.amountMoney.amount }}
                    </p>
                </div>
            </div>
            <div v-else>
                <p>No orders found for this date.</p>
            </div>
        </div>
        <div>
            <h3 class="mt-4 text-lg font-bold">
                Total Money for All Orders: {{ formatCurrency(prevNetSales) }}
            </h3>
            <p>Total Orders: {{ prevTransactions }}</p>
            <div v-if="prevOrders.length > 0" class="flex flex-col gap-4">
                <div v-for="(order, index) in prevOrders" :key="order.id">
                    <h2 class="text-lg font-bold">
                        Order Number: {{ index + 1 }} // Order ID:
                        {{ order.id }}
                    </h2>
                    <p>Closed At: {{ order.closedAt }}</p>
                    <div v-for="item in order.lineItems" :key="item.uid">
                        <p>
                            Item Name: {{ item.name }} (Quantity:
                            {{ item.quantity }})
                        </p>
                        <p>Total Net Sale: {{ order.totalMoney }}</p>
                    </div>
                    <p v-for="(refund, index) in order.refunds" :key="index">
                        Refund {{ index + 1 }} Amount:
                        {{ refund.amountMoney.amount }}
                    </p>
                </div>
            </div>
            <div v-else>
                <p>No orders found for this date.</p>
            </div>
        </div>
    </div>
</template>
