<template>
    <UiAppCard>
        <template #title>
            <div class="flex items-center gap-4">
                {{ value }} Summary
                <div id="legend-container"></div>
            </div>
        </template>
        <template #options>
            <SelectButton v-model="value" :options="options" size="small" />
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

<script setup>
const value = ref("Yearly");
const options = ref(["Yearly", "Monthly", "Daily"]);

onMounted(() => {
    salesData.value = setSalesData();
    salesOptions.value = setSalesOptions();
});

const salesData = ref();
const salesOptions = ref();

const setSalesData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

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
        datasets: [
            {
                label: "2024",
                data: [
                    1012.98, 1103.68, 1602.06, 1206.1, 1387.42, 1391.41,
                    1099.37, 1367.95, 1824.0, 1124.89, 1387.4, 511.17,
                ], // Sales data for this year
                backgroundColor:
                    documentStyle.getPropertyValue("--p-primary-500"),
            },
            {
                label: "2023",
                data: [
                    847.57, 965.84, 945.35, 1333.25, 816.37, 853.49, 987.66,
                    909.85, 795.82, 1119.57, 1134.88, 1497.3,
                ], // Sales data for last year
                backgroundColor: documentStyle.getPropertyValue("--p-blue-500"),
            },
        ],
    };
};

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
                        return `${legend}: $${value.toLocaleString()}`; // Format the value
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
                        return `$${value.toLocaleString()}`; // Format as dollar amount
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
                const { type } = chart.config;
                if (type === "pie" || type === "doughnut") {
                    chart.toggleDataVisibility(item.index);
                } else {
                    chart.setDatasetVisibility(
                        item.datasetIndex,
                        !chart.isDatasetVisible(item.datasetIndex),
                    );
                }
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
    },
};
</script>
