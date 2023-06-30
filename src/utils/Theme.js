const wincTheme = {
    chart: {
        width: 1800,
        height: 800,
    },
    area: {
      style: {
        data: {
          fill: "#212121"
        },
        labels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 12,
          letterSpacing: "normal",
          padding: 8,
          fill: "#455A64",
          stroke: "transparent",
          strokeWidth: 0,

        }
      },
    },
    axis: {
      style: {
        
        axis: {
          fill: "transparent",
          stroke: "#90A4AE",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        axisLabel: {
          textAnchor: "middle",
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 12,
          letterSpacing: "normal",
          padding: 8,
          fill: "#455A64",
          stroke: "transparent",
          strokeWidth: 0,
          color:"red"
        },
        grid: {
          fill: "none",
          stroke: "none"
        },
        ticks: {
          fill: "transparent",
          size: 5,
          stroke: "#90A4AE",
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        },
        tickLabels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 16,
          padding: 16,       
        }
      },
      width: 1800,
      height: 800,
    },
    bar: {
      style: {
        data: {
          fill: "#4a90e2",
          padding: 0,
          strokeWidth: 0
        },
        labels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 8,
          letterSpacing: "normal",
          padding: 8,
          fill: "#455A64",
          stroke: "transparent",
          strokeWidth: 0
        }
      },
   },
    line: {
      style: {
        data: {
          fill: "transparent",
          opacity: 1,
          stroke: "#455A64",
          strokeWidth: 2
        },
        labels: {
          fontFamily: "'Roboto', 'Helvetica Neue', Helvetica, sans-serif",
          fontSize: 12,
          letterSpacing: "normal",
          padding: 8,
          fill: "#455A64",
          stroke: "transparent",
          strokeWidth: 0
        }
      },
      width: 1800,
      height: 1250,
    },
  };

  export default wincTheme