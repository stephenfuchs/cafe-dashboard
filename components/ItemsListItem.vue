<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const isVisible = ref(false); // Keeps track of visibility

const toggleVisibility = () => {
    isVisible.value = !isVisible.value; // Toggles visibility
};
</script>

<template>
    <UiAppCard noTitle>
        <div
            class="grid grid-rows-2 items-center gap-4 xl:grid-cols-2 xl:grid-rows-1"
        >
            <div class="flex items-center gap-4">
                <img
                    :src="item?.imgItem"
                    :alt="`Image of ` + item?.name"
                    class="w-16 rounded bg-neutral-100 lg:w-20 dark:bg-neutral-700"
                />
                <h3
                    class="flex-1 truncate text-lg font-bold uppercase text-color"
                >
                    <span class="block text-xs font-medium text-muted-color">{{
                        item?.category
                    }}</span>

                    {{ item?.name }}
                    <span class="block text-xs font-light text-muted-color"
                        ><span
                            class="material-symbols-outlined font-bold"
                            :class="{
                                'text-green-500':
                                    item?.previousSortOrder === 0 ||
                                    item?.previousSortOrder === null ||
                                    item?.currentSortOrder <
                                        item?.previousSortOrder,
                                'text-orange-500':
                                    item?.currentSortOrder >
                                    (item?.previousSortOrder || Infinity),
                                'text-muted-color':
                                    item?.currentSortOrder ===
                                    item?.previousSortOrder,
                            }"
                            >{{
                                item?.currentSortOrder <
                                    item?.previousSortOrder ||
                                item?.previousSortOrder === null ||
                                item?.previousSortOrder === 0
                                    ? "arrow_upward"
                                    : item?.currentSortOrder >
                                        item?.previousSortOrder
                                      ? "arrow_downward"
                                      : "horizontal_rule"
                            }}</span
                        >
                        {{ item?.currentSortOrder }} current |
                        {{
                            item?.previousSortOrder !== 0
                                ? item?.previousSortOrder
                                : "--"
                        }}
                        previous</span
                    >
                </h3>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1">
                    <span class="text-xs font-medium uppercase text-muted-color"
                        >Quantity</span
                    >
                    <div class="flex items-center gap-4">
                        <div class="text-lg font-bold uppercase text-color">
                            {{ item?.quantity }}
                        </div>
                        <div
                            class="flex gap-1 text-base font-semibold"
                            :class="{
                                'text-green-500': item?.trendQuantity >= 0,
                                'text-orange-500': item?.trendQuantity < 0,
                                'text-muted-color': item?.trendQuantity === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    item?.trendQuantity > 0
                                        ? "trending_up"
                                        : item?.trendQuantity < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    item?.trendQuantity < 0
                                        ? Math.abs(item?.trendQuantity)
                                        : item?.trendQuantity
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1">
                    <span class="text-xs font-medium uppercase text-muted-color"
                        >Gross Sales</span
                    >
                    <div class="flex items-center gap-4">
                        <div class="text-lg font-bold uppercase text-color">
                            {{ formatCurrency(item?.grossSales) }}
                        </div>
                        <div
                            class="flex gap-1 text-base font-semibold"
                            :class="{
                                'text-green-500': item?.trendGrossSales >= 0,
                                'text-orange-500': item?.trendGrossSales < 0,
                                'text-muted-color': item?.trendGrossSales === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    item?.trendGrossSales > 0
                                        ? "trending_up"
                                        : item?.trendGrossSales < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    item?.trendGrossSales < 0
                                        ? formatCurrency(
                                              Math.abs(item?.trendGrossSales),
                                          )
                                        : formatCurrency(item?.trendGrossSales)
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <Button
                    :disabled="Object.keys(item?.modifiers).length < 1"
                    severity="secondary"
                    size="small"
                    @click="toggleVisibility"
                >
                    <template #icon>
                        <i class="material-symbols-outlined text-xl">style</i>
                    </template>
                </Button>
            </div>
        </div>
        <Drawer v-model:visible="isVisible" position="full" blockScroll>
            <template #header>
                <div class="mx-8 flex items-center gap-2">
                    <h2 class="text-2xl font-bold uppercase text-color">
                        {{ item?.name }} Modifier Sales
                    </h2>
                </div>
            </template>
            <div class="flex flex-col gap-6">
                <div
                    v-for="(modifierGroup, category) in item?.modifiers"
                    :key="category"
                    class="mx-8"
                >
                    {{ category }}
                    <div class="grid grid-cols-6 gap-4">
                        <UiAppCard
                            stat
                            v-for="[modifier, count] in Object.entries(
                                modifierGroup as Record<string, number>,
                            ).sort((a, b) => b[1] - a[1])"
                            :key="modifier"
                        >
                            <template #title :class="'truncate'">{{
                                modifier
                            }}</template>
                            <div class="text-4xl font-bold text-color">
                                {{ count }}
                            </div>
                        </UiAppCard>
                    </div>
                </div>
            </div>
        </Drawer>
        <!-- <div v-show="isVisible" class="mt-4 space-y-2">
            <div
                v-for="(modifierGroup, category) in item?.modifiers"
                :key="category"
            >
                <h6 class="text-sm font-bold uppercase text-muted-color">
                    {{ category }}:
                </h6>
                <div class="flex flex-wrap gap-4">
                    <div
                        v-for="(count, modifier) in modifierGroup"
                        :key="modifier"
                        class="flex items-center gap-2 text-sm font-medium capitalize"
                    >
                        <span>{{ modifier }}</span>
                        <span
                            class="rounded-md bg-neutral-900 px-2 py-1 text-center text-xs font-bold text-neutral-100"
                            >{{ count }}</span
                        >
                    </div>
                </div>
            </div>
        </div> -->
    </UiAppCard>
</template>
