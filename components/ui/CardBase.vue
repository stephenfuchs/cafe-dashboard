<template>
    <div class="h-full rounded-md bg-surface-50 p-4 dark:bg-surface-800">
        <div
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

<script setup>
import { twMerge } from "tailwind-merge";

const props = defineProps({
    stat: {
        type: Boolean,
        default: false,
    },
});
</script>
