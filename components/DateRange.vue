<template>
    <DatePicker
        v-model="selectedDateRange"
        :selection-mode="'range'"
        showIcon
        iconDisplay="input"
        dateFormat="mm/dd/y"
    >
        <template #inputicon="slotProps">
            <i
                class="material-symbols-outlined text-lg leading-none"
                @click="slotProps.clickCallback"
                >date_range</i
            >
        </template>
        <template #footer>
            <!-- SelectButton Component for preset date ranges -->
            <div
                class="mt-2 flex flex-col gap-2 border-t border-surface-200 pt-2"
            >
                <SelectButton
                    v-model="selectedRangeOption"
                    :options="optionsWeek"
                    option-label="label"
                    option-value="value"
                    v-bind="selectButtonPassthrough"
                />
                <SelectButton
                    v-model="selectedRangeOption"
                    :options="optionsMonth"
                    option-label="label"
                    option-value="value"
                    v-bind="selectButtonPassthrough"
                />
                <SelectButton
                    v-model="selectedRangeOption"
                    :options="optionsYear"
                    option-label="label"
                    option-value="value"
                    v-bind="selectButtonPassthrough"
                />
            </div>
        </template>
    </DatePicker>
    <SelectButton
        v-model="compareValue"
        :options="compareOptions"
        option-label="label"
        option-value="value"
        :allow-empty="false"
    />
</template>

<script setup lang="ts">
import { TZDate } from "@date-fns/tz";
import {
    getDate,
    getMonth,
    isEqual,
    endOfDay,
    endOfWeek,
    startOfWeek,
    subWeeks,
    startOfMonth,
    endOfMonth,
    subMonths,
    startOfYear,
    endOfYear,
    subYears,
    differenceInDays,
    differenceInMonths,
    differenceInWeeks,
    differenceInYears,
    isFirstDayOfMonth,
    isLastDayOfMonth,
    isSameDay,
    isSunday,
    nextSunday,
    previousSunday,
    addDays,
} from "date-fns";

const { compareOptions, compareValue } = useComparison();

// Passthrough configuration object
const selectButtonPassthrough = {
    "pt:pcToggleButton:root:class": "flex-1",
    "pt:root:class": "flex",
};

const timezone = "America/Chicago";
// Ref for holding selected date range
const selectedDateRange = ref<[TZDate, TZDate] | null>();

// Ref for holding the selected range option from SelectButton
let selectedRangeOption = ref<string | null>("this-week");
const filters = useFilters();

function isFirstDayOfYear(date: TZDate) {
    return getMonth(date) === 0 && getDate(date) === 1;
}
function isLastDayOfYear(date: TZDate) {
    return getMonth(date) === 11 && getDate(date) === 31;
}

// Check if a date range is the entire month or year
function isFullRange(
    startDate: TZDate,
    endDate: TZDate,
    unit: "month" | "year",
): boolean {
    if (unit === "month") {
        return isFirstDayOfMonth(startDate) && isLastDayOfMonth(endDate);
    } else if (unit === "year") {
        return isFirstDayOfYear(startDate) && isLastDayOfYear(endDate);
    }
    return false;
}

function getPriorDateRange({
    startDate,
    endDate,
    range, // "week" "month", or "year"
    difference = 1, // default
}: {
    startDate: TZDate;
    endDate: TZDate;
    range: "week" | "month" | "year";
    difference?: number;
}): { startPrior: TZDate; endPrior: TZDate } {
    const subFn = {
        week: subWeeks,
        month: subMonths,
        year: subYears,
    }[range];

    return {
        startPrior: subFn(startDate, difference),
        endPrior: subFn(endDate, difference),
    };
}

function getDynamicPriorRange({
    startDate,
    endDate,
    unit,
}: {
    startDate: TZDate;
    endDate: TZDate;
    unit: "week" | "month" | "year";
}): { startPrior: TZDate; endPrior: TZDate } {
    const differenceFn = {
        week: differenceInWeeks,
        month: differenceInMonths,
        year: differenceInYears,
    }[unit];

    const difference = differenceFn(endDate, startDate) + 1;

    return getPriorDateRange({
        startDate,
        endDate,
        range: unit,
        difference,
    });
}

function getWeekPriorRange({
    startDate,
    endDate,
}: {
    startDate: TZDate;
    endDate: TZDate;
}) {
    return getDynamicPriorRange({ startDate, endDate, unit: "week" });
}

function getMonthPriorRange({
    startDate,
    endDate,
}: {
    startDate: TZDate;
    endDate: TZDate;
}) {
    if (isFullRange(startDate, endDate, "month")) {
        // Range is a full month
        console.log("Full Month");
        const { startPrior, endPrior } = getDynamicPriorRange({
            startDate,
            endDate,
            unit: "month",
        });
        return {
            startPrior: startOfMonth(startPrior),
            endPrior: endOfMonth(endPrior),
        };
    }

    if (isSameDay(endDate, startDate) && !isSunday(startDate)) {
        // Range is a single day that is not a Sunday

        return getPriorDateRange({
            startDate,
            endDate,
            range: "month",
            difference: 1,
        });
    }

    // Range is single Sunday or multiple days across given month
    const { startPrior, endPrior } = getPriorDateRange({
        startDate,
        endDate,
        range: "week",
        difference: 4,
    });

    console.log(`startPrior is ${isSunday(startPrior) ? "" : "NOT "}a Sunday`);

    return isSunday(startPrior)
        ? { startPrior, endPrior }
        : {
              startPrior: startOfWeek(startPrior),
              endPrior: endOfWeek(endPrior),
          };
}

function getYearPriorRange({
    startDate,
    endDate,
}: {
    startDate: TZDate;
    endDate: TZDate;
}) {
    const differenceOfYears = differenceInYears(endDate, startDate);

    // Full single or multiple years
    if (isFullRange(startDate, endDate, "year")) {
        console.log(
            differenceOfYears === 0
                ? "Full Single Year"
                : "Full Multiple Years",
        );

        const { startPrior, endPrior } = getPriorDateRange({
            startDate,
            endDate,
            range: "year",
            difference: differenceOfYears > 0 ? differenceOfYears + 1 : 1,
        });

        return {
            startPrior: startOfYear(startPrior),
            endPrior: endOfYear(endPrior),
        };
    }

    if (isFullRange(startDate, endDate, "month")) {
        // Range is full month(s)
        console.log("Full Month Range");

        const { startPrior, endPrior } = getPriorDateRange({
            startDate,
            endDate,
            range: "year",
            difference: 1,
        });

        return {
            startPrior: startOfMonth(startPrior),
            endPrior: endOfMonth(endPrior),
        };
    }

    console.log("Comparing week");

    const calcDifferenceInDays = differenceInDays(endDate, startDate);
    console.log(calcDifferenceInDays);

    const { startPrior, endPrior } = getPriorDateRange({
        startDate,
        endDate,
        range: "year",
        difference: 1,
    });

    console.log("Orig Date: ", startDate, "Compare Date: ", startPrior);

    const calcPrevSunday = differenceInDays(
        startPrior,
        previousSunday(startPrior),
    );
    const calcNextSunday = differenceInDays(nextSunday(startPrior), startPrior);

    console.log(
        "Days to Previous Sunday: ",
        calcPrevSunday,
        " | ",
        "Days to Next Sunday: ",
        calcNextSunday,
    );

    const comparisonStartDate =
        calcPrevSunday > calcNextSunday
            ? nextSunday(startPrior)
            : calcPrevSunday < calcNextSunday
              ? previousSunday(startPrior)
              : startPrior;

    const comparisonEndDate = addDays(
        comparisonStartDate,
        calcDifferenceInDays,
    );

    return {
        startPrior: comparisonStartDate,
        endPrior: endOfDay(comparisonEndDate),
    };
}

watch(
    [selectedDateRange, compareValue],
    ([_newSelectedDateRange, _newCompareValue]) => {
        if (!_newSelectedDateRange?.[0]) return; // Do nothing if no start date is selected

        const startDate = _newSelectedDateRange[0];
        const endDate = _newSelectedDateRange[1]
            ? endOfDay(_newSelectedDateRange[1])
            : endOfDay(startDate);

        // Update filters
        filters.startDate.value = startDate;
        filters.endDate.value = endDate;

        const getComparisonRange = (rangeType: "week" | "month" | "year") => {
            const rangeFn = {
                week: getWeekPriorRange,
                month: getMonthPriorRange,
                year: getYearPriorRange,
            };

            const { startPrior, endPrior } = rangeFn[rangeType]({
                startDate,
                endDate,
            });

            filters.comparisonStartDate.value = startPrior;
            filters.comparisonEndDate.value = endPrior;
        };

        switch (_newCompareValue) {
            case "week":
                getComparisonRange("week");

                break;
            case "month":
                getComparisonRange("month");
                break;
            case "year":
                getComparisonRange("year");
                break;
        }

        console.log("Start Date:", startDate, "End Date:", endDate);
        console.log(
            "Compare Start Date:",
            filters.comparisonStartDate.value,
            "Compare End Date:",
            filters.comparisonEndDate.value,
        );
    },
    { immediate: true },
);

// Options for the SelectButton
const optionsWeek = [
    { label: "This Week", value: "this-week" },
    { label: "Last Week", value: "last-week" },
];
const optionsMonth = [
    { label: "This Month", value: "this-month" },
    { label: "Last Month", value: "last-month" },
];
const optionsYear = [
    { label: "This Year", value: "this-year" },
    { label: "Last Year", value: "last-year" },
];

// Watcher for changes in selectedDateRange to reset selectedRangeOption if manual range is selected
watch(selectedDateRange, (newValue) => {
    if (newValue && !isPresetRange(newValue)) {
        selectedRangeOption.value = null; // Reset to null if manual range is selected
    }
});

// Watcher for changes in the selected range option
watch(selectedRangeOption, (newValue) => {
    switch (newValue) {
        case "this-week":
            setThisWeek();
            break;
        case "last-week":
            setLastWeek();
            break;
        case "this-month":
            setThisMonth();
            break;
        case "last-month":
            setLastMonth();
            break;
        case "this-year":
            setThisYear();
            break;
        case "last-year":
            setLastYear();
            break;
    }
});

// Helper function to check if the date range matches a predefined range
const isPresetRange = (dateRange: [TZDate, TZDate]): boolean => {
    const start = dateRange[0];
    const end = dateRange[1];
    return (
        (isEqual(start, startOfWeek(start)) &&
            isEqual(end, endOfWeek(start))) ||
        (isEqual(start, startOfMonth(start)) &&
            isEqual(end, endOfMonth(start))) ||
        (isEqual(start, startOfYear(start)) && isEqual(end, end)) ||
        (isEqual(start, startOfYear(start)) && isEqual(end, endOfYear(start)))
    );
};

// Automatically set the default range on mount
onMounted(() => {
    setThisWeek(); // Set default range
});

// Set the current week range
const setThisWeek = () => {
    const now = TZDate.tz(timezone);
    selectedDateRange.value = [startOfWeek(now), endOfWeek(now)];
};

// Set the last week range
const setLastWeek = () => {
    const lastWeek = subWeeks(TZDate.tz(timezone), 1);
    selectedDateRange.value = [startOfWeek(lastWeek), endOfWeek(lastWeek)];
};

// Set the current month range
const setThisMonth = () => {
    const now = TZDate.tz(timezone);
    selectedDateRange.value = [startOfMonth(now), endOfMonth(now)];
};

// Set the last month range
const setLastMonth = () => {
    const lastMonth = subMonths(TZDate.tz(timezone), 1);
    selectedDateRange.value = [startOfMonth(lastMonth), endOfMonth(lastMonth)];
};

// Set the current year range
const setThisYear = () => {
    const now = TZDate.tz(timezone);
    selectedDateRange.value = [startOfYear(now), now];
};

// Set the last year range
const setLastYear = () => {
    const lastYear = subYears(TZDate.tz(timezone), 1);
    selectedDateRange.value = [startOfYear(lastYear), endOfYear(lastYear)];
};
</script>
