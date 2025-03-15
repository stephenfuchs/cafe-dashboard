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
            class="flex items-center gap-4 group"
        >
            <div class="flex flex-shrink-0 items-center py-2 group-first:pt-0 group-last:pb-0 md:w-16 justify-center">
                <UiAppCardItemImage :src="item.imgItem" :alt="item.imgItem" />
            </div>
            <div class="grid grid-cols-7 md:grid-cols-12 items-center self-stretch border-b border-surface-200 group-last:border-b-0 dark:border-surface-700 w-full py-2 group-first:pt-0 group-last:pb-0 gap-4 text-base font-semibold text-color">
                <div
                    class="col-span-3 md:col-span-4 xl:col-span-5 truncate capitalize"
                >
                    {{ item?.name }}
                </div>
                <div class="col-span-2 md:col-span-3">
                    {{ item?.count }}
                </div>
                <div class="col-span-2 md:col-span-4 xl:col-span-3">
                    {{ formatCurrency(item?.value) }}
                </div>
            </div>
        </div>
    </div>
</template>
