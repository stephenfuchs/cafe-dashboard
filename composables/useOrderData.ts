import { TZDate } from "@date-fns/tz";
import {
    eachDayOfInterval,
    format,
    formatISO,
    isBefore,
    startOfToday,
} from "date-fns";
import { useMemoize } from "@vueuse/core";
import type { OrdersQuery } from "../src/gql/graphql";
import {
    getOrdersFromCache,
    saveOrdersToCache,
} from "~/composables/useIndexDB";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const useOrderData = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const isLoading = ref(false);

        // Keep orders grouped by local business date so cached days can be
        // reused independently and API requests only cover missing dates.
        const allOrders = useState<Record<string, Order[]>>("orders", () =>
            shallowReactive({}),
        );

        // Generate the array of dates in the requested range.
        const dateRange = computed(() => {
            if (!start.value || !end.value) return [];

            return eachDayOfInterval({
                start: start.value,
                end: end.value,
            });
        });

        // Use the Chicago business date as the cache/state key.
        const dateKeys = computed(() =>
            dateRange.value.map((date) => format(date, "yyyy-MM-dd")),
        );

        const orders = computed<Order[]>(() => {
            const result: Order[] = [];

            for (const key of dateKeys.value) {
                const list = allOrders.value[key];

                if (list) {
                    result.push(...list);
                }
            }

            return result;
        });

        watch(
            [start, end],
            async () => {
                if (!start.value || !end.value) {
                    return;
                }

                const cachedResults = await Promise.all(
                    dateKeys.value.map(getOrdersFromCache),
                );

                // Insert cached days into the shared order store before
                // determining which dates still need to be fetched.
                dateKeys.value.forEach((key, i) => {
                    const cached = cachedResults[i];

                    if (cached) {
                        allOrders.value[key] = cached;
                    }
                });

                // Group consecutive uncached dates into ranges so adjacent
                // missing days can be fetched with a single API request.
                const fetchRanges: Array<[string, string]> = [];
                let rangeStart: string | null = null;

                dateKeys.value.forEach((key, i) => {
                    if (!cachedResults[i]) {
                        if (rangeStart === null) {
                            rangeStart = key;
                        }
                    } else if (rangeStart !== null) {
                        fetchRanges.push([rangeStart, dateKeys.value[i - 1]]);

                        rangeStart = null;
                    }
                });

                if (rangeStart !== null) {
                    fetchRanges.push([
                        rangeStart,
                        dateKeys.value[dateKeys.value.length - 1],
                    ]);
                }

                isLoading.value = true;

                for (const [rangeStart, rangeEnd] of fetchRanges) {
                    // Space Square API requests by 100ms to stay within Square's rate limits.
                    await new Promise((resolve) => setTimeout(resolve, 100));

                    try {
                        const response: Order[] = await $fetch("/api/orders", {
                            params: {
                                startDate: formatISO(rangeStart + "T00:00:00"),
                                endDate: formatISO(rangeEnd + "T23:59:59"),
                            },
                        });

                        const ordersByDate: Record<string, Order[]> = {};

                        for (const order of response) {
                            if (!order.closedAt) continue;

                            const orderDate = order.closedAt.split("T")[0];

                            if (!ordersByDate[orderDate]) {
                                ordersByDate[orderDate] = [];
                            }

                            ordersByDate[orderDate].push(order);
                        }

                        dateKeys.value.forEach((dateKey) => {
                            if (dateKey < rangeStart || dateKey > rangeEnd) {
                                return;
                            }

                            const ordersForKey = ordersByDate[dateKey] ?? [];

                            allOrders.value[dateKey] = ordersForKey;

                            if (
                                isBefore(`${dateKey}T00:00:00`, startOfToday())
                            ) {
                                saveOrdersToCache(dateKey, ordersForKey);
                            }
                        });
                    } catch (error) {
                        console.error(
                            `Failed to fetch orders from ${rangeStart} to ${rangeEnd}:`,
                            error,
                        );
                    }
                }

                isLoading.value = false;
            },
            { immediate: true },
        );

        return {
            orders,
            isLoading,
        };
    },
);
