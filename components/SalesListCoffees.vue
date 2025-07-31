<script setup type="ts">
const filters = useFilters();
const { orders, isLoading } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders, isLoading: prevIsLoading } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(
    orders,
    previousOrders,
    [],
);

const coffees = computed(() => {
    const coffeeNames = ["regular", "hazelnut", "french vanilla", "caramel", "decaf"]
    let filteredList = salesList.value.filter((item) => coffeeNames.includes(item.name)).map((item) => ({
        name: item.name,
        imgCoffee: item.imgCoffee,
        quantity: item.quantity,
        trendQuantity: item.trendQuantity
    }));

    return filteredList.sort((a,b) => b.quantity - a.quantity);
});

const coffeeDonations = computed(() => {
    const donation = salesList.value.find((item) => item.name === "coffee donation")
    return donation ? {
        value: donation.value,
        trendValue: donation.trendValue
    } : null
})
</script>

<template>
    <UiAppCard full>
        <template #title> Brewed Coffees </template>
        <template #options>
            <UiAppBadgeStatus
                v-if="coffeeDonations"
                icon
                :value="coffeeDonations.value"
                :trendValue="coffeeDonations.trendValue"
                money
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </template>
        <UiAppCardList :source="coffees" type="coffee" :isLoading="isLoading" />
    </UiAppCard>
</template>
