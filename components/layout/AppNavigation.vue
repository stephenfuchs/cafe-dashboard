<template>
    <aside
        class="sticky bottom-0 z-50 box-content flex items-center gap-10 bg-surface-100 p-4 max-md:h-12 max-md:pt-3 md:fixed md:start-0 md:top-0 md:w-12 md:flex-col md:p-5 dark:bg-surface-950"
    >
        <div class="flex size-12 items-center justify-center max-md:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xml:space="preserve"
                style="
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                    stroke-linejoin: round;
                    stroke-miterlimit: 2;
                "
                viewBox="0 0 319 319"
                width="48"
                height="48"
            >
                <circle
                    cx="227.882"
                    cy="227.326"
                    r="132.444"
                    transform="translate(-114.933 -114.264) scale(1.20428)"
                />
                <path
                    d="M98.729 4.625 74.292-57.812 47.563 4.917 5.917-104.062H22.25l27.042 76.02 18.062-47.416-11.125-28.604h13.875l29.042 74.437 25.729-74.437h15.042L98.729 4.625Z"
                    style="fill: #fff; fill-rule: nonzero"
                    transform="translate(56.434 192.447)"
                />
                <path
                    d="M72.563 0 47.979-38.583c-.765.083-1.916.125-3.458.125H29.063V0H15.042v-104.5h27.896c7.125 0 13.479 1.26 19.062 3.771 5.594 2.5 9.984 6.182 13.167 11.042 3.177 4.864 4.771 10.718 4.771 17.562 0 6.458-1.428 12.391-4.271 17.792-2.849 5.39-7.209 9.479-13.084 12.271L88.896 0H72.563ZM44.229-52.042c7.511 0 12.927-1.968 16.25-5.916 3.334-3.959 5-8.485 5-13.584 0-3.083-.703-6.114-2.104-9.104-1.391-2.984-3.604-5.463-6.646-7.437-3.031-1.985-6.854-2.979-11.479-2.979H29.063v39.02h15.166Z"
                    style="fill: #fff; fill-rule: nonzero"
                    transform="translate(159.597 246.729)"
                />
            </svg>
        </div>
        <nav
            class="flex w-full flex-row items-center max-md:justify-evenly md:flex-col md:gap-4"
        >
            <Button
                severity="secondary"
                v-tooltip="'Sales Overview'"
                label="Overview"
                iconPos="top"
                as="router-link"
                to="/"
                :pt="buttonPassthrough"
            >
                <template #icon>
                    <i class="material-symbols-outlined text-xl">dashboard</i>
                </template>
            </Button>
            <Button
                severity="secondary"
                v-tooltip="'Item Sales'"
                label="Items"
                iconPos="top"
                as="router-link"
                to="/items"
                :pt="buttonPassthrough"
            >
                <template #icon>
                    <span class="material-symbols-outlined text-xl">sell</span>
                </template>
            </Button>
            <Button
                severity="secondary"
                v-tooltip="'Modifier Sales'"
                label="Modifiers"
                iconPos="top"
                as="router-link"
                to="/modifiers"
                :pt="buttonPassthrough"
            >
                <template #icon>
                    <span class="material-symbols-outlined text-xl">style</span>
                </template>
            </Button>
            <Button
                severity="secondary"
                v-tooltip="'Discounts'"
                label="Discounts"
                iconPos="top"
                as="router-link"
                to="/discounts"
                :pt="buttonPassthrough"
            >
                <template #icon>
                    <span class="material-symbols-outlined text-xl"
                        >percent</span
                    >
                </template>
            </Button>
            <Button
                severity="secondary"
                v-tooltip="'Expenses'"
                label="Expenses"
                iconPos="top"
                as="router-link"
                to="/expenses"
                :pt="buttonPassthrough"
            >
                <template #icon>
                    <span class="material-symbols-outlined text-xl"
                        >receipt_long</span
                    >
                </template>
            </Button>
            <Tag
                severity="secondary"
                value="2XL"
                class="hidden w-full text-center 2xl:block"
            />
            <Tag
                severity="secondary"
                value="XL"
                class="hidden w-full text-center xl:max-2xl:block"
            />
            <Tag
                severity="secondary"
                value="LG"
                class="hidden w-full text-center lg:max-xl:block"
            />
            <Tag
                severity="secondary"
                value="MD"
                class="hidden w-full text-center md:max-lg:block"
            />
        </nav>
    </aside>
</template>

<script setup>
const buttonPassthrough = {
    label: {
        class: "md:hidden text-xs text-color font-semibold",
    },
};
</script>
