<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

const props = defineProps({
	value: {
		type: Number,
		required: true,
	},
	money: {
		type: Boolean,
		default: false,
		required: false,
	},
	percentage: {
		type: Boolean,
		default: false,
		required: false,
	}
})
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
				value > 0 ? "trending_up" : 
				value < 0 ? "trending_down" : 
				"trending_flat" 
			}}
		</div>
		<div v-if="money">{{ formatCurrency(Math.abs(props.value)) }}</div>
		<div v-else-if="percentage">{{ (Math.abs(props.value)).toFixed(2) }}%</div>
		<div v-else>{{ Math.abs(props.value) }}</div>
	</div>
</template>