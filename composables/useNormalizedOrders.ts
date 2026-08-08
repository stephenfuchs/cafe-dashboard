import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useOrders } from "~/composables/useOrders";
import { normalizeOrder } from "~/utils/normalizeOrders";

export const useNormalizedOrders = (
    start: Ref<TZDate | null>,
    end: Ref<TZDate | null>,
) => {
    const { orders, isLoading } = useOrders(start, end);

    const normalizedOrders = computed(() =>
        orders.value.map((order) => normalizeOrder(order)),
    );

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
};
