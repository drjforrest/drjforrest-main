import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ScrollProgress } from '@/components/ui/scroll-progress';
import { SmoothScroll } from '@/components/ui/smooth-scroll';
import '@/app/globals.css';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dr. Jamie Forrest - Global Health Research, Technical Writing & Analytics',
  description: 'Strategic global health leader transforming research into impact through innovative partnerships and evidence-based solutions.',
  keywords: ['global health', 'research', 'data analytics', 'health systems', 'clinical trials'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="/_next/static/css/app/layout.css" 
          as="style"
          precedence="high"
        />
      </head>
      <body className="overflow-x-hidden">
        <ThemeProvider>
          <ScrollProgress />
          <SmoothScroll />
          <Navigation />
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </ThemeProvider>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
