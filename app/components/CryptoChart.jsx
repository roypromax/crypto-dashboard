import { useRef, useEffect } from "react";
import * as echarts from "echarts";

function CryptoChart({ data, label }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      title: {
        text: label,
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["Price in USD"],
        textStyle: {
          color: "blue",
          fontSize: 14,
        },
      },
      xAxis: {
        type: "category",
        data: data.prices.map((item) => new Date(item[0]).toLocaleDateString()),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Price in USD",
          data: data.prices.map((item) => item[1].toFixed(2)),
          type: "line",
          smooth: true,
          areaStyle: {
            color: "#3F51B5",
            opacity: 0.5,
          },
        },
      ],
    };

    chartInstance.setOption(option);
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{ width: "80%", height: "400px", margin: "auto" }}
    ></div>
  );
}

export default CryptoChart;
