interface EnhancedTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
  solutions?: Record<string, string>;
  formatter?: (value: number, name: string, props: any) => string | [string, string];
}

export function EnhancedTooltip({ 
  active, 
  payload, 
  label,
  solutions = {},
  formatter
}: EnhancedTooltipProps) {
  if (!active || !payload) return null;

  return (
    <div className="bg-background border border-foreground/10 rounded-lg shadow-lg p-4">
      <p className="text-sm font-semibold mb-2">{label}</p>
      {payload.map((entry, index) => {
        const formattedValue = formatter 
          ? formatter(entry.value, entry.name, entry.payload)
          : entry.value;
        
        const [value, description] = Array.isArray(formattedValue) 
          ? formattedValue 
          : [formattedValue, solutions[entry.dataKey] || entry.name];

        return (
          <div key={index} className="text-sm">
            <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: entry.color }}></span>
            <span className="font-medium">{value}</span>
            <span className="text-muted-foreground ml-2">{description}</span>
          </div>
        );
      })}
    </div>
  );
}