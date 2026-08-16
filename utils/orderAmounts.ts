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

/**
 * Sum the gross sales amounts of all line items in an order.
 *
 * Gross sales are calculated from each line item's grossSalesMoney rather
 * than the order-level total because this metric represents item sales
 * before discounts and other order-level adjustments.
 */
export const getGrossSales = (order: Order) => {
    return (order.lineItems ?? []).reduce(
        (sum, item) => sum + (item?.grossSalesMoney?.amount ?? 0),
        0,
    );
};

/**
 * Return the order total reported by Square.
 *
 * This value is intentionally kept separate from gross sales, which are
 * calculated from individual line items.
 */
export const getOrderTotal = (order: Order) => {
    return order.totalMoney?.amount ?? 0;
};
