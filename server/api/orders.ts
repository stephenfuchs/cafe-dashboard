import { parseISO, isValid, formatISO } from "date-fns";
import { createSquareClient } from "../utils/square";
import { gql } from "../../src/gql/gql";
import type { OrdersQuery } from "../../src/gql/graphql";
import { excludeDate, excludeItem } from "../utils/excludes";
import { TZDate } from "@date-fns/tz";

const ORDERS_QUERY = gql(`
    query Orders($startDate: DateTime!, $endDate: DateTime!, $locationID: ID!, $merchantID: ID!, $cursor: Cursor) {
        orders(
            filter: {
                merchantId: { equalToAnyOf: [$merchantID] }
                location: { equalToAnyOf: [$locationID] }
                state: { equalToAnyOf: [COMPLETED] }
                closedAt: { startAt: $startDate, endAt: $endDate }
            }
            first: 100
            after: $cursor
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
                            images {
                                url
                            }
                            categories {
                                category {
                                    id
                                    name
                                    images {
                                        url
                                    }
                                }
                            }
                            modifierListInfos {
                                modifierList {
                                    ordinal
                                    id
                                    name
                                    modifiers {
                                        ordinal
                                        id
                                        name
                                        modifierList {
                                            id
                                            name
                                        }
                                    }
                                }
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
                                images {
                                    url
                                }
                                categories {
                                    category {
                                        id
                                        name
                                    }
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
            }
            pageInfo {
                hasNextPage
                endCursor
            }
        }
    }
`);

//@ts-ignore
BigInt.prototype.toJSON = function () {
    const int = Number.parseInt(this.toString());
    return int ?? this.toString();
};

const getOrders = async (start: string, end: string) => {
    const runtimeConfig = useRuntimeConfig();
    const locationID = runtimeConfig.squareLocationSecret;
    const merchantID = runtimeConfig.squareMerchantSecret;

    const squareClient = createSquareClient();

    try {
        let cursor: string | null = null;
        const orders: NonNullable<OrdersQuery["orders"]>["nodes"] = [];

        do {
            const result: { data?: OrdersQuery } = await squareClient.query({
                query: ORDERS_QUERY,
                variables: {
                    startDate: start,
                    endDate: end,
                    locationID,
                    merchantID,
                    ...(cursor ? { cursor } : {}),
                },
                errorPolicy: "all",
            });

            const data = result.data;

            if (!data?.orders) {
                throw new Error("No orders returned from Square");
            }

            cursor = data.orders.pageInfo.endCursor;
            console.log("CURSOR: ", cursor);

            orders.push(...(data.orders.nodes || []));
            // console.log("UNFILTERED ORDERS: ", orders);
        } while (cursor);

        const convertedDates = orders.map((order) => ({
            ...order,
            closedAt: order.closedAt
                ? formatISO(
                      new TZDate(parseISO(order.closedAt), "America/Chicago"),
                  )
                : null,
        }));

        // console.log("CONVERTED ORDERS: ", convertedDates);

        // Filter the orders based on tenders type (CASH or CARD)
        const filteredOrders = convertedDates.filter((order) => {
            if (!order.closedAt) return false;

            const orderDate = order.closedAt.split(" ")[0];
            if (excludeDate.has(orderDate)) return false;

            const hasExcludedItems =
                Array.isArray(order.lineItems) &&
                order.lineItems.some(
                    (item) => item?.name && excludeItem.has(item.name),
                );
            if (hasExcludedItems) return false;

            return (
                Array.isArray(order.tenders) && // Ensure tenders is an array
                order.tenders.some(
                    (tender) =>
                        tender?.type === "CASH" || tender?.type === "CARD",
                )
            );
        });

        // console.log("FILTERED ORDERS: ", filteredOrders);

        return filteredOrders;
    } catch (error) {
        console.error("error:", error);

        if (typeof error === "object" && error !== null) {
            const err = error as any;

            if (err.graphQLErrors) {
                console.error("Apollo GraphQL Errors:", err.graphQLErrors);
            }

            if (err.networkError && "result" in err.networkError) {
                console.error("Network Error:", err.networkError.result);
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
        console.log("Error Equals: ", JSON.parse(JSON.stringify(e)));
        console.log("Cause: ", (e as any).cause?.result?.errors);
        throw e;
    }
});
