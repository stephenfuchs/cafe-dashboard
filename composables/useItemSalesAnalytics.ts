import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useNormalizedOrders } from "~/composables/useNormalizedOrders";
import { aggregateCategoryTotals } from "~/utils/itemCategoryAnalytics";
import { aggregateSales } from "~/utils/itemSalesAggregation";
import { buildItemComparison } from "~/utils/itemSalesComparison";
import { buildCategoryComparison } from "~/utils/itemCategoryComparison";

export const useItemSalesAnalytics = (
    start: Ref<TZDate | null>,
    end: Ref<TZDate | null>,
    previousStart: Ref<TZDate | null>,
    previousEnd: Ref<TZDate | null>,
) => {
    const { sales: currentSales, isLoading } = useNormalizedOrders(start, end);

    const { sales: previousSales, isLoading: prevIsLoading } =
        useNormalizedOrders(previousStart, previousEnd);

    const currentItemTotals = computed(() =>
        aggregateSales(currentSales.value),
    );

    const previousItemTotals = computed(() =>
        aggregateSales(previousSales.value),
    );

    const items = computed(() =>
        buildItemComparison(currentItemTotals.value, previousItemTotals.value),
    );

    const currentCategoryTotals = computed(() =>
        aggregateCategoryTotals(currentSales.value),
    );

    const previousCategoryTotals = computed(() =>
        aggregateCategoryTotals(previousSales.value),
    );

    const categories = computed(() =>
        buildCategoryComparison(
            currentCategoryTotals.value,
            previousCategoryTotals.value,
        ),
    );

    return {
        items,
        categories,
        isLoading,
        prevIsLoading,
    };
};
