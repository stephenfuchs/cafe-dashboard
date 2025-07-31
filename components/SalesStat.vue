<script setup lang="ts">
const props = defineProps<{
    title: string;
    value: number | string;
    percent: number;
    vsValue: number | string;
    isLoading: boolean;
    prevIsLoading: boolean;
}>();

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
                <template v-if="isLoading"
                    ><Skeleton width="9rem" height="2rem" class="my-1"
                /></template>
                <template v-else>{{ value }}</template>

                <div class="text-sm font-normal">
                    vs prior {{ compareValue }}:
                    <span class="font-semibold">
                        <template v-if="prevIsLoading">
                            <Skeleton
                                width="2rem"
                                height="1.125rem"
                                class="inline-block align-middle"
                            />
                        </template>
                        <template v-else>{{ vsValue }}</template>
                    </span>
                </div>
            </div>
            <UiAppBadgeStatus
                icon
                :value="percent"
                :trendValue="percent"
                percentage
                class="sm:max-2xl:self-start self-center"
                :isLoading="isLoading || prevIsLoading"
            />
        </div>
    </UiAppCard>
</template>
