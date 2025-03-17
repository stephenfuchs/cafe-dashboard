import { TZDate } from "@date-fns/tz";
import { formatISO } from "date-fns";
import type { Order } from "../src/gql/graphql";
import { useMemoize } from "@vueuse/core";

export const useOrders = useMemoize((start: Ref<TZDate>, end: Ref<TZDate>) => {
    const dateKey = computed(
        () => `${formatISO(start.value)}_to_${formatISO(end.value)}`,
    );

    const allOrders = useState<Record<string, Order[]>>("orders", () => ({}));
    const orders = computed<Order[]>({
        get: () => allOrders.value[dateKey.value] || [],
        set: (newOrders) => (allOrders.value[dateKey.value] = newOrders),
    });

    watch([start, end], async () => {
        if (!start.value || !end.value) {
            return;
        }

        try {
            const response: Order[] = await $fetch("/api/orders", {
                params: {
                    startDate: formatISO(start.value),
                    endDate: formatISO(end.value),
                },
            });

            orders.value = response;
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    });

    const calcTotal = <T>(
        array: T[] | undefined,
        callback: (item: T) => number,
    ): number => (array ?? []).reduce((sum, item) => sum + callback(item), 0);

    const refunds = computed(() =>
        calcTotal(orders.value, (order: Order) =>
            calcTotal(
                order.refunds ?? [],
                (refund) => refund?.amountMoney?.amount ?? 0,
            ),
        ),
    );

    const discounts = computed(() =>
        calcTotal(
            orders.value,
            (order: Order) => order?.totalDiscountMoney?.amount || 0,
        ),
    );

    const grossSales = computed(() =>
        calcTotal(orders.value, (order: Order) =>
            calcTotal(
                order.lineItems ?? [],
                (item) => item?.grossSalesMoney?.amount,
            ),
        ),
    );

    const netSales = computed(
        () =>
            calcTotal(
                orders.value,
                (order: Order) => order?.totalMoney?.amount,
            ) - refunds.value,
    );

    const fees = computed(() =>
        calcTotal(orders.value, (order: Order) =>
            calcTotal(
                order.tenders ?? [],
                (tender) =>
                    tender?.payment?.processingFees?.reduce(
                        (feeTotal, fee) =>
                            feeTotal + (fee.amountMoney?.amount || 0),
                        0,
                    ) || 0,
            ),
        ),
    );

    const netTotal = computed(() => netSales.value - fees.value);

    const transactions = computed(() =>
        calcTotal(orders.value, (order: Order) =>
            order.refunds?.length ? 0 : 1,
        ),
    );

    const avgTransaction = computed(() =>
        transactions.value === 0 ? 0 : grossSales.value / transactions.value,
    );

    const tenderTotal = (tenderType: string) =>
        computed(() =>
            calcTotal(orders.value, (order: Order) =>
                calcTotal(order.tenders ?? [], (tender) =>
                    tender?.type === tenderType
                        ? tender?.amountMoney?.amount || 0
                        : 0,
                ),
            ),
        );

    const cashPayments = tenderTotal("CASH");
    const cardPayments = tenderTotal("CARD");

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
    };
});
