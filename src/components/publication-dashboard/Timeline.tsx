'use client';

import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { EnhancedTooltip } from '@/components/ui/enhanced-tooltip';
import { RotateCcw } from 'lucide-react';
import type { TimelineData, MilestoneMarker } from '@/types/publications';

interface TimelineProps {
  data: TimelineData[];
}

export function Timeline({ data }: TimelineProps) {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  // Calculate cumulative total for each year
  const cumulativeData = data.map((item, index) => {
    const previousTotal = index > 0 ? 
      data.slice(0, index).reduce((sum, d) => sum + d.count, 0) : 0;
    return {
      ...item,
      total: previousTotal + item.count
    };
  });

  // Find significant milestones (years with 5+ publications)
  const milestones = cumulativeData.reduce<MilestoneMarker[]>((acc, curr) => {
    if (curr.count >= 5) {
      acc.push({
        year: curr.year,
        label: `${curr.count} publications`
      });
    }
    return acc;
  }, []);

  return (
    <Card className="bg-surface">
      <CardContent className="pt-6">
        <div className="relative">
          <div className="absolute top-0 right-0 z-10">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedYear(null)}
              disabled={!selectedYear}
              className="text-primary hover:text-primary-dark"
            >
              <RotateCcw className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart 
                data={cumulativeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  className="opacity-30"
                  stroke="var(--border)"
                />
                <XAxis 
                  dataKey="year" 
                  tick={{ fill: 'var(--content-muted)' }}
                  stroke="var(--border)"
                />
                <YAxis 
                  tick={{ fill: 'var(--content-muted)' }}
                  stroke="var(--border)"
                  label={{ 
                    value: 'Publications', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fill: 'var(--content-muted)' }
                  }}
                />
                
                {/* Annual publications line */}
                <Line 
                  type="monotone" 
                  dataKey="count"
                  name="Annual"
                  stroke="var(--primary)"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2, fill: 'var(--background)', stroke: 'var(--primary)' }}
                  activeDot={{ 
                    r: 6,
                    fill: 'var(--primary)',
                    onClick: (props: any) => {
                      const year = props.payload.year;
                      setSelectedYear(selectedYear === year ? null : year);
                    }
                  }}
                />

                {/* Cumulative total line */}
                <Line 
                  type="monotone" 
                  dataKey="total"
                  name="Cumulative"
                  stroke="var(--primary-light)"
                  strokeWidth={2}
                  dot={{ r: 4, strokeWidth: 2, fill: 'var(--background)', stroke: 'var(--primary-light)' }}
                  activeDot={{ 
                    r: 6,
                    fill: 'var(--primary-light)',
                    onClick: (props: any) => {
                      const year = props.payload.year;
                      setSelectedYear(selectedYear === year ? null : year);
                    }
                  }}
                />

                {/* Milestone markers */}
                {milestones.map((milestone, index) => (
                  <ReferenceLine
                    key={index}
                    x={milestone.year}
                    stroke="var(--content-muted)"
                    strokeDasharray="3 3"
                    label={{
                      value: milestone.label,
                      position: 'top',
                      fill: 'var(--content-muted)',
                      fontSize: 12
                    }}
                  />
                ))}

                <Tooltip
                  content={
                    <EnhancedTooltip
                      solutions={{
                        count: "Annual publications",
                        total: "Cumulative total"
                      }}
                      formatter={(value) => `${value} publications`}
                    />
                  }
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Context Box */}
          {selectedYear && (
            <div className="mt-6 p-4 bg-surface-muted rounded-lg">
              <h4 className="text-sm font-medium mb-2">{selectedYear} Publication Metrics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-content-muted">Annual Publications</p>
                  <p className="text-sm font-medium">
                    {cumulativeData.find(d => d.year === selectedYear)?.count}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-content-muted">Cumulative Total</p>
                  <p className="text-sm font-medium">
                    {cumulativeData.find(d => d.year === selectedYear)?.total}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}