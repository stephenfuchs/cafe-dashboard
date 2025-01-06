export const useSales = () => {
    const { orders, prevOrders } = useOrders(); // Assume orders is a reactive ref

    const refunds = computed(() => {
        // Check whether the orders.value is a valid array
        if (!Array.isArray(orders.value)) return 0;

        const totalCents = orders.value.reduce((sum, order) => {
            return (
                sum +
                (order?.refunds || []).reduce(
                    (refundTotal, refund) =>
                        refundTotal + (refund.amountMoney?.amount || 0),
                    0,
                )
            );
        }, 0);
        return totalCents;
    });

    const netSales = computed(() => {
        // Check whether the orders.value is a valid array
        if (!Array.isArray(orders.value)) return 0;

        // Sum up the total amount in cents
        const totalCents = orders.value.reduce(
            (sum, order) => sum + (order?.totalMoney?.amount || 0),
            0,
        );

        // Convert to dollars and format as currency
        return (totalCents - refunds.value) / 100;
    });
};
