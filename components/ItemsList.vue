<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();
const exclude = [
    "coffee pot",
    "coffee donation",
    "card ministry donation",
    "donation (general giving)",
    "next gen events",
    "nica angels donation",
    "ukraine donations",
];

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useItemSales(orders, previousOrders, exclude);

const categoryFilter = ref("all items");
const categoryOptions = ["all items", "baked goods", "barista", "drink cooler"];

const filteredSalesList = computed(() => {
    let filteredList = salesList.value.filter((item) => item.quantity > 0);

    if (categoryFilter.value !== "all items") {
        filteredList = filteredList.filter(
            (item) => item.category === categoryFilter.value,
        );
    }

    return filteredList;
});

const sortOptions = ref([
    { label: "Quantity", value: "!quantity" },
    { label: "Item", value: "name" },
]);
const sortKey = ref(sortOptions.value[0]);
const sortOrder = ref(-1);
const sortField = ref("quantity");

const onSortChange = (event) => {
    const value = event.value.value;
    const sortValue = event.value;

    if (value.indexOf("!") === 0) {
        sortOrder.value = -1;
        sortField.value = value.substring(1, value.length);
        sortKey.value = sortValue;
    } else {
        sortOrder.value = 1;
        sortField.value = value;
        sortKey.value = sortValue;
    }
};

const dataviewPassthrough = {
    header: {
        class: "border-none p-0 mb-6",
    },
};
</script>

<template>
    <DataView
        :value="filteredSalesList"
        :sortOrder="sortOrder"
        :sortField="sortField"
        :pt="dataviewPassthrough"
    >
        <template #header>
            <UiAppCard noTitle class="flex justify-between">
                <Select
                    size="small"
                    v-model="sortKey"
                    :options="sortOptions"
                    optionLabel="label"
                    @change="onSortChange($event)"
                />
                <UiAppCardSelector
                    :options="categoryOptions"
                    v-model:selected="categoryFilter"
                />
            </UiAppCard>
        </template>
        <template #list="slotProps">
            <div class="flex flex-col gap-6">
                <UiAppCard
                    noTitle
                    v-for="(item, index) in slotProps.items"
                    :key="index"
                >
                    <div
                        class="grid grid-rows-2 items-center gap-4 xl:grid-cols-2 xl:grid-rows-1"
                    >
                        <div class="flex items-center gap-4">
                            <img
                                :src="item.imgItem"
                                :alt="`Image of ` + item.name"
                                class="w-16 rounded bg-neutral-100 lg:w-20 dark:bg-neutral-700"
                            />
                            <h3
                                class="flex-1 truncate text-lg font-bold uppercase text-color"
                            >
                                <span
                                    class="block text-xs font-medium text-muted-color"
                                    >{{ item.category }}</span
                                >

                                {{ item.name }}
                                <span
                                    class="block text-xs font-light text-muted-color"
                                    ><span
                                        class="material-symbols-outlined font-bold"
                                        :class="{
                                            'text-green-500':
                                                item.previousSortOrder === 0 ||
                                                item.previousSortOrder ===
                                                    null ||
                                                item.currentSortOrder <
                                                    item.previousSortOrder,
                                            'text-orange-500':
                                                item.currentSortOrder >
                                                (item.previousSortOrder ||
                                                    Infinity),
                                            'text-muted-color':
                                                item.currentSortOrder ===
                                                item.previousSortOrder,
                                        }"
                                        >{{
                                            item.currentSortOrder <
                                                item.previousSortOrder ||
                                            item.previousSortOrder === null ||
                                            item.previousSortOrder === 0
                                                ? "arrow_upward"
                                                : item.currentSortOrder >
                                                    item.previousSortOrder
                                                  ? "arrow_downward"
                                                  : "horizontal_rule"
                                        }}</span
                                    >
                                    {{ item.currentSortOrder }} current |
                                    {{
                                        item.previousSortOrder !== 0
                                            ? item.previousSortOrder
                                            : "--"
                                    }}
                                    previous</span
                                >
                            </h3>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="flex-1">
                                <span
                                    class="text-xs font-medium uppercase text-muted-color"
                                    >Quantity</span
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        class="text-lg font-bold uppercase text-color"
                                    >
                                        {{ item.quantity }}
                                    </div>
                                    <div
                                        class="flex gap-1 text-base font-semibold"
                                        :class="{
                                            'text-green-500':
                                                item.trendQuantity >= 0,
                                            'text-orange-500':
                                                item.trendQuantity < 0,
                                            'text-muted-color':
                                                item.trendQuantity === 0,
                                        }"
                                    >
                                        <div
                                            class="material-symbols-outlined flex-1 text-end"
                                        >
                                            {{
                                                item.trendQuantity > 0
                                                    ? "trending_up"
                                                    : item.trendQuantity < 0
                                                      ? "trending_down"
                                                      : "trending_flat"
                                            }}
                                        </div>
                                        <div class="flex-1">
                                            {{
                                                item.trendQuantity < 0
                                                    ? Math.abs(
                                                          item.trendQuantity,
                                                      )
                                                    : item.trendQuantity
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex-1">
                                <span
                                    class="text-xs font-medium uppercase text-muted-color"
                                    >Gross Sales</span
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        class="text-lg font-bold uppercase text-color"
                                    >
                                        {{ formatCurrency(item.grossSales) }}
                                    </div>
                                    <div
                                        class="flex gap-1 text-base font-semibold"
                                        :class="{
                                            'text-green-500':
                                                item.trendGrossSales >= 0,
                                            'text-orange-500':
                                                item.trendGrossSales < 0,
                                            'text-muted-color':
                                                item.trendGrossSales === 0,
                                        }"
                                    >
                                        <div
                                            class="material-symbols-outlined flex-1 text-end"
                                        >
                                            {{
                                                item.trendGrossSales > 0
                                                    ? "trending_up"
                                                    : item.trendGrossSales < 0
                                                      ? "trending_down"
                                                      : "trending_flat"
                                            }}
                                        </div>
                                        <div class="flex-1">
                                            {{
                                                item.trendGrossSales < 0
                                                    ? formatCurrency(
                                                          Math.abs(
                                                              item.trendGrossSales,
                                                          ),
                                                      )
                                                    : formatCurrency(
                                                          item.trendGrossSales,
                                                      )
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button severity="secondary" size="small">
                                <template #icon>
                                    <i class="material-symbols-outlined text-xl"
                                        >style</i
                                    >
                                </template>
                            </Button>
                        </div>
                    </div>
                </UiAppCard>
            </div>
            <!-- <div class="grid gap-6 lg:grid-cols-2">
                <UiAppCard
                    stat
                    v-for="(item, index) in slotProps.items"
                    :key="index"
                >
                    <div class="grid grid-cols-4 items-center gap-4">
                        <div class="col-span-1 rounded bg-neutral-100">
                            <img
                                :src="item.imgItem"
                                :alt="`Image of ` + item.name"
                            />
                        </div>
                        <div class="col-span-3 flex flex-col">
                            <div>
                                <span
                                    class="text-xs font-medium uppercase text-muted-color"
                                    >{{ item.category }}</span
                                >
                                <div
                                    class="text-lg font-bold uppercase text-color"
                                >
                                    {{ item.name }}
                                </div>
                            </div>
                        </div>
                        <div class="col-span-4 grid grid-cols-2">
                            <div>
                                <span
                                    class="text-xs font-medium uppercase text-muted-color"
                                    >Quantity Sold</span
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        class="text-lg font-bold uppercase text-color"
                                    >
                                        {{ item.quantity }}
                                    </div>
                                    <div
                                        class="flex gap-1 text-base font-semibold"
                                        :class="{
                                            'text-green-500':
                                                item.trendQuantity >= 0,
                                            'text-orange-500':
                                                item.trendQuantity < 0,
                                            'text-muted-color':
                                                item.trendQuantity === 0,
                                        }"
                                    >
                                        <div
                                            class="material-symbols-outlined flex-1 text-end"
                                        >
                                            {{
                                                item.trendQuantity > 0
                                                    ? "trending_up"
                                                    : item.trendQuantity < 0
                                                      ? "trending_down"
                                                      : "trending_flat"
                                            }}
                                        </div>
                                        <div class="flex-1">
                                            {{
                                                item.trendQuantity < 0
                                                    ? Math.abs(
                                                          item.trendQuantity,
                                                      )
                                                    : item.trendQuantity
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span
                                    class="text-xs font-medium uppercase text-muted-color"
                                    >Gross Sales</span
                                >
                                <div class="flex items-center gap-4">
                                    <div
                                        class="text-lg font-bold uppercase text-color"
                                    >
                                        {{ formatCurrency(item.grossSales) }}
                                    </div>
                                    <div
                                        class="flex gap-1 text-base font-semibold"
                                        :class="{
                                            'text-green-500':
                                                item.trendGrossSales >= 0,
                                            'text-orange-500':
                                                item.trendGrossSales < 0,
                                            'text-muted-color':
                                                item.trendGrossSales === 0,
                                        }"
                                    >
                                        <div
                                            class="material-symbols-outlined flex-1 text-end"
                                        >
                                            {{
                                                item.trendGrossSales > 0
                                                    ? "trending_up"
                                                    : item.trendGrossSales < 0
                                                      ? "trending_down"
                                                      : "trending_flat"
                                            }}
                                        </div>
                                        <div class="flex-1">
                                            {{
                                                item.trendGrossSales < 0
                                                    ? formatCurrency(
                                                          Math.abs(
                                                              item.trendGrossSales,
                                                          ),
                                                      )
                                                    : formatCurrency(
                                                          item.trendGrossSales,
                                                      )
                                            }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </UiAppCard>
            </div> -->
        </template>
    </DataView>
</template>
