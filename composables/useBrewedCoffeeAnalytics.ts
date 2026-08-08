import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useNormalizedOrders } from "~/composables/useNormalizedOrders";
import { imagesCoffee } from "~/server/utils/mappings";

export const useBrewedCoffeeAnalytics = (
    start: Ref<TZDate | null>,
    end: Ref<TZDate | null>,
) => {
    const { brewedCoffee, isLoading } = useNormalizedOrders(start, end);

    const coffeeTotals = computed(() => {
        const totals = new Map<
            string,
            {
                flavor: string;
                quantity: number;
                image: string;
            }
        >();

        for (const event of brewedCoffee.value) {
            const existing = totals.get(event.flavor);

            if (existing) {
                existing.quantity += event.quantity;
                continue;
            }

            totals.set(event.flavor, {
                flavor: event.flavor,

                quantity: event.quantity,

                image: imagesCoffee[event.flavor] ?? "/img/item-default.png",
            });
        }

        return Array.from(totals.values()).sort(
            (a, b) => b.quantity - a.quantity,
        );
    });

    const totalPots = computed(() =>
        coffeeTotals.value.reduce((sum, coffee) => sum + coffee.quantity, 0),
    );

    return {
        coffeeTotals,
        totalPots,
        isLoading,
    };
};
