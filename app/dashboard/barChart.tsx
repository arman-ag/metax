'use client';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,

    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,

    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,

    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,

    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,

    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,

    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,

    amt: 2100,
  },
];

export default function BarAreaChart({ width, height }) {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart margin={{ top: 40, right: 60, left: 0, bottom: 0 }} data={data}>
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey='name' />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar
          dataKey='uv'
          fill='#82ca9d'
          activeBar={<Rectangle fill='gold' stroke='purple' />}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
