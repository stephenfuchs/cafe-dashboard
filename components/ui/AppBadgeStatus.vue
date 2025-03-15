<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";

const props = defineProps({
	value: {
		type: Number,
		required: true,
	},
	trendValue: {
		type: Number,
		required: true,
	},
	icon: {
		type: Boolean,
		required: false,
		default: false,
	},
	percentage: {
		type: Boolean,
		required: false,
		default: false,
	},
	money: {
		type: Boolean,
		required: false,
		default: false,
	},
	trend: {
		type: Boolean,
		required: false,
		default: false,
	},
})

const setIcon = computed(() => {
	if (props.percentage || props.trend && props.icon) {
		return props.trendValue > 0 ? "trending_up" : props.trendValue < 0 ? "trending_down" : "trending_flat"
	} else if (props.money && props.icon) {
		return "money_bag"
	}
	return "";
})
</script>

<template>
	<div
		class="flex items-center gap-1 rounded px-2 py-1 text-sm font-bold flex-shrink-0"
		:class="{
			'bg-green-500 text-white': props.trendValue > 0,
			'bg-red-500 text-white': props.trendValue < 0,
			'bg-neutral-200 text-neutral-700': props.trendValue === 0,
		}"
	>
		<div v-if="icon" class="material-symbols-outlined">
			{{ setIcon }}
		</div>
		<div v-if="money">{{ formatCurrency(props.value || 0) }}</div>
		<div v-else-if="percentage">{{ (props.value < 0 ? Math.abs(props.value) : props.value).toFixed(2) }}%</div>
		<div v-else-if="trend">{{ Math.abs(props.value) }} | {{ Math.abs(props.trendValue).toFixed(2) }}%</div>
		<div v-else>{{ props.value }}</div>
	</div>
</template>