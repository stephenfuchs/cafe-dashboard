<script setup type="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";
const filters = useFilters();
const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
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
            <div
                :class="
                    coffeeDonations?.trendValue > 0
                        ? 'bg-green-100 text-green-700'
                        : coffeeDonations?.trendValue < 0
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-neutral-200 text-neutral-700'
                "
                class="flex items-center gap-1 self-start rounded px-2 py-1 text-sm font-bold"
            >
                <div class="material-symbols-outlined">money_bag</div>
                <div>
                    {{ formatCurrency(coffeeDonations?.value || 0) }}
                </div>
            </div>
        </template>
        <SalesList :source="coffees" type="coffee" />
    </UiAppCard>
</template>
