'use client';

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Toggle } from '@/components/ui/toggle';

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
      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/10">
        <p className="font-medium text-primary">{label}</p>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-foreground/70">
            Publications: <span className="font-medium">{payload[0].payload.papers}</span>
          </p>
          <p className="text-sm text-foreground/70">
            Total: <span className="font-medium">{payload[0].payload.total}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

export function Timeline() {
  const [showAnnual, setShowAnnual] = useState(true);
  
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h3 className="text-xl font-semibold text-primary">Publication Timeline</h3>
        <p className="text-foreground/70">
          Track the growth and evolution of research contributions from 2009 to present
        </p>
      </motion.div>

      {/* Legend & Controls */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#26385C' }} />
            <span className="text-sm text-foreground/70">Cumulative Total</span>
          </div>
          {showAnnual && (
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E63946' }} />
              <span className="text-sm text-foreground/70">Annual Publications</span>
            </div>
          )}
        </div>
        
        <button
          onClick={() => setShowAnnual(!showAnnual)}
          className="px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-primary/10
                     text-sm text-primary hover:bg-primary/5 transition-colors"
        >
          {showAnnual ? 'Hide' : 'Show'} Annual Count
        </button>
      </motion.div>

      {/* Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="h-[400px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={yearlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <defs>
              <linearGradient id="totalGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#26385C" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#26385C" stopOpacity={0}/>
              </linearGradient>
            </defs>
            
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#26385C" 
              opacity={0.1} 
            />
            
            <XAxis 
              dataKey="year" 
              stroke="#26385C"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: '#26385C', opacity: 0.2 }}
            />
            
            <YAxis 
              yAxisId="total"
              orientation="right"
              stroke="#26385C"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: '#26385C', opacity: 0.2 }}
              domain={[0, 'dataMax + 5']}
            />
            
            {showAnnual && (
              <YAxis 
                yAxisId="annual"
                orientation="left"
                stroke="#E63946"
                fontSize={12}
                tickLine={false}
                axisLine={{ strokeWidth: 1, stroke: '#E63946', opacity: 0.2 }}
                domain={[0, 'dataMax + 2']}
              />
            )}
            
            <Tooltip content={<CustomTooltip />} />
            
            {/* Area for cumulative total */}
            <Area
              yAxisId="total"
              type="monotone"
              dataKey="total"
              stroke="#26385C"
              strokeWidth={2}
              fill="url(#totalGradient)"
              dot={{ fill: "#26385C", r: 4 }}
              activeDot={{ r: 6, fill: "#26385C" }}
            />
            
            {/* Line for annual papers */}
            {showAnnual && (
              <Line
                yAxisId="annual"
                type="monotone"
                dataKey="papers"
                stroke="#E63946"
                strokeWidth={2}
                dot={{ fill: "#E63946", r: 4 }}
                activeDot={{ r: 6, fill: "#E63946" }}
              />
            )}
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Key Highlights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            metric: "Peak Year",
            value: "2022",
            detail: "9 publications"
          },
          {
            metric: "Total Output",
            value: `${yearlyData[yearlyData.length - 1].total}`,
            detail: "publications to date"
          },
          {
            metric: "Growth Rate",
            value: "15%",
            detail: "year-over-year avg"
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.metric}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/10"
          >
            <div className="text-sm text-foreground/70">{stat.metric}</div>
            <div className="text-2xl font-bold text-primary">{stat.value}</div>
            <div className="text-sm text-foreground/70">{stat.detail}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
