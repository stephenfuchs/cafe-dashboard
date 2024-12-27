import axios from "axios";
import { formatISO } from "date-fns";
import { createSharedComposable } from "@vueuse/core";

export const useOrders = createSharedComposable(() => {
    const filters = useFilters();

    const orders = ref([]);

    watch(
        [() => filters.startDate.value, () => filters.endDate.value],
        async () => {
            if (!filters.startDate.value || !filters.endDate.value) {
                return;
            }
            console.log(
                formatISO(filters.startDate.value),
                formatISO(filters.endDate.value),
            );

            try {
                const response = await axios.get(
                    `/api/orders?startDate=${formatISO(filters.startDate.value)}&endDate=${formatISO(filters.endDate.value)}`,
                ); // Use your actual API endpoint
                orders.value = response.data;
            } catch (error) {
                console.error("Error fetching orders:", error);
            }
        },
    );

    return { orders };
});
