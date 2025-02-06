'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { EnhancedTooltip } from '@/components/ui/enhanced-tooltip';
import type { JournalImpact } from '@/types/publications';

interface ImpactProps {
  data: JournalImpact[];
}

export function Impact({ data }: ImpactProps) {
  return (
    <Card className="bg-surface">
      <CardContent className="pt-6">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid 
                strokeDasharray="3 3" 
                className="opacity-30"
                stroke="var(--border)"
              />
              <XAxis 
                dataKey="name" 
                tick={{ fill: 'var(--content-muted)' }}
                stroke="var(--border)"
              />
              <YAxis 
                tick={{ fill: 'var(--content-muted)' }}
                stroke="var(--border)"
                label={{ 
                  value: 'Number of Publications', 
                  angle: -90, 
                  position: 'insideLeft',
                  style: { fill: 'var(--content-muted)' }
                }}
              />
              <Tooltip
                content={
                  <EnhancedTooltip
                    formatter={(value, name, props) => [
                      `${value} publications`,
                      props.payload.tier
                    ]}
                  />
                }
              />
              <Bar 
                dataKey="count" 
                fill="var(--primary)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        {/* Legend */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {['Highest Impact', 'High Impact', 'Peer Reviewed'].map((tier) => (
            <div key={tier} className="text-center">
              <div className="text-xs text-content-muted">{tier}</div>
              <div className="text-sm font-medium">
                {data.filter(d => d.tier === tier).reduce((sum, d) => sum + d.count, 0)} papers
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}