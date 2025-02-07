'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnhancedTooltip } from '@/components/ui/enhanced-tooltip';

interface FocusData {
  name: string;
  papers: number;
}

interface FocusProps {
  data: FocusData[];
}

export function Focus({ data }: FocusProps) {
  return (
    <Card className="bg-background">
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
                stroke="var(--border)"
              />
              <XAxis
                dataKey="name"
                tick={{ fill: 'var(--muted-foreground)' }}
                stroke="var(--border)"
              />
              <YAxis
                stroke="#666"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1 }}
                label={{
                  value: 'Number of Papers',
                  angle: -90,
                  position: 'insideLeft',
                  style: { fill: '#666', fontSize: 12 },
                  offset: -10,
                  dy: -30
                }}
              />
              <Tooltip
                content={
                  <EnhancedTooltip
                    formatter={(value) => [`${value} papers`, 'Papers']}
                  />
                }
              />
              <Bar
                dataKey="papers"
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