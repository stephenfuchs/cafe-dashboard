import type { TZDate } from "@date-fns/tz";
import { createSharedComposable } from "@vueuse/core";

export const useFilters = createSharedComposable(() => {
    const startDate = ref<TZDate>();
    const endDate = ref<TZDate>();

    return { startDate, endDate };
});
