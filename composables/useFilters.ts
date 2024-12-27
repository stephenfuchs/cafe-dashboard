import type { TZDate } from "@date-fns/tz";

export const useFilters = () => {
    const startDate = useState<TZDate | null>("startDate", () => null);
    const endDate = useState<TZDate | null>("endDate", () => null);

    return { startDate, endDate };
};
