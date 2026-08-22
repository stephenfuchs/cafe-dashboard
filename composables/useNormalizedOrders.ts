import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useMemoize } from "@vueuse/core";
import { useOrders } from "~/composables/useOrders";
import { normalizeOrder } from "~/utils/normalizeOrders";
import { getReturnedLineItemUids } from "~/utils/normalizeReturns";

export const useNormalizedOrders = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const { orders, isLoading } = useOrders(start, end);

        const normalizedOrders = computed(() => {
            const returnedLineItemUids = getReturnedLineItemUids(orders.value);

            return orders.value.map((order) =>
                normalizeOrder(order, returnedLineItemUids),
            );
        });

        const sales = computed(() =>
            normalizedOrders.value.flatMap((order) => order.sales),
        );

        const brewedCoffee = computed(() =>
            normalizedOrders.value.flatMap((order) => order.brewedCoffee),
        );

        return {
            normalizedOrders,
            sales,
            brewedCoffee,
            isLoading,
        };
    },
);
