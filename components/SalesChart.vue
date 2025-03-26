<script setup>
import { eachMonthOfInterval, startOfMonth, endOfMonth } from "date-fns";
import { TZDate } from "@date-fns/tz";
import { $dt } from "@primeuix/themes";

const chartColors = ref([
    $dt("primary.500"),
    $dt("blue.500"),
    $dt("cyan.500"),
    $dt("teal.500"),
    $dt("amber.500"),
    $dt("orange.500"),
    $dt("red.500"),
    $dt("lime.500"),
    $dt("emerald.500"),
    $dt("rose.500"),
    $dt("pink.500"),
    $dt("fuchsia.500"),
]);

// Extract the actual color values
const colorValues = chartColors.value.map((color) => color.value);

const selected = ref("Gross Sales");
const options = ref(["Gross Sales", "Net Total", "Transactions"]);

const datasetVisibility = reactive({});

const currentYear = new Date().getFullYear();
// Define an array of years
const years = Array.from(
    { length: currentYear - 2017 + 1 },
    (_, i) => currentYear - i,
);

onMounted(() => {
    salesOptions.value = setSalesOptions();
});

const salesData = computed(() => {
    return {
        labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        datasets: years.map((year, index) => {
            const yearData = Object.keys(ordersByMonth)
                .filter((yyyymm) => yyyymm.startsWith(year.toString()))
                .map((yyyymm) => {
                    const grossSalesData =
                        ordersByMonth[yyyymm].grossSales / 100;
                    const netTotalData = ordersByMonth[yyyymm].netTotal / 100;
                    const transactionsData = ordersByMonth[yyyymm].transactions;
                    return selected.value === "Gross Sales"
                        ? grossSalesData
                        : selected.value === "Net Total"
                          ? netTotalData
                          : transactionsData;
                });

            return {
                label: year.toString(),
                data: yearData,
                backgroundColor: colorValues[index % colorValues.length],
                hidden: datasetVisibility[year] ?? index >= 2, // Use stored visibility state
            };
        }),
    };
});

// Preserve dataset visibility state when toggling legend
const updateDatasetVisibility = (chart) => {
    chart.data.datasets.forEach((dataset) => {
        datasetVisibility[dataset.label] = dataset.hidden;
    });
};

const salesOptions = ref();

// An array of the selected years. Years can be unselected
// by clicking them in the legend.
const selectedYears = ref([]);

// Keys will be in the format 'YYYY-MM'; values will be an array of orders ref
const ordersByMonth = reactive({});

watch(selectedYears, () => {
    selectedYears.value.forEach((selectedYear) => {
        const months = eachMonthOfInterval({
            start: new Date(`${selectedYear}-01-01T00:00:00`),
            end: new Date(`${selectedYear}-12-31T23:59:59`),
        });

        months.forEach((monthDate) => {
            const monthKey = monthDate.toISOString().slice(0, 7); // Format as 'YYYY-MM'

            if (ordersByMonth[monthKey]) {
                // Already set up for this month
                return;
            }

            // Find start and end date of the month
            const startDate = new TZDate(startOfMonth(monthDate));
            const endDate = new TZDate(endOfMonth(monthDate));

            // Call useOrders() for the month and save it in ordersByMonth
            ordersByMonth[monthKey] = useOrders(ref(startDate), ref(endDate));
        });
    });
});

const setSalesOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue("--p-text-color");
    const textColorSecondary = documentStyle.getPropertyValue(
        "--p-text-muted-color",
    );
    const surfaceBorder = documentStyle.getPropertyValue(
        "--p-content-border-color",
    );

    return {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            htmlLegend: {
                // ID of the container to put the legend in
                containerID: "legend-container",
            },
            legend: {
                labels: {
                    color: textColor,
                    boxWidth: 16,
                    boxHeight: 16,
                    useBorderRadius: true,
                    borderRadius: 8,
                },
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        const legend = tooltipItem.dataset.label || "";
                        const value = tooltipItem.raw; // Get the raw data value
                        return `${legend}: ${selected.value === "Transactions" ? value : "$" + value.toLocaleString()}`; // Format the value
                    },
                },
            },
        },
        elements: {
            bar: {
                borderRadius: 6,
            },
        },
        scales: {
            x: {
                ticks: {
                    color: textColorSecondary,
                    font: {
                        weight: 500,
                    },
                },
                grid: {
                    display: false,
                    drawBorder: false,
                },
                categoryPercentage: 1, // Adjust space between groups
                barPercentage: 1, // Adjust space between bars in each group
            },
            y: {
                ticks: {
                    callback: function (value) {
                        return `${selected.value === "Transactions" ? value : "$" + value.toLocaleString()}`; // Format as dollar amount
                    },
                    color: textColorSecondary,
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false,
                },
            },
        },
    };
};

// Define the HTML Legend Plugin
const getOrCreateLegendList = (chart, id) => {
    const legendContainer = document.getElementById(id);
    let listContainer = legendContainer.querySelector("ul");

    if (!listContainer) {
        listContainer = document.createElement("ul");
        listContainer.className = "flex gap-4";

        legendContainer.appendChild(listContainer);
    }

    return listContainer;
};

const htmlLegendPlugin = {
    id: "htmlLegend",
    afterUpdate(chart, args, options) {
        const ul = getOrCreateLegendList(chart, options.containerID);

        // Remove old legend items
        while (ul.firstChild) {
            ul.firstChild.remove();
        }

        // Generate new legend items
        const items = chart.options.plugins.legend.labels.generateLabels(chart);

        items.forEach((item) => {
            const li = document.createElement("li");
            li.className = "flex items-center cursor-pointer";

            li.onclick = () => {
                const dataset = chart.data.datasets[item.datasetIndex];
                dataset.hidden = !dataset.hidden;
                updateDatasetVisibility(chart); // Persist visibility state
                chart.update();
            };

            // Color box
            const boxSpan = document.createElement("span");
            boxSpan.className = "inline-block size-3 rounded-full mr-1";
            boxSpan.style.backgroundColor = item.fillStyle;
            boxSpan.style.borderColor = item.strokeStyle;
            boxSpan.style.borderWidth = item.lineWidth + "px";

            // Text
            const textContainer = document.createElement("p");
            textContainer.className = "text-xs font-medium";
            textContainer.style.textDecoration = item.hidden
                ? "line-through"
                : "";

            const text = document.createTextNode(item.text);
            textContainer.appendChild(text);

            li.appendChild(boxSpan);
            li.appendChild(textContainer);
            ul.appendChild(li);
        });

        selectedYears.value = items
            .filter((item) => !item.hidden)
            .map((item) => item.text);
    },
};
</script>

<template>
    <UiAppCard full chart>
        <template #title> {{ selected }} Chart </template>
        <template #options>
            <UiAppCardSelector :options="options" v-model:selected="selected" />
        </template>
        <Chart
            type="bar"
            :data="salesData"
            :options="salesOptions"
            class="h-52"
            :plugins="[htmlLegendPlugin]"
        />
    </UiAppCard>
</template>
