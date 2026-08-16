import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

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
