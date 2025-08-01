<script setup lang="ts">
import { useToast } from "primevue/usetoast";
import { clearOldOrders } from "~/composables/useIndexDB";

const toast = useToast();
const toastPassthrough = {
    root: {
        class: "w-auto",
    },
    message: {
        class: "rounded-xl",
    },
    messageContent: {
        class: "items-center",
    },
    closeButton: {
        class: "m-0 ml-4 right-0",
    },
    summary: {
        class: "text-sm uppercase font-semibold",
    },
};
const showSuccess = () => {
    toast.add({
        severity: "success",
        summary: "Cache cleared",
        life: 3000,
    });
};
const showError = () => {
    toast.add({
        severity: "error",
        summary: "Failed to clear cache",
        life: 3000,
    });
};

const clearCache = async () => {
    try {
        await clearOldOrders();
        showSuccess();
    } catch (error) {
        showError();
        console.error(error);
    }
};

const colorMode = useColorMode();

const selectedMode = ref(colorMode.preference);
const options = [
    { label: "System", value: "system", icon: "computer-outline" },
    { label: "Light", value: "light", icon: "sunny-outline" },
    { label: "Dark", value: "dark", icon: "bedtime-outline" },
];

// Sync select button to color mode
watch(selectedMode, (val) => {
    colorMode.preference = val;
});

// Sync color mode to select button (initial + system changes)
watch(
    () => colorMode.preference,
    (val) => {
        if (val !== selectedMode.value) selectedMode.value = val;
    },
    { immediate: true },
);
</script>

<template>
    <Toast position="bottom-center" :pt="toastPassthrough" />
    <div class="flex flex-col gap-8">
        <div>
            <span
                class="block text-xs font-semibold uppercase text-muted-color mb-2"
                >Color Mode
            </span>
            <SelectButton
                v-model="selectedMode"
                :options="options"
                optionLabel="label"
                optionValue="value"
                size="small"
                :allow-empty="false"
            >
                <template #option="slotProps">
                    <Icon :name="`material-symbols:${slotProps.option.icon}`" />
                    {{ slotProps.option.label }}
                </template>
            </SelectButton>
        </div>
        <div>
            <span
                class="block text-xs font-semibold uppercase text-muted-color mb-1"
                >Cache
            </span>
            <span
                class="block md:max-w-64 text-xs font-normal text-muted-color mb-3"
                >Clear cache to remove saved sales data and force a refetch on
                the next page reload.
            </span>
            <Button
                severity="danger"
                label="Clear Cache"
                size="small"
                fluid
                @click="clearCache"
            >
                <template #icon>
                    <Icon
                        name="material-symbols:delete-outline"
                        class="text-lg"
                    />
                </template>
            </Button>
        </div>
    </div>
</template>
