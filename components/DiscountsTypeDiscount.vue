<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps({
    discount: {
        type: Object,
        required: true,
    },
});

const isVisible = ref(false); // Keeps track of visibility

const toggleVisibility = () => {
    isVisible.value = !isVisible.value; // Toggles visibility
};

const selected = ref("Count");
const options = ref(["Count", "Trend"]);
</script>

<template>
    <UiAppCard noTitle>
        <div
            class="grid grid-rows-2 items-center gap-4 xl:grid-cols-2 xl:grid-rows-1"
        >
            <div class="flex items-center gap-4">
                <div
                    class="flex size-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700"
                >
                    <span
                        class="material-symbols-outlined text-2xl text-primary"
                    >
                        {{ discount?.imgDiscount }}
                    </span>
                </div>
                <h3
                    class="flex-1 truncate text-lg font-bold uppercase text-color"
                >
                    <span class="block text-xs font-medium text-muted-color"
                        >Discount</span
                    >

                    {{ discount?.discountName }}
                </h3>
            </div>
            <div class="flex items-center gap-4">
                <div class="flex-1">
                    <span class="text-xs font-medium uppercase text-muted-color"
                        >Claims</span
                    >
                    <div class="flex items-center gap-4">
                        <div class="text-lg font-bold uppercase text-color">
                            {{ discount?.count }}
                        </div>
                        <div
                            class="flex gap-1 text-base font-semibold"
                            :class="{
                                'text-green-500': discount?.trendCount >= 0,
                                'text-orange-500': discount?.trendCount < 0,
                                'text-muted-color': discount?.trendCount === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    discount?.trendCount > 0
                                        ? "trending_up"
                                        : discount?.trendCount < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    discount?.trendCount < 0
                                        ? Math.abs(discount?.trendCount)
                                        : discount?.trendCount
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 justify-between">
                    <div>
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >Value</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ formatCurrency(discount?.value) }}
                            </div>
                            <div
                                class="flex gap-1 text-base font-semibold"
                                :class="{
                                    'text-green-500': discount?.trendValue >= 0,
                                    'text-orange-500': discount?.trendValue < 0,
                                    'text-muted-color':
                                        discount?.trendValue === 0,
                                }"
                            >
                                <div
                                    class="material-symbols-outlined flex-1 text-end"
                                >
                                    {{
                                        discount?.trendValue > 0
                                            ? "trending_up"
                                            : discount?.trendValue < 0
                                              ? "trending_down"
                                              : "trending_flat"
                                    }}
                                </div>
                                <div class="flex-1">
                                    {{
                                        discount?.trendValue < 0
                                            ? formatCurrency(
                                                  Math.abs(
                                                      discount?.trendValue,
                                                  ),
                                              )
                                            : formatCurrency(
                                                  discount?.trendValue,
                                              )
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        severity="secondary"
                        size="small"
                        @click="toggleVisibility"
                        class="self-center"
                    >
                        <template #icon>
                            <i class="material-symbols-outlined text-xl"
                                >style</i
                            >
                        </template>
                    </Button>
                </div>
            </div>
        </div>
        <div v-show="isVisible" class="mt-4">
            <div
                v-for="item in [...discount?.items].sort(
                    (a, b) => b.count - a.count,
                )"
                class="grid grid-rows-2 items-center gap-4 border-b border-surface-300 last:border-b-0 xl:grid-cols-2 xl:grid-rows-1 dark:border-surface-700"
            >
                <div class="flex items-center gap-4">
                    <div class="flex w-16 items-center justify-center">
                        <img
                            :src="item.imgItem"
                            :alt="item.imgItem"
                            class="size-12"
                        />
                    </div>
                    <h3
                        class="flex-1 truncate text-base font-semibold capitalize text-color"
                    >
                        {{ item?.name }}
                    </h3>
                </div>
                <div class="flex items-center gap-4">
                    <div class="flex-1">
                        <div class="flex items-center gap-4">
                            <div class="text-base font-semibold text-color">
                                {{ item?.count }}
                            </div>
                        </div>
                    </div>
                    <div class="flex-1">
                        <div class="flex items-center gap-4">
                            <div class="text-base font-semibold text-color">
                                {{ formatCurrency(item?.value) }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </UiAppCard>
</template>
