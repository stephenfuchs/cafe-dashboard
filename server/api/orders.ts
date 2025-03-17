import { parseISO, isValid, format } from "date-fns";
import { squareClient } from "../utils/square";
import { gql } from "../../src/gql/gql";
import { ApolloError } from "@apollo/client/core";
import { excludeDate, excludeItem } from "../utils/excludes";
import { TZDate } from "@date-fns/tz";

interface Order {
    id: string;
    closedAt: string;
    lineItems: LineItem[];
    discounts: Discount[];
    returns: Return[];
    refunds: Refund[];
    tenders: Tender[];
    totalDiscountMoney: Money;
    totalMoney: Money;
}

interface LineItem {
    uid: string;
    name: string;
    quantity: string;
    itemVariation: ItemVariation;
    modifiers: Modifier[];
    appliedDiscounts: AppliedDiscount[];
    grossSalesMoney: Money;
    totalDiscountMoney: Money;
    totalMoney: Money;
}

interface ItemVariation {
    item: Item;
}

interface Item {
    id: string;
    images: Image[];
    categories: Category[];
    modifierListInfos: ModifierListInfo[];
}

interface Image {
    url: string;
}

interface Category {
    category: {
        id: string;
        name: string;
        images: Image[];
    };
}

interface ModifierListInfo {
    modifierList: ModifierList;
}

interface ModifierList {
    ordinal: number;
    id: string;
    name: string;
    modifiers: Modifier[];
}

interface Modifier {
    ordinal: number;
    id: string;
    name: string;
    modifierList: ModifierList;
}

interface AppliedDiscount {
    uid: string;
    discountUid: string;
    appliedMoney: Money;
}

interface Money {
    amount: number;
}

interface Discount {
    uid: string;
    name: string;
}

interface Return {
    lineItems: LineItem[];
}

interface Refund {
    id: string;
    transactionId: string;
    reason: string;
    processingFeeMoney: Money;
    amountMoney: Money;
}

interface Tender {
    id: string;
    type: string;
    amountMoney: Money;
    payment: Payment;
}

interface Payment {
    processingFees: ProcessingFee[];
}

interface ProcessingFee {
    amountMoney: Money;
}

interface OrdersQueryResult {
    orders: {
        nodes: Order[];
        pageInfo: {
            hasNextPage: boolean;
            endCursor: string | null;
        };
    };
}

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
        let cursor: string | null = null;
        const orders: Order[] = [];
        console.log("Cursor before: ", cursor, "orders is:", orders);
        do {
            let maybeCursor;
            if (cursor) {
                maybeCursor = cursor;
            } else {
                maybeCursor = undefined;
            }

            const result: { data: OrdersQueryResult } =
                await squareClient.query<OrdersQueryResult>({
                    variables: {
                        startDate: start,
                        endDate: end,
                        locationID,
                        merchantID,
                        // There seems to be an issue when we pass through `null` for
                        // the value for `cursor`. This might be an issue with ApolloClient
                        // because the Sqaure GraphQL playground successfully accepts `null`.
                        // The error the Square API returns is: "An internal error has
                        // occurred, and the API was unable to service your request." and
                        // error code is "INTERNAL_SERVER_ERROR".
                        //
                        // Therefore, only include the cursor variable when it has a value
                        // (like in our request for the first page):
                        ...(cursor ? { cursor } : {}),
                    },
                    query: gql(`
                query Orders($startDate: DateTime!, $endDate: DateTime!, $locationID: ID!, $merchantID: ID!, $cursor: Cursor) {
                    orders(
                        filter: {
                            merchantId: { equalToAnyOf: [$merchantID] }
                            location: { equalToAnyOf: [$locationID] }
                            state: { equalToAnyOf: [COMPLETED] }
                            closedAt: { startAt: $startDate, endAt: $endDate }
                        }
                        first: 200
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
            `),
                });

            // cursor = result.data.orders?.pageInfo.endCursor;
            cursor = result.data.orders?.pageInfo.endCursor;
            console.log("CURSOR: ", cursor);

            orders.push(...(result.data.orders?.nodes || []));
            // console.log("UNFILTERED ORDERS: ", orders);
        } while (cursor);

        const convertedDates = orders.map((order) => ({
            ...order,
            closedAt: order.closedAt
                ? format(
                      new TZDate(parseISO(order.closedAt), "America/Chicago"),
                      "MM-dd-yyyy hh:mm aaa",
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
                order.lineItems.some((item) => excludeItem.has(item.name));
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
        // return result.data.orders?.nodes;
    } catch (error) {
        console.error("error:", error);
        if (error instanceof ApolloError) {
            console.error("Apollo GraphQL Errors:", error.graphQLErrors);
            if (error.networkError && "result" in error.networkError) {
                console.error(
                    "Network Error:",
                    (error.networkError as any).result,
                );
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
        console.log("Error Equals: ", JSON.parse(JSON.stringify(e)));
        console.log("Cause: ", (e as any).cause?.result?.errors);
        throw e;
    }
});
