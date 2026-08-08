import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useNormalizedOrders } from "~/composables/useNormalizedOrders";
import { imagesCoffee } from "~/server/utils/mappings";

export const useBrewedCoffeeAnalytics = (
    start: Ref<TZDate | null>,
    end: Ref<TZDate | null>,
    previousStart: Ref<TZDate | null>,
    previousEnd: Ref<TZDate | null>,
) => {
    const { brewedCoffee, isLoading } = useNormalizedOrders(start, end);

    const { brewedCoffee: previousBrewedCoffee, isLoading: prevIsLoading } =
        useNormalizedOrders(previousStart, previousEnd);

    const coffeeTotals = computed(() => {
        const totals = new Map<
            string,
            {
                flavor: string;
                quantity: number;
                previousQuantity: number;
                trendQuantity: number;
                image: string;
            }
        >();

        for (const event of brewedCoffee.value) {
            const existing = totals.get(event.flavor);

            if (existing) {
                existing.quantity += event.quantity;
            } else {
                totals.set(event.flavor, {
                    flavor: event.flavor,
                    quantity: event.quantity,
                    previousQuantity: 0,
                    trendQuantity: 0,
                    image:
                        imagesCoffee[event.flavor] ?? "/img/item-default.png",
                });
            }
        }

        for (const event of previousBrewedCoffee.value) {
            const existing = totals.get(event.flavor);

            if (existing) {
                existing.previousQuantity += event.quantity;
            } else {
                totals.set(event.flavor, {
                    flavor: event.flavor,
                    quantity: 0,
                    previousQuantity: event.quantity,
                    trendQuantity: -event.quantity,
                    image:
                        imagesCoffee[event.flavor] ?? "/img/item-default.png",
                });
            }
        }

        for (const coffee of totals.values()) {
            coffee.trendQuantity = coffee.quantity - coffee.previousQuantity;
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
        prevIsLoading,
    };
};
