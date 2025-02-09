'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded-full ${color}`} />
    <span className="text-sm text-foreground/70">{label}</span>
  </div>
);

export function Timeline() {
  const [showAnnual, setShowAnnual] = useState(false);

  const yearlyData = [
    { year: '2009', papers: 1 },
    { year: '2010', papers: 0 },
    { year: '2011', papers: 1 },
    { year: '2012', papers: 2 },
    { year: '2013', papers: 2 },
    { year: '2014', papers: 7 },
    { year: '2015', papers: 6 },
    { year: '2016', papers: 5 },
    { year: '2017', papers: 4 },
    { year: '2018', papers: 3 },
    { year: '2019', papers: 1 },
    { year: '2020', papers: 3 },
    { year: '2021', papers: 5 },
    { year: '2022', papers: 9 },
    { year: '2023', papers: 2 },
    { year: '2024', papers: 2 }
  ];

  // Calculate cumulative total
  const data = yearlyData.reduce((acc, curr, idx) => {
    const prevTotal = idx > 0 ? acc[idx - 1].total : 0;
    return [...acc, {
      ...curr,
      total: prevTotal + curr.papers
    }];
  }, [] as any[]);

  // Find max values for axis ranges
  const maxPapers = Math.max(...data.map(d => d.papers));
  const maxTotal = Math.max(...data.map(d => d.total));

  return (
    <div className="space-y-6">
      {/* Toggle and Legend */}
      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <Legend color="bg-primary/80" label="Cumulative Publications" />
          {showAnnual && (
            <Legend color="bg-accent/20" label="Publications per Year" />
          )}
        </div>
        <button
          onClick={() => setShowAnnual(!showAnnual)}
          className="px-4 py-2 text-sm rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          {showAnnual ? 'Hide' : 'Show'} annual publication count
        </button>
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
              domain={[0, Math.ceil(maxTotal / 10) * 10]}
              ticks={Array.from({ length: 6 }, (_, i) => Math.ceil(maxTotal / 5) * i)}
            />
            
            {showAnnual && (
              <YAxis 
                yAxisId="annual"
                orientation="left"
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1, stroke: 'var(--primary)', opacity: 0.2 }}
                domain={[0, Math.ceil(maxPapers / 5) * 5]}
                ticks={Array.from({ length: 6 }, (_, i) => Math.ceil(maxPapers / 5) * i)}
              />
            )}
            
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
            
            {/* Line for annual papers - only shown when toggle is on */}
            {showAnnual && (
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
            )}
            
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
        Publication data from 2009 to 2024
      </div>
    </div>
  );
}