<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { formatCurrency } from "~/server/utils/formatCurrency";

interface SourceItem {
    name?: string;
    category?: string;
    imgItem?: string;
    imgCategory?: string;
    imgCoffee?: string;
    value?: number;
    quantity?: number;
    trendValue?: number;
    trendQuantity?: number;
}

const props = defineProps<{
    source: SourceItem[];
    type: "item" | "category" | "coffee";
    money?: boolean;
}>();

const getImageSrc = (item: SourceItem): string | undefined => {
    if (props.type === "item") return item.imgItem;
    if (props.type === "category") return item.imgCategory;
    if (props.type === "coffee") return item.imgCoffee;
};

const getImageAlt = (item: SourceItem): string => {
    return props.type === "category"
        ? (item.category ?? "unknown category")
        : (item.name ?? "unknown item");
};

const getItemName = (item: SourceItem): string => {
    return props.type === "category"
        ? (item.category ?? "N/A")
        : (item.name ?? "N/A");
};

const getItemValue = (item: SourceItem): string | number => {
    return props.money ? formatCurrency(item.value ?? 0) : (item.quantity ?? 0);
};

const getTrendValue = (item: SourceItem): number => {
    return props.money ? (item.trendValue ?? 0) : (item.trendQuantity ?? 0);
};
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
            <div
                class="flex flex-shrink-0 items-center py-2 group-first:pt-0 group-last:pb-0"
            >
                <UiAppCardItemImage
                    :src="getImageSrc(item)"
                    :alt="getImageAlt(item)"
                />
            </div>
            <div
                class="grid grid-cols-7 sm:grid-cols-12 items-center self-stretch border-b border-surface-200 group-last:border-b-0 dark:border-surface-700 w-full py-2 group-first:pt-0 group-last:pb-0 gap-4 text-base font-semibold text-color"
            >
                <div
                    class="col-span-3 sm:col-span-6 items-center truncate capitalize"
                    :class="{
                        'font-normal text-muted-color': props.money
                            ? item.value === 0
                            : item.quantity === 0,
                    }"
                >
                    {{ getItemName(item) }}
                </div>
                <div
                    :class="
                        twMerge(
                            'text-end col-span-2 sm:col-span-3',
                            (props.money && item.value === 0) ||
                                (!props.money && item.quantity === 0)
                                ? 'font-normal text-muted-color'
                                : '',
                        )
                    "
                >
                    {{ getItemValue(item) }}
                </div>
                <UiAppTrendIndicator
                    :value="getTrendValue(item)"
                    class="col-span-2 sm:col-span-3 text-end justify-end"
                    :money="props.money"
                />
            </div>
        </div>
    </div>
</template>
