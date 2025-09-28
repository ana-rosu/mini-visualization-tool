import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { PanelContainer, PanelTitle } from "../../styles/Panel";
import { useTheme } from "styled-components";

type Props = {
  data: { name: string; value: number }[];
};

const RADIAN = Math.PI / 180;
const LEGEND_HEIGHT = 36;
const PIE_OUTER_RADIUS_PERCENTAGE = 65;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-(midAngle ?? 0) * RADIAN);
  const y = cy + radius * Math.sin(-(midAngle ?? 0) * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${((percent ?? 1) * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartPanel = ({ data }: Props) => {
  const theme = useTheme();

  const COLORS = [
    theme.colors.lightBlue,
    theme.colors.mediumBlue,
    theme.colors.darkBlue,
  ];
  return (
    <PanelContainer>
      <PanelTitle>Distribution of questions by difficulty</PanelTitle>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={`${PIE_OUTER_RADIUS_PERCENTAGE}%`}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${entry.name}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, _, entry) => [`${value}`, `${entry.name}`]}
          />
          <Legend verticalAlign="bottom" height={LEGEND_HEIGHT} />
        </PieChart>
      </ResponsiveContainer>
    </PanelContainer>
  );
};
export default PieChartPanel;
