import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import '@/app/globals.css';

export const metadata: Metadata = {
  title: 'Dr. Jamie Forrest - Global Health Research, Technical Writing & Analytics',
  description: 'Transforming complex health research into actionable insights through data analytics and evidence-based solutions.',
  keywords: ['global health', 'research', 'data analytics', 'health systems', 'evidence-based solutions'],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navigation />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
