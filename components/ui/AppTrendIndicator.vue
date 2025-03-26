<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps<{
    value: number;
    money?: boolean;
    percentage?: boolean;
}>();
</script>

<template>
    <div
        class="flex items-center gap-1 font-semibold text-base"
        :class="{
            'text-green-500': value > 0,
            'text-red-500': value < 0,
            'text-muted-color': value === 0,
        }"
    >
        <div class="material-symbols-outlined text-end">
            {{
                value > 0
                    ? "trending_up"
                    : value < 0
                      ? "trending_down"
                      : "trending_flat"
            }}
        </div>
        <div v-if="money">{{ formatCurrency(Math.abs(value)) }}</div>
        <div v-else-if="percentage">{{ Math.abs(value).toFixed(2) }}%</div>
        <div v-else>{{ Math.abs(value) }}</div>
    </div>
</template>
