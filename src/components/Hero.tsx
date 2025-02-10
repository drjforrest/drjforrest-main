'use client';

import { Button } from "@/components/ui/button";
import { PenLine, BarChart2, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

function IconSquare({ 
  children, 
  color = "primary" 
}: { 
  children: React.ReactNode;
  color?: "primary" | "accent" | "success";
}) {
  const bgColorMap = {
    primary: "bg-primary/10",
    accent: "bg-accent/10",
    success: "bg-success/10"
  };

  return (
    <motion.div
      whileHover={{ y: -2, scale: 1.05 }}
      className={`p-3 ${bgColorMap[color]} rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200`}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <div className="bg-background pt-16 relative min-h-screen">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
            Innovative Global Health Solutions
          </h1>
          
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3 justify-items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <IconSquare color="primary">
                <PenLine className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </IconSquare>
              <h2 className="text-lg font-medium text-foreground">
                Technical Writing & Communication
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center gap-4"
            >
              <IconSquare color="accent">
                <BarChart2 className="w-8 h-8 text-accent" strokeWidth={1.5} />
              </IconSquare>
              <h2 className="text-lg font-medium text-foreground">
                Data-driven Monitoring & Evaluation
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <IconSquare color="success">
                <Globe className="w-8 h-8 text-success" strokeWidth={1.5} />
              </IconSquare>
              <h2 className="text-lg font-medium text-foreground">
                Global Collaboration with Local Impact
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 space-y-6 text-xl font-medium"
          >
            <p className="text-foreground/90 leading-relaxed">
              Bridging health research and real-world impact through clear, compelling communication
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Driving evidence-based decisions through data analytics
            </p>
            <p className="text-foreground/90 leading-relaxed">
              Building sustainable partnerships across global health ecosystems
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            <motion.div 
              className="flex flex-col items-center gap-3 text-primary"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: 1, 
                y: [0, 10, 0]
              }}
              transition={{
                y: {
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }
              }}
            >
              <span className="text-lg font-medium">Discover My Journey</span>
              <p className="text-sm text-muted-foreground max-w-md">
                Learn about my experience, research impact, and global health initiatives
              </p>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="28" 
                height="28" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className="mt-2"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </motion.div>

            <div className="flex flex-col items-center gap-4 mt-8 pt-8 border-t border-muted">
              <span className="text-sm text-muted-foreground">Also available</span>
              <div className="flex justify-center gap-4">
                <Link href="/apps" passHref>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground"
                  >
                    Apps
                  </Button>
                </Link>
                <Link href="https://blog.drjforrest.com" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-muted-foreground"
                  >
                    Blog
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
