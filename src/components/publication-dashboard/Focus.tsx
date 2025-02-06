'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnhancedTooltip } from '@/components/ui/enhanced-tooltip';
import type { ResearchFocus } from '@/types/publications';

interface FocusProps {
  data: ResearchFocus[];
}

export function Focus({ data }: FocusProps) {
  // Sort data by number of papers in descending order
  const sortedData = [...data].sort((a, b) => b.papers - a.papers);

  return (
    <Card className="bg-surface">
      <CardContent className="pt-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={sortedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              layout="vertical"
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                className="opacity-30"
                stroke="var(--border)"
              />
              <XAxis 
                type="number"
                tick={{ fill: 'var(--content-muted)' }}
                stroke="var(--border)"
                label={{ 
                  value: 'Number of Publications', 
                  position: 'insideBottom',
                  offset: -15,
                  style: { fill: 'var(--content-muted)' }
                }}
              />
              <YAxis 
                type="category"
                dataKey="name"
                tick={{ fill: 'var(--content-muted)' }}
                stroke="var(--border)"
                width={120}
              />
              <Tooltip
                content={
                  <EnhancedTooltip
                    formatter={(value) => `${value} publications`}
                  />
                }
              />
              <Bar 
                dataKey="papers" 
                fill="var(--primary)"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Summary */}
        <div className="mt-6">
          <h4 className="text-sm font-medium mb-2">Research Focus Distribution</h4>
          <div className="text-sm text-content-muted">
            Primary focus on {sortedData[0].name} ({sortedData[0].papers} papers) and {sortedData[1].name} ({sortedData[1].papers} papers)
          </div>
        </div>
      </CardContent>
    </Card>
  );
}