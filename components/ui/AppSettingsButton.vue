<script setup lang="ts">
import { clearOldOrders } from "~/composables/useIndexDB";

const clearCache = async () => {
    try {
        await clearOldOrders();
        alert("Cache cleared!");
    } catch (error) {
        alert("Failed to clear cache");
        console.error(error);
    }
};

const settings = ref();

const toggle = (event: any) => {
    settings.value.toggle(event);
};
</script>

<template>
    <Button type="button" @click="toggle" variant="link">
        <template #icon>
            <i
                class="material-symbols-outlined text-2xl leading-none text-primary-500"
                >settings</i
            >
        </template>
    </Button>

    <Popover ref="settings">
        <span class="block text-xs font-bold uppercase text-muted-color"
            >Settings
        </span>
        <Button
            variant="link"
            severity="secondary"
            size="small"
            label="Clear Cache"
            @click="clearCache"
        >
            <template #icon>
                <i
                    class="material-symbols-outlined text-2xl leading-none text-primary-500"
                    >settings</i
                >
            </template>
        </Button>
    </Popover>
</template>
