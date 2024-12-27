<template>
    <SelectButton v-model="value" :options="options" />
</template>

<script setup>
    const props = defineProps({
        page: String,
    });

    const value = ref("Week Prior");
    const options = ref(["Week Prior", "Month Prior", "Year Prior"]);
</script>
