'use client';

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon' | 'sm';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ variant = 'default', size = 'default', children, className = '', asChild, ...props }: ButtonProps) {
  return (
    <button 
      className={`rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
