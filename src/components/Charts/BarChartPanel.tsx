import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PanelContainer, PanelTitle } from "../../styles/Panel";
import { useTheme } from "styled-components";

type Props = {
  data: { name: string; questionCount: number }[];
};

const BarChartPanel = ({ data }: Props) => {
  const theme = useTheme();
  return (
    <PanelContainer>
      <PanelTitle>Distribution of questions by category</PanelTitle>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: Number(`${data.length > 1 ? 105 : 5}`),
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            angle={data.length > 1 ? -45 : 0}
            textAnchor="end"
          />
          <YAxis />
          <Tooltip formatter={(value) => [`${value}`, "questions"]} />

          {/* <Legend formatter={() => "Question By Category"} /> */}
          <Bar
            dataKey="questionCount"
            fill={theme.colors.lightBlue}
            activeBar={
              <Rectangle
                fill={theme.colors.mediumBlue}
                stroke={theme.colors.mediumBlue}
              />
            }
          />
        </BarChart>
      </ResponsiveContainer>
    </PanelContainer>
  );
};

export default BarChartPanel;
