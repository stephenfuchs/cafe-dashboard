<template>
    <UiCardBase>
        <template #title> Brewed Coffees </template>
        <template #options>
            <Tag severity="success" value="$19.00" />
        </template>
        <!-- <DataTable
            :value="coffees"
            :showHeaders="false"
            :pt="{
                thead: {
                    class: 'text-sm text-color font-semibold',
                },
                bodyRow: {
                    class: '!bg-transparent peer',
                },
            }"
        >
            <Column field="item" header="Item" class="!ps-0">
                <template #body="{ data }">
                    <span class="font-semibold text-color">
                        {{ data.item }}
                    </span>
                </template>
            </Column>
            <Column field="quantity" header="Quantity" class="w-1/5 !px-0">
                <template #body="{ data }">
                    <span class="block text-end font-semibold text-color">
                        {{ data.quantity }}
                    </span>
                </template>
            </Column>
            <Column field="trend" header="Trend" class="w-1/5 !pe-0">
                <template #body="{ data }">
                    <div
                        class="flex items-center gap-1 text-sm font-semibold"
                        :class="{
                            'text-green-500': data.quantity - data.trend > 0,
                            'text-orange-500': data.quantity - data.trend < 0,
                            'text-muted-color':
                                data.quantity - data.trend === 0,
                        }"
                    >
                        <div class="material-symbols-outlined">
                            {{
                                data.quantity - data.trend > 0
                                    ? "trending_up"
                                    : data.quantity - data.trend < 0
                                      ? "trending_down"
                                      : "trending_flat"
                            }}
                        </div>
                        <div>
                            {{
                                data.quantity - data.trend < 0
                                    ? Math.abs(data.quantity - data.trend)
                                    : data.quantity - data.trend
                            }}
                        </div>
                    </div>
                </template>
            </Column>
        </DataTable> -->
        <div class="flex flex-col gap-4">
            <div
                v-for="coffee in coffees"
                :key="coffee.item"
                class="box-content flex h-10 items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
            >
                <div class="flex-1 truncate text-base font-semibold text-color">
                    {{ coffee.item }}
                </div>
                <div class="flex w-1/3 gap-8">
                    <div
                        class="w-1/2 text-end text-base font-semibold text-color"
                    >
                        {{ coffee.quantity }}
                    </div>
                    <div class="w-1/2">
                        <div
                            class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                            :class="{
                                'text-green-500':
                                    coffee.quantity - coffee.trend > 0,
                                'text-orange-500':
                                    coffee.quantity - coffee.trend < 0,
                                'text-muted-color':
                                    coffee.quantity - coffee.trend === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    coffee.quantity - coffee.trend > 0
                                        ? "trending_up"
                                        : coffee.quantity - coffee.trend < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    coffee.quantity - coffee.trend < 0
                                        ? Math.abs(
                                              coffee.quantity - coffee.trend,
                                          )
                                        : coffee.quantity - coffee.trend
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex flex-wrap justify-between gap-4">
            <div
                v-for="coffee in coffees"
                :key="coffee.item"
                class="flex h-16 items-center"
            >
                <div class="flex flex-col justify-center">
                    <div class="truncate text-sm font-bold text-color">
                        {{ coffee.item }}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-xl font-bold text-color">{{
                            coffee.quantity
                        }}</span>
                        <div
                            class="flex items-center justify-between gap-1 text-sm font-semibold"
                            :class="{
                                'text-green-500':
                                    coffee.quantity - coffee.trend > 0,
                                'text-orange-500':
                                    coffee.quantity - coffee.trend < 0,
                                'text-muted-color':
                                    coffee.quantity - coffee.trend === 0,
                            }"
                        >
                            <div class="material-symbols-outlined">
                                {{
                                    coffee.quantity - coffee.trend > 0
                                        ? "trending_up"
                                        : coffee.quantity - coffee.trend < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div>
                                {{
                                    coffee.quantity - coffee.trend < 0
                                        ? Math.abs(
                                              coffee.quantity - coffee.trend,
                                          )
                                        : coffee.quantity - coffee.trend
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
    </UiCardBase>
</template>

<script setup>
const coffees = ref([
    {
        item: "Regular",
        quantity: 2.5,
        trend: 1,
    },
    {
        item: "Vanilla",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Caramel",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Hazelnut",
        quantity: 1,
        trend: 1,
    },
    {
        item: "Decaf",
        quantity: 1,
        trend: 1,
    },
]);
</script>
