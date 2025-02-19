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
        "rounded-lg border border-foreground/20 bg-white/95 shadow-md shadow-foreground/10 backdrop-blur-sm",
        variant === "interactive" &&
          "hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer",
        className
      )}
      whileHover={variant === "interactive" ? { y: -4, transition: { duration: 0.2 } } : {}}
      {...props}
    />
  )
);

Card.displayName = "Card";

export { Card };

