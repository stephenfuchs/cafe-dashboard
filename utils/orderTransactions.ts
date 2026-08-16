import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

/**
 * Determine whether an order counts as a transaction.
 *
 * The existing dashboard logic excludes any order with refund records
 * from the transaction count, regardless of the refund amount.
 */
export const isTransaction = (order: Order) => {
    return !order.refunds?.length;
};
