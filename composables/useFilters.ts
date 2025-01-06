import type { TZDate } from "@date-fns/tz";

export const useFilters = () => {
    const startDate = useState<TZDate | null>("startDate", () => null);
    const endDate = useState<TZDate | null>("endDate", () => null);

    const comparisonStartDate = useState<TZDate | null>(
        "comparisonStartDate",
        () => null,
    );
    const comparisonEndDate = useState<TZDate | null>(
        "comparisonEndDate",
        () => null,
    );

    return { startDate, endDate, comparisonStartDate, comparisonEndDate };
};
