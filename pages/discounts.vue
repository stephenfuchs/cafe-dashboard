<template>
    <div>
        <span>Discounts</span>
        <div v-if="orders.length > 0" class="flex flex-col gap-4">
            <div v-for="(order, index) in orders" :key="order.id">
                <h2 class="text-lg font-bold">
                    Order Number: {{ index + 1 }} // Order ID: {{ order.id }}
                </h2>
                <p>Closed At: {{ order.closedAt }}</p>
                <div v-for="item in order.lineItems" :key="item.uid">
                    <p>
                        Item Name: {{ item.name }} (Quantity:
                        {{ item.quantity }})
                    </p>
                    <p>Total Net Sale: {{ order.totalMoney }}</p>
                </div>
            </div>
        </div>
        <div v-else>
            <p>No orders found for this date.</p>
        </div>
    </div>
</template>

<script setup>
const { orders } = useOrders();
</script>
