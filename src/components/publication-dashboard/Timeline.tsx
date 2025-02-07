'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';

interface TimelineProps {
  data: Array<{ year: string; count: number }>;
}

export function Timeline({ data }: TimelineProps) {
  // Process data in chronological order from 2011 to present
  const chartData = data
    .filter(d => parseInt(d.year) >= 2011)
    .slice()
    .reverse();
    
  // Calculate cumulative totals
  const processedData = chartData.reduce((acc, curr, idx) => {
    const prevTotal = idx > 0 ? acc[idx - 1].total : 0;
    return [...acc, {
      year: curr.year,
      papers: curr.count,
      total: prevTotal + curr.count,
      // Add a smoothed trend line for annual papers
      trend: Math.max(
        curr.count,
        idx > 0 ? (acc[idx - 1].papers + curr.count) / 2 : curr.count
      )
    }];
  }, [] as Array<{ year: string; papers: number; total: number; trend: number }>);

  return (
    <Card className="bg-background">
      <CardContent className="pt-6">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart 
              data={processedData}
              margin={{ top: 10, right: 10, left: 50, bottom: 0 }}
            >
              {/* Subtle grid lines */}
              <CartesianGrid 
                strokeDasharray="3 3" 
                vertical={false}
                stroke="#666"
                opacity={0.1}
              />
              
              {/* X-Axis (Years) */}
              <XAxis 
                dataKey="year" 
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                dy={10}
              />
              
              {/* Right Y-Axis (Total Publications) - Now primary */}
              <YAxis 
                yAxisId="total"
                orientation="right"
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
                label={{ 
                  value: 'Total Publications', 
                  angle: 90, 
                  position: 'insideRight',
                  style: { fill: '#666', fontSize: 12 },
                  offset: 0
                }}
              />
              
              {/* Left Y-Axis (Publications per Year) - Now secondary */}
              <YAxis 
                yAxisId="annual"
                orientation="left"
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                domain={[0, 8]}
                ticks={[0, 2, 4, 6, 8]}
                label={{ 
                  value: 'Publications per Year', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: '#666', fontSize: 12 },
                  offset: 0
                }}
              />
              
              {/* Simple tooltip */}
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                formatter={(value: number, name: string) => [
                  `${value}`,
                  name === 'total' ? 'Total Publications' : 'Publications'
                ]}
              />
              
              {/* Area for cumulative total - prominent */}
              <Area
                yAxisId="total"
                type="monotone"
                dataKey="total"
                name="total"
                stroke="rgb(214, 40, 40)"
                fill="rgba(214, 40, 40, 0.15)"
                strokeWidth={2}
                dot={{ r: 3, fill: "rgb(214, 40, 40)" }}
                activeDot={{ r: 4, fill: "rgb(214, 40, 40)" }}
              />
              
              {/* Smoothed trend line - very muted */}
              <Line
                yAxisId="annual"
                type="monotone"
                dataKey="trend"
                name="papers"
                stroke="rgba(26, 58, 92, 0.3)"
                strokeWidth={1}
                dot={{ r: 2, fill: "rgba(26, 58, 92, 0.3)" }}
                activeDot={{ r: 3, fill: "rgba(26, 58, 92, 0.5)" }}
              />
              
              {/* Actual annual papers - extremely subtle dots */}
              <Line
                yAxisId="annual"
                type="monotone"
                dataKey="papers"
                stroke="none"
                dot={{ r: 1, fill: "rgba(26, 58, 92, 0.1)" }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}