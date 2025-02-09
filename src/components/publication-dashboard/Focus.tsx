'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const focusData = [
  { name: 'HIV/AIDS', papers: 20 },
  { name: 'Clinical Trials', papers: 15 },
  { name: 'COVID-19', papers: 12 },
  { name: 'Public Health', papers: 5 },
  { name: 'Other', papers: 2 }
];

const COLORS = [
  'rgb(var(--primary))',    // Main theme color
  'rgb(var(--accent))',     // Accent color
  'rgb(var(--success))',    // Success color
  'rgb(var(--muted))',      // Muted color
  'rgb(var(--neutral))'     // Neutral color
];

export function Focus() {
  return (
    <div className="space-y-8">
      <div className="flex justify-center flex-wrap gap-6">
        {focusData.map(({ name, papers }, index) => (
          <div key={name} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: COLORS[index] }} 
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
              data={focusData}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={160}
              paddingAngle={2}
              dataKey="papers"
            >
              {focusData.map((entry, index) => (
                <Cell 
                  key={entry.name}
                  fill={COLORS[index]}
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