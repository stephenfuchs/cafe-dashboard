import createSquareClient from "../utils/square";
import { ApiError } from "square";

export default defineEventHandler(async (event) => {
    const runtimeConfig = useRuntimeConfig();
    const squareClient = createSquareClient({
        apiKey: runtimeConfig.squareApiSecret,
    });

    const { locationsApi } = squareClient;

    try {
        const {
            result: { locations },
        } = await locationsApi.listLocations();

        return locations;
    } catch (error) {
        if (error instanceof ApiError) {
            console.log("error:", error.result);
        } else {
            console.log("Unexpected error occurred: ", error);
        }
    }
});
