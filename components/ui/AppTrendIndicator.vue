<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps<{
    value: number;
    money?: boolean;
    percentage?: boolean;
    isLoading?: boolean;
    prevIsLoading?: boolean;
}>();

const iconName = computed(() => {
    if (props.value > 0) return "trending-up";
    if (props.value < 0) return "trending-down";
    return "trending-flat";
});

const trendColor = computed(() => {
    if (props.value > 0) return "text-green-500";
    if (props.value < 0) return "text-red-500";
    return "text-muted-color";
});
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
        :class="trendColor"
    >
        <Icon
            :name="`material-symbols:${iconName}`"
            :key="iconName"
            class="text-end"
        />
        <div v-if="money">{{ formatCurrency(Math.abs(value)) }}</div>
        <div v-else-if="percentage">{{ Math.abs(value).toFixed(2) }}%</div>
        <div v-else>{{ Math.abs(value) }}</div>
    </div>
</template>
