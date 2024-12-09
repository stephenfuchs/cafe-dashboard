import createSquareClient from "../utils/square";
import { ApiError } from "square";

//@ts-ignore
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

export default defineEventHandler(async (event) => {
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

    try {
        const { paymentsApi } = squareClient;

        const response = await paymentsApi.listPayments(
            undefined,
            undefined,
            "DESC",
            undefined,
            locationId
        );

        // Filter and map payments to include only the desired data
        const filteredResults = response.result.payments
            ?.filter((payment) => payment.sourceType === "CARD") // Filter by sourceType
            .map((payment) => ({
                id: payment.id,
                processingFee: payment.processingFee?.[0]?.amountMoney?.amount,
            })); // Map to desired fields

        return filteredResults;
    } catch (error) {
        if (error instanceof ApiError) {
            return createError({
                statusCode: 500,
                statusMessage: "Square API Error",
                data: error.result,
            });
        } else {
            console.log("Unexpected error occurred: ", error);
            return createError({
                statusCode: 500,
                statusMessage: "Unexpected Error",
                data: error,
            });
        }
    }
});
