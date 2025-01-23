<script setup>
const filters = useFilters();
const exclude = [
    "coffee pot",
    "coffee donation",
    "card ministry donation",
    "donation (general giving)",
    "next gen events",
    "nica angels donation",
    "ukraine donations",
];

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useItemSales(orders, previousOrders, exclude);

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
        <template #title> {{ selected }} Trending </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <div v-if="selected === 'Top'">
            <div class="flex flex-col gap-4">
                <div
                    v-if="topTrending?.length === 0"
                    class="mt-4 self-center italic"
                >
                    No Sales Data Available
                </div>
                <div
                    v-else
                    v-for="item in topTrending"
                    :key="item.name"
                    class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
                >
                    <div
                        class="flex h-10 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
                    >
                        <div class="h-full max-h-full">
                            <img
                                :src="item.imgItem"
                                :alt="`Image of ` + item.name"
                                class="h-full max-h-full object-contain"
                            />
                        </div>
                        <div class="flex-1 capitalize">
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="flex w-2/5 gap-8">
                        <div
                            class="w-1/2 text-end text-base font-semibold text-color"
                        >
                            {{ item.quantity }}
                        </div>
                        <div class="w-1/2 text-end">
                            <div
                                class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                                :class="{
                                    'text-green-500': item.trendQuantity >= 0,
                                    'text-orange-500': item.trendQuantity < 0,
                                    'text-muted-color':
                                        item.trendQuantity === 0,
                                }"
                            >
                                <div
                                    class="material-symbols-outlined flex-1 text-end"
                                >
                                    {{
                                        item.trendQuantity > 0
                                            ? "trending_up"
                                            : item.trendQuantity < 0
                                              ? "trending_down"
                                              : "trending_flat"
                                    }}
                                </div>
                                <div class="flex-1">
                                    {{ Math.abs(item.trendQuantity) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="selected === 'Bottom'">
            <div class="flex flex-col gap-4">
                <div
                    v-if="bottomTrending?.length === 0"
                    class="mt-4 self-center italic"
                >
                    No Sales Data Available
                </div>
                <div
                    v-else
                    v-for="item in bottomTrending"
                    :key="item.name"
                    class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
                >
                    <div
                        class="flex h-10 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
                    >
                        <div class="h-full max-h-full">
                            <img
                                :src="item.imgItem"
                                :alt="`Image of ` + item.name"
                                class="h-full max-h-full object-contain"
                            />
                        </div>
                        <div class="flex-1 capitalize">
                            {{ item.name }}
                        </div>
                    </div>
                    <div class="flex w-2/5 gap-8">
                        <div
                            class="w-1/2 text-end text-base font-semibold text-color"
                        >
                            {{ item.quantity }}
                        </div>
                        <div class="w-1/2 text-end">
                            <div
                                class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                                :class="{
                                    'text-green-500': item.trendQuantity >= 0,
                                    'text-orange-500': item.trendQuantity < 0,
                                    'text-muted-color':
                                        item.trendQuantity === 0,
                                }"
                            >
                                <div
                                    class="material-symbols-outlined flex-1 text-end"
                                >
                                    {{
                                        item.trendQuantity > 0
                                            ? "trending_up"
                                            : item.trendQuantity < 0
                                              ? "trending_down"
                                              : "trending_flat"
                                    }}
                                </div>
                                <div class="flex-1">
                                    {{ Math.abs(item.trendQuantity) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UiAppCard>
</template>
