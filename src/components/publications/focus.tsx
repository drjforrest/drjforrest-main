'use client';

import { motion } from 'framer-motion';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

interface FocusProps {
  data: Array<{
    name: string;
    papers: number;
  }>;
}

export function Focus({ data }: FocusProps) {
  // Professional color palette that complements our theme
  const COLORS = [
    'rgb(var(--primary))',
    'rgb(var(--accent))',
    'rgb(var(--success))',
    'rgb(var(--muted))',
    'rgb(var(--primary) / 0.7)',
  ];

  // Calculate percentages
  const total = data.reduce((sum, item) => sum + item.papers, 0);
  const dataWithPercentage = data.map(item => ({
    ...item,
    percentage: ((item.papers / total) * 100).toFixed(1)
  }));

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={dataWithPercentage}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            innerRadius={60}
            dataKey="papers"
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              percentage,
              name,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = outerRadius * 1.15;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <motion.text
                  x={x}
                  y={y}
                  fill="currentColor"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                  className="text-xs text-foreground/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {name} ({percentage}%)
                </motion.text>
              );
            }}
          >
            {dataWithPercentage.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]}
                className="transition-opacity duration-200 hover:opacity-80"
              />
            ))}
          </Pie>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-background border border-foreground/10 rounded-lg p-3 shadow-lg">
                    <p className="font-medium text-foreground">{data.name}</p>
                    <p className="text-foreground/70">
                      Publications: {data.papers}
                    </p>
                    <p className="text-foreground/70 text-sm">
                      {data.percentage}% of total
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </motion.div>
  );
}