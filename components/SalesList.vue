<template>
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
                        @error="handleImageError"
                    />
                </div>
                <div class="flex-1 capitalize">
                    {{ product.item }}
                </div>
            </div>
            <div class="flex w-1/3 gap-8">
                <div class="w-1/2 text-end text-base font-semibold text-color">
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
                        <div class="material-symbols-outlined flex-1 text-end">
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
                                    ? Math.abs(product.quantity - product.trend)
                                    : product.quantity - product.trend
                            }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    products: {
        type: Array,
        required: true,
    },
});

function handleImageError(event) {
    event.target.src = "/img/item-default.png";
}
</script>
