<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(orders, previousOrders, []);

const donations = computed(() => {
    return salesList.value
        .filter((item) => item.category === "donations")
        .sort((a, b) => b.value - a.value);
});

const totalDonations = computed(() => {
    return donations.value.reduce((total, donation) => {
        return total + donation.value;
    }, 0);
});

const trendDonations = computed(() => {
    return donations.value.reduce((total, donation) => {
        return total + donation.trendValue;
    }, 0);
});
</script>

<template>
    <UiAppCard>
        <template #title> Donations </template>
        <template #options>
            <div class="flex items-center gap-4">
                <UiAppTrendIndicator :value="trendDonations" money/>
                <UiAppBadgeStatus :value="totalDonations" :trendValue="trendDonations" money />
            </div>
        </template>
        <UiAppCardList :source="donations" type="item" money />
    </UiAppCard>
</template>
