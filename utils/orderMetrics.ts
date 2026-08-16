import type { OrdersQuery } from "~/src/gql/graphql";
import {
    getDiscountAmount,
    getGrossSales,
    getOrderTotal,
    getRefundAmount,
} from "~/utils/orderAmounts";
import { getReturnedAmountsByOrderId } from "~/utils/orderReturns";
import {
    getOrderPaymentAmounts,
    getProcessingFees,
} from "~/utils/orderPayments";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export type OrderMetrics = {
    refunds: number;
    discounts: number;
    grossSales: number;
    netSales: number;
    fees: number;
    netTotal: number;
    transactions: number;
    avgTransaction: number;
    cashPayments: number;
    cardPayments: number;
};

/**
 * Determine whether an order counts as a transaction.
 *
 * The dashboard excludes any order with refund records from the
 * transaction count, regardless of the refund amount.
 */
const isTransaction = (order: Order) => {
    return !order.refunds?.length;
};

export const calculateOrderMetrics = (orders: Order[]): OrderMetrics => {
    let refunds = 0;
    let discounts = 0;
    let grossSales = 0;
    let fees = 0;
    let transactions = 0;

    // Build a map of original order ID -> amount returned.
    //
    // A return order points back to the original sale through:
    // return.source.id
    //
    // This must be calculated before tender totals because the returned
    // amount is deducted from the original order's tender amount.
    const returnedAmountsByOrderId = getReturnedAmountsByOrderId(orders);

    let cashPayments = 0;
    let cardPayments = 0;
    let totalSales = 0;

    for (const order of orders) {
        refunds += getRefundAmount(order);

        discounts += getDiscountAmount(order);

        totalSales += getOrderTotal(order);

        grossSales += getGrossSales(order);

        if (isTransaction(order)) {
            transactions += 1;
        }

        // A return order is not an original payment and should not contribute
        // to tender-based metrics such as processing fees or cash/card totals.
        if ((order.returns?.length ?? 0) > 0) {
            continue;
        }

        const returnedAmount =
            returnedAmountsByOrderId.get(order.id ?? "") ?? 0;

        fees += getProcessingFees(order);

        const { cash: cashAmount, card: cardAmount } =
            getOrderPaymentAmounts(order);

        cashPayments += Math.max(0, cashAmount - returnedAmount);
        cardPayments += Math.max(0, cardAmount - returnedAmount);
    }

    const netSales = totalSales - refunds;

    const netTotal = netSales - fees;

    const avgTransaction = transactions === 0 ? 0 : grossSales / transactions;

    return {
        refunds,
        discounts,
        grossSales,
        netSales,
        fees,
        netTotal,
        transactions,
        avgTransaction,
        cashPayments,
        cardPayments,
    };
};
