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

const getImageSrc = (item) => {
    if (props.type === 'item') return item.imgItem;
    if (props.type === 'category') return item.imgCategory;
    if (props.type === 'coffee') return item.imgCoffee;
}

const getImageAlt = (item) => {
    return props.type === 'category' ? item.category : item.name;
}

const getItemName = (item) => {
    return props.type === 'category' ? item.category || "N/A" : item.name || "N/A"
}

const getItemValue = (item) => {
    return props.money ? formatCurrency(item.value) || 0 : item.quantity || 0;
}

const getTrendValue = (item) => {
    return props.money ? item.trendValue : item.trendQuantity;
}

</script>

<template>
    <div class="flex flex-col">
        <div v-if="source.length === 0" class="mt-4 self-center italic">
            No Sales Data Available
        </div>
        <div
            v-else
            v-for="item in source"
            :key="item.name || item.category"
            class="flex items-center gap-4 group"
        >
            <div class="flex flex-shrink-0 items-center py-2 group-first:pt-0 group-last:pb-0">
                <UiAppCardItemImage :src="getImageSrc(item)" :alt="getImageAlt(item)" />
            </div>
            <div class="grid grid-cols-7 sm:grid-cols-12 items-center self-stretch border-b border-surface-200 group-last:border-b-0 dark:border-surface-700 w-full py-2 group-first:pt-0 group-last:pb-0 gap-4 text-base font-semibold text-color">
                <div
                    class="col-span-3 sm:col-span-6 items-center truncate capitalize"
                    :class="{
                        'font-normal text-muted-color': props.money ? item.value === 0 : item.quantity === 0,
                    }"
                >
                    {{ getItemName(item) }}
                </div>
                <div
                    :class="twMerge(
                        'text-end col-span-2 sm:col-span-3',
                        (props.money && item.value === 0) || (!props.money && item.quantity === 0) ? 'font-normal text-muted-color' : '',
                    )"
                >
                    {{ getItemValue(item) }}
                </div>
                <UiAppTrendIndicator :value="getTrendValue(item)" class="col-span-2 sm:col-span-3 text-end justify-end" :money="props.money"/>
            </div>
        </div>
    </div>
</template>
