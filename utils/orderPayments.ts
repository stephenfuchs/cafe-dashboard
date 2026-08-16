import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export type OrderPaymentAmounts = {
    cash: number;
    card: number;
};

/**
 * Sum Square processing fees across all tenders for an order.
 *
 * Processing fees belong to the tender's payment rather than directly to
 * the order, so every tender must be checked. Missing fee records contribute
 * zero.
 */
export const getProcessingFees = (order: Order) => {
    return (order.tenders ?? []).reduce(
        (orderFeeTotal, tender) =>
            orderFeeTotal +
            (tender?.payment?.processingFees ?? []).reduce(
                (feeTotal, fee) => feeTotal + (fee.amountMoney?.amount || 0),
                0,
            ),
        0,
    );
};

/**
 * Sum cash and card tender amounts for an order.
 *
 * This returns the tender amounts as reported by Square. Returned amounts
 * are intentionally not deducted here because that adjustment depends on
 * the original order and is handled by calculateOrderMetrics().
 */
export const getOrderPaymentAmounts = (order: Order): OrderPaymentAmounts => {
    let cash = 0;
    let card = 0;

    for (const tender of order.tenders ?? []) {
        const amount = tender?.amountMoney?.amount || 0;

        if (tender?.type === "CASH") {
            cash += amount;
        }

        if (tender?.type === "CARD") {
            card += amount;
        }
    }

    return {
        cash,
        card,
    };
};
