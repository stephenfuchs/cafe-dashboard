<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

defineProps({
    products: {
        type: Array,
        required: true,
    },
    money: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="flex flex-col gap-4">
        <div v-if="products.length === 0" class="mt-4 self-center italic">
            No Sales Data Available
        </div>
        <div
            v-else
            v-for="product in products"
            :key="product.item"
            class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
        >
            <div
                class="flex h-10 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
            >
                <div class="h-full max-h-full">
                    <img
                        :src="product.img"
                        :alt="`Image of ` + product.item"
                        class="h-full max-h-full object-contain"
                    />
                </div>
                <div class="flex-1 capitalize">
                    {{ product.item }}
                </div>
            </div>
            <div class="flex w-2/5 gap-8">
                <div class="w-1/2 text-end text-base font-semibold text-color">
                    {{
                        money
                            ? formatCurrency(product.quantity)
                            : product.quantity
                    }}
                </div>
                <div class="w-1/2 text-end">
                    <div
                        class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                        :class="{
                            'text-green-500': product.trend >= 0,
                            'text-orange-500': product.trend < 0,
                            'text-muted-color': product.trend === 0,
                        }"
                    >
                        <div class="material-symbols-outlined flex-1 text-end">
                            {{
                                product.trend > 0
                                    ? "trending_up"
                                    : product.trend < 0
                                      ? "trending_down"
                                      : "trending_flat"
                            }}
                        </div>
                        <div class="flex-1">
                            {{
                                money
                                    ? formatCurrency(Math.abs(product.trend))
                                    : product.trend < 0
                                      ? Math.abs(product.trend)
                                      : product.trend
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
