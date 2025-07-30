<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const desktop = breakpoints.greaterOrEqual("md");

const buttonPassthrough = {
    root: {
        class: "hover:bg-transparent max-md:flex-1 gap-0 md:mt-auto ",
    },
    label: {
        class: "md:hidden text-xs font-semibold",
    },
};

const popoverPassthrough = {
    content: {
        class: "p-4 pb-5",
    },
};

const drawerPassthrough = {
    root: {
        class: "h-auto",
    },
};

const settings = ref();

const toggle = (event: any) => {
    settings.value.toggle(event);
};

const visible = ref(false);
</script>

<template>
    <Button
        type="button"
        @click="desktop === true ? toggle($event) : (visible = true)"
        variant="text"
        iconPos="top"
        label="Settings"
        v-tooltip="'Settings'"
        severity="secondary"
        :pt="buttonPassthrough"
    >
        <template #icon>
            <i class="material-symbols-outlined text-2xl">settings</i>
        </template>
    </Button>
    <Drawer
        v-model:visible="visible"
        header="Settings"
        position="bottom"
        :pt="drawerPassthrough"
    >
        <UiAppSettingsButtonContent />
    </Drawer>

    <Popover ref="settings" :pt="popoverPassthrough" append-to="self">
        <span class="block text-sm font-bold uppercase text-muted-color mb-4"
            >Settings
        </span>
        <UiAppSettingsButtonContent />
    </Popover>
</template>
