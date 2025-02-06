import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { SiteHeader } from "@/components/SiteHeader";
import { PageTransition } from "@/components/ui/page-transition";
import "@/styles/theme.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dr. Jamie I. Forrest - Global Health & Clinical Research",
  description: "Global health specialist and clinical research leader focused on health systems strengthening and digital innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <SiteHeader />
          <PageTransition>
            <main className="pt-16">
              {children}
            </main>
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}