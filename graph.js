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
    october2024: "13,741",
    november2024: "26,665",
    december2024: "20,931",
    january2025: "21,503",
  },
  {
    metric: "Users",
    source: "Google Analytics",
    may2024: "15,377",
    june2024: "13,547",
    july2024: "17,278",
    august2024: "22,190",
    september2024: "16,837",
    october2024: "15,654",
    november2024: "21,790",
    december2024: "13,476",
    january2025: "13,438",
  },
  {
    metric: "Organic Traffic",
    source: "Ahrefs",
    may2024: "8,356",
    june2024: "9,021",
    july2024: "8,824",
    august2024: "10,876",
    september2024: "8,600",
    october2024: "3,888",
    november2024: "8,700",
    december2024: "10,400",
    january2025: "8,800",
  },
  {
    metric: "Average Position",
    source: "Google Search Console",
    may2024: 19.6,
    june2024: 19.5,
    july2024: 18.2,
    august2024: 18.9,
    september2024: 22.1,
    october2024: 27.2,
    november2024: 21.2,
    december2024: 21.9,
    january2025: 17.8,
  },
  {
    metric: "Click-Through Rate",
    source: "Google Search Console",
    may2024: "3%",
    june2024: "2.6%",
    july2024: "3%",
    august2024: "3.2%",
    september2024: "2.60%",
    october2024: "2.3%",
    november2024: "2.9%",
    december2024: "2.5%",
    january2025: "2.30%",
  },
  {
    metric: "Referring Domains",
    source: "Ahrefs",
    may2024: 99,
    june2024: 122,
    july2024: 132,
    august2024: 137,
    september2024: 135,
    october2024: 208,
    november2024: 213,
    december2024: 219,
    january2025: 237,
  },
  {
    metric: "Domain Rating (DR)",
    source: "Ahrefs",
    may2024: 24,
    june2024: 24,
    july2024: 24,
    august2024: 25,
    september2024: 24,
    october2024: 27,
    november2024: 28,
    december2024: 30,
    january2025: 29,
  },
  {
    metric: "Bounce Rate",
    source: "Google Analytics",
    may2024: "37.6%",
    june2024: "39.8%",
    july2024: "39.8%",
    august2024: "38.4%",
    september2024: "41.5",
    october2024: "48.3%",
    november2024: "44.18%",
    december2024: "40.45%",
    january2025: "39.36%",
  },
  {
    metric: "Time on Page",
    source: "Microsoft Clarity",
    may2024: "1.7 min",
    june2024: "1.7 min",
    july2024: "1.8 min",
    august2024: "1.7 min",
    september2024: "1.8 min",
    october2024: "1.7 min",
    november2024: "1.6 min",
    december2024: "1.4 min",
    january2025: "1.5 min",
  },
  {
    metric: "Average Engagement Time",
    source: "Google Analytics",
    may2024: "1.23 min",
    june2024: "1.33 min",
    july2024: "1.35 min",
    august2024: "1.32 min",
    september2024: "1.25 min",
    october2024: "1.05 min",
    november2024: "1.25 min",
    december2024: "1.2 min",
    january2025: "1.28 min",
  },
  {
    metric: "Backlinks",
    source: "Ahrefs",
    may2024: "-",
    june2024: "-",
    july2024: "-",
    august2024: "418",
    september2024: "431",
    october2024: "834",
    november2024: "991",
    december2024: "1000",
    january2025: "1100",
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
    october2024: 25,
    november2024: 25,
    december2024: 25,
    january2025: 25,
  };

  // Create header row
  outputText += `| ${"Metric".padEnd(columnWidths.metric)} | ${"Source".padEnd(
    columnWidths.source
  )} | ${"May 2024".padEnd(columnWidths.may2024)} | ${"June 2024".padEnd(
    columnWidths.june2024
  )} | ${"July 2024".padEnd(columnWidths.july2024)} | ${"August 2024".padEnd(
    columnWidths.august2024
  )} | ${"September 2024".padEnd(
    columnWidths.september2024
  )} | ${"October 2024".padEnd(
    columnWidths.october2024
  )} | ${"November 2024".padEnd(
    columnWidths.november2024
  )} | ${"December 2024".padEnd(
    columnWidths.december2024
  )} | ${"January 2025".padEnd(columnWidths.january2025)} |\n`;

  outputText += `|${"-".repeat(columnWidths.metric + 2)}|${"-".repeat(
    columnWidths.source + 2
  )}|${"-".repeat(columnWidths.may2024 + 2)}|${"-".repeat(
    columnWidths.june2024 + 2
  )}|${"-".repeat(columnWidths.july2024 + 2)}|${"-".repeat(
    columnWidths.august2024 + 2
  )}|${"-".repeat(columnWidths.october2024 + 2)}|${"-".repeat(
    columnWidths.november2024 + 2
  )}|${"-".repeat(columnWidths.december2024 + 2)}|${"-".repeat(
    columnWidths.january2025 + 2
  )}|${"-".repeat(columnWidths.january2025 + 2)}|\n`;

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
      .padEnd(columnWidths.september2024)} | ${item.october2024
      .toString()
      .padEnd(columnWidths.october2024)} | ${item.november2024
      .toString()
      .padEnd(columnWidths.november2024)} | ${item.december2024
      .toString()
      .padEnd(columnWidths.december2024)} | ${item.january2025
      .toString()
      .padEnd(columnWidths.january2025)} | \n`;
    outputText += `|${"-".repeat(columnWidths.metric + 2)}|${"-".repeat(
      columnWidths.source + 2
    )}|${"-".repeat(columnWidths.may2024 + 2)}|${"-".repeat(
      columnWidths.june2024 + 2
    )}|${"-".repeat(columnWidths.july2024 + 2)}|${"-".repeat(
      columnWidths.august2024 + 2
    )}|${"-".repeat(columnWidths.september2024 + 2)}|${"-".repeat(
      columnWidths.november2024 + 2
    )}|${"-".repeat(columnWidths.november2024 + 2)}|${"-".repeat(
      columnWidths.december2024 + 2
    )}|${"-".repeat(columnWidths.january2025 + 2)}|\n`;
  });

  outputElement.innerHTML = outputText;
}

// Display the matrix data when the page loads
displayMatrixData(seoMetricsTable);

// GRAPH VERSION

// Sessions, users, organic traffic metrics
const seoMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Sessions",
      data: [16414, 14482, 19192, 20972, 16918, 13741, 26665, 20931, 21503],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
    {
      label: "Users",
      data: [15377, 13547, 17278, 22190, 16837, 15654, 21790, 13386, 13438],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
    {
      label: "Organic Traffic",
      data: [8356, 9021, 8824, 10876, 8600, 3888, 8700, 10400, 8800],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};

// Separate datasets for individual graphs
// Referring Domains metrics
const refDomsMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Referring Domains",
      data: [99, 122, 132, 137, 135, 208, 213, 219, 237],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.2)",
      fill: true,
    },
  ],
};

// Domain rating metrics
const domainRatingMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Domain Rating (DR)",
      data: [24, 24, 24, 25, 24, 27, 28, 30, 29],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    },
  ],
};

// Bounce rate metrics
const bounceRateMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Bounce Rate",
      data: [37.6, 39.8, 39.8, 38.4, 41.5, 48.3, 44.18, 40.45, 39.36],
      borderColor: "rgba(255, 206, 86, 1)",
      backgroundColor: "rgba(255, 206, 86, 0.2)",
      fill: true,
    },
  ],
};

// Click-through rate metrics
const clickThroughRateMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Click-Through Rate",
      data: [3, 2.6, 3, 3.2, 2.6, 2.3, 2.9, 2.5, 2.3],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      fill: true,
    },
  ],
};

// Average position metricd
const averagePositionMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Average Position",
      data: [19.6, 19.5, 18.2, 18.9, 22.1, 27.2, 21.2, 21.9, 17.8],
      borderColor: "rgba(153, 102, 255, 1)",
      backgroundColor: "rgba(153, 102, 255, 0.2)",
      fill: true,
    },
  ],
};

// Time on page metrics
const timeOnPageMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Time on Page",
      data: [1.7, 1.7, 1.8, 1.7, 1.8, 1.7, 1.6, 1.4, 1.5],
      borderColor: "rgba(255, 159, 64, 1)",
      backgroundColor: "rgba(255, 159, 64, 0.2)",
      fill: true,
    },
  ],
};
// Average time metrics
const averageEngagementTimeMetrics = {
  labels: [
    "May 2024",
    "June 2024",
    "July 2024",
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Average Engagement Time",
      data: [1.23, 1.33, 1.35, 1.32, 1.25, 1.05, 1.25, 1.2, 1.28], // Decimal minutes data
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      fill: true,
    },
  ],
};
// Average time metrics
const backlinksMetrics = {
  labels: [
    "August 2024",
    "September 2024",
    "October 2024",
    "November 2024",
    "December 2024",
    "January 2025",
  ],
  datasets: [
    {
      label: "Backlinks",
      data: [418, 431, 834, 991, 1000, 1100],
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

  // Referring Domains chart
  const ctxRefDoms = document.getElementById("refDomsChart").getContext("2d");
  new Chart(ctxRefDoms, {
    type: "line",
    data: refDomsMetrics,
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
            text: "No. of referring domains",
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

  // Backlinks chart
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
            text: "No. of Backlinks",
          },
        },
      },
    },
  });
}

// Initialize charts when the page loads
window.onload = initializeCharts;
