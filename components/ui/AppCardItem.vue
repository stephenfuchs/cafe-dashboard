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

const props = defineProps<{
    item: Item;
    type: "item" | "discount";
}>();

const isVisible = ref(false); // Keeps track of visibility

const toggleVisibility = (): void => {
    isVisible.value = !isVisible.value; // Toggles visibility
};

const hasModifiers = computed(() => {
    return Object.keys(props.item?.modifiers ?? {}).length > 0;
});

const trendIcon = computed(() => {
    return props.item?.currentSortOrder < props.item?.previousSortOrder ||
        props.item?.previousSortOrder === null ||
        props.item?.previousSortOrder === 0
        ? "arrow-upward"
        : props.item?.currentSortOrder > props.item?.previousSortOrder
          ? "arrow-downward"
          : "horizontal-rule";
});
</script>

<template>
    <UiAppCard noTitle>
        <div class="flex items-center gap-4">
            <div
                class="flex flex-shrink-0 items-center justify-center max-md:hidden"
            >
                <UiAppCardItemImage
                    v-if="type === 'item'"
                    large
                    :src="item?.imgItem ?? ''"
                    :alt="item?.name ?? 'unknown item'"
                />
                <UiAppCardItemImage
                    v-if="type === 'discount'"
                    :icon="item?.imgDiscount ?? ''"
                />
            </div>
            <div
                class="grid grid-cols-6 md:grid-cols-12 items-center self-stretch gap-4 w-full"
            >
                <div
                    class="col-span-5 md:max-xl:col-span-4 truncate text-lg font-bold uppercase text-color order-1 flex gap-4 items-center"
                >
                    <div class="md:hidden">
                        <UiAppCardItemImage
                            v-if="type === 'item'"
                            large
                            :src="item?.imgItem ?? ''"
                            :alt="item?.name ?? 'unknown item'"
                        />
                        <UiAppCardItemImage
                            v-if="type === 'discount'"
                            :icon="item?.imgDiscount ?? ''"
                        />
                    </div>
                    <div class="flex flex-col">
                        <span class="block text-xs font-medium text-muted-color"
                            >{{ type === "item" ? item?.category : "Discount" }}
                        </span>
                        {{ item?.name ?? "unknown item" }}

                        <div
                            v-if="type === 'item'"
                            class="flex gap-1 items-center text-xs font-light text-muted-color"
                        >
                            <Icon
                                :name="`material-symbols:${trendIcon}`"
                                :key="trendIcon"
                                class="font-bold"
                                :class="{
                                    'text-green-500':
                                        item?.previousSortOrder === 0 ||
                                        item?.previousSortOrder === null ||
                                        item?.currentSortOrder <
                                            item?.previousSortOrder,
                                    'text-red-500':
                                        item?.currentSortOrder >
                                        (item?.previousSortOrder || Infinity),
                                    'text-muted-color':
                                        item?.currentSortOrder ===
                                        item?.previousSortOrder,
                                }"
                            />
                            {{ item?.currentSortOrder }} current |
                            {{
                                item?.previousSortOrder !== 0
                                    ? item?.previousSortOrder
                                    : "--"
                            }}
                            previous
                        </div>
                    </div>
                </div>
                <div class="max-md:ps-2 col-span-3 order-3 md:order-2">
                    <span
                        class="text-xs font-medium uppercase text-muted-color"
                        >{{ type === "item" ? "Quantity" : "Claims" }}</span
                    >
                    <div class="flex items-center gap-4">
                        <div class="text-lg font-bold uppercase text-color">
                            {{ item?.quantity ?? 0 }}
                        </div>
                        <UiAppTrendIndicator :value="item?.trendQuantity" />
                    </div>
                </div>
                <div
                    class="max-md:pe-2 flex col-span-3 md:max-xl:col-span-4 justify-between gap-4 order-4 md:order-3"
                >
                    <div>
                        <span
                            class="text-xs font-medium uppercase text-muted-color"
                            >{{
                                type === "item" ? "Gross Sales" : "Value"
                            }}</span
                        >
                        <div class="flex items-center gap-4">
                            <div class="text-lg font-bold uppercase text-color">
                                {{ formatCurrency(item?.value ?? 0) }}
                            </div>
                            <UiAppTrendIndicator
                                :value="item?.trendValue"
                                money
                            />
                        </div>
                    </div>
                </div>
                <Button
                    severity="secondary"
                    size="small"
                    @click="toggleVisibility"
                    class="w-auto self-center place-self-end col-span-1 order-2 md:order-4 text-xl"
                    :class="{ invisible: type === 'item' && !hasModifiers }"
                >
                    <template #icon>
                        <Icon name="material-symbols:style-outline" />
                    </template>
                </Button>
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
