import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#59588D"
        transform="rotate(-35)"
        fontSize="12"
        fontWeight="bold"
      >
        {payload.value}
      </text>
    </g>
  );
};

const Chart = ({ data, lineKey }) => {
  const chartData = useMemo(() => data.slice(), [lineKey, data]);
  return (
    <div style={{ width: "100%", height: 500 }}>
      <ResponsiveContainer>
        <LineChart width={500} height={500} data={chartData}>
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={<CustomizedAxisTick />}
            interval={0}
            height={60}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#59588D", fontSize: 14, fontWeight: "bold" }}
          />
          <Tooltip />
          <CartesianGrid strokeOpacity="0.1" fill="#23214a" />
          <Line
            type="monotone"
            dataKey={lineKey}
            stroke="#00af92"
            strokeWidth="4"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
