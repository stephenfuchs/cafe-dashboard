import type { OrdersQuery } from "~/src/gql/graphql";
import { getReturnedAmountsByOrderId } from "~/utils/orderReturns";
import { getRefundAmount } from "~/utils/orderRefunds";
import { getGrossSales } from "~/utils/orderSales";
import { getDiscountAmount } from "~/utils/orderDiscounts";
import { getOrderTotal } from "~/utils/orderTotals";

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

        if (!order.refunds?.length) {
            transactions += 1;
        }

        // A return order itself is not a payment.
        if ((order.returns?.length ?? 0) > 0) {
            continue;
        }

        const returnedAmount =
            returnedAmountsByOrderId.get(order.id ?? "") ?? 0;

        let cashAmount = 0;
        let cardAmount = 0;

        for (const tender of order.tenders ?? []) {
            const amount = tender?.amountMoney?.amount || 0;

            if (tender?.type === "CASH") {
                cashAmount += amount;
            }

            if (tender?.type === "CARD") {
                cardAmount += amount;
            }

            fees += (tender?.payment?.processingFees ?? []).reduce(
                (feeTotal, fee) => feeTotal + (fee.amountMoney?.amount || 0),
                0,
            );
        }

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
