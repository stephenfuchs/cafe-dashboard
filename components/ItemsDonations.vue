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
        .sort((a, b) => b.grossSales - a.grossSales);
});

const totalDonations = computed(() => {
    return donations.value.reduce((total, donation) => {
        return total + donation.grossSales;
    }, 0);
});

const trendDonations = computed(() => {
    return donations.value.reduce((total, donation) => {
        return total + donation.trendGrossSales;
    }, 0);
});
</script>

<template>
    <UiAppCard>
        <template #title> Donations </template>
        <template #options>
            <div class="flex items-center gap-4">
                <Tag
                    :severity="
                        trendDonations > 0
                            ? 'success'
                            : trendDonations < 0
                              ? 'danger'
                              : 'secondary'
                    "
                    :value="formatCurrency(totalDonations)"
                />
                <div
                    class="flex w-1/2 gap-1 text-sm font-semibold"
                    :class="{
                        'text-green-500': trendDonations >= 0,
                        'text-orange-500': trendDonations < 0,
                        'text-muted-color': trendDonations === 0,
                    }"
                >
                    <div class="material-symbols-outlined flex-1 text-end">
                        {{
                            trendDonations > 0
                                ? "trending_up"
                                : trendDonations < 0
                                  ? "trending_down"
                                  : "trending_flat"
                        }}
                    </div>
                    <div class="flex-1">
                        {{
                            trendDonations < 0
                                ? formatCurrency(Math.abs(trendDonations))
                                : formatCurrency(trendDonations)
                        }}
                    </div>
                </div>
            </div>
        </template>
        <SalesList :source="donations" type="item" money />
    </UiAppCard>
</template>
