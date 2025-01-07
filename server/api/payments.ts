import { parseISO, isValid } from "date-fns";
import createSquareClient from "../utils/square";
import { ApiError, SearchOrdersResponse } from "square";

//@ts-ignore
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const getFees = async (start: string, end: string) => {
    const payments = [];
    const runtimeConfig = useRuntimeConfig();
    const squareClient = createSquareClient({
        apiKey: runtimeConfig.squareApiSecret,
    });

    // Fetch locations
    const locations = await $fetch("/api/locations");
    const locationId = locations?.[0]?.id;

    if (!locationId) {
        throw new Error("Location ID Not Found");
    }

    const { paymentsApi } = squareClient;
    let cursor: SearchOrdersResponse["cursor"];

    do {
        const response = await paymentsApi.listPayments(
            start,
            end,
            "DESC",
            cursor,
            locationId,
        );

        cursor = response.result.cursor;

        payments.push(...(response.result.payments || []));
    } while (cursor);

    return payments;
};

export default defineEventHandler(async (event) => {
    const startDate = getQuery(event).startDate;
    const endDate = getQuery(event).endDate;

    try {
        if (
            !isValid(parseISO(String(startDate))) ||
            !isValid(parseISO(String(endDate)))
        ) {
            throw new Error("Proper Date Not Found");
        }
        const orders = await getFees(String(startDate), String(endDate));

        const filteredResults = orders
            ?.filter(
                (order) =>
                    order.sourceType === "CARD" && order.status != "FAILED",
            ) // Filter by sourceType
            .map((order) => ({
                id: order.orderId,
                processingFee: order.processingFee?.[0]?.amountMoney?.amount,
            })); // Map to desired fields

        return filteredResults;
    } catch (error) {
        if (error instanceof ApiError) {
            console.error("Square API Error during order fetch:", error.result);
            return createError({
                statusCode: 500,
                statusMessage: "Error fetching orders from Square API",
                data: error.result,
            });
        } else if (error instanceof Error) {
            console.error(
                "Unexpected error occurred during order fetching:",
                error,
            );
            return createError({
                statusCode: 500,
                statusMessage: error.message,
                data: error,
            });
        } else {
            return createError({
                statusMessage: "Unknown Error",
            });
        }
    }
});
