import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useMemoize } from "@vueuse/core";
import { useOrders } from "~/composables/useOrders";
import { normalizeOrder } from "~/utils/normalizeOrders";

export const useNormalizedOrders = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const { orders, isLoading } = useOrders(start, end);

        const normalizedOrders = computed(() => {
            const returnedLineItemUids = new Set<string>();

            for (const order of orders.value) {
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

            return orders.value.map((order) =>
                normalizeOrder(order, returnedLineItemUids),
            );
        });

        const sales = computed(() =>
            normalizedOrders.value.flatMap((order) => order.sales),
        );

        const modifiers = computed(() =>
            sales.value.flatMap((sale) => sale.modifiers),
        );

        const brewedCoffee = computed(() =>
            normalizedOrders.value.flatMap((order) => order.brewedCoffee),
        );

        return {
            normalizedOrders,
            sales,
            modifiers,
            brewedCoffee,
            isLoading,
        };
    },
);
