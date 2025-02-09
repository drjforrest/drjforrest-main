import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { Navigation } from '@/components/layout/Navigation';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { ClientProvider } from '@/components/providers/ClientProvider';
import '@/app/globals.css';
import '@/styles/components.css';
import '@/styles/theme.css';

export const metadata: Metadata = {
  title: 'Dr. Jamie Forrest - Global Health Research, Technical Writing & Analytics',
  description: 'Transforming complex health research into actionable insights through data analytics and evidence-based solutions.',
  keywords: ['global health', 'research', 'data analytics', 'health systems', 'evidence-based solutions'],
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
          <ClientProvider>
            <Navigation />
            {children}
          </ClientProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
