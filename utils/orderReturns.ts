import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const getReturnedAmountsByOrderId = (orders: Order[]) => {
    const returnedAmountsByOrderId = new Map<string, number>();

    for (const order of orders) {
        for (const orderReturn of order.returns ?? []) {
            const sourceOrderId = orderReturn?.source?.id;

            if (!sourceOrderId) continue;

            const returnedAmount =
                orderReturn?.amounts?.totalMoney?.amount ?? 0;

            returnedAmountsByOrderId.set(
                sourceOrderId,
                (returnedAmountsByOrderId.get(sourceOrderId) ?? 0) +
                    returnedAmount,
            );
        }
    }

    return returnedAmountsByOrderId;
};
