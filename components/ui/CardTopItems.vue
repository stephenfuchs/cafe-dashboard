<template>
    <UiCardBase>
        <template #title> Top {{ value }} </template>
        <template #options>
            <SelectButton v-model="value" :options="options" size="small" />
        </template>
        <div class="flex flex-col gap-4">
            <div
                v-for="product in products"
                :key="product.item"
                class="box-content flex items-center gap-4 border-b border-surface-300 last:border-b-0 dark:border-surface-700"
            >
                <div
                    class="flex h-10 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
                >
                    <div class="h-full max-h-full">
                        <img
                            :src="product.img"
                            :alt="`Image of ` + product.item"
                            class="h-full max-h-full object-contain"
                        />
                    </div>
                    <div class="flex-1">
                        {{ product.item }}
                    </div>
                </div>
                <div class="flex w-1/3 gap-8">
                    <div
                        class="w-1/2 text-end text-base font-semibold text-color"
                    >
                        {{ product.quantity }}
                    </div>
                    <div class="w-1/2">
                        <div
                            class="flex items-center justify-end gap-1 text-start text-base font-semibold"
                            :class="{
                                'text-green-500':
                                    product.quantity - product.trend >= 0,
                                'text-orange-500':
                                    product.quantity - product.trend < 0,
                                'text-muted-color':
                                    product.quantity - product.trend === 0,
                            }"
                        >
                            <div
                                class="material-symbols-outlined flex-1 text-end"
                            >
                                {{
                                    product.quantity - product.trend > 0
                                        ? "trending_up"
                                        : product.quantity - product.trend < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div class="flex-1">
                                {{
                                    product.quantity - product.trend < 0
                                        ? Math.abs(
                                              product.quantity - product.trend,
                                          )
                                        : product.quantity - product.trend
                                }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="grid grid-cols-5 gap-6">
            <div
                v-for="product in products"
                :key="product.item"
                class="flex items-center gap-2"
            >
                <div class="flex-none">
                    <img
                        :src="product.img"
                        :alt="`Image of ` + product.item"
                        class="size-16"
                    />
                </div>
                <div class="min-w-0 flex-1">
                    <div class="truncate text-sm font-bold text-color">
                        {{ product.item }}
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-xl font-bold text-color">{{
                            product.quantity
                        }}</span>
                        <div
                            class="flex items-center justify-between gap-1 text-sm font-semibold"
                            :class="{
                                'text-green-500':
                                    product.quantity - product.trend >= 0,
                                'text-orange-500':
                                    product.quantity - product.trend < 0,
                                'text-muted-color':
                                    product.quantity - product.trend === 0,
                            }"
                        >
                            <div class="material-symbols-outlined">
                                {{
                                    product.quantity - product.trend > 0
                                        ? "trending_up"
                                        : product.quantity - product.trend < 0
                                          ? "trending_down"
                                          : "trending_flat"
                                }}
                            </div>
                            <div>
                                {{
                                    product.quantity - product.trend < 0
                                        ? Math.abs(
                                              product.quantity - product.trend,
                                          )
                                        : product.quantity - product.trend
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
const value = ref("Items");
const options = ref(["Items", "Categories"]);

const products = ref([
    {
        item: "Bagel",
        img: "/img/item-bagel.png",
        quantity: 26,
        trend: 22,
    },
    {
        item: "Hot Cocoa",
        img: "/img/item-hotcocoa.png",
        quantity: 15,
        trend: 15,
    },
    {
        item: "Latte",
        img: "/img/item-latte.png",
        quantity: 13,
        trend: 12,
    },
    {
        item: "Chai Latte",
        img: "/img/item-chai.png",
        quantity: 11,
        trend: 2,
    },
    {
        item: "Danish",
        img: "/img/item-danish.png",
        quantity: 4,
        trend: 7,
    },
]);
</script>
