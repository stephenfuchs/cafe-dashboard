import type { OrdersQuery } from "~/src/gql/graphql";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const normalizeTenders = (order: Order) => {
    return (
        order.tenders
            ?.map((tender) => {
                if (!tender) return null;

                return {
                    type: tender.type ?? "UNKNOWN",
                    amount: tender.amountMoney?.amount ?? 0,
                };
            })
            .filter(
                (tender): tender is NonNullable<typeof tender> =>
                    tender !== null,
            ) ?? []
    );
};
