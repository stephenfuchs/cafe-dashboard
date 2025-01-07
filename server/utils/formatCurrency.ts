export function formatCurrency(
    amount: number,
    currencyCode = "USD",
    locale = "en-US",
) {
    const value = amount / 100;
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
    }).format(value);
}
