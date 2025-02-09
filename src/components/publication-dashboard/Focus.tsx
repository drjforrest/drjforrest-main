'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const focusData = [
  { name: 'Clinical Trials', papers: 15 },
  { name: 'Global Health', papers: 12 },
  { name: 'Data Science', papers: 10 },
  { name: 'Health Systems', papers: 8 },
  { name: 'Other', papers: 5 }
];

export function Focus() {
  const pieData = focusData.map((item, index) => ({
    ...item,
    opacity: 1 - (index * 0.15)
  }));

  return (
    <div className="space-y-8">
      <div className="flex justify-center flex-wrap gap-6">
        {pieData.map(({ name, papers, opacity }, index) => (
          <div key={name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ 
                backgroundColor: `rgb(var(--primary))`,
                opacity 
              }} 
            />
            <span className="text-sm text-foreground/70">
              {name} ({papers})
            </span>
          </div>
        ))}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={160}
              paddingAngle={2}
              dataKey="papers"
            >
              {pieData.map((entry, index) => (
                <Cell 
                  key={entry.name}
                  fill="rgb(var(--primary))"
                  opacity={entry.opacity}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
              formatter={(value: number, name: string) => [
                `${value} papers`,
                name
              ]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}