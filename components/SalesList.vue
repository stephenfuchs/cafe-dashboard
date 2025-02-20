<script setup>
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps({
    source: {
        type: Array,
        required: true,
    },
    type: {
        type: String,
        required: true,
        validator(value) {
            return ["item", "category", "coffee"].includes(value);
        },
    },
    money: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-if="source.length === 0" class="mt-4 self-center italic">
            No Sales Data Available
        </div>
        <div
            v-else
            v-for="item in source"
            :key="item.name || item.category"
            class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
        >
            <div
                class="flex h-10 flex-1 items-center gap-2 truncate text-base font-semibold text-color xl:gap-3 2xl:gap-4"
            >
                <div class="h-full max-h-full">
                    <img
                        :src="
                            type === 'item'
                                ? item.imgItem
                                : type === 'category'
                                  ? item.imgCategory
                                  : item.imgCoffee
                        "
                        :alt="`Image of ${type === 'category' ? item.category : item.name}`"
                        class="h-full max-h-full object-contain"
                    />
                </div>
                <div
                    class="flex-1 truncate capitalize"
                    :class="{
                        'font-normal text-muted-color': money
                            ? item.grossSales === 0
                            : item.quantity === 0,
                    }"
                >
                    {{
                        type === "category"
                            ? item.category || "N/A"
                            : item.name || "N/A"
                    }}
                </div>
            </div>
            <div class="flex gap-4 xl:gap-6 2xl:gap-8">
                <div
                    :class="
                        twMerge(
                            'w-1/2 text-end text-base font-semibold text-color',
                            (money && item.grossSales === 0) ||
                                (!money && item.quantity === 0)
                                ? 'font-normal text-muted-color'
                                : '',
                        )
                    "
                >
                    {{
                        money
                            ? formatCurrency(item.grossSales) || 0
                            : item.quantity || 0
                    }}
                </div>
                <div class="w-1/2 text-end">
                    <div
                        class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                        :class="{
                            'text-green-500':
                                (money
                                    ? item.trendGrossSales
                                    : item.trendQuantity) >= 0,
                            'text-orange-500':
                                (money
                                    ? item.trendGrossSales
                                    : item.trendQuantity) < 0,
                            'text-muted-color':
                                (money
                                    ? item.trendGrossSales
                                    : item.trendQuantity) === 0,
                        }"
                    >
                        <div class="material-symbols-outlined flex-1 text-end">
                            {{
                                (money
                                    ? item.trendGrossSales
                                    : item.trendQuantity) > 0
                                    ? "trending_up"
                                    : (money
                                            ? item.trendGrossSales
                                            : item.trendQuantity) < 0
                                      ? "trending_down"
                                      : "trending_flat"
                            }}
                        </div>
                        <div class="flex-1">
                            {{
                                money
                                    ? formatCurrency(
                                          Math.abs(
                                              money
                                                  ? item.trendGrossSales
                                                  : item.trendQuantity,
                                          ),
                                      )
                                    : Math.abs(
                                          money
                                              ? item.trendGrossSales
                                              : item.trendQuantity,
                                      )
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
