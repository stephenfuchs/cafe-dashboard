import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const normalizeRefunds = (order: Order) => {
    return (
        order.refunds?.reduce(
            (sum, refund) => sum + (refund?.amountMoney?.amount ?? 0),
            0,
        ) ?? 0
    );
};
