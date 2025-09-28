import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { PanelContainer, PanelTitle } from "../../styles/Panel";
import { useTheme } from "styled-components";
import { useEffect, useState } from "react";

const TOP_MARGIN_BASE = 5;
const RIGHT_MARGIN_BASE = 30;
const LEFT_MARGIN_BASE = 20;
const LEFT_MARGIN_SMALL = -10;
const BOTTOM_MARGIN_SMALL = 70;
const BOTTOM_MARGIN_LARGE = 90;
const BOTTOM_MARGIN_XLARGE = 115;
const ANGLE = 45;

type Props = {
  data: { name: string; questionCount: number }[];
};

const BarChartPanel = ({ data }: Props) => {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const leftMargin =
    windowWidth < Number(theme.breakpoints.tablet.replace("px", ""))
      ? LEFT_MARGIN_SMALL
      : LEFT_MARGIN_BASE;

  let bottomMargin = 0;
  if (data.length > 1) {
    if (windowWidth < Number(theme.breakpoints.mobile.replace("px", ""))) {
      bottomMargin = BOTTOM_MARGIN_SMALL;
    } else if (
      windowWidth < Number(theme.breakpoints.desktop.replace("px", ""))
    ) {
      bottomMargin = BOTTOM_MARGIN_LARGE;
    } else {
      bottomMargin = BOTTOM_MARGIN_XLARGE;
    }
  }

  const tooltipFormatter = (value: number) => [`${value}`, "questions"];
  const xAxisAngle = data.length > 1 ? -ANGLE : 0;

  return (
    <PanelContainer>
      <PanelTitle>
        {data.length > 1
          ? "Distribution of questions by category"
          : `Question count for ${data[0]?.name}`}
      </PanelTitle>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{
            top: TOP_MARGIN_BASE,
            right: RIGHT_MARGIN_BASE,
            left: leftMargin,
            bottom: bottomMargin,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" angle={xAxisAngle} textAnchor="end" />
          <YAxis />
          <Tooltip formatter={tooltipFormatter} />
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
