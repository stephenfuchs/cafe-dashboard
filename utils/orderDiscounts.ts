import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

/**
 * Return the order-level discount amount reported by Square.
 *
 * This intentionally uses totalDiscountMoney rather than summing the
 * normalized line-item discounts because this metric represents the
 * order-level discount value used by the dashboard.
 */
export const getDiscountAmount = (order: Order) => {
    return order.totalDiscountMoney?.amount || 0;
};
