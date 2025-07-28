import { TZDate } from "@date-fns/tz";
import {
    formatISO,
    eachDayOfInterval,
    format,
    isToday,
    isBefore,
    startOfToday,
} from "date-fns";
import type { Order } from "../src/gql/graphql";
import { useMemoize } from "@vueuse/core";
import {
    saveOrdersToCache,
    getOrdersFromCache,
} from "~/composables/useIndexDB";

export const useOrders = useMemoize(
    (start: Ref<TZDate>, end: Ref<TZDate>) => {
        // const dateKey = computed(
        //     () => `${formatISO(start.value)}_to_${formatISO(end.value)}`,
        // );

        // Use shallowReactive() for performance because we don't need to deeply track changes
        const allOrders = useState<Record<string, Order[]>>("orders", () =>
            shallowReactive({}),
        );

        // Array of strings like ["2025-05-18", "2025-05-19"...]
        const dateKeys = computed(() =>
            dateRange.value.map((date) => format(date, "yyyy-MM-dd")),
        );

        const orders = computed<Order[]>(() =>
            dateKeys.value.map((key) => allOrders.value[key] || []).flat(),
        );

        // Generate the array of dates in the range
        const dateRange = computed(() =>
            eachDayOfInterval({
                start: start.value,
                end: end.value,
            }),
        );

        watch(
            [start, end],
            async () => {
                if (!start.value || !end.value) {
                    return;
                }

                console.log("Date range:", dateRange);

                const cachedResults = await Promise.all(
                    dateKeys.value.map(getOrdersFromCache),
                );

                console.log("cachedResults: ", cachedResults);

                // Loop through each date key and insert any existing cached data (from IndexedDB)
                // into the shared `allOrders` store. This ensures any orders we already have
                // don’t get refetched unnecessarily.
                dateKeys.value.forEach((key, i) => {
                    const cached = cachedResults[i];
                    if (cached) {
                        allOrders.value[key] = cached;
                    }
                });

                // Determine which dateKeys are missing from the cache,
                // and group those missing keys into contiguous (consecutive) date ranges.
                // This lets us minimize the number of $fetch calls by batching adjacent missing dates
                // into a single API request instead of one per day.
                const fetchRanges: Array<[string, string]> = [];
                let rangeStart: string | null = null;

                dateKeys.value.forEach((key, i) => {
                    if (!cachedResults[i]) {
                        // If this is the first uncached day in a stretch, mark the beginning of a new range.
                        if (rangeStart === null) {
                            rangeStart = key;
                        }
                    } else if (rangeStart !== null) {
                        // If we hit a cached day while a range is open, it means the current missing range ends here.
                        // We store the range from the first missing day up to the previous day.
                        fetchRanges.push([rangeStart, dateKeys.value[i - 1]]);
                        rangeStart = null;
                    }
                });

                // If we reached the end of the loop while still tracking a missing range,
                // we finalize that range to include the last dateKey in the list.
                if (rangeStart !== null) {
                    fetchRanges.push([
                        rangeStart,
                        dateKeys.value[dateKeys.value.length - 1],
                    ]);
                }

                console.log("fetchRanges: ", fetchRanges);
                // Fetch and cache missing data
                await Promise.all(
                    fetchRanges.map(async ([rangeStart, rangeEnd]) => {
                        try {
                            console.log("rangeEnd: ", rangeEnd);
                            // debugger;
                            const response: Order[] = await $fetch(
                                "/api/orders",
                                {
                                    params: {
                                        startDate: formatISO(
                                            rangeStart + "T00:00:00",
                                        ),
                                        endDate: formatISO(
                                            rangeEnd + "T23:59:59",
                                        ),
                                    },
                                },
                            );

                            dateKeys.value.forEach((dateKey) => {
                                if (
                                    dateKey < rangeStart ||
                                    dateKey > rangeEnd ||
                                    isToday(new Date(dateKey))
                                )
                                    return;

                                const ordersForKey = response.filter(
                                    (order) => {
                                        if (!order.closedAt) return false;
                                        const orderDate = format(
                                            new Date(order.closedAt),
                                            "yyyy-MM-dd",
                                        );
                                        return orderDate === dateKey;
                                    },
                                );

                                allOrders.value[dateKey] = ordersForKey;
                                if (
                                    isBefore(
                                        `${dateKey}T00:00:00`,
                                        startOfToday(),
                                    )
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
                    }),
                );
            },
            { immediate: true },
        );

        const calcTotal = <T>(
            array: T[] | undefined,
            callback: (item: T) => number,
        ): number =>
            (array ?? []).reduce((sum, item) => sum + callback(item), 0);

        const refunds = computed(() =>
            calcTotal(orders.value, (order: Order) =>
                calcTotal(
                    order.refunds ?? [],
                    (refund) => refund?.amountMoney?.amount ?? 0,
                ),
            ),
        );

        const discounts = computed(() =>
            calcTotal(
                orders.value,
                (order: Order) => order?.totalDiscountMoney?.amount || 0,
            ),
        );

        const grossSales = computed(() =>
            calcTotal(orders.value, (order: Order) =>
                calcTotal(
                    order.lineItems ?? [],
                    (item) => item?.grossSalesMoney?.amount,
                ),
            ),
        );

        const netSales = computed(
            () =>
                calcTotal(
                    orders.value,
                    (order: Order) => order?.totalMoney?.amount,
                ) - refunds.value,
        );

        const fees = computed(() =>
            calcTotal(orders.value, (order: Order) =>
                calcTotal(
                    order.tenders ?? [],
                    (tender) =>
                        tender?.payment?.processingFees?.reduce(
                            (feeTotal, fee) =>
                                feeTotal + (fee.amountMoney?.amount || 0),
                            0,
                        ) || 0,
                ),
            ),
        );

        const netTotal = computed(() => netSales.value - fees.value);

        const transactions = computed(() =>
            calcTotal(orders.value, (order: Order) =>
                order.refunds?.length ? 0 : 1,
            ),
        );

        const avgTransaction = computed(() =>
            transactions.value === 0
                ? 0
                : grossSales.value / transactions.value,
        );

        const tenderTotal = (tenderType: string) =>
            computed(() =>
                calcTotal(orders.value, (order: Order) =>
                    calcTotal(order.tenders ?? [], (tender) =>
                        tender?.type === tenderType
                            ? tender?.amountMoney?.amount || 0
                            : 0,
                    ),
                ),
            );

        const cashPayments = tenderTotal("CASH");
        const cardPayments = tenderTotal("CARD");

        return {
            orders,
            netSales,
            transactions,
            grossSales,
            avgTransaction,
            discounts,
            cashPayments,
            cardPayments,
            fees,
            netTotal,
        };
    },
    {
        getKey: (start, end) =>
            [start.value?.getTime(), end.value?.getTime()].join(),
    },
);
