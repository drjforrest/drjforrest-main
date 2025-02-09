'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-sm text-foreground/70">{label}</span>
  </div>
);

export function Timeline() {
  // Sample data - replace with your actual data
  const data = Array.from({ length: 13 }, (_, i) => {
    const year = 2011 + i;
    return {
      year: year.toString(),
      papers: Math.floor(Math.random() * 8),
      total: 0  // Will be calculated
    };
  }).reduce((acc, curr, idx) => {
    const prevTotal = idx > 0 ? acc[idx - 1].total : 0;
    curr.total = prevTotal + curr.papers;
    return [...acc, curr];
  }, [] as any[]);

  return (
    <div className="space-y-6">
      {/* Legend */}
      <div className="flex justify-center gap-8">
        <Legend color="bg-primary/80" label="Cumulative Publications" />
        <Legend color="bg-accent/20" label="Publications per Year" />
      </div>
      
      {/* Chart */}
      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--primary)" opacity={0.1} />
            
            <XAxis 
              dataKey="year" 
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: 'var(--primary)', opacity: 0.2 }}
              dy={10}
            />
            
            <YAxis 
              yAxisId="total"
              orientation="right"
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: 'var(--primary)', opacity: 0.2 }}
              domain={[0, 60]}
              ticks={[0, 15, 30, 45, 60]}
            />
            
            <YAxis 
              yAxisId="annual"
              orientation="left"
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: 'var(--primary)', opacity: 0.2 }}
              domain={[0, 8]}
              ticks={[0, 2, 4, 6, 8]}
            />
            
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number, name: string) => [
                value,
                name === 'total' ? 'Total Publications' : 'Publications'
              ]}
            />
            
            {/* Line for annual papers - now behind the area */}
            <Line
              yAxisId="annual"
              type="monotone"
              dataKey="papers"
              name="papers"
              stroke="rgb(var(--accent))"
              strokeWidth={2}
              strokeOpacity={0.2}
              dot={{ r: 2, fill: "rgb(var(--accent))", fillOpacity: 0.2 }}
              activeDot={{ r: 3, fill: "rgb(var(--accent))", fillOpacity: 0.4 }}
            />
            
            {/* Area chart for cumulative total */}
            <Area
              yAxisId="total"
              type="monotone"
              dataKey="total"
              name="total"
              stroke="rgb(var(--primary))"
              fill="rgb(var(--primary))"
              fillOpacity={0.15}
              strokeWidth={2}
              dot={{ r: 3, fill: "rgb(var(--primary))" }}
              activeDot={{ r: 4, fill: "rgb(var(--primary))" }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>

      {/* Year Range Indicator */}
      <div className="text-center text-sm text-foreground/60">
        Publication data from 2011 to 2023
      </div>
    </div>
  );
}