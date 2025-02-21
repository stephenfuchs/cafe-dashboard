<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";

interface Modifier {
    selection: string;
    category: string;
    count: number;
    previousCount: number;
    trend: number;
}

interface Item {
    name: string;
    imgItem: string;
    quantity: number;
    value: number;
    trendQuantity: number;
    trendValue: number;
    modifiers: Record<string, Modifier[]>;
    modifierSets: { modifiers: Modifier[]; count: number }[];
}

const props = defineProps<{
    item: Item;
    visible: boolean;
}>();

const emit = defineEmits(["update:visible"]);

const modifierSetCount = computed(() => {
    return props.item?.modifierSets.length;
});

const topModifiersByCategory = computed(() => {
    const topModifiers: Record<string, { selection: string; count: number }> =
        {};

    Object.entries(props.item?.modifiers || {}).forEach(([category, mods]) => {
        if (Array.isArray(mods) && mods.length) {
            const topModifier = mods
                .slice()
                .sort((a, b) => b.count - a.count)[0];

            topModifiers[category] = {
                selection: topModifier.selection,
                count: topModifier.count,
            };
        }
    });

    return topModifiers;
});

const selected = ref("Count");
const options = ref(["Count", "Trend"]);

const drawerPassthrough = {
    root: {
        class: "border-none",
    },
};
</script>

<template>
    <Drawer
        :visible="visible"
        @update:visible="emit('update:visible', $event)"
        position="full"
        blockScroll
        :pt="drawerPassthrough"
    >
        <template #header>
            <div class="flex items-center gap-2 xl:mx-8">
                <img
                    :src="item?.imgItem"
                    :alt="`Image of ` + item?.name"
                    class="w-10 rounded-full bg-neutral-100 dark:bg-neutral-700"
                />
                <h2
                    class="truncate text-xl font-bold capitalize text-color md:text-3xl"
                >
                    {{ item?.name }} Modifier Sales
                </h2>
            </div>
        </template>
        <div class="mb-6 xl:mx-8">
            <p class="mb-3 text-base font-normal uppercase text-color">
                <span class="font-bold text-primary">{{ item?.quantity }}</span>
                {{ item?.name }}<span v-if="item?.quantity > 1">'s</span> sold
                with
                <span class="font-bold text-primary">{{
                    modifierSetCount
                }}</span>
                unique combinations &
                <span class="font-bold text-primary">{{
                    formatCurrency(item?.value)
                }}</span>
                in gross sales.
            </p>
            <div class="flex flex-wrap gap-x-4 gap-y-2 max-sm:flex-col">
                <p
                    class="text-sm font-normal capitalize text-color"
                    v-for="(modifier, category) in topModifiersByCategory"
                    :key="category"
                >
                    Top {{ category }}:
                    <span class="font-bold uppercase text-primary">{{
                        modifier.selection
                    }}</span>
                </p>
            </div>
        </div>
        <div class="grid grid-cols-5 gap-6 xl:mx-8">
            <div class="col-span-5 max-sm:order-last lg:col-span-3">
                <h3
                    class="mb-2 text-lg font-bold capitalize text-color sm:text-xl"
                >
                    Unique Modifer Sets
                </h3>
                <div
                    class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3"
                >
                    <UiAppCard
                        class="flex flex-col gap-2"
                        stat
                        v-for="(set, index) in item?.modifierSets.sort(
                            (a, b) => b.count - a.count,
                        )"
                    >
                        <template #title
                            ><div class="flex items-center justify-between">
                                <div>Modifier Set {{ index + 1 }}</div>
                                <div class="text-xs capitalize text-primary">
                                    {{ set.count }}
                                    <span v-if="set.count > 1">orders</span>
                                    <span v-else>order</span>
                                </div>
                            </div></template
                        >
                        <div v-for="modifier in set.modifiers">
                            <span
                                class="block text-xs font-bold uppercase text-muted-color"
                                >{{ modifier.category }}:</span
                            >
                            <span
                                class="text-sm font-normal capitalize text-color"
                                >{{ modifier.selection }}</span
                            >
                        </div>
                    </UiAppCard>
                </div>
            </div>
            <div class="col-span-5 lg:col-span-2">
                <h3
                    class="mb-2 text-lg font-bold capitalize text-color sm:text-xl"
                >
                    Modifiers
                </h3>
                <div class="flex flex-col gap-6">
                    <div
                        v-for="(modifierGroup, category) in item?.modifiers"
                        :key="category"
                    >
                        <div class="flex flex-col gap-4">
                            <UiAppCard>
                                <template #title> {{ category }} </template>
                                <template #options>
                                    <UiAppCardSelector
                                        :options="options"
                                        v-model:selected="selected"
                                    />
                                </template>
                                <div
                                    v-if="modifierGroup.length === 0"
                                    class="mt-4 self-center italic"
                                >
                                    No Sales Data Available
                                </div>
                                <div
                                    v-else
                                    v-for="modifier in [...modifierGroup].sort(
                                        (a, b) =>
                                            selected === 'Count'
                                                ? b.count - a.count
                                                : b.count -
                                                  b.previousCount -
                                                  (a.count - a.previousCount),
                                    )"
                                    :key="modifier.selection"
                                    class="box-content flex items-center justify-between gap-4 border-b border-surface-300 py-2 last:border-b-0 last:pb-0 dark:border-surface-700"
                                >
                                    <div
                                        class="flex items-center gap-4 truncate text-base font-semibold text-color"
                                    >
                                        <div
                                            class="h-7 min-w-12 content-center rounded bg-primary-100 px-2 text-center text-base font-bold text-color dark:bg-primary-600"
                                        >
                                            {{ modifier.count }}
                                        </div>
                                        <div class="flex-1 truncate capitalize">
                                            {{ modifier.selection }}
                                        </div>
                                    </div>
                                    <div
                                        class="flex items-center gap-2 self-start rounded px-2 py-1 text-end text-sm font-bold"
                                        :class="
                                            modifier.count -
                                                modifier.previousCount <
                                            0
                                                ? `bg-orange-100 text-orange-700`
                                                : modifier.count -
                                                        modifier.previousCount >
                                                    0
                                                  ? `bg-green-100 text-green-700`
                                                  : `bg-neutral-200 text-muted-color`
                                        "
                                    >
                                        <div class="material-symbols-outlined">
                                            {{
                                                modifier.count -
                                                    modifier.previousCount <
                                                0
                                                    ? "trending_down"
                                                    : modifier.count -
                                                            modifier.previousCount >
                                                        0
                                                      ? "trending_up"
                                                      : "trending_flat"
                                            }}
                                        </div>
                                        <div class="whitespace-nowrap">
                                            {{
                                                Math.abs(
                                                    modifier.count -
                                                        modifier.previousCount,
                                                )
                                            }}
                                            |
                                            {{
                                                Math.abs(
                                                    calcChange(
                                                        modifier.previousCount,
                                                        modifier.count,
                                                    ),
                                                ).toFixed(2)
                                            }}%
                                        </div>
                                    </div>
                                </div>
                            </UiAppCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Drawer>
</template>
