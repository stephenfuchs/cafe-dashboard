<script setup lang="ts">
import { formatCurrency } from "~/server/utils/formatCurrency";

interface Modifier {
    selection: string;
    category: string;
    count: number;
    previousCount: number;
    trend: number;
}

interface DiscountItem {
    name: string;
    imgItem: string;
    count: number;
    value: number;
}

interface Item {
    name: string;
    category: string;
    imgItem: string;
    imgDiscount: string;
    quantity: number;
    value: number;
    trendQuantity: number;
    trendValue: number;
    previousSortOrder: number;
    currentSortOrder: number;
    modifiers: Record<string, Modifier[]>;
    modifierSets: { modifiers: Modifier[]; count: number }[];
    items: DiscountItem[];
}

const props = defineProps({
    item: {
        type: Object as () => Item,
        required: true,
    },
    type: {
        type: String,
        required: true,
        validator(value: string) {
            return ["item", "discount"].includes(value);
        },
    },
});

const isVisible = ref(false); // Keeps track of visibility

const toggleVisibility = () => {
    isVisible.value = !isVisible.value; // Toggles visibility
};

const hasModifiers = computed(() => {
    return Object.keys(props.item?.modifiers ?? {}).length > 0;
});
</script>

<template>
    <UiAppCard noTitle>
        <div
            class="grid grid-rows-2 items-center gap-4 md:grid-cols-2 md:grid-rows-1"
        >
            <div class="flex items-center gap-4">
                <img
                    v-if="type === 'item'"
                    :src="item?.imgItem"
                    :alt="`Image of ` + item?.name"
                    class="w-16 rounded-full bg-neutral-100 lg:w-20 dark:bg-neutral-700"
                />
                <div
                    v-if="type === 'discount'"
                    class="flex size-16 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-700"
                >
                    <span
                        class="material-symbols-outlined text-2xl text-primary"
                    >
                        {{ item?.imgDiscount }}
                    </span>
                </div>
                <div class="flex flex-1 justify-between truncate">
                    <h3
                        class="flex-1 truncate text-lg font-bold uppercase text-color"
                    >
                        <span
                            class="block text-xs font-medium text-muted-color"
                            >{{
                                type === "item" ? item?.category : "Discount"
                            }}</span
                        >

                        {{ item?.name }}
                        <span
                            v-if="type === 'item'"
                            class="block text-xs font-light text-muted-color"
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
                        :class="{ invisible: type === 'item' && !hasModifiers }"
                    >
                        <template #icon>
                            <i class="material-symbols-outlined text-xl"
                                >style</i
                            >
                        </template>
                    </Button>
                </div>
            </div>
            <div
                class="flex items-center gap-4"
                :class="{
                    'max-md:px-2': type === 'item',
                    'max-md:px-4': type === 'discount',
                }"
            >
                <div class="flex-1 max-md:w-1/2">
                    <span
                        class="text-xs font-medium uppercase text-muted-color"
                        >{{ type === "item" ? "Quantity" : "Claims" }}</span
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
                            >{{
                                type === "item" ? "Gross Sales" : "Value"
                            }}</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ formatCurrency(item?.value) }}
                            </div>
                            <div
                                class="flex gap-1 text-base font-semibold"
                                :class="{
                                    'text-green-500': item?.trendValue >= 0,
                                    'text-orange-500': item?.trendValue < 0,
                                    'text-muted-color': item?.trendValue === 0,
                                }"
                            >
                                <div
                                    class="material-symbols-outlined flex-1 text-end"
                                >
                                    {{
                                        item?.trendValue > 0
                                            ? "trending_up"
                                            : item?.trendValue < 0
                                              ? "trending_down"
                                              : "trending_flat"
                                    }}
                                </div>
                                <div class="flex-1">
                                    {{
                                        item?.trendValue < 0
                                            ? formatCurrency(
                                                  Math.abs(item?.trendValue),
                                              )
                                            : formatCurrency(item?.trendValue)
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
                        :class="{ invisible: type === 'item' && !hasModifiers }"
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
        <ItemsListDetail
            v-if="type === 'item'"
            :item="item"
            :visible="isVisible"
            @update:visible="isVisible = $event"
        />
        <DiscountsTypeDetail
            v-if="type === 'discount'"
            v-show="isVisible"
            :items="item?.items"
        />
    </UiAppCard>
</template>
