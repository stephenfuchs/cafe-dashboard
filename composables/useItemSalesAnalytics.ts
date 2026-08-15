import type { TZDate } from "@date-fns/tz";
import { computed, type Ref } from "vue";
import { useNormalizedOrders } from "~/composables/useNormalizedOrders";
import {
    aggregateCategoryTotals,
    type CategoryTotals,
} from "~/utils/itemCategoryAnalytics";
import { aggregateSales } from "~/utils/itemSalesAggregation";
import { buildItemComparison } from "~/utils/itemSalesComparison";

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

    const categories = computed<CategoryTotals[]>(() => {
        const allCategories = new Set([
            ...currentCategoryTotals.value.keys(),
            ...previousCategoryTotals.value.keys(),
        ]);

        return Array.from(allCategories).map((category) => {
            const current = currentCategoryTotals.value.get(category);
            const previous = previousCategoryTotals.value.get(category);

            const grossSales = current?.grossSales ?? 0;
            const previousGrossSales = previous?.grossSales ?? 0;

            return {
                category,
                grossSales,
                previousGrossSales,
                trendGrossSales: grossSales - previousGrossSales,
                image: current?.image ?? previous?.image ?? imagesDefault,
            };
        });
    });

    return {
        items,
        categories,
        isLoading,
        prevIsLoading,
    };
};
