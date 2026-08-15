import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useMemoize } from "@vueuse/core";
import { useOrderData } from "~/composables/useOrderData";
import { calculateOrderMetrics } from "~/utils/orderMetrics";

export const useOrders = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const { orders, isLoading } = useOrderData(start, end);

        const metrics = computed(() => calculateOrderMetrics(orders.value));

        const discounts = computed(() => metrics.value.discounts);
        const grossSales = computed(() => metrics.value.grossSales);
        const netSales = computed(() => metrics.value.netSales);
        const fees = computed(() => metrics.value.fees);
        const netTotal = computed(() => metrics.value.netTotal);
        const transactions = computed(() => metrics.value.transactions);
        const avgTransaction = computed(() => metrics.value.avgTransaction);
        const cashPayments = computed(() => metrics.value.cashPayments);
        const cardPayments = computed(() => metrics.value.cardPayments);

        return {
            orders,
            netSales,
            transactions,
            grossSales,
            avgTransaction,
            discounts,
            cashPayments,
            cardPayments,
            fees,
            netTotal,
            isLoading,
        };
    },
);
