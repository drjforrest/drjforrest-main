import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  children: React.ReactNode;
} & HTMLMotionProps<"button">; // ✅ Explicitly extend HTMLMotionProps for Framer Motion

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", asChild = false, children, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
          variant === "primary" && "bg-primary text-white hover:bg-primary/90",
          variant === "outline" && "border border-primary text-primary hover:bg-primary/10",
          variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
          size === "default" && "h-10 px-4 py-2",
          size === "sm" && "h-9 px-3",
          size === "lg" && "h-11 px-8",
          size === "icon" && "h-10 w-10",
          className
        )}
        {...props} // ✅ Ensures correct event typing
      >
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export { Button };