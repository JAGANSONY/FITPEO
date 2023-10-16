import { Box, Typography } from "@mui/material";
import { useState, useCallback } from "react";
import { BarChart, Bar, Cell, XAxis, ResponsiveContainer } from "recharts";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const data = [
  {
    name: "jan",
    uv: 2900,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "feb",
    uv: 2300,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "mar",
    uv: 3500,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "apr",
    uv: 2800,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "may",
    uv: 3300,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "jun",
    uv: 2000,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "july",
    uv: 3000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "aug",
    uv: 3600,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "sep",
    uv: 3300,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "oct",
    uv: 2800,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "nov",
    uv: 2500,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "dec",
    uv: 2800,
    pv: 4300,
    amt: 2100,
  },
];

export default function Recharts() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = data[activeIndex];

  const handleClick = useCallback(
    (
      entry: { name: string; uv: number; pv: number; amt: number },
      index: number
    ) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <Box sx={{ backgroundColor: "white", padding: "20px", width: {xl:"63%",lg:"63%",md:"100%",sm:'100%',xs:'100%'} }}>
      <Box sx={{ display: "flex", justifyContent: "space-between",alignItems:'center' }}>
        <Box>
          <Typography
            sx={{
              fontFamily:"sans-serif",
              fontSize: "30px",
              color: "black",
              fontWeight: 650,
            }}
          >
            Overview
          </Typography>
          <Typography sx={{  fontFamily:"sans-serif",
              fontSize: "15px",
              color: "lightgrey",}}>Montly Earning</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center",color: "lightgrey",fontSize: "28px", }}>
          <Typography>Quarterly</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <ResponsiveContainer width="100%" height="75%">

      <BarChart width={800} height={380} data={data}>
        <XAxis
          tickLine={false}
          axisLine={false}
          style={{
            fontFamily: "sans-serif",
            fontSize: "20px",
            color: "black",
            fontWeight: 650,
          }}
          dataKey="name"
        />

        <Bar radius={10} dataKey="uv" onClick={handleClick}>
          {data.map((entry, index) => (
            <Cell
              cursor="pointer"
              fill={entry.name === "aug" ? "#3A30D7" : "#EEEBFA"}
              key={`cell-${index}`}
            />
          ))}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
