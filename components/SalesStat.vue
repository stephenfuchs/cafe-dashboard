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
            class="flex flex-row sm:max-2xl:flex-col flex-wrap justify-between max-2xl:gap-3 2xl:items-center"
        >
            <div class="text-4xl font-bold text-color">
                {{ value }}
                <div class="text-sm font-normal">
                    vs prior {{ compareValue }}:
                    <span class="font-semibold">{{ vsValue }}</span>
                </div>
            </div>
            <UiAppBadgeStatus
                icon
                :value="percent"
                :trendValue="percent"
                percentage
                class="sm:max-2xl:self-start self-center"
            />
        </div>
    </UiAppCard>
</template>
