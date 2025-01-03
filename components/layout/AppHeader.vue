<template>
    <div class="mb-6 flex flex-col justify-between gap-4 lg:flex-row">
        <div>
            <span class="text-sm font-semibold uppercase text-muted-color">
                West Ridge Café
            </span>
            <h1 class="text-3xl font-bold text-color">{{ page }}</h1>
        </div>
        <div
            class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center"
        >
            <DateRange />
            <!-- <DateRangeCompare /> -->
        </div>
    </div>
</template>

<script setup>
defineProps({
    page: String,
});
</script>
