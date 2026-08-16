import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const getReturnedLineItemUids = (orders: Order[]) => {
    const returnedLineItemUids = new Set<string>();

    for (const order of orders) {
        for (const returnOrder of order.returns ?? []) {
            for (const lineItem of returnOrder?.lineItems ?? []) {
                const sourceLineItemUid = String(
                    lineItem?.sourceLineItemUid ?? "",
                );

                if (sourceLineItemUid) {
                    returnedLineItemUids.add(sourceLineItemUid);
                }
            }
        }
    }

    return returnedLineItemUids;
};
