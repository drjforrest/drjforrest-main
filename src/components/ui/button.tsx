interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'icon' | 'sm';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ variant = 'default', size = 'default', children, className = '', ...props }: ButtonProps) {
  return (
    <button 
      className={`rounded-md ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 