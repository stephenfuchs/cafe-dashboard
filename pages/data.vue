<template>
    <div>
        <h1>Orders for {{ specificDate }}</h1>
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
import axios from "axios";

useHead({
    bodyAttrs: {
        class: "bg-surface-0 dark:bg-surface-900",
    },
});

const orders = ref([]);
const specificDate = "2024-12-08";

// Format the date to match the order date format (adjust according to the format you receive)
const formatDate = (date) => new Date(date).toISOString().split("T")[0]; // Extracts only the date (YYYY-MM-DD)

// Fetch orders on mount
onMounted(async () => {
    try {
        const response = await axios.get("/api/orders"); // Use your actual API endpoint
        orders.value = response.data.filter(
            (order) => formatDate(order.closedAt) === specificDate,
        ); // Filter orders by date
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
});
</script>
