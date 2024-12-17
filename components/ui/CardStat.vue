<template>
    <UiCardBase stat>
        <template #title>
            {{ title }}
        </template>
        <!-- <div class="mb-2 text-sm font-bold uppercase text-color">
            {{ title }}
        </div> -->
        <div class="flex items-center justify-between">
            <div class="text-5xl font-bold text-color">
                {{ money ? "$" : "" }}{{ value }}
            </div>
            <div
                :class="
                    percent < 0
                        ? `bg-orange-100 text-orange-700`
                        : `bg-green-100 text-green-700`
                "
                class="flex items-center justify-between gap-1 rounded px-2 py-1 text-sm font-bold"
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
            vs {{ vs }}:
            <span class="font-semibold"
                >{{ money ? "$" : "" }}{{ vsValue }}</span
            >
        </div>
    </UiCardBase>
</template>

<script setup>
const props = defineProps({
    title: String,
    value: Number,
    percent: Number,
    vs: String,
    vsValue: Number,
    money: {
        type: Boolean,
        deafult: false,
    },
});
</script>
