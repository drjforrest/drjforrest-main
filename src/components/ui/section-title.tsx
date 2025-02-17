import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
}

export function SectionTitle({ children, className, description }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-4xl font-bold text-[#26385C] mb-4">{children}</h2>
      <div className="w-24 h-1 bg-[#2A9D8F] mx-auto rounded-full" />
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
} 