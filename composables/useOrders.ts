import axios from "axios";
import { formatISO } from "date-fns";

export const useOrders = () => {
    const filters = useFilters();

    const orders = useState("orders", () => []);

    watch([filters.startDate, filters.endDate], async () => {
        if (!filters.startDate.value || !filters.endDate.value) {
            return;
        }

        try {
            const response = await axios.get(
                `/api/orders?startDate=${formatISO(filters.startDate.value)}&endDate=${formatISO(filters.endDate.value)}`,
            ); // Use your actual API endpoint
            orders.value = response.data;
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    });

    return { orders };
};
