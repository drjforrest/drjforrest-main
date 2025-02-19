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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("text-center mb-16", className)}
    >
      <h2 className="text-5xl font-bold text-[#26385C] mb-6 tracking-tight">{children}</h2>
      <div className="w-32 h-1 bg-[#2A9D8F] mx-auto rounded-full opacity-80" />
      {description && (
        <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}