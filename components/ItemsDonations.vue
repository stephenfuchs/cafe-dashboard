<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();
const exclude = [];

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useItemSales(orders, previousOrders, exclude);

const donations = computed(() => {
    return salesList.value.filter((item) => item.category === "donations");
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
        <div class="flex flex-col gap-4">
            <div v-if="donations?.length === 0" class="mt-4 self-center italic">
                No Sales Data Available
            </div>
            <div
                v-else
                v-for="donation in donations"
                :key="donation.name"
                class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
            >
                <div
                    class="flex h-10 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
                >
                    <div class="h-full max-h-full">
                        <img
                            :src="donation.imgItem"
                            :alt="`Image of ` + donation.name"
                            class="h-full max-h-full object-contain"
                        />
                    </div>
                    <div class="flex-1 capitalize">
                        {{ donation.name }}
                    </div>
                </div>
                <div class="flex w-2/5 gap-8">
                    <div
                        class="w-1/2 text-end text-base font-semibold text-color"
                    >
                        {{ formatCurrency(donation.grossSales) }}
                    </div>
                    <div class="w-1/2 text-end">
                        <div
                            class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                            :class="{
                                'text-green-500': donation.trendGrossSales >= 0,
                                'text-orange-500': donation.trendGrossSales < 0,
                                'text-muted-color':
                                    donation.trendGrossSales === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    donation.trendGrossSales > 0
                                        ? "trending_up"
                                        : donation.trendGrossSales < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    formatCurrency(
                                        Math.abs(donation.trendGrossSales),
                                    )
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UiAppCard>
</template>
