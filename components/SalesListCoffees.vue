<script setup lang="ts">
const filters = useFilters();

const { sales: currentSales, isLoading } = useNormalizedOrders(
    filters.startDate,
    filters.endDate,
);

const { sales: previousSales, isLoading: prevIsLoading } = useNormalizedOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const {
    coffeeTotals,
    isLoading: coffeeIsLoading,
    prevIsLoading: coffeePrevIsLoading,
} = useBrewedCoffeeAnalytics(
    filters.startDate,
    filters.endDate,
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const coffees = computed(() =>
    coffeeTotals.value.map((coffee) => ({
        name: coffee.flavor,
        imgCoffee: coffee.image,
        quantity: coffee.quantity,
        trendQuantity: coffee.trendQuantity,
    })),
);

const coffeeDonations = computed(() => {
    const currentValue = currentSales.value
        .filter((sale) => sale.isDonation && sale.name === "coffee donation")
        .reduce((total, sale) => total + sale.grossSales, 0);

    const previousValue = previousSales.value
        .filter((sale) => sale.isDonation && sale.name === "coffee donation")
        .reduce((total, sale) => total + sale.grossSales, 0);

    if (currentValue === 0 && previousValue === 0) {
        return null;
    }

    return {
        value: currentValue,
        trendValue: currentValue - previousValue,
    };
});
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
        <UiAppCardList
            :source="coffees"
            type="coffee"
            :isLoading="coffeeIsLoading"
            :prevIsLoading="coffeePrevIsLoading"
        />
    </UiAppCard>
</template>
