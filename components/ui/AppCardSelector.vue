<script setup>
defineProps({
    options: {
        type: Array,
        required: true,
    },
});
defineEmits(["update:selected"]);
const popoverRef = ref();
const selected = defineModel("selected");

const togglePopover = (event) => {
    popoverRef.value.toggle(event);
};

const selectOption = (option) => {
    selected.value = option;
    popoverRef.value.hide();
};
</script>

<template>
    <SelectButton
        v-model="selected"
        :options="options"
        size="small"
        :allow-empty="false"
        class="max-xl:hidden"
    />
    <Button variant="link" @click="togglePopover" class="w-auto p-0 xl:hidden">
        <template #icon>
            <i
                class="material-symbols-outlined text-2xl leading-none text-primary-500"
                >more_horiz</i
            >
        </template>
    </Button>
    <Popover ref="popoverRef">
        <div class="flex flex-col">
            <ul class="m-0 flex list-none flex-col p-0">
                <li
                    v-for="option in options"
                    :key="option"
                    class="flex cursor-pointer items-center p-2 text-sm capitalize hover:bg-emphasis"
                    :class="{
                        'font-bold text-primary-400': selected === option,
                        'font-semibold text-muted-color': selected !== option,
                    }"
                    @click="selectOption(option)"
                >
                    {{ option }}
                </li>
            </ul>
        </div>
    </Popover>
</template>
