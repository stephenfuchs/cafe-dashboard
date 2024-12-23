<template>
    <UiAppCard>
        <template #title
            >{{
                selectedServiceTime !== "All" ? selectedServiceTime : ""
            }}
            Sales Summary</template
        >
        <template #options>
            <SelectButton
                v-model="selectedServiceTime"
                :options="serviceTimes"
                size="small"
                class="max-xl:hidden"
            />
            <Button variant="link" @click="toggle" class="p-0 xl:hidden">
                <template #icon>
                    <i
                        class="material-symbols-outlined text-2xl leading-none text-primary-500"
                        >more_horiz</i
                    >
                </template>
            </Button>
            <Popover ref="time">
                <div class="flex flex-col">
                    <ul class="m-0 flex list-none flex-col p-0">
                        <li
                            v-for="service in serviceTimes"
                            :key="service"
                            class="flex cursor-pointer items-center p-2 text-sm hover:bg-emphasis"
                            :class="{
                                'font-bold text-primary-400':
                                    selectedServiceTime === service,
                                'font-semibold text-muted-color':
                                    selectedServiceTime !== service,
                            }"
                            @click="selectServiceTime(service)"
                        >
                            {{ service }}
                        </li>
                    </ul>
                </div>
            </Popover>
        </template>
        <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">shopping_basket</div>
                <div class="flex-1 text-base font-semibold text-color">
                    Gross Sales
                </div>
                <div class="text-base font-semibold text-color">$511.17</div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">percent</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Discounts
                </div>
                <div
                    class="text-sm font-medium text-orange-600 dark:text-orange-300"
                >
                    ($10.00)
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">payments</div>
                <div class="flex-1 font-medium text-color">Net Sales</div>
                <div class="text-base font-semibold text-color">$501.17</div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">universal_currency</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Cash Payments
                </div>
                <div
                    class="text-sm font-medium text-green-600 dark:text-green-300"
                >
                    $278.17
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">credit_card</div>
                <div class="flex-1 text-sm font-medium text-color">
                    Card Payments
                </div>
                <div
                    class="text-sm font-medium text-green-600 dark:text-green-300"
                >
                    $223.00
                </div>
            </div>
            <div class="flex items-center gap-2 ps-6">
                <div class="material-symbols-outlined">paid</div>
                <div class="flex-1 text-sm font-medium text-color">Fees</div>
                <div
                    class="text-sm font-medium text-orange-600 dark:text-orange-300"
                >
                    ($8.41)
                </div>
            </div>
            <div class="flex items-center gap-2">
                <div class="material-symbols-outlined">account_balance</div>
                <div class="flex-1 font-semibold text-color">Net Total</div>
                <div class="text-base font-semibold text-color">$492.76</div>
            </div>
        </div>
    </UiAppCard>
</template>

<script setup>
const value = ref("All");
const options = ref(["All", "9:00", "10:30"]);

const time = ref();
const selectedServiceTime = ref("All");
const serviceTimes = ref(["All", "9:00", "10:30"]);

const toggle = (event) => {
    time.value.toggle(event);
};

const selectServiceTime = (service) => {
    selectedServiceTime.value = service;
    time.value.hide();
};
</script>
