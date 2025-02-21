<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

interface DiscountItem {
    name: string;
    imgItem: string;
    count: number;
    value: number;
}
const props = defineProps<{
    items: DiscountItem[];
}>();
</script>

<template>
    <div class="mt-4">
        <div
            v-for="item in [...items].sort((a, b) => b.count - a.count)"
            :key="item.name"
            class="grid grid-cols-2 items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
        >
            <div class="flex items-center gap-4">
                <div class="flex items-center justify-center lg:w-16">
                    <img
                        :src="item.imgItem"
                        :alt="item.imgItem"
                        class="size-10 lg:size-12"
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
</template>
