'use client';

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const yearlyData = [
  { year: '2009', papers: 1 },
  { year: '2010', papers: 0 },
  { year: '2011', papers: 1 },
  { year: '2012', papers: 2 },
  { year: '2013', papers: 2 },
  { year: '2014', papers: 7 },
  { year: '2015', papers: 6 },
  { year: '2016', papers: 5 },
  { year: '2017', papers: 4 },
  { year: '2018', papers: 3 },
  { year: '2019', papers: 1 },
  { year: '2020', papers: 3 },
  { year: '2021', papers: 5 },
  { year: '2022', papers: 9 },
  { year: '2023', papers: 2 },
  { year: '2024', papers: 2 }
].map((item, index, array) => ({
  ...item,
  total: array.slice(0, index + 1).reduce((sum, curr) => sum + curr.papers, 0)
}));

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface dark:bg-surface-elevated p-4 rounded-lg shadow-lg border border-border">
        <p className="font-medium text-primary">{label}</p>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-foreground/70">
            Publications: <span className="font-medium">{payload[0].value}</span>
          </p>
          {payload[1] && (
            <p className="text-sm text-foreground/70">
              Cumulative Total: <span className="font-medium">{payload[1].value}</span>
            </p>
          )}
        </div>
      </div>
    );
  }
  return null;
};

export function Timeline() {
  const [showAnnual, setShowAnnual] = useState(false);
  
  return (
    <div className="space-y-8">
      {/* Graph Controls */}
      <div className="flex justify-end">
        <Button
          variant="outline"
          onClick={() => setShowAnnual(!showAnnual)}
          className="text-sm"
        >
          {showAnnual ? 'Hide' : 'Show'} Annual Chart
        </Button>
      </div>

      {/* Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="h-[400px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={yearlyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
            barSize={40}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="rgb(var(--foreground))" 
              opacity={0.1} 
            />
            
            <XAxis 
              dataKey="year" 
              stroke="rgb(var(--foreground))"
              fontSize={12}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            
            <YAxis 
              stroke="rgb(var(--foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: 'rgb(var(--foreground))', opacity: 0.2 }}
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            {showAnnual && (
              <Bar 
                dataKey="papers" 
                fill="rgb(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
            )}
            
            <Bar 
              dataKey="total" 
              fill="rgb(var(--primary))"
              radius={[4, 4, 0, 0]}
              opacity={showAnnual ? 0.3 : 0.8}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
}