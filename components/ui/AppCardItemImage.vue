<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps<{
    icon?: string;
    large?: boolean;
    src?: string;
    alt?: string;
}>();
</script>

<template>
    <img
        v-if="!icon"
        :src="src"
        :alt="alt ? `Image of ${alt}` : 'image'"
        :class="
            twMerge([
                'object-contain bg-neutral-100 rounded-full dark:bg-neutral-700 size-10',
                large && 'size-16 lg:size-20',
            ])
        "
    />
    <div
        v-if="icon"
        class="flex size-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700"
    >
        <Icon
            :name="`material-symbols:${icon}`"
            class="text-2xl text-primary"
        />
    </div>
</template>
