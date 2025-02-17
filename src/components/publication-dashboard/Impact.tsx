'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const journalData = [
  { 
    name: 'N Engl J Med',
    count: 2,
    tier: 'Highest Impact',
    color: '#26385C'  // Deep navy
  },
  { 
    name: 'Lancet Global Health',
    count: 2,
    tier: 'Highest Impact',
    color: '#26385C'
  },
  { 
    name: 'Lancet HIV',
    count: 5,
    tier: 'High Impact',
    color: '#E63946'  // Red
  },
  { 
    name: 'Am J Trop Med Hyg',
    count: 5,
    tier: 'High Impact',
    color: '#E63946'
  },
  { 
    name: 'JAMA Netw Open',
    count: 2,
    tier: 'High Impact',
    color: '#2A9D8F'  // Teal
  }
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-4 border border-primary/10 rounded-lg shadow-lg">
        <p className="font-medium text-primary">{label}</p>
        <p className="text-sm text-foreground/70">
          <span className="font-medium">{payload[0].value}</span> publications
        </p>
        <p className="text-sm text-foreground/70">
          Impact Tier: <span className="font-medium">{payload[0].payload.tier}</span>
        </p>
      </div>
    );
  }
  return null;
};

export function Impact() {
  return (
    <div className="space-y-8">
      {/* Legend */}
      <div className="flex flex-wrap justify-center gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#26385C' }} />
          <span className="text-sm text-foreground/70">Highest Impact (IF &gt; 70)</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E63946' }} />
          <span className="text-sm text-foreground/70">High Impact (IF 20-70)</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-2"
        >
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2A9D8F' }} />
          <span className="text-sm text-foreground/70">Impact Factor &lt; 20</span>
        </motion.div>
      </div>

      {/* Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="h-[400px] w-full"
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={journalData}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barSize={40}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              vertical={false} 
              stroke="#26385C" 
              opacity={0.1} 
            />
            <XAxis
              dataKey="name"
              stroke="#26385C"
              fontSize={12}
              tickLine={false}
              angle={-45}
              textAnchor="end"
              interval={0}
              height={60}
            />
            <YAxis
              stroke="#26385C"
              fontSize={12}
              tickLine={false}
              axisLine={{ strokeWidth: 1, stroke: '#26385C', opacity: 0.2 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="count" 
              radius={[4, 4, 0, 0]}
              fill="#26385C"
            >
              {journalData.map((entry, index) => (
                <motion.rect
                  key={`bar-${index}`}
                  fill={entry.color}
                  initial={{ y: 400, height: 0 }}
                  animate={{ 
                    y: undefined,
                    height: undefined 
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Summary Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-center text-foreground/70 text-sm"
      >
        Publications across leading medical and scientific journals, 
        with significant contributions to high-impact factor publications
      </motion.p>
    </div>
  );
}
