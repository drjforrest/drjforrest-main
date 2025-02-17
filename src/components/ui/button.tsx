'use client';

import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';

// Define the ButtonProps type
type ButtonProps = {
  className?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
  size?: VariantProps<typeof buttonVariants>['size'];
  asChild?: boolean;
  children: React.ReactNode;
} & HTMLMotionProps<'button'>; // Extend with HTML button props

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default: [
          'bg-primary',
          'text-background',
          'hover:bg-primary/90',
          'hover:text-background',
        ].join(' '),
        white: [
          'bg-primary',
          '[&_*]:text-white',
          'hover:bg-primary/90',
          '[&_*]:hover:text-white',
        ].join(' '),
        outline: [
          'border',
          'border-primary',
          'text-primary',
          'hover:bg-primary/10',
          'hover:text-primary',
        ].join(' '),
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      return <span className={buttonVariants({ variant, size, className })}>{children}</span>;
    }
    return (
      <motion.button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        whileTap={{ scale: 0.98 }}
        whileHover={{ scale: 1.02 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

export { Button, buttonVariants };