'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';

interface TimelineProps {
  data: Array<{ year: string; count: number }>;
}

export function Timeline({ data }: TimelineProps) {
  const chartData = data
    .filter(d => parseInt(d.year) >= 2011)
    .slice()
    .reverse();
    
  const processedData = chartData.reduce((acc, curr, idx) => {
    const prevTotal = idx > 0 ? acc[idx - 1].total : 0;
    return [...acc, {
      year: curr.year,
      papers: curr.count,
      total: prevTotal + curr.count,
      trend: Math.max(
        curr.count,
        idx > 0 ? (acc[idx - 1].papers + curr.count) / 2 : curr.count
      )
    }];
  }, [] as Array<{ year: string; papers: number; total: number; trend: number }>);

  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={processedData}
              margin={{ top: 10, right: 10, left: 50, bottom: 0 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false}
                stroke="var(--foreground)"
                opacity={0.05}
              />
              
              <XAxis 
                dataKey="year" 
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                dy={10}
              />
              
              <YAxis 
                yAxisId="total"
                orientation="right"
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
                label={{ 
                  value: 'Total Publications', 
                  angle: 90, 
                  position: 'insideRight',
                  style: { fill: 'var(--foreground)', fontSize: 12 },
                  offset: 0
                }}
              />
              
              <YAxis 
                yAxisId="annual"
                orientation="left"
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
                label={{ 
                  value: 'Publications per Year', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: 'var(--foreground)', fontSize: 12 },
                  offset: 0,
                  dy: 50
                }}
              />
              
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                formatter={(value: number, name: string) => [
                  `${value}`,
                  name === 'total' ? 'Total Publications' : 'Publications'
                ]}
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
              
              {/* Line for annual papers */}
              <Line
                yAxisId="annual"
                type="monotone"
                dataKey="papers"
                name="papers"
                stroke="rgb(var(--accent))"
                strokeWidth={2}
                strokeOpacity={0.6}
                dot={{ r: 2, fill: "rgb(var(--accent))", fillOpacity: 0.6 }}
                activeDot={{ r: 3, fill: "rgb(var(--accent))", fillOpacity: 0.8 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
