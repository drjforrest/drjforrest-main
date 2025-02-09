'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Timeline } from './Timeline';
import { Impact } from './Impact';
import { Focus } from './Focus';
import { Clock, TrendingUp, Target } from 'lucide-react';

const tabs = [
  { id: 'timeline', label: 'Timeline', icon: Clock },
  { id: 'impact', label: 'Impact', icon: TrendingUp },
  { id: 'focus', label: 'Research Focus', icon: Target }
];

export function PublicationDashboard() {
  const [activeTab, setActiveTab] = React.useState('timeline');

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Metrics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Journal Publications', value: '50' },
          { label: 'High Impact Papers', value: '9' },
          { label: 'Most Papers in a Year', value: '8' },
          { label: 'First Author Publications', value: '6' }
        ].map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-primary/10"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">{metric.value}</div>
              <div className="text-sm text-foreground/70">{metric.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/50 backdrop-blur-sm rounded-lg p-1 shadow-lg border border-primary/10">
          <div className="flex space-x-2">
            {tabs.map(({ id, label, icon: Icon }) => (
              <motion.button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`
                  flex items-center px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 relative
                  ${activeTab === id ? 'text-primary' : 'text-foreground/60 hover:text-foreground/80'}
                `}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className="w-4 h-4 mr-2" />
                {label}
                {activeTab === id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-primary/10 rounded-lg -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-primary/10"
      >
        {activeTab === 'timeline' && <Timeline />}
        {activeTab === 'impact' && <Impact />}
        {activeTab === 'focus' && <Focus />}
      </motion.div>
    </div>
  );
}