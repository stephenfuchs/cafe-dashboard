<script setup>
import { formatCurrency } from "~/server/utils/formatCurrency";

const filters = useFilters();

const { orders } = useOrders(filters.startDate, filters.endDate);
const { orders: previousOrders } = useOrders(
    filters.comparisonStartDate,
    filters.comparisonEndDate,
);

const { salesList } = useItemSales(orders, previousOrders);
</script>

<template>
    <DataTable
        :value="salesList"
        sortField="quantity"
        :sortOrder="-1"
        tableStyle="min-width: 50rem"
    >
        <Column field="name" header="Item" sortable>
            <template #body="slotProps">
                <div
                    class="flex h-20 flex-1 items-center gap-4 truncate text-base font-semibold text-color"
                >
                    <div class="h-full max-h-full">
                        <img
                            :src="slotProps.data.imgItem"
                            :alt="`Image of ` + slotProps.data.name"
                            class="h-full max-h-full object-contain"
                        />
                    </div>
                    <div class="flex-1 capitalize">
                        {{ slotProps.data.name }}
                    </div>
                </div>
            </template>
        </Column>
        <Column field="category" header="Category" sortable class="capitalize">
            <template #body="slotProps">
                {{ slotProps.data.category }}
            </template>
        </Column>
        <Column field="quantity" header="Quantity" sortable></Column>
        <Column field="trendQuantity" header="Quantity Trend"></Column>
        <Column field="grossSales" header="Gross Sales" sortable>
            <template #body="slotProps">
                {{ formatCurrency(slotProps.data.grossSales) }}
            </template>
        </Column>
        <Column field="trendGrossSales" header="Gross Sales Trend">
            <template #body="slotProps">
                {{ formatCurrency(slotProps.data.trendGrossSales) }}
            </template>
        </Column>
    </DataTable>
</template>
