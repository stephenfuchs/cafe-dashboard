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

const trendingModifiers = computed(() => {
    type ModifierTrend = {
        imgItem: string;
        category: string;
        name: string;
        quantity: number;
        previousQuantity: number;
        trendQuantity: number;
    };

    const current = new Map<string, ModifierTrend>();
    const previous = new Map<string, ModifierTrend>();

    for (const sale of currentSales.value) {
        if (sale.isDonation) continue;

        for (const modifier of sale.modifiers) {
            const key = `${sale.name}::${modifier.category}::${modifier.selection}`;
            const existing = current.get(key);

            if (existing) {
                existing.quantity += modifier.count;
            } else {
                current.set(key, {
                    imgItem: sale.image.item,
                    category: modifier.category,
                    name: `${sale.name}: ${modifier.selection}`,
                    quantity: modifier.count,
                    previousQuantity: 0,
                    trendQuantity: 0,
                });
            }
        }
    }

    for (const sale of previousSales.value) {
        if (sale.isDonation) continue;

        for (const modifier of sale.modifiers) {
            const key = `${sale.name}::${modifier.category}::${modifier.selection}`;
            const existing = previous.get(key);

            if (existing) {
                existing.quantity += modifier.count;
            } else {
                previous.set(key, {
                    imgItem: sale.image.item,
                    category: modifier.category,
                    name: `${sale.name}: ${modifier.selection}`,
                    quantity: modifier.count,
                    previousQuantity: 0,
                    trendQuantity: 0,
                });
            }
        }
    }

    const allModifiers = new Set([...current.keys(), ...previous.keys()]);

    return Array.from(allModifiers).map((key) => {
        const currentModifier = current.get(key);
        const previousModifier = previous.get(key);

        const quantity = currentModifier?.quantity ?? 0;
        const previousQuantity = previousModifier?.quantity ?? 0;

        return {
            imgItem:
                currentModifier?.imgItem ??
                previousModifier?.imgItem ??
                "/img/item-default.png",
            category:
                currentModifier?.category ??
                previousModifier?.category ??
                "other",
            name:
                currentModifier?.name ??
                previousModifier?.name ??
                "Unknown Modifier",
            quantity,
            trendQuantity: quantity - previousQuantity,
        };
    });
});

const topTrending = computed(() => {
    return [...trendingModifiers.value]
        .sort((a, b) => b.trendQuantity - a.trendQuantity)
        .slice(0, 5);
});

const bottomTrending = computed(() => {
    return [...trendingModifiers.value]
        .sort((a, b) => a.trendQuantity - b.trendQuantity)
        .slice(0, 5);
});

const selected = ref("Top");
const options = ref(["Top", "Bottom"]);
</script>

<template>
    <UiAppCard>
        <template #title> {{ selected }} Trending Modifiers</template>
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
