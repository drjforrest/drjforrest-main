"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <Link 
            href="/" 
            className="flex items-center gap-2 text-foreground hover:text-foreground/90"
          >
            <svg 
              viewBox="0 0 24 24" 
              className="h-5 w-5" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M20 12H4M4 12L10 6M4 12L10 18" />
            </svg>
            <span className="font-medium">Dr. Jamie I. Forrest</span>
          </Link>

          {/* Main Navigation */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://blog.drjforrest.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
            <Link 
              href="https://apps.drjforrest.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apps
            </Link>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}