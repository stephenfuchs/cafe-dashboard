import type { TZDate } from "@date-fns/tz";
import axios from "axios";
import { formatISO } from "date-fns";

// Define type aliases for data structures
type Money = { amount: number };
type Refund = { amountMoney?: Money };
type LineItem = {
    uid: string;
    name: string;
    quantity: number;
    grossSalesMoney: Money;
};
type Order = {
    id: string;
    closedAt?: string;
    totalMoney?: Money;
    refunds?: Refund[];
    lineItems?: LineItem[];
};

export const useOrders = (
    start: Ref<TZDate>,
    end: Ref<TZDate>,
    stateKey = "orders",
) => {
    const orders = useState<Order[]>(stateKey, () => []);

    watch([start, end], async () => {
        if (!start.value || !end.value) {
            return;
        }

        try {
            const response = await axios.get<Order[]>(
                `/api/orders?startDate=${formatISO(start.value)}&endDate=${formatISO(end.value)}`,
            ); // Use your actual API endpoint
            orders.value = response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    });

    const validArray = <T>(arr: T[] | undefined): T[] =>
        Array.isArray(arr) ? arr : [];

    //// computed
    const refunds = computed(() => {
        const totalCents = validArray(orders.value).reduce((sum, order) => {
            return (
                sum +
                (order?.refunds || []).reduce(
                    (refundTotal, refund) =>
                        refundTotal + (refund.amountMoney?.amount || 0),
                    0,
                )
            );
        }, 0);
        return totalCents;
    });

    const grossSales = computed(() => {
        const totalCents = validArray(orders.value).reduce((sum, order) => {
            const lineItemTotal = validArray(order.lineItems).reduce(
                (lineSum, item) =>
                    lineSum + (item?.grossSalesMoney?.amount || 0),
                0,
            );
            return sum + lineItemTotal;
        }, 0);
        return totalCents / 100;
    });

    const netSales = computed(() => {
        // Sum up the total amount in cents
        const totalCents = validArray(orders.value).reduce(
            (sum, order) => sum + (order?.totalMoney?.amount || 0),
            0,
        );

        // Convert to dollars and format as currency
        return (totalCents - refunds.value) / 100;
    });

    const transactions = computed(() => {
        return validArray(orders.value).filter(
            (order) => !order.refunds || order.refunds.length === 0,
        ).length;
    });

    const avgTransaction = computed(() => {
        return grossSales.value / transactions.value || 0;
    });

    return { orders, netSales, transactions, grossSales, avgTransaction };
};
