export function formatCurrency(
    amount: number,
    currencyCode: string = "USD",
    locale: string = "en-US",
): string {
    const value = amount / 100;
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyCode,
    }).format(value);
}
