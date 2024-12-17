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
                class="flex flex-col gap-2 pt-2 border-t mt-2 border-surface-200"
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

<script setup>
    // Passthrough configuration object
    const selectButtonPassthrough = {
        "pt:pcToggleButton:root:class": "flex-1",
        "pt:root:class": "flex",
    };
    // Ref for holding selected date range
    const selectedDateRange = ref(null);

    // Ref for holding the selected range option from SelectButton
    const selectedRangeOption = ref("this-week");

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

    // Automatically set the default range on mount
    onMounted(() => {
        setThisWeek(); // Set default range
    });

    // Method to set the current week range
    const setThisWeek = () => {
        const now = new Date();
        const firstDayOfWeek = now.getDate() - now.getDay(); // Sunday as the first day of the week
        const lastDayOfWeek = firstDayOfWeek + 6; // Saturday as the last day of the week

        const startOfWeek = new Date(now.setDate(firstDayOfWeek));
        const endOfWeek = new Date(now.setDate(lastDayOfWeek));

        selectedDateRange.value = [startOfWeek, endOfWeek];
    };

    // Method to set the last week range
    const setLastWeek = () => {
        const now = new Date();
        const firstDayOfWeek = now.getDate() - now.getDay() - 7; // Last week’s Sunday
        const lastDayOfWeek = firstDayOfWeek + 6; // Last week’s Saturday

        const startOfLastWeek = new Date(now.setDate(firstDayOfWeek));
        const endOfLastWeek = new Date(now.setDate(lastDayOfWeek));

        selectedDateRange.value = [startOfLastWeek, endOfLastWeek];
    };

    // Method to set the current month range
    const setThisMonth = () => {
        const now = new Date();
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        selectedDateRange.value = [startOfMonth, endOfMonth];
    };

    // Method to set the last month range
    const setLastMonth = () => {
        const now = new Date();
        const firstDayLastMonth = new Date(
            now.getFullYear(),
            now.getMonth() - 1,
            1
        );
        const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        selectedDateRange.value = [firstDayLastMonth, lastDayLastMonth];
    };

    // Method to set the current year range
    const setThisYear = () => {
        const now = new Date();
        const startOfYear = new Date(now.getFullYear(), 0, 1);
        const endOfYear = new Date(now.getFullYear(), 11, 31);
        selectedDateRange.value = [startOfYear, endOfYear];
    };

    // Method to set the last year range
    const setLastYear = () => {
        const now = new Date();
        const startOfLastYear = new Date(now.getFullYear() - 1, 0, 1);
        const endOfLastYear = new Date(now.getFullYear() - 1, 11, 31);
        selectedDateRange.value = [startOfLastYear, endOfLastYear];
        console.log("set dates: ", selectedDateRange.value[0]);
    };
</script>
