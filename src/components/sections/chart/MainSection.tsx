'use client';
import { getChartData } from '@/services/getChartData';
import { useQuery } from '@tanstack/react-query';
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
} from 'recharts';

type Props = {};

export default function MainSection({}: Props) {
  const { data } = useQuery({
    queryKey: ['chartData'],
    queryFn: () => getChartData(),
  });

  return (
    <main className="container py-20 flex gap-10 justify-center h-screen items-center">
      <div className="w-full h-full space-y-10">
        <h2 className="text-4xl font-semibold text-center">
          {' '}
          Simple Bar Chart
        </h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data as never}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar
              dataKey="pv"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />

            <BarChart dataKey="uv" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="w-full h-full space-y-10">
        <h2 className="text-4xl text-center font-semibold">Stacked version</h2>

        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data as never}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="pv" stackId="a" fill="#8884d8" />

            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
