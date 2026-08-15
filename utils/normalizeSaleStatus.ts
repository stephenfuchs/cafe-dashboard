import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];
type LineItem = NonNullable<NonNullable<Order["lineItems"]>[number]>;

export const isRefundedItem = (item: LineItem) => {
    return Boolean(item.totalMoney?.amount && item.totalMoney.amount < 0);
};

export const isVoidedItem = (item: LineItem) => {
    return (
        Number(item.quantity ?? 0) === 0 && (item.totalMoney?.amount ?? 0) === 0
    );
};
