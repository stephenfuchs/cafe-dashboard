<template>
    <div class="mb-6 flex justify-between">
        <div>
            <div class="text-sm font-semibold uppercase text-muted-color">
                West Ridge Café
            </div>
            <h1 class="text-3xl font-bold text-color">{{ page }}</h1>
        </div>
        <div class="flex items-center gap-4">
            <UiDateRange />
            <UiDateRangeCompare />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    page: String,
});
</script>
