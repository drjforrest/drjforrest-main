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
    <div className="bg-background pt-16">
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
            className="mt-12 space-y-4 text-lg text-foreground"
          >
            <p>Transforming complex health research into actionable insights</p>
            <p>Driving evidence-based decisions through data analytics</p>
            <p>Building sustainable partnerships across global health ecosystems</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 flex justify-center gap-4"
          >
            <Link href="/apps" passHref>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Discover Apps
              </Button>
            </Link>
            <Link href="https://blog.drjforrest.com" target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="lg"
              >
                Read Blog
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
