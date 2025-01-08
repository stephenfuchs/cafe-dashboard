<script setup>
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);

const selected = ref("Items");
const options = ref(["Items", "Categories"]);

// Function to calculate the top 5 items based on total quantity
const topItems = computed(() => {
    if (!orders.value || !Array.isArray(orders.value)) return []; // Guard clause for invalid data

    const itemQuantities = {};

    // Loop through each order and each lineItem to accumulate quantities
    orders.value.forEach((order) => {
        if (!order || !Array.isArray(order.lineItems)) return; // Guard clause for malformed orders

        order.lineItems.forEach((item) => {
            const itemName = item?.name?.toLowerCase();
            if (!itemName || itemName === "coffee pot") return;

            const quantity = Number(item?.quantity || 0); // Ensure quantity is a number
            if (itemQuantities[itemName]) {
                itemQuantities[itemName] += quantity;
            } else {
                itemQuantities[itemName] = quantity;
            }
        });
    });

    // Convert the itemQuantities object into an array
    const itemList = Object.entries(itemQuantities).map(([item, quantity]) => ({
        item,
        quantity: Number(quantity),
    }));

    // Sort and return the top 5 items
    return itemList
        .sort((a, b) => b.quantity - a.quantity)
        .slice(0, 5)
        .map((item) => ({
            ...item,
            img: `/img/item-${item.item
                .toLowerCase()
                .replace(/\s+/g, "_")
                .replace(/[^a-z0-9-]/g, "")}.png`,
        }));
});
</script>

<template>
    <UiAppCard>
        <template #title> Top {{ selected }} </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <SalesList :products="topItems" />
    </UiAppCard>
</template>
