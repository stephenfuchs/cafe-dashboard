<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps<{
    value: number;
    money?: boolean;
    percentage?: boolean;
    isLoading?: boolean;
    prevIsLoading?: boolean;
}>();
</script>

<template>
    <Skeleton
        v-if="isLoading || prevIsLoading"
        width="4.5rem"
        height="1.5rem"
    />
    <div
        v-else
        class="flex items-center gap-1 font-semibold text-base"
        :class="{
            'text-green-500': value > 0,
            'text-red-500': value < 0,
            'text-muted-color': value === 0,
        }"
    >
        <Icon
            :name="`material-symbols:${value > 0 ? 'trending-up' : value < 0 ? 'trending-down' : 'trending-flat'}`"
            class="text-end"
        />
        <div v-if="money">{{ formatCurrency(Math.abs(value)) }}</div>
        <div v-else-if="percentage">{{ Math.abs(value).toFixed(2) }}%</div>
        <div v-else>{{ Math.abs(value) }}</div>
    </div>
</template>
