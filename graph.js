// TABULAR REPRESENTATION
// Define the data for the matrix
let seoMetricsTable = [
  {
    metric: "Sessions",
    source: "Microsoft Clarity",
    may2024: "16,414",
    june2024: "14,482",
    july2024: "19,192",
    august2024: "20,972",
    september2024: "16,918",
  },
  {
    metric: "Users",
    source: "Google Analytics",
    may2024: "15,377",
    june2024: "13,547",
    july2024: "17,278",
    august2024: "22,190",
    september2024: "16,837",
  },
  {
    metric: "Organic Traffic",
    source: "Ahrefs",
    may2024: "8,356",
    june2024: "9,021",
    july2024: "8,824",
    august2024: "10,876",
    september2024: "8,600",
  },
  {
    metric: "Average Position",
    source: "Google Search Console",
    may2024: 19.6,
    june2024: 19.5,
    july2024: 18.2,
    august2024: 18.9,
    september2024: 22.1,
  },
  {
    metric: "Click-Through Rate",
    source: "Google Search Console",
    may2024: "3%",
    june2024: "2.6%",
    july2024: "3%",
    august2024: "3.2%",
    september2024: "2.60",
  },
  {
    metric: "Referring Domains",
    source: "Ahrefs",
    may2024: 99,
    june2024: 122,
    july2024: 132,
    august2024: 137,
    september2024: 135,
  },
  {
    metric: "Domain Rating (DR)",
    source: "Ahrefs",
    may2024: 24,
    june2024: 24,
    july2024: 24,
    august2024: 25,
    september2024: 24,
  },
  {
    metric: "Bounce Rate",
    source: "Google Analytics",
    may2024: "37.6%",
    june2024: "39.8%",
    july2024: "39.8%",
    august2024: "38.4%",
    september2024: "41.5",
  },
  {
    metric: "Time on Page",
    source: "Microsoft Clarity",
    may2024: "1.7 min",
    june2024: "1.7 min",
    july2024: "1.8 min",
    august2024: "1.7min",
    september2024: "1.8min",
  },
  {
    metric: "Average Engagement Time",
    source: "Google Analytics",
    may2024: "1.23 min",
    june2024: "1.33 min",
    july2024: "1.35 min",
    august2024: "1.32 min",
    september2024: "1.25 min",
  },
];

// Function to display the matrix data on the web page
function displayMatrixData(data) {
  const outputElement = document.getElementById("output");
  let outputText = "\n";

  // Define column widths
  const columnWidths = {
    metric: 25,
    source: 30,
    may2024: 25,
    june2024: 25,
    july2024: 25,
    august2024: 25,
    september2024: 25,
  };

  // Create header row
  outputText += `| ${"Metric".padEnd(columnWidths.metric)} | ${"Source".padEnd(
    columnWidths.source
  )} | ${"May 2024".padEnd(columnWidths.may2024)} | ${"June 2024".padEnd(
    columnWidths.june2024
  )} | ${"July 2024".padEnd(columnWidths.july2024)} | ${"August 2024".padEnd(
    columnWidths.august2024
  )} | ${"September 2024".padEnd(columnWidths.september2024)} |\n`;

  outputText += `|${"-".repeat(columnWidths.metric + 2)}|${"-".repeat(
    columnWidths.source + 2
  )}|${"-".repeat(columnWidths.may2024 + 2)}|${"-".repeat(
    columnWidths.june2024 + 2
  )}|${"-".repeat(columnWidths.july2024 + 2)}|${"-".repeat(
    columnWidths.august2024 + 2
  )}|${"-".repeat(columnWidths.september2024 + 2)}|\n`;

  // Create data rows
  data.forEach((item) => {
    outputText += `| ${item.metric.padEnd(
      columnWidths.metric
    )} | ${item.source.padEnd(columnWidths.source)} | ${item.may2024
      .toString()
      .padEnd(columnWidths.may2024)} | ${item.june2024
      .toString()
      .padEnd(columnWidths.june2024)} | ${item.july2024
      .toString()
      .padEnd(columnWidths.july2024)} | ${item.august2024
      .toString()
      .padEnd(columnWidths.august2024)} | ${item.september2024
      .toString()
      .padEnd(columnWidths.september2024)} |\n`;
    outputText += `|${"-".repeat(columnWidths.metric + 2)}|${"-".repeat(
      columnWidths.source + 2
    )}|${"-".repeat(columnWidths.may2024 + 2)}|${"-".repeat(
      columnWidths.june2024 + 2
    )}|${"-".repeat(columnWidths.july2024 + 2)}|${"-".repeat(
      columnWidths.august2024 + 2
    )}|${"-".repeat(columnWidths.september2024 + 2)}|\n`;
  });

  outputElement.innerHTML = outputText;
}

// Display the matrix data when the page loads
displayMatrixData(seoMetricsTable);

// GRAPH VERSION

// Sessions, users, organic traffic metrics
const seoMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Sessions",
      data: [16414, 14482, 19192, 20972, 16918],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Users",
      data: [15377, 13547, 17278, 22190, 16837],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
    {
      label: "Organic Traffic",
      data: [8356, 9021, 8824, 10876, 8600],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};

// Separate datasets for individual graphs
// Referring Domains metrics
const backlinksMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Referring Domains",
      data: [99, 122, 132, 137, 135],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
    },
  ],
};

// Domain rating metrics
const domainRatingMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Domain Rating (DR)",
      data: [24, 24, 24, 25, 24],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    },
  ],
};

// Bounce rate metrics
const bounceRateMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Bounce Rate",
      data: [37.6, 39.8, 39.8, 38.4, 41.5],
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      fill: true,
    },
  ],
};

// Click-through rate metrics
const clickThroughRateMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Click-Through Rate",
      data: [3, 2.6, 3, 3.2, 2.6],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};

// Average position metricd
const averagePositionMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Average Position",
      data: [19.6, 19.5, 18.2, 18.9, 22.1],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

// Time on page metrics
const timeOnPageMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Time on Page",
      data: [1.7, 1.7, 1.8, 1.7, 1.8],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};
// Average time metrics
const averageEngagementTimeMetrics = {
  labels: ["May 2024", "June 2024", "July 2024", "August 2024", "September 2024"],
  datasets: [
    {
      label: "Average Engagement Time",
      data: [1.23, 1.33, 1.35, 1.32, 1.25], // Decimal minutes data
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    },
  ],
};
// Function to initialize and render charts
function initializeCharts() {
  // sessions, users, organic traffic chart
  const ctxCombined = document.getElementById("combinedChart").getContext("2d");
  new Chart(ctxCombined, {
    type: "line",
    data: {
      labels: seoMetrics.labels,
      datasets: seoMetrics.datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Values",
          },
        },
      },
    },
  });

  // backlinks chart
  const ctxBacklinks = document
    .getElementById("backlinksChart")
    .getContext("2d");
  new Chart(ctxBacklinks, {
    type: "line",
    data: backlinksMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "No. of backlinks",
          },
        },
      },
    },
  });

  // domain ratings chart
  const ctxDomainRating = document
    .getElementById("domainRatingChart")
    .getContext("2d");
  new Chart(ctxDomainRating, {
    type: "line",
    data: domainRatingMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Domain position out of 100",
          },
        },
      },
    },
  });

  // bounce rate chart
  const ctxBounceRate = document
    .getElementById("bounceRateChart")
    .getContext("2d");
  new Chart(ctxBounceRate, {
    type: "line",
    data: bounceRateMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Bounce rate in percentage (%)",
          },
        },
      },
    },
  });

  // click-through rate chart
  const ctxClickThroughRate = document
    .getElementById("clickThroughRateChart")
    .getContext("2d");
  new Chart(ctxClickThroughRate, {
    type: "line",
    data: clickThroughRateMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Click-through rate in percentage (%)",
          },
        },
      },
    },
  });

  // average position chart
  const ctxAveragePosition = document
    .getElementById("averagePositionChart")
    .getContext("2d");
  new Chart(ctxAveragePosition, {
    type: "line",
    data: averagePositionMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Average position on Google searches",
          },
        },
      },
    },
  });

  // time on page chart
  const ctxTimeOnPage = document
    .getElementById("timeOnPageChart")
    .getContext("2d");
  new Chart(ctxTimeOnPage, {
    type: "line",
    data: timeOnPageMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y;
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Time on page in minutes",
          },
        },
      },
    },
  });

  // Average engagement time chart
  const ctxAverageEngagementTime = document
    .getElementById("averageEngagementTimeChart")
    .getContext("2d");
  new Chart(ctxAverageEngagementTime, {
    type: "line",
    data: averageEngagementTimeMetrics,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.dataset.label || "";
              if (context.parsed.y !== null) {
                label += ": " + context.parsed.y + " min";
              }
              return label;
            },
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Months",
          },
        },
        y: {
          title: {
            display: true,
            text: "Average engagement time in minutes",
          },
        },
      },
    },
  });
}

// Initialize charts when the page loads
window.onload = initializeCharts;
