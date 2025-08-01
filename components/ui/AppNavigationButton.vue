<script setup lang="ts">
const props = defineProps<{
    to: string;
    tooltip: string;
    label: string;
    icon: string;
}>();

const buttonPassthrough = {
    root: {
        class: "hover:bg-transparent gap-0 max-md:flex-1 md:flex-none",
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
            <Icon :name="`material-symbols:${icon}`" class="text-2xl" />
        </template>
    </Button>
</template>
