import type { TZDate } from "@date-fns/tz";
import axios from "axios";
import { formatISO } from "date-fns";

// Define type aliases for data structures
type Money = number;
type Tender = {
    type: string;
    amountMoney: Money;
};
type Refund = { amountMoney: Money };
type LineItem = {
    uid: string;
    name: string;
    quantity: number;
    grossSalesMoney: Money;
};
type Payment = {
    id: string;
    processingFee: number;
};
type Order = {
    tenders: Tender[];
    id: string;
    closedAt: string;
    totalMoney: Money;
    totalDiscountMoney: Money;
    refunds: Refund[];
    lineItems: LineItem[];
};

export const useOrders = (start: Ref<TZDate>, end: Ref<TZDate>) => {
    const dateKey = computed(
        () => `${formatISO(start.value)}_to_${formatISO(end.value)}`,
    );
    const allOrders = useState<Record<string, Order[]>>("orders", () => ({}));
    const orders = computed<Order[]>({
        get: () => allOrders.value[dateKey.value] || [],
        set: (newOrders) => (allOrders.value[dateKey.value] = newOrders),
    });

    const allPayments = useState<Record<string, Payment[]>>(
        `payments`,
        () => ({}),
    );
    const payments = computed<Payment[]>({
        get: () => allPayments.value[dateKey.value] || [],
        set: (newPayments) => (allPayments.value[dateKey.value] = newPayments),
    });

    watch([start, end], async () => {
        if (!start.value || !end.value) {
            return;
        }

        try {
            const [ordersResponse, paymentsResponse] = await Promise.all([
                axios.get<Order[]>(
                    `/api/orders?startDate=${formatISO(start.value)}&endDate=${formatISO(end.value)}`,
                ),
                axios.get<Payment[]>(
                    `/api/payments?startDate=${formatISO(start.value)}&endDate=${formatISO(end.value)}`,
                ),
            ]);
            orders.value = ordersResponse.data;
            payments.value = paymentsResponse.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    });

    const calcTotal = <T>(
        array: T[] | undefined,
        callback: (item: T) => number,
    ): number => (array ?? []).reduce((sum, item) => sum + callback(item), 0);

    //// computed

    const refunds = computed(() =>
        calcTotal(orders.value, (order) =>
            calcTotal(order.refunds, (refund) => refund.amountMoney),
        ),
    );

    const discounts = computed(() =>
        calcTotal(orders.value, (order) => order.totalDiscountMoney || 0),
    );

    const grossSales = computed(() =>
        calcTotal(orders.value, (order) =>
            calcTotal(order.lineItems, (item) => item.grossSalesMoney),
        ),
    );

    const netSales = computed(
        () =>
            calcTotal(orders.value, (order) => order.totalMoney) -
            refunds.value,
    );

    const fees = computed(() =>
        calcTotal(payments.value, (payment) => payment.processingFee || 0),
    );

    const netTotal = computed(() => netSales.value - fees.value);

    const transactions = computed(() =>
        calcTotal(orders.value, (order) => (order.refunds?.length ? 0 : 1)),
    );

    const avgTransaction = computed(() =>
        transactions.value === 0 ? 0 : grossSales.value / transactions.value,
    );

    const tenderTotal = (tenderType: string) =>
        computed(() =>
            calcTotal(orders.value, (order) =>
                calcTotal(order.tenders, (tender) =>
                    tender.type === tenderType ? tender.amountMoney || 0 : 0,
                ),
            ),
        );

    const cashPayments = tenderTotal("CASH");
    const cardPayments = tenderTotal("CARD");

    return {
        orders,
        payments,
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
};
