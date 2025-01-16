import { parseISO, isValid } from "date-fns";
import { squareClient } from "../utils/square";
import { gql } from "../../src/gql/gql";
import { ApolloError } from "@apollo/client/core";

//@ts-ignore
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const getOrders = async (start: string, end: string) => {
    const runtimeConfig = useRuntimeConfig();
    const locationID = runtimeConfig.squareLocationSecret;
    const merchantID = runtimeConfig.squareMerchantSecret;

    try {
        const result = await squareClient.query({
            variables: {
                startDate: start,
                endDate: end,
                locationID,
                merchantID,
            },
            query: gql(`
            query Orders($startDate: DateTime!, $endDate: DateTime!, $locationID: ID!, $merchantID: ID!) {
                orders(
                    filter: {
                        merchantId: { equalToAnyOf: [$merchantID] }
                        location: { equalToAnyOf: [$locationID] }
                        state: { equalToAnyOf: [COMPLETED] }
                        closedAt: { startAt: $startDate, endAt: $endDate }
                    }
                ) {
                    nodes {
                        id
                        closedAt
                        lineItems {
                            uid
                            name
                            quantity
                            itemVariation {
                                item {
                                    id
                                    categories {
                                        category {
                                            id
                                            name
                                            images {
                                                url
                                            }
                                        }
                                    }
                                    images {
                                        url
                                    }
                                }
                            }
                            modifiers {
                                uid
                                name
                            }
                            appliedDiscounts {
                                uid
                                discountUid
                                appliedMoney {
                                    amount
                                }
                            }
                            grossSalesMoney {
                                amount
                            }
                            totalDiscountMoney {
                                amount
                            }
                            totalMoney {
                                amount
                            }
                        }
                        discounts {
                            uid
                            name
                        }
                        returns {
                            lineItems {
                                name
                                quantity
                                sourceLineItemUid
                                uid
                                itemVariation {
                                    item {
                                        id
                                        categories {
                                            category {
                                                id
                                                name
                                                images {
                                                    url
                                                }
                                            }
                                        }
                                        images {
                                            url
                                        }
                                    }
                                }
                            }
                        }
                        refunds {
                            id
                            transactionId
                            reason
                            processingFeeMoney {
                                amount
                            }
                            amountMoney {
                                amount
                            }
                        }
                        tenders {
                            id
                            type
                            amountMoney {
                                amount
                            }
                            payment {
                                processingFees {
                                    amountMoney {
                                        amount
                                    }
                                }
                            }
                        }
                        totalDiscountMoney {
                            amount
                        }
                        totalMoney {
                            amount
                        }
                        merchantId
                    }
                }
            }
        `),
        });

        // let cursor: SearchOrdersResponse["cursor"];
        // do {
        //     const response = await ordersApi.searchOrders({
        //         locationIds: [runtimeConfig.squareLocationSecret],
        //         query: {
        //             filter: {
        //                 stateFilter: {
        //                     states: ["COMPLETED"],
        //                 },
        //                 dateTimeFilter: {
        //                     closedAt: {
        //                         startAt: start,
        //                         endAt: end,
        //                     },
        //                 },
        //             },
        //             sort: {
        //                 sortField: "CLOSED_AT",
        //                 sortOrder: "ASC",
        //             },
        //         },
        //         limit: 1000,
        //         returnEntries: false,
        //         cursor,
        //     });

        //     cursor = response.result.cursor;

        //     orders.push(...(response.result.orders || []));
        // } while (cursor);

        // Filter the orders based on tenders type (CASH or CARD)
        const filteredOrders = result.data.orders?.nodes.filter(
            (order) =>
                Array.isArray(order.tenders) && // Ensure tenders is an array
                order.tenders.some(
                    (tender) =>
                        tender?.type === "CASH" || tender?.type === "CARD",
                ),
        );

        return filteredOrders;
        // return result.data.orders?.nodes;
    } catch (error) {
        if (error instanceof ApolloError) {
            console.error("Apollo GraphQL Errors:", error.graphQLErrors);
            if (error.networkError) {
                console.error("Network Error:", error.networkError);
            }
        } else {
            console.error("Unexpected Error:", error);
        }
        throw error; // Re-throw the error after logging it
    }
};

// 1. Make /orders accept startDate and endDate query string params:
//    /orders?startDate=2024-01-01&endDate=2024-01-07
//    Figure out how to get the provided query string params in orders.ts
// 2. Use date-fns to parse those dates:
//     1. make sure they're valid, if they're not valid, what should we do with them? Ignore them? Or return with an error code?
//     2. Make two variables for holding start date and end date, and use date-fns functions for making the end date be at time = 23:59:59
//     3. Pass those dates into the Square API

export default defineEventHandler(async (event) => {
    const startDate = getQuery(event).startDate;
    const endDate = getQuery(event).endDate;

    // try {
    if (
        !isValid(parseISO(String(startDate))) ||
        !isValid(parseISO(String(endDate)))
    ) {
        throw new Error("Proper Date Not Found");
    }
    try {
        const orders = await getOrders(String(startDate), String(endDate));

        return orders;
    } catch (e) {
        console.log("ERrOr eQuaLs: ", JSON.parse(JSON.stringify(e)));
        throw e;
    }
});
