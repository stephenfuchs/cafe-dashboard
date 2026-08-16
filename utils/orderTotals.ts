import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

/**
 * Return the order total reported by Square.
 *
 * This value is intentionally kept separate from gross sales, which are
 * calculated from individual line items.
 */
export const getOrderTotal = (order: Order) => {
    return order.totalMoney?.amount ?? 0;
};
