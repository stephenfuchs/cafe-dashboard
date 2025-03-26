import { TZDate } from "@date-fns/tz";
import { formatISO } from "date-fns";
import type { Order } from "../src/gql/graphql";
import { useMemoize } from "@vueuse/core";

export const useOrders = useMemoize(
    (start: Ref<TZDate | null>, end: Ref<TZDate | null>) => {
        const dateKey = computed(() =>
            start.value && end.value
                ? `${formatISO(start.value)}_to_${formatISO(end.value)}`
                : "",
        );

        const allOrders = useState<Record<string, Order[]>>(
            "orders",
            () => ({}),
        );
        const orders = computed<Order[]>({
            get: () => allOrders.value[dateKey.value] || [],
            set: (newOrders) => (allOrders.value[dateKey.value] = newOrders),
        });

        // const isLoading = ref(false);

        watch(
            [start, end],
            async () => {
                if (!start.value || !end.value) {
                    return;
                }

                // isLoading.value = true;
                // console.log("Loading orders...");

                try {
                    const response: Order[] = await $fetch("/api/orders", {
                        params: {
                            startDate: formatISO(start.value),
                            endDate: formatISO(end.value),
                        },
                    });

                    orders.value = response;
                    // console.log("Orders loaded successfully.");
                } catch (error) {
                    console.error("Error fetching orders:", error);
                } finally {
                    // isLoading.value = false;
                    // console.log("Loading complete.");
                }
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
);

// import { TZDate } from "@date-fns/tz";
// import { formatISO, eachDayOfInterval, format, isToday } from "date-fns";
// import type { Order } from "../src/gql/graphql";
// import { useMemoize } from "@vueuse/core";
// import {
//     saveOrdersToCache,
//     getOrdersFromCache,
// } from "~/composables/useIndexDB";

// export const useOrders = useMemoize((start: Ref<TZDate>, end: Ref<TZDate>) => {
//     const dateKey = computed(
//         () => `${formatISO(start.value)}_to_${formatISO(end.value)}`,
//     );

//     const allOrders = useState<Record<string, Order[]>>("orders", () => ({}));
//     const orders = computed<Order[]>({
//         get: () => allOrders.value[dateKey.value] || [],
//         set: (newOrders) => (allOrders.value[dateKey.value] = newOrders),
//     });

//     watch([start, end], async () => {
//         if (!start.value || !end.value) {
//             return;
//         }

//         // Generate the array of dates in the range
//         const dateRange = eachDayOfInterval({
//             start: start.value,
//             end: end.value,
//         });

//         console.log("Date range:", dateRange);

//         // Create the object to store orders by date
//         const toSaveToCache: Record<string, Order[]> = {};

//         for (const date of dateRange) {
//             const dateKey = format(date, "yyyy-MM-dd"); // Convert date to string key

//             if (isToday(date)) continue; // Skip caching today's orders

//             // Check if data exists in IndexedDB
//             const cachedOrders = await getOrdersFromCache(dateKey);
//             if (cachedOrders && cachedOrders.length > 0) {
//                 console.log(
//                     `Loaded ${cachedOrders.length} orders from cache for ${dateKey}`,
//                 );
//                 allOrders.value[dateKey] = cachedOrders;
//                 continue; // Skip processing for this date
//             }
//         }

//         try {
//             const response: Order[] = await $fetch("/api/orders", {
//                 params: {
//                     startDate: formatISO(start.value),
//                     endDate: formatISO(end.value),
//                 },
//             });

//             orders.value = response;

//             // Filter orders for each date and store them in toSaveToCache
//             dateRange.forEach((date) => {
//                 const dateKey = format(date, "yyyy-MM-dd");
//                 if (isToday(date)) return; // skip caching today's orders

//                 // Only add to `toSaveToCache` if it's NOT already in IndexedDB
//                 if (!allOrders.value[dateKey]) {
//                     toSaveToCache[dateKey] = response.filter((order) => {
//                         if (!order.closedAt) return false;

//                         const orderDate = format(
//                             new Date(order.closedAt),
//                             "yyyy-MM-dd",
//                         );

//                         return orderDate === dateKey;
//                     });
//                 }
//             });

//             // Only save if there's something new to cache
//             if (Object.keys(toSaveToCache).length > 0) {
//                 // Save to IndexedDB
//                 for (const key in toSaveToCache) {
//                     await saveOrdersToCache(key, toSaveToCache[key]);
//                 }

//                 console.log("toSaveToCache:", toSaveToCache);
//             }
//         } catch (error) {
//             console.error("Error fetching orders:", error);
//         }
//     });

//     const calcTotal = <T>(
//         array: T[] | undefined,
//         callback: (item: T) => number,
//     ): number => (array ?? []).reduce((sum, item) => sum + callback(item), 0);

//     const refunds = computed(() =>
//         calcTotal(orders.value, (order: Order) =>
//             calcTotal(
//                 order.refunds ?? [],
//                 (refund) => refund?.amountMoney?.amount ?? 0,
//             ),
//         ),
//     );

//     const discounts = computed(() =>
//         calcTotal(
//             orders.value,
//             (order: Order) => order?.totalDiscountMoney?.amount || 0,
//         ),
//     );

//     const grossSales = computed(() =>
//         calcTotal(orders.value, (order: Order) =>
//             calcTotal(
//                 order.lineItems ?? [],
//                 (item) => item?.grossSalesMoney?.amount,
//             ),
//         ),
//     );

//     const netSales = computed(
//         () =>
//             calcTotal(
//                 orders.value,
//                 (order: Order) => order?.totalMoney?.amount,
//             ) - refunds.value,
//     );

//     const fees = computed(() =>
//         calcTotal(orders.value, (order: Order) =>
//             calcTotal(
//                 order.tenders ?? [],
//                 (tender) =>
//                     tender?.payment?.processingFees?.reduce(
//                         (feeTotal, fee) =>
//                             feeTotal + (fee.amountMoney?.amount || 0),
//                         0,
//                     ) || 0,
//             ),
//         ),
//     );

//     const netTotal = computed(() => netSales.value - fees.value);

//     const transactions = computed(() =>
//         calcTotal(orders.value, (order: Order) =>
//             order.refunds?.length ? 0 : 1,
//         ),
//     );

//     const avgTransaction = computed(() =>
//         transactions.value === 0 ? 0 : grossSales.value / transactions.value,
//     );

//     const tenderTotal = (tenderType: string) =>
//         computed(() =>
//             calcTotal(orders.value, (order: Order) =>
//                 calcTotal(order.tenders ?? [], (tender) =>
//                     tender?.type === tenderType
//                         ? tender?.amountMoney?.amount || 0
//                         : 0,
//                 ),
//             ),
//         );

//     const cashPayments = tenderTotal("CASH");
//     const cardPayments = tenderTotal("CARD");

//     return {
//         orders,
//         netSales,
//         transactions,
//         grossSales,
//         avgTransaction,
//         discounts,
//         cashPayments,
//         cardPayments,
//         fees,
//         netTotal,
//     };
// });
