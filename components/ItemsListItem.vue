<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";
import { calcChange } from "~/server/utils/calcChange";
interface Modifier {
    selection: string;
    count: number;
    trend: number;
}

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});

const isVisible = ref(false); // Keeps track of visibility

const toggleVisibility = () => {
    isVisible.value = !isVisible.value; // Toggles visibility
};

const hasModifiers = computed(() => {
    return Object.keys(props.item?.modifiers ?? {}).length > 0;
});

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
    // pcCloseButton: {
    //     root: {
    //         class: "size-4",
    //     },
    // },
    root: {
        class: "border-none",
    },
};
</script>

<template>
    <UiAppCard noTitle>
        <div
            class="grid grid-rows-2 items-center gap-4 md:grid-cols-2 md:grid-rows-1"
        >
            <div class="flex items-center gap-4">
                <img
                    :src="item?.imgItem"
                    :alt="`Image of ` + item?.name"
                    class="w-16 rounded-full bg-neutral-100 lg:w-20 dark:bg-neutral-700"
                />
                <div class="flex flex-1 justify-between truncate">
                    <h3
                        class="flex-1 truncate text-lg font-bold uppercase text-color"
                    >
                        <span
                            class="block text-xs font-medium text-muted-color"
                            >{{ item?.category }}</span
                        >

                        {{ item?.name }}
                        <span class="block text-xs font-light text-muted-color"
                            ><span
                                class="material-symbols-outlined font-bold"
                                :class="{
                                    'text-green-500':
                                        item?.previousSortOrder === 0 ||
                                        item?.previousSortOrder === null ||
                                        item?.currentSortOrder <
                                            item?.previousSortOrder,
                                    'text-orange-500':
                                        item?.currentSortOrder >
                                        (item?.previousSortOrder || Infinity),
                                    'text-muted-color':
                                        item?.currentSortOrder ===
                                        item?.previousSortOrder,
                                }"
                                >{{
                                    item?.currentSortOrder <
                                        item?.previousSortOrder ||
                                    item?.previousSortOrder === null ||
                                    item?.previousSortOrder === 0
                                        ? "arrow_upward"
                                        : item?.currentSortOrder >
                                            item?.previousSortOrder
                                          ? "arrow_downward"
                                          : "horizontal_rule"
                                }}</span
                            >
                            {{ item?.currentSortOrder }} current |
                            {{
                                item?.previousSortOrder !== 0
                                    ? item?.previousSortOrder
                                    : "--"
                            }}
                            previous</span
                        >
                    </h3>
                    <Button
                        severity="secondary"
                        size="small"
                        @click="toggleVisibility"
                        class="self-center md:hidden"
                        :class="{ hidden: !hasModifiers }"
                    >
                        <template #icon>
                            <i class="material-symbols-outlined text-xl"
                                >style</i
                            >
                        </template>
                    </Button>
                </div>
            </div>
            <div class="flex items-center gap-4 max-md:px-2">
                <div class="flex-1 max-md:w-1/2">
                    <span class="text-xs font-medium uppercase text-muted-color"
                        >Quantity</span
                    >
                    <div class="flex items-center gap-4">
                        <div class="text-lg font-bold uppercase text-color">
                            {{ item?.quantity }}
                        </div>
                        <div
                            class="flex gap-1 text-base font-semibold"
                            :class="{
                                'text-green-500': item?.trendQuantity >= 0,
                                'text-orange-500': item?.trendQuantity < 0,
                                'text-muted-color': item?.trendQuantity === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    item?.trendQuantity > 0
                                        ? "trending_up"
                                        : item?.trendQuantity < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    item?.trendQuantity < 0
                                        ? Math.abs(item?.trendQuantity)
                                        : item?.trendQuantity
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-1 justify-between gap-4 max-md:w-1/2">
                    <div>
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >Gross Sales</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ formatCurrency(item?.grossSales) }}
                            </div>
                            <div
                                class="flex gap-1 text-base font-semibold"
                                :class="{
                                    'text-green-500':
                                        item?.trendGrossSales >= 0,
                                    'text-orange-500':
                                        item?.trendGrossSales < 0,
                                    'text-muted-color':
                                        item?.trendGrossSales === 0,
                                }"
                            >
                                <div
                                    class="material-symbols-outlined flex-1 text-end"
                                >
                                    {{
                                        item?.trendGrossSales > 0
                                            ? "trending_up"
                                            : item?.trendGrossSales < 0
                                              ? "trending_down"
                                              : "trending_flat"
                                    }}
                                </div>
                                <div class="flex-1">
                                    {{
                                        item?.trendGrossSales < 0
                                            ? formatCurrency(
                                                  Math.abs(
                                                      item?.trendGrossSales,
                                                  ),
                                              )
                                            : formatCurrency(
                                                  item?.trendGrossSales,
                                              )
                                    }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button
                        severity="secondary"
                        size="small"
                        @click="toggleVisibility"
                        class="self-center max-md:hidden"
                        :class="{ invisible: !hasModifiers }"
                    >
                        <template #icon>
                            <i class="material-symbols-outlined text-xl"
                                >style</i
                            >
                        </template>
                    </Button>
                </div>
            </div>
        </div>
        <Drawer
            v-model:visible="isVisible"
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
                    <span class="font-bold text-primary">{{
                        item?.quantity
                    }}</span>
                    {{ item?.name
                    }}<span v-if="item?.quantity > 1">'s</span> sold with
                    <span class="font-bold text-primary">{{
                        modifierSetCount
                    }}</span>
                    unique combinations &
                    <span class="font-bold text-primary">{{
                        formatCurrency(item?.grossSales)
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
                                (a: Modifier, b: Modifier) => b.count - a.count,
                            )"
                        >
                            <template #title
                                ><div class="flex items-center justify-between">
                                    <div>Modifier Set {{ index + 1 }}</div>
                                    <div
                                        class="text-xs capitalize text-primary"
                                    >
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
                                        v-for="modifier in [
                                            ...modifierGroup,
                                        ].sort((a, b) =>
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
                                            <div
                                                class="flex-1 truncate capitalize"
                                            >
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
                                            <div
                                                class="material-symbols-outlined"
                                            >
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
    </UiAppCard>
</template>
