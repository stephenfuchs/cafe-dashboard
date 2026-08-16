import type { OrdersQuery } from "~/src/gql/graphql";
import { getReturnedAmountsByOrderId } from "~/utils/orderReturns";
import { getRefundAmount } from "~/utils/orderRefunds";
import { getGrossSales } from "~/utils/orderSales";
import { getDiscountAmount } from "~/utils/orderDiscounts";
import { getOrderTotal } from "~/utils/orderTotals";
import { getProcessingFees } from "~/utils/orderFees";
import { getOrderPaymentAmounts } from "~/utils/orderPayments";
import { isTransaction } from "~/utils/orderTransactions";

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
