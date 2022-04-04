import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "2016",
    sells: 4000,
    amount: 2400,
    amt: 2400,
  },
  {
    name: "2017",
    sells: 3000,
    amount: 1398,
    amt: 2210,
  },
  {
    name: "2018",
    sells: 2000,
    amount: 9800,
    amt: 2290,
  },
  {
    name: "2019",
    sells: 2780,
    amount: 3908,
    amt: 2000,
  },
  {
    name: "2020",
    sells: 1890,
    amount: 4800,
    amt: 2181,
  },
  {
    name: "2021",
    sells: 2390,
    amount: 12800,
    amt: 13000,
  },
  {
    name: "2022",
    sells: 5004,
    amount: 15300,
    amt: 112100,
  },
];

export default function LaptopAnalysis() {

  
    return (
      <div className="my-5">
        <h1 className="my-5">Laptop Analysis</h1>
        <ResponsiveContainer width="100%" aspect={3}>
          <BarChart
            width={500}
            height={300}
            data={data}
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
            <Bar dataKey="amount" fill="#8884d8" />
            <Bar dataKey="sells" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

