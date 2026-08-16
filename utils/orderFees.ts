import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

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
