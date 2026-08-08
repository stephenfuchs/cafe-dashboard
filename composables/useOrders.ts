import { TZDate } from "@date-fns/tz";
import {
    formatISO,
    eachDayOfInterval,
    format,
    isBefore,
    startOfToday,
} from "date-fns";
import type { OrdersQuery } from "../src/gql/graphql";
import { useMemoize } from "@vueuse/core";
import {
    saveOrdersToCache,
    getOrdersFromCache,
} from "~/composables/useIndexDB";

type Order = NonNullable<OrdersQuery["orders"]>["nodes"][number];

export const useOrders = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const isLoading = ref(false);

        // Use shallowReactive() for performance because we don't need to deeply track changes
        const allOrders = useState<Record<string, Order[]>>("orders", () =>
            shallowReactive({}),
        );

        // Array of strings like ["2025-05-18", "2025-05-19"...]
        const dateKeys = computed(() =>
            dateRange.value.map((date) => format(date, "yyyy-MM-dd")),
        );

        const orders = computed<Order[]>(() => {
            const result: Order[] = [];
            for (const key of dateKeys.value) {
                const list = allOrders.value[key];
                if (list) result.push(...list);
            }
            return result;
        });

        // Generate the array of dates in the range
        const dateRange = computed(() => {
            if (!start.value || !end.value) return [];
            return eachDayOfInterval({ start: start.value, end: end.value });
        });

        watch(
            [start, end],
            async () => {
                if (!start.value || !end.value) {
                    return;
                }

                console.log("Date range:", dateRange.value);

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
                isLoading.value = true;
                for (const [rangeStart, rangeEnd] of fetchRanges) {
                    await new Promise((resolve) => setTimeout(resolve, 100));
                    try {
                        console.log("rangeEnd: ", rangeEnd);
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
                            if (dateKey < rangeStart || dateKey > rangeEnd)
                                return;

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
                    (item) => item?.grossSalesMoney?.amount ?? 0,
                ),
            ),
        );

        const netSales = computed(
            () =>
                calcTotal(
                    orders.value,
                    (order: Order) => order?.totalMoney?.amount ?? 0,
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
            computed(() => {
                // Build a map of original order ID -> amount returned.
                //
                // A return order points back to the original sale through:
                // return.source.id
                const returnedAmountsByOrderId = new Map<string, number>();

                for (const returnOrder of orders.value) {
                    for (const orderReturn of returnOrder.returns ?? []) {
                        const sourceOrderId = orderReturn?.source?.id;

                        if (!sourceOrderId) continue;

                        const returnedAmount =
                            orderReturn?.amounts?.totalMoney?.amount ?? 0;

                        returnedAmountsByOrderId.set(
                            sourceOrderId,
                            (returnedAmountsByOrderId.get(sourceOrderId) ?? 0) +
                                returnedAmount,
                        );
                    }
                }

                return calcTotal(orders.value, (order: Order) => {
                    // A return order itself is not a payment.
                    if ((order.returns?.length ?? 0) > 0) {
                        return 0;
                    }

                    const tenderAmount = calcTotal(
                        order.tenders ?? [],
                        (tender) =>
                            tender?.type === tenderType
                                ? tender?.amountMoney?.amount || 0
                                : 0,
                    );

                    const returnedAmount =
                        returnedAmountsByOrderId.get(order.id ?? "") ?? 0;

                    return Math.max(0, tenderAmount - returnedAmount);
                });
            });

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
            isLoading,
        };
    },
);
