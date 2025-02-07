'use client';

import { motion } from 'framer-motion';
import { Globe2, BookOpenCheck, PenTool } from 'lucide-react';

const icons = [
  { Icon: Globe2, delay: 0 },
  { Icon: BookOpenCheck, delay: 0.1 },
  { Icon: PenTool, delay: 0.2 },
];

export function IconBanner() {
  return (
    <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary/20 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center -mt-8 space-x-4">
          {icons.map(({ Icon, delay }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay, duration: 0.5 }}
              className="w-16 h-16 rounded-2xl bg-background shadow-lg border border-foreground/10 flex items-center justify-center"
            >
              <Icon className="w-8 h-8 text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}