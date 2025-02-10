import { TZDate } from "@date-fns/tz";
import { formatISO, parseISO, format } from "date-fns";
import type { Order, OrdersQuery, OrderConnection } from "../src/gql/graphql";
// Define type aliases for data structures
// type Money = number;
// type Tender = {
//     type: string;
//     amountMoney: Money;
// };
// type Refund = { amountMoney: Money };
// type LineItem = {
//     uid: string;
//     name: string;
//     quantity: number;
//     grossSalesMoney: Money;
// };
// type Payment = {
//     id: string;
//     processingFee: number;
// };
// type Order = {
//     tenders: Tender[];
//     id: string;
//     closedAt: string;
//     totalMoney: Money;
//     totalDiscountMoney: Money;
//     refunds: Refund[];
//     lineItems: LineItem[];
// };

export const useOrders = (start: Ref<TZDate>, end: Ref<TZDate>) => {
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
            const response = await $fetch("/api/orders", {
                params: {
                    startDate: formatISO(start.value),
                    endDate: formatISO(end.value),
                },
            });

            const timeZone = "America/Chicago";

            orders.value = response.map(order => ({
            ...order,
            closedAt: order.closedAt
                ? format(new TZDate(parseISO(order.closedAt), timeZone), "MM-dd-yyyy hh:mm aaa")
                : null
        }));
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
            calcTotal(order.refunds, (refund) => refund.amountMoney.amount),
        ),
    );

    const discounts = computed(() =>
        calcTotal(
            orders.value,
            (order) => order.totalDiscountMoney.amount || 0,
        ),
    );

    const grossSales = computed(() =>
        calcTotal(orders.value, (order) =>
            calcTotal(order.lineItems, (item) => item.grossSalesMoney.amount),
        ),
    );

    const netSales = computed(
        () =>
            calcTotal(orders.value, (order) => order.totalMoney.amount) -
            refunds.value,
    );

    const fees = computed(() =>
        calcTotal(orders.value, (order) =>
            calcTotal(
                order.tenders,
                (tender) =>
                    tender.payment?.processingFees?.reduce(
                        (feeTotal, fee) =>
                            feeTotal + (fee.amountMoney?.amount || 0),
                        0,
                    ) || 0,
            ),
        ),
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
                    tender.type === tenderType
                        ? tender.amountMoney.amount || 0
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
};
