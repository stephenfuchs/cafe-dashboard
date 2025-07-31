<script setup>
import { excludeCoffeePots } from "../server/utils/excludes";

const filters = useFilters();

const { orders, isLoading } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders, isLoading: prevIsLoading } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useSalesList(orders, previousOrders, excludeCoffeePots);

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
                <UiAppTrendIndicator
                    :value="trendDonations"
                    money
                    :isLoading="isLoading"
                    :prevIsLoading="prevIsLoading"
                />
                <UiAppBadgeStatus
                    :value="totalDonations"
                    :trendValue="trendDonations"
                    money
                    :isLoading="isLoading"
                    :prevIsLoading="prevIsLoading"
                />
            </div>
        </template>
        <UiAppCardList
            :source="donations"
            type="item"
            money
            :isLoading="isLoading"
            :prevIsLoading="prevIsLoading"
        />
    </UiAppCard>
</template>
