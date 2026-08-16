import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

/**
 * Sum all refund amounts associated with an order.
 *
 * Square can return multiple refund records for a single order, so the
 * order-level refund amount must be calculated from all refund records.
 */
export const getRefundAmount = (order: Order) => {
    return (order.refunds ?? []).reduce(
        (sum, refund) => sum + (refund?.amountMoney?.amount ?? 0),
        0,
    );
};
