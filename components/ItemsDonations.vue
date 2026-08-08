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

const donations = computed(() => {
    const currentDonations = currentSales.value.filter(
        (sale) => sale.isDonation,
    );

    const previousDonations = previousSales.value.filter(
        (sale) => sale.isDonation,
    );

    const previousByName = new Map<string, number>();

    for (const sale of previousDonations) {
        previousByName.set(
            sale.name,
            (previousByName.get(sale.name) ?? 0) + sale.grossSales,
        );
    }

    const currentByName = new Map<
        string,
        {
            name: string;
            category: string;
            quantity: number;
            value: number;
            trendValue: number;
            imgItem: string;
            imgCategory: string;
        }
    >();

    for (const sale of currentDonations) {
        const existing = currentByName.get(sale.name);

        if (existing) {
            existing.quantity += sale.quantity;
            existing.value += sale.grossSales;
            existing.trendValue =
                existing.value - (previousByName.get(sale.name) ?? 0);
        } else {
            const value = sale.grossSales;
            const previousValue = previousByName.get(sale.name) ?? 0;

            currentByName.set(sale.name, {
                name: sale.name,
                category: sale.category,
                quantity: sale.quantity,
                value,
                trendValue: value - previousValue,
                imgItem: sale.image.item,
                imgCategory: sale.image.category,
            });
        }
    }

    return Array.from(currentByName.values()).sort((a, b) => b.value - a.value);
});

const totalDonations = computed(() => {
    return donations.value.reduce(
        (total, donation) => total + donation.value,
        0,
    );
});

const trendDonations = computed(() => {
    return donations.value.reduce(
        (total, donation) => total + donation.trendValue,
        0,
    );
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
