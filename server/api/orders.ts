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
        throw new Error("Location ID Not Fount");
    }

    try {
        const { ordersApi } = squareClient;

        const response = await ordersApi.searchOrders({
            locationIds: [locationId],
            query: {
                filter: {
                    stateFilter: {
                        states: ["COMPLETED"],
                    },
                },
                sort: {
                    sortField: "CLOSED_AT",
                    sortOrder: "DESC",
                },
            },
            limit: 1000,
            returnEntries: false,
        });

        const filteredResults = response.result.orders?.map((order) => ({
            id: order.id,
            lineItems: order.lineItems?.map((item) => ({
                uid: item.uid,
                name: item.name,
                quantity: item.quantity,
                catalogObjectId: item.catalogObjectId,
                modifiers: item.modifiers?.map((modifier) => ({
                    uid: modifier.uid,
                    catalogObjectId: modifier.catalogObjectId,
                    name: modifier.name,
                })),
                appliedDiscounts: item.appliedDiscounts?.map((discount) => ({
                    uid: discount.uid,
                    discountUid: discount.discountUid,
                    appliedMoney: {
                        amount: discount.appliedMoney?.amount,
                    },
                })),
                grossSalesMoney: {
                    amount: item.grossSalesMoney?.amount,
                },
                totalDiscountMoney: {
                    amount: item.totalDiscountMoney?.amount,
                },
                totalMoney: {
                    amount: item.totalMoney?.amount,
                },
            })),
            discounts: order.discounts?.map((discount) => ({
                uid: discount.uid,
                catalogObjectId: discount.catalogObjectId,
                name: discount.name,
            })),
            returns: order.returns?.map((returnItem) => ({
                sourceOrderId: returnItem.sourceOrderId,
                returnLineItems: returnItem.returnLineItems?.map((item) => ({
                    uid: item.uid,
                    sourceLineItemUid: item.sourceLineItemUid,
                    name: item.name,
                    quantity: item.quantity,
                    catalogObjectId: item.catalogObjectId,
                    returnModifiers: item.returnModifiers?.map((modifier) => ({
                        uid: modifier.uid,
                        catalogObjectId: modifier.catalogObjectId,
                        name: modifier.name,
                    })),
                    appliedDiscounts: item.appliedDiscounts?.map(
                        (discount) => ({
                            uid: discount.uid,
                            discountUid: discount.discountUid,
                            appliedMoney: {
                                amount: discount.appliedMoney?.amount,
                            },
                        })
                    ),
                    grossReturnMoney: {
                        amount: item.grossReturnMoney?.amount,
                    },
                    totalDiscountMoney: {
                        amount: item.totalDiscountMoney?.amount,
                    },
                    totalMoney: {
                        amount: item.totalMoney?.amount,
                    },
                })),
                returnDiscounts: returnItem.returnDiscounts?.map(
                    (discount) => ({
                        uid: discount.uid,
                        catalogObjectId: discount.catalogObjectId,
                        name: discount.name,
                    })
                ),
            })),
            returnAmounts: order.returnAmounts
                ? {
                      totalMoney: {
                          amount: order.returnAmounts.totalMoney?.amount,
                      },
                  }
                : undefined,
            netAmounts: {
                totalMoney: {
                    amount: order.netAmounts?.totalMoney?.amount,
                },
            },
            tenders: order.tenders?.map((tender) => ({
                id: tender.id,
                transactionId: tender.transactionId,
                amountMoney: {
                    amount: tender.amountMoney?.amount,
                },
                type: tender.type,
            })),
            refunds: order.refunds?.map((refund) => ({
                id: refund.id,
                transactionId: refund.transactionId,
                tenderId: refund.tenderId,
                reason: refund.reason,
                amountMoney: { amount: refund.amountMoney?.amount },
            })),
            closedAt: order.closedAt,
            totalMoney: {
                amount: order.totalMoney?.amount,
            },
            totalDiscountMoney: {
                amount: order.totalDiscountMoney?.amount,
            },
            netAmountDueMoney: {
                amount: order.netAmountDueMoney?.amount,
            },
        }));
        return filteredResults;
    } catch (error) {
        if (error instanceof ApiError) {
            console.error("Square API Error during order fetch:", error.result);
            return createError({
                statusCode: 500,
                statusMessage: "Error fetching orders from Square API",
                data: error.result,
            });
        } else {
            console.error(
                "Unexpected error occurred during order fetching:",
                error
            );
            return createError({
                statusCode: 500,
                statusMessage: "Unexpected Error",
                data: error,
            });
        }
    }
});
