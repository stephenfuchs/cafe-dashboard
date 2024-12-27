<template>
    <div>
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
// import axios from "axios";
// import { formatISO } from "date-fns";

// const filters = useFilters();

// const orders = ref([]);

// watch(
//     [() => filters.startDate.value, () => filters.endDate.value],
//     async () => {
//         console.log(
//             formatISO(filters.startDate.value),
//             formatISO(filters.endDate.value),
//         );

//         try {
//             const response = await axios.get(
//                 `/api/orders?startDate=${formatISO(filters.startDate.value)}&endDate=${formatISO(filters.endDate.value)}`,
//             ); // Use your actual API endpoint
//             orders.value = response.data;
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     },
// );
</script>
