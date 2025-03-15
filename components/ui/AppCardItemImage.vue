<script setup lang="ts">
import { twMerge } from "tailwind-merge";

const props = defineProps({
	icon: {
		type: String,
	},
	large: {
		type: Boolean,
		default: false,
	},
	src: {
		type: String,
	},
	alt: {
		type: String,
	}
})
</script>

<template>
	<img
		v-if="!icon"
		:src="src"
		:alt="`Image of ` + alt"
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
		<span
			class="material-symbols-outlined text-2xl text-primary"
		>
			{{ icon }}
		</span>
	</div>
</template>