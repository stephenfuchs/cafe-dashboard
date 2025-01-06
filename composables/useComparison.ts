type CompareOptions = "week" | "month" | "year";

const compareOptions = ref([
    { label: "Week Prior", value: "week" },
    { label: "Month Prior", value: "month" },
    { label: "Year Prior", value: "year" },
]);

const compareValue = ref<CompareOptions>("week");

export const useComparison = () => {
    return { compareOptions, compareValue };
};
