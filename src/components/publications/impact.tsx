'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';

interface ImpactProps {
  data: Array<{
    name: string;
    count: number;
    tier: string;
  }>;
}

export function Impact({ data }: ImpactProps) {
  // Color mapping based on tier
  const getColor = (tier: string) => {
    switch (tier) {
      case 'Highest Impact':
        return 'rgb(var(--primary))';
      case 'High Impact':
        return 'rgb(var(--accent))';
      default:
        return 'rgb(var(--muted))';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[400px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-foreground/10" 
          />
          <XAxis 
            dataKey="name"
            className="text-foreground/70"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            className="text-foreground/70"
            tick={{ fontSize: 12 }}
            label={{ 
              value: 'Publications',
              angle: -90,
              position: 'insideLeft',
              className: 'text-foreground/70 fill-current'
            }}
          />
          <Tooltip
            content={({ active, payload, label }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="bg-background border border-foreground/10 rounded-lg p-3 shadow-lg">
                    <p className="font-medium text-foreground">{label}</p>
                    <p className="text-foreground/70">
                      Publications: {data.count}
                    </p>
                    <p className="text-foreground/70 text-sm">
                      Tier: {data.tier}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell 
                key={`cell-${index}`}
                fill={getColor(entry.tier)}
                className="transition-opacity duration-200 hover:opacity-80"
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      
      {/* Legend */}
      <div className="flex justify-center gap-6 mt-4">
        {['Highest Impact', 'High Impact', 'Peer Reviewed'].map((tier) => (
          <div key={tier} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: getColor(tier) }}
            />
            <span className="text-sm text-foreground/70">{tier}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}