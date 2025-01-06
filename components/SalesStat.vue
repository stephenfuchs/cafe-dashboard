<script setup>
const props = defineProps({
    title: String,
    value: Number | String,
    percent: Number,
    vsValue: Number | String,
});

const { compareValue } = useComparison();
</script>

<template>
    <UiAppCard stat>
        <template #title>
            {{ title }}
        </template>
        <div
            class="flex flex-col flex-wrap justify-between max-xl:gap-5 xl:flex-row xl:items-center"
        >
            <div class="text-4xl font-bold text-color">
                {{ value }}
            </div>
            <div
                :class="
                    percent < 0
                        ? `bg-orange-100 text-orange-700`
                        : `bg-green-100 text-green-700`
                "
                class="flex items-center gap-1 self-start rounded px-2 py-1 text-sm font-bold"
            >
                <div class="material-symbols-outlined">
                    {{ percent < 0 ? "trending_down" : "trending_up" }}
                </div>
                <div>
                    {{
                        (percent < 0 ? Math.abs(percent) : percent).toFixed(2)
                    }}%
                </div>
            </div>
        </div>
        <div class="mt-1 text-sm font-normal">
            vs last {{ compareValue }}:
            <span class="font-semibold">{{ vsValue }}</span>
        </div>
    </UiAppCard>
</template>
