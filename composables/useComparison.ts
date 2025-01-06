type CompareOptions = "Week Prior" | "Month Prior" | "Year Prior";

const compareOptions = ref<CompareOptions[]>([
    "Week Prior",
    "Month Prior",
    "Year Prior",
]);

const compareValue = ref<CompareOptions>("Week Prior");

export const useComparison = () => {
    return { compareOptions, compareValue };
};
