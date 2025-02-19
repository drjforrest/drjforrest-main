import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "interactive";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <motion.div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-surface dark:bg-surface-elevated shadow-sm backdrop-blur-sm",
        variant === "interactive" &&
          "hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer",
        className
      )}
      whileHover={variant === "interactive" ? { y: -4, transition: { duration: 0.2 } } : {}}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };