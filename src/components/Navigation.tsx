"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg">
            DrJForrest
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link 
              href="https://blog.drjforrest.com" 
              className="text-content-muted hover:text-content transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </Link>
            <Link 
              href="https://apps.drjforrest.com"
              className="text-content-muted hover:text-content transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apps
            </Link>
            <Link 
              href="/#publications"
              className="text-content-muted hover:text-content transition-colors"
              scroll={true}
            >
              Publications
            </Link>
            <Link 
              href="/#contact"
              className="text-content-muted hover:text-content transition-colors"
              scroll={true}
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/drjforrest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}