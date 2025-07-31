<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = withDefaults(
    defineProps<{
        stat?: boolean;
        chart?: boolean;
        noTitle?: boolean;
        full?: boolean;
        isLoading?: boolean;
    }>(),
    {
        stat: false,
        chart: false,
        noTitle: false,
        full: false,
        isLoading: false,
    },
);
</script>

<template>
    <div
        :class="
            twMerge([
                'rounded-lg bg-surface-0 p-4 dark:bg-surface-800',
                full && 'h-full',
            ])
        "
    >
        <div
            v-if="!noTitle"
            :class="
                twMerge([
                    'mb-2',
                    !stat && 'mb-4 flex h-9 items-center justify-between gap-4',
                ])
            "
        >
            <div class="text-sm font-bold uppercase text-color flex-shrink-0">
                <slot name="title"></slot>
            </div>
            <div
                v-if="chart"
                class="flex-1 overflow-x-auto whitespace-nowrap"
                id="legend-container"
            >
                <slot name="legend"></slot>
            </div>
            <slot name="options"></slot>
        </div>
        <slot></slot>
    </div>
</template>
