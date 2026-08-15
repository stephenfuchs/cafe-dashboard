import type { OrdersQuery } from "~/src/gql/graphql";

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
    const returnedAmountsByOrderId = new Map<string, number>();

    for (const order of orders) {
        for (const orderReturn of order.returns ?? []) {
            const sourceOrderId = orderReturn?.source?.id;

            if (!sourceOrderId) continue;

            const returnedAmount =
                orderReturn?.amounts?.totalMoney?.amount ?? 0;

            returnedAmountsByOrderId.set(
                sourceOrderId,
                (returnedAmountsByOrderId.get(sourceOrderId) ?? 0) +
                    returnedAmount,
            );
        }
    }

    let cashPayments = 0;
    let cardPayments = 0;

    for (const order of orders) {
        refunds += (order.refunds ?? []).reduce(
            (sum, refund) => sum + (refund?.amountMoney?.amount ?? 0),
            0,
        );

        discounts += order.totalDiscountMoney?.amount || 0;

        grossSales += (order.lineItems ?? []).reduce(
            (sum, item) => sum + (item?.grossSalesMoney?.amount ?? 0),
            0,
        );

        fees += (order.tenders ?? []).reduce(
            (sum, tender) =>
                sum +
                ((tender?.payment?.processingFees ?? []).reduce(
                    (feeTotal, fee) =>
                        feeTotal + (fee.amountMoney?.amount || 0),
                    0,
                ) || 0),
            0,
        );

        if (!order.refunds?.length) {
            transactions += 1;
        }

        // A return order itself is not a payment.
        if ((order.returns?.length ?? 0) > 0) {
            continue;
        }

        const returnedAmount =
            returnedAmountsByOrderId.get(order.id ?? "") ?? 0;

        const cashAmount = (order.tenders ?? []).reduce(
            (sum, tender) =>
                sum +
                (tender?.type === "CASH"
                    ? tender?.amountMoney?.amount || 0
                    : 0),
            0,
        );

        const cardAmount = (order.tenders ?? []).reduce(
            (sum, tender) =>
                sum +
                (tender?.type === "CARD"
                    ? tender?.amountMoney?.amount || 0
                    : 0),
            0,
        );

        cashPayments += Math.max(0, cashAmount - returnedAmount);
        cardPayments += Math.max(0, cardAmount - returnedAmount);
    }

    const netSales =
        orders.reduce(
            (sum, order) => sum + (order?.totalMoney?.amount ?? 0),
            0,
        ) - refunds;

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
