import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ClientProvider } from "@/components/providers/ClientProvider";
import { Navigation } from "@/components/Navigation";
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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ClientProvider>
            <div className="relative">
              <Navigation />
              <main className="pt-16">
                {children}
              </main>
            </div>
          </ClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}