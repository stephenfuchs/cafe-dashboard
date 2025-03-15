<script setup lang="ts">
const props = defineProps({
    to: {
        type: String,
        required: true,
    },
    tooltip: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
});

const buttonPassthrough = {
    root: {
        class: "hover:bg-transparent gap-0 flex-1",
    },
    label: {
        class: "md:hidden text-xs font-semibold",
    },
};

const route = useRoute();
const { to } = toRefs(props);

const getSeverity = computed(() =>
    route.path === to.value ? "primary" : "secondary",
);
</script>

<template>
    <Button
        variant="text"
        :severity="getSeverity"
        v-tooltip="tooltip"
        :label="label"
        iconPos="top"
        as="router-link"
        :to="to"
        :pt="buttonPassthrough"
    >
        <template #icon>
            <i class="material-symbols-rounded text-2xl">{{ icon }}</i>
        </template>
    </Button>
</template>
