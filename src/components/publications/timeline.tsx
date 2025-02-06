'use client';

import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface TimelineProps {
  data: Array<{
    year: string;
    count: number;
  }>;
}

export function Timeline({ data }: TimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-foreground/10" 
          />
          <XAxis 
            dataKey="year"
            className="text-foreground/70"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-foreground/70"
            tick={{ fontSize: 12 }}
            label={{ 
              value: 'Publications',
              angle: -90,
              position: 'insideLeft',
              className: 'text-foreground/70 fill-current'
            }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                return (
                  <div className="bg-background border border-foreground/10 rounded-lg p-3 shadow-lg">
                    <p className="font-medium text-foreground">{label}</p>
                    <p className="text-foreground/70">
                      Publications: {payload[0].value}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Line
            type="monotone"
            dataKey="count"
            stroke="rgb(var(--primary))"
            strokeWidth={2}
            dot={{
              r: 4,
              fill: "rgb(var(--background))",
              stroke: "rgb(var(--primary))",
              strokeWidth: 2,
            }}
            activeDot={{
              r: 6,
              fill: "rgb(var(--primary))",
              stroke: "rgb(var(--background))",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}