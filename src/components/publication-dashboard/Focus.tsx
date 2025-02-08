'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface FocusData {
  name: string;
  papers: number;
}

interface FocusProps {
  data: FocusData[];
}

export function Focus({ data }: FocusProps) {
  return (
    <Card className="bg-card">
      <CardContent className="pt-6">
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 40, bottom: 30 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                className="opacity-30"
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
                  value: 'Number of Papers',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: 'var(--foreground)', fontSize: 12 },
                  offset: -10,
                  dy: -30
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--background)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  fontSize: '12px',
                }}
                formatter={(value: number) => [`${value} papers`, 'Papers']}
              />
              <Bar
                dataKey="papers"
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
