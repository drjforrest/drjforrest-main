"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative rounded-lg p-2 bg-primary/10 hover:bg-primary/15 text-primary transition-all duration-200"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun className="absolute inset-0 transform transition-transform duration-300" 
             style={{ opacity: theme === 'dark' ? 0 : 1, transform: theme === 'dark' ? 'scale(0.5)' : 'scale(1)' }} />
        <Moon className="absolute inset-0 transform transition-transform duration-300" 
              style={{ opacity: theme === 'dark' ? 1 : 0, transform: theme === 'dark' ? 'scale(1)' : 'scale(0.5)' }} />
      </div>
    </button>
  );
}