<template>
    <div class="flex flex-col gap-6">
        <div class="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <SalesStat
                title="Gross Sales"
                :value="511.17"
                :percent="70.39"
                vs="last week"
                :vsValue="300.0"
                money
            />
            <SalesStat
                title="Net Total"
                :value="492.76"
                :percent="-70.47"
                vs="last week"
                :vsValue="294.0"
                money
            />
            <SalesStat
                title="Transactions"
                :value="65"
                :percent="22.64"
                vs="last week"
                :vsValue="53"
            />
            <SalesStat
                title="Average Sale"
                :value="7.71"
                :percent="39.0"
                vs="last week"
                :vsValue="5.55"
                money
            />
        </div>
        <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 lg:col-span-3 xl:col-span-2">
                <SalesListItems />
            </div>
            <div class="col-span-6 lg:col-span-3 xl:col-span-2">
                <SalesListCoffees />
            </div>
            <div class="col-span-6 lg:col-span-2">
                <SalesSummary />
            </div>
            <div class="col-span-6 lg:col-span-4 xl:col-span-6">
                <SalesChart />
            </div>
        </div>
    </div>
</template>

<script setup></script>
