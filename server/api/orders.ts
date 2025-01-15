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
    // const orders: never[] = [];
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
                        tender.type === "CASH" || tender.type === "CARD",
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

    // const filteredResults = orders
    //     ?.map((order) => {
    //         // Filter tenders to include only those with type "CASH" or "CARD"
    //         if (order.tenders) {
    //             const validTender = order.tenders?.filter((tender) =>
    //                 ["CASH", "CARD"].includes(tender.type),
    //             );

    //             // Skip invalid orders
    //             if (!validTender || validTender.length === 0) {
    //                 return null;
    //             }
    //         }

    //         return {
    //             id: order.id,
    //             lineItems: order.lineItems?.map((item) => ({
    //                 uid: item.uid,
    //                 name: item.name,
    //                 quantity: item.quantity,
    //                 catalogObjectId: item.catalogObjectId,
    //                 modifiers: item.modifiers?.map((modifier) => ({
    //                     uid: modifier.uid,
    //                     catalogObjectId: modifier.catalogObjectId,
    //                     name: modifier.name,
    //                 })),
    //                 appliedDiscounts: item.appliedDiscounts?.map(
    //                     (discount) => ({
    //                         uid: discount.uid,
    //                         discountUid: discount.discountUid,
    //                         appliedMoney: discount.appliedMoney?.amount,
    //                     }),
    //                 ),
    //                 grossSalesMoney: item.grossSalesMoney?.amount,
    //                 totalDiscountMoney: item.totalDiscountMoney?.amount,
    //                 totalMoney: item.totalMoney?.amount,
    //             })),
    //             discounts: order.discounts?.map((discount) => ({
    //                 uid: discount.uid,
    //                 catalogObjectId: discount.catalogObjectId,
    //                 name: discount.name,
    //             })),
    //             returns: order.returns?.map((returnItem) => ({
    //                 sourceOrderId: returnItem.sourceOrderId,
    //                 returnLineItems: returnItem.returnLineItems?.map(
    //                     (item) => ({
    //                         uid: item.uid,
    //                         sourceLineItemUid: item.sourceLineItemUid,
    //                         name: item.name,
    //                         quantity: item.quantity,
    //                         catalogObjectId: item.catalogObjectId,
    //                         returnModifiers: item.returnModifiers?.map(
    //                             (modifier) => ({
    //                                 uid: modifier.uid,
    //                                 catalogObjectId:
    //                                     modifier.catalogObjectId,
    //                                 name: modifier.name,
    //                             }),
    //                         ),
    //                         appliedDiscounts: item.appliedDiscounts?.map(
    //                             (discount) => ({
    //                                 uid: discount.uid,
    //                                 discountUid: discount.discountUid,
    //                                 appliedMoney:
    //                                     discount.appliedMoney?.amount,
    //                             }),
    //                         ),
    //                         grossReturnMoney: item.grossReturnMoney?.amount,
    //                         totalDiscountMoney:
    //                             item.totalDiscountMoney?.amount,
    //                         totalMoney: item.totalMoney?.amount,
    //                     }),
    //                 ),
    //                 returnDiscounts: returnItem.returnDiscounts?.map(
    //                     (discount) => ({
    //                         uid: discount.uid,
    //                         catalogObjectId: discount.catalogObjectId,
    //                         name: discount.name,
    //                     }),
    //                 ),
    //             })),
    //             returnAmounts: order.returnAmounts
    //                 ? {
    //                       totalMoney:
    //                           order.returnAmounts.totalMoney?.amount,
    //                   }
    //                 : undefined,
    //             netAmounts: {
    //                 totalMoney: order.netAmounts?.totalMoney?.amount,
    //             },
    //             tenders: order.tenders?.map((tender) => ({
    //                 id: tender.id,
    //                 transactionId: tender.transactionId,
    //                 amountMoney: tender.amountMoney?.amount,
    //                 type: tender.type,
    //             })),
    //             refunds: order.refunds?.map((refund) => ({
    //                 id: refund.id,
    //                 transactionId: refund.transactionId,
    //                 tenderId: refund.tenderId,
    //                 reason: refund.reason,
    //                 amountMoney: refund.amountMoney?.amount,
    //             })),
    //             closedAt: order.closedAt,
    //             totalMoney: order.totalMoney?.amount,
    //             totalDiscountMoney: order.totalDiscountMoney?.amount,
    //             netAmountDueMoney: order.netAmountDueMoney?.amount,
    //         };
    //     })
    //     .filter((order) => order !== null); // Remove any null values

    // return filteredResults;
    // }
    // catch (error) {
    //     if (error instanceof ApiError) {
    //         console.error("Square API Error during order fetch:", error.result);
    //         return createError({
    //             statusCode: 500,
    //             statusMessage: "Error fetching orders from Square API",
    //             data: error.result,
    //         });
    //     } else if (error instanceof Error) {
    //         console.error(
    //             "Unexpected error occurred during order fetching:",
    //             error,
    //         );
    //         return createError({
    //             statusCode: 500,
    //             statusMessage: error.message,
    //             data: error,
    //         });
    //     } else {
    //         return createError({
    //             statusMessage: "Unknown Error",
    //         });
    //     }
    // }
});
