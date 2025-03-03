'use client';

import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import '@/app/globals.css';
import { Footer } from '@/components/layout/footer';
import { ScrollProvider } from '@/components/ui/scroll-context';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import { PageTransition } from '@/components/ui/page-transition';
import { ParallaxBackground } from '@/components/ui/parallax-background';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className="overflow-x-hidden max-w-full">
        <ParallaxBackground /> {/* ✅ Background animation without grid markers */}
        <SmoothScroll /> {/* ✅ Adds smooth scrolling to internal links */}
        <ThemeProvider>
          <ScrollProvider>
            <Navigation />
            <PageTransition> {/* ✅ Smooth page transitions */}
              <main className="flex flex-col min-h-screen">{children}</main>
            </PageTransition>
            <Footer />
          </ScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}