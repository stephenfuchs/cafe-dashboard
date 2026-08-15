import type { OrdersQuery } from "~/src/gql/graphql";
import type { NormalizedDiscount } from "~/types/analytics";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];
type LineItem = NonNullable<NonNullable<Order["lineItems"]>[number]>;

export const normalizeDiscounts = (
    item: LineItem,
    discountsByUid: Map<string, NonNullable<Order["discounts"]>[number]>,
): NormalizedDiscount[] => {
    return (
        item.appliedDiscounts?.map((appliedDiscount) => {
            const uid = String(appliedDiscount?.discountUid ?? "");

            const discount = discountsByUid.get(uid);

            return {
                uid,
                name:
                    discount?.name?.trim().toLowerCase() ?? "unknown discount",
                amount: appliedDiscount?.appliedMoney?.amount ?? 0,
            };
        }) ?? []
    );
};
