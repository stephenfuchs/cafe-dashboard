<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps({
    stat: {
        type: Boolean,
        default: false,
    },
    noTitle: {
        type: Boolean,
        default: false,
    },
    full: {
        type: Boolean,
        default: false,
    },
});
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
                    !stat && 'mb-4 flex h-9 items-center justify-between',
                ])
            "
        >
            <div class="text-sm font-bold uppercase text-color">
                <slot name="title"></slot>
            </div>
            <slot name="options"></slot>
        </div>
        <slot></slot>
    </div>
</template>
