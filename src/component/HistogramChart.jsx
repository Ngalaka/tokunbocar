"use client";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Cell,
  Tooltip,
  LabelList,
} from "recharts";


export default function HistogramChart() {
 const data = [
    {
        var: "w1",
        sales: 32,
        color: "#3B82F6"
        
    },
    {
        var: "w2",
        sales: 41,
        color: "#10B981"
    },
    {
         var: "w3",
        sales: 58,
        color: "#EF4444"
    },
    {
        var: "w4",
        sales: 44,
        color: "#8B5CF6" 
    },
   
];
  return (
    <div className="w-[90%] h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis dataKey="var" />

          <YAxis tick={false} />

          {/* <Tooltip  cursor={{ fill: "transparent" }} /> */}

          <Bar
            dataKey="sales"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
            barSize={150}
          >
            <LabelList dataKey="sales" position="top" />

            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
