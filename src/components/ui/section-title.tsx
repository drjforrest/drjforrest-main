import { cn } from "@/lib/utils";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  description?: string;
}

export function SectionTitle({ children, className, description }: SectionTitleProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl font-bold tracking-tight mb-4">
        {children}
      </h2>
      <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      {description && (
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
} 