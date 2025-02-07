'use client';

import React from 'react';
import { Card, CardContent } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { JournalImpact } from '@/types/publications';

interface ImpactProps {
  data: JournalImpact[];
}

export function Impact({ data }: ImpactProps) {
  // Process data with blue color scheme
  const chartData = data.map(item => ({
    ...item,
    fill: item.tier === 'Highest Impact' ? 'rgb(26, 58, 92)' : // Deep navy
          item.tier === 'High Impact' ? 'rgba(26, 58, 92, 0.7)' : 
          'rgba(26, 58, 92, 0.4)'
  }));

  return (
    <Card className="bg-background">
      <CardContent className="pt-6">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 20, right: 30, left: 40, bottom: 20 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#666"
                opacity={0.1}
              />
              <XAxis
                dataKey="name"
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
              />
              <YAxis
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                label={{
                  value: 'Number of Publications',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: '#666', fontSize: 12 }
                }}
              />
              <Tooltip
                cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                contentStyle={{
                  backgroundColor: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '12px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
                formatter={(value: number) => [`${value} publications`]}
                labelFormatter={(label) => {
                  const item = chartData.find(d => d.name === label);
                  return item?.tier || label;
                }}
              />
              <Bar
                dataKey="count"
                fill="rgb(26, 58, 92)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}