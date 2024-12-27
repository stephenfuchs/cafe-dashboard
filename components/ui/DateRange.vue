<template>
    <DatePicker
        v-model="selectedDateRange"
        :selection-mode="'range'"
        showIcon
        dateFormat="mm/dd/y"
    >
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
</template>

<script setup lang="ts">
import { TZDate } from "@date-fns/tz";
import {
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
} from "date-fns";

// Passthrough configuration object
const selectButtonPassthrough = {
    "pt:pcToggleButton:root:class": "flex-1",
    "pt:root:class": "flex",
};

const timezone = "America/Chicago";
// Ref for holding selected date range
const selectedDateRange = ref<[TZDate, TZDate] | null>();

const filters = useFilters();
watch(
    selectedDateRange,
    (newValue) => {
        if (!newValue?.[0]) {
            return;
        }
        filters.startDate.value = newValue?.[0];

        if (!newValue?.[1]) {
            filters.endDate.value = endOfDay<TZDate>(newValue?.[0]);
        } else if (isEqual(newValue?.[1], newValue?.[0])) {
            filters.endDate.value = endOfDay<TZDate>(newValue?.[1]);
        } else {
            filters.endDate.value = newValue?.[1];
        }
        console.log("newValue:", newValue);
    },
    { immediate: true },
);

// Ref for holding the selected range option from SelectButton
let selectedRangeOption = ref<string | null>("this-week");

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
    selectedDateRange.value = [startOfYear(now), endOfYear(now)];
};

// Set the last year range
const setLastYear = () => {
    const lastYear = subYears(TZDate.tz(timezone), 1);
    selectedDateRange.value = [startOfYear(lastYear), endOfYear(lastYear)];
};
</script>
