'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const journalData = [
  { name: 'Nature Medicine', count: 2, tier: 'Highest Impact' },
  { name: 'The Lancet Regional Health', count: 3, tier: 'High Impact' },
  { name: 'Clinical Infectious Diseases', count: 4, tier: 'High Impact' },
  { name: 'JMIR Public Health', count: 5, tier: 'Peer Reviewed' },
  { name: 'BMC Public Health', count: 6, tier: 'Peer Reviewed' }
];

export function Impact() {
  const chartData = journalData.map(item => ({
    ...item,
    fill: 'rgb(var(--primary))',
    opacity: item.tier === 'Highest Impact' ? 0.9 :
            item.tier === 'High Impact' ? 0.6 : 0.3
  }));

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-6">
        {[
          { label: 'Highest Impact', opacity: 0.9 },
          { label: 'High Impact', opacity: 0.6 },
          { label: 'Peer Reviewed', opacity: 0.3 }
        ].map(({ label, opacity }) => (
          <div key={label} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ 
                backgroundColor: `rgb(var(--primary))`,
                opacity 
              }} 
            />
            <span className="text-sm text-foreground/70">{label}</span>
          </div>
        ))}
      </div>

      <div className="h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--primary)" opacity={0.1} />
            <XAxis
              dataKey="name"
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              interval={0}
              height={60}
            />
            <YAxis
              stroke="var(--foreground)"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: 'var(--primary)', opacity: 0.2 }}
            />
            <Tooltip
              cursor={{ fill: 'rgb(var(--primary))', opacity: 0.1 }}
              contentStyle={{
                backgroundColor: 'var(--background)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                fontSize: '12px',
                boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
              }}
            />
            <Bar dataKey="count" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}