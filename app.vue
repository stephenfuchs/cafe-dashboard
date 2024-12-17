<template>
    <!-- <div>
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
    </div> -->
    <div class="flex min-h-dvh flex-col-reverse gap-5 md:flex-row">
        <LayoutsSidebar />
        <main class="flex-1 p-5">
            <LayoutsHeader page="Sales Overview" />
            <div class="flex flex-col gap-6">
                <div class="grid grid-cols-2 gap-6 xl:grid-cols-4">
                    <UiCardStat
                        title="Gross Sales"
                        :value="511.17"
                        :percent="70.39"
                        vs="last week"
                        :vsValue="300.0"
                        money
                    />
                    <UiCardStat
                        title="Net Total"
                        :value="492.76"
                        :percent="-70.47"
                        vs="last week"
                        :vsValue="294.0"
                        money
                    />
                    <UiCardStat
                        title="Transactions"
                        :value="65"
                        :percent="22.64"
                        vs="last week"
                        :vsValue="53"
                    />
                    <UiCardStat
                        title="Average Sale"
                        :value="7.71"
                        :percent="39.0"
                        vs="last week"
                        :vsValue="5.55"
                        money
                    />
                </div>
                <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-1">
                        <UiCardTopItems />
                    </div>
                    <div class="col-span-1">
                        <UiCardCoffees />
                    </div>
                    <div class="col-span-1">
                        <UiCardSalesSummary />
                    </div>
                </div>
                <div class="grid grid-cols-1">
                    <UiCardChart />
                </div>
            </div>
        </main>
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

const paymentData = {
    labels: ["Payment Method"],
    datasets: [
        {
            label: "Cash",
            data: [56.45], // Example percentage or proportion
            backgroundColor: "#FF6384",
        },
        {
            label: "Card",
            data: [43.55],
            backgroundColor: "#36A2EB",
        },
    ],
};

const paymentOptions = {
    indexAxis: "y", // Make the bar chart horizontal
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: true,
            position: "bottom",
        },
    },
    scales: {
        x: {
            stacked: true,
            grid: {
                display: false, // Remove grid lines on x-axis
            },
            ticks: {
                display: false, // Remove tick marks and labels on x-axis
            },
            border: {
                display: false,
            },
        },
        y: {
            stacked: true,
            grid: {
                display: false, // Remove grid lines on x-axis
            },
            ticks: {
                display: false, // Remove tick marks and labels on x-axis
            },
            border: {
                display: false,
            },
        },
    },
};

const chartData = ref({
    labels: ["Bagels", "Baked Goods", "Barista", "Donations", "Drink Cooler"],
    datasets: [
        {
            data: [66, 39, 83, 88, 24],
            backgroundColor: [
                "#c084fc",
                "#a855f7",
                "#9333ea",
                "#7e22ce",
                "#6b21a8",
            ],
            hoverBackgroundColor: [
                "#c084fc",
                "#a855f7",
                "#9333ea",
                "#7e22ce",
                "#6b21a8",
            ],
        },
    ],
});

const chartOptions = ref({
    responsive: true,
    cutout: "50%",
    layout: {
        padding: 40,
    },
    elements: {
        arc: {
            borderWidth: 0,
        },
    },
    plugins: {
        legend: {
            position: "bottom",
            labels: {
                usePointStyle: true,
                color: "#ffffff",
            },
        },
        tooltip: {
            enabled: true,
        },
    },
});
</script>
