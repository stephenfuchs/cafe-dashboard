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

const salesList = computed(() => {
    const current = new Map<
        string,
        {
            name: string;
            category: string;
            quantity: number;
            value: number;
            imgItem: string;
            imgCategory: string;
        }
    >();

    const previous = new Map<
        string,
        {
            name: string;
            category: string;
            quantity: number;
            value: number;
            imgItem: string;
            imgCategory: string;
        }
    >();

    for (const sale of currentSales.value) {
        if (sale.isDonation) continue;

        const existing = current.get(sale.name);

        if (existing) {
            existing.quantity += sale.quantity;
            existing.value += sale.grossSales;
        } else {
            current.set(sale.name, {
                name: sale.name,
                category: sale.category,
                quantity: sale.quantity,
                value: sale.grossSales,
                imgItem: sale.image.item,
                imgCategory: sale.image.category,
            });
        }
    }

    for (const sale of previousSales.value) {
        if (sale.isDonation) continue;

        const existing = previous.get(sale.name);

        if (existing) {
            existing.quantity += sale.quantity;
            existing.value += sale.grossSales;
        } else {
            previous.set(sale.name, {
                name: sale.name,
                category: sale.category,
                quantity: sale.quantity,
                value: sale.grossSales,
                imgItem: sale.image.item,
                imgCategory: sale.image.category,
            });
        }
    }

    const allItems = new Set([...current.keys(), ...previous.keys()]);

    return Array.from(allItems).map((name) => {
        const currentItem = current.get(name);
        const previousItem = previous.get(name);

        const quantity = currentItem?.quantity ?? 0;
        const previousQuantity = previousItem?.quantity ?? 0;

        const value = currentItem?.value ?? 0;
        const previousValue = previousItem?.value ?? 0;

        return {
            name,
            category:
                currentItem?.category ?? previousItem?.category ?? "unknown",
            quantity,
            value,
            imgItem:
                currentItem?.imgItem ??
                previousItem?.imgItem ??
                "/img/item-default.png",
            imgCategory:
                currentItem?.imgCategory ??
                previousItem?.imgCategory ??
                "/img/item-default.png",
            trendQuantity: quantity - previousQuantity,
            trendValue: value - previousValue,
        };
    });
});

const topTrending = computed(() => {
    return [...salesList.value]
        .sort((a, b) => b.trendQuantity - a.trendQuantity)
        .slice(0, 5);
});

const bottomTrending = computed(() => {
    return [...salesList.value]
        .sort((a, b) => a.trendQuantity - b.trendQuantity)
        .slice(0, 5);
});

const selected = ref("Top");
const options = ref(["Top", "Bottom"]);
</script>

<template>
    <UiAppCard>
        <template #title> {{ selected }} Trending Items </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Top'">
            <UiAppCardList
                :source="topTrending"
                type="item"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </div>
        <div v-else-if="selected === 'Bottom'">
            <UiAppCardList
                :source="bottomTrending"
                type="item"
                :isLoading="isLoading"
                :prevIsLoading="prevIsLoading"
            />
        </div>
    </UiAppCard>
</template>
