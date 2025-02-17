'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'framer-motion';

const focusData = [
  { name: 'Clinical Trials', papers: 15, color: '#26385C' },  // Deep navy
  { name: 'Global Health', papers: 12, color: '#E63946' },    // Red
  { name: 'Health Systems', papers: 10, color: '#2A9D8F' },   // Teal
  { name: 'Digital Health', papers: 8, color: '#457B9D' },    // Blue
  { name: 'Public Health', papers: 5, color: '#1D3557' }      // Dark blue
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-primary/10">
        <p className="font-medium text-primary">{data.name}</p>
        <p className="text-sm text-foreground/70">
          <span className="font-medium">{data.papers}</span> publications
        </p>
        <p className="text-sm text-foreground/70">
          {((data.papers / focusData.reduce((acc, curr) => acc + curr.papers, 0)) * 100).toFixed(1)}% of total
        </p>
      </div>
    );
  }
  return null;
};

export function Focus() {
  return (
    <div className="space-y-8">
      {/* Summary Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h3 className="text-xl font-semibold text-primary">Research Focus Areas</h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Distribution of research publications across key areas of expertise,
          highlighting a balanced approach to global health challenges.
        </p>
      </motion.div>

      {/* Legend */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap justify-center gap-6"
      >
        {focusData.map((item, index) => (
          <motion.div
            key={item.name}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }} 
            />
            <span className="text-sm text-foreground/70">
              {item.name} ({item.papers})
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Chart */}
      <div className="h-[400px] relative">
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
                  fill={entry.color}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-3xl font-bold text-primary">
            {focusData.reduce((acc, curr) => acc + curr.papers, 0)}
          </div>
          <div className="text-sm text-foreground/70">
            Total Publications
          </div>
        </div>
      </div>

      {/* Key Insights */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {[
          {
            title: "Clinical Focus",
            description: "Strong emphasis on clinical trials and evidence generation"
          },
          {
            title: "Global Reach",
            description: "Significant contributions to global health initiatives"
          },
          {
            title: "Digital Innovation",
            description: "Growing focus on digital health solutions"
          }
        ].map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (index * 0.1) }}
            className="p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/10"
          >
            <h4 className="font-medium text-primary mb-2">{insight.title}</h4>
            <p className="text-sm text-foreground/70">{insight.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
