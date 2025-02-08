'use client';

import React from 'react';
import { Card, CardContent } from "../ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import type { JournalImpact } from '@/types/publications';

interface ImpactProps {
  data: JournalImpact[];
}

export function Impact({ data }: ImpactProps) {
  const chartData = data.map(item => ({
    ...item,
    fill: 'rgb(var(--primary))',
    opacity: item.tier === 'Highest Impact' ? 0.9 :
            item.tier === 'High Impact' ? 0.6 :
            0.3
  }));

  return (
    <Card className="bg-card">
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
                stroke="var(--foreground)"
                opacity={0.05}
              />
              <XAxis
                dataKey="name"
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="var(--foreground)"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                label={{
                  value: 'Number of Publications',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: 'var(--foreground)', fontSize: 12 }
                }}
              />
              <Tooltip
                cursor={{ fill: 'rgb(var(--primary))', opacity: 0.05 }}
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                formatter={(value: number, name: string) => [`${value} papers`, `${name}`]}
              />
              <Bar
                dataKey="count"
                fill="rgb(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
