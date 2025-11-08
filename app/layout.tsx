import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next Travel Lab · Next.js 16 & React 19 Showcase",
  description:
    "Демонстрационный стенд Next.js 16 и React 19: PPR, Server Actions, AI workflows и передовой DX.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-background text-foreground antialiased`}
      >
        <SiteHeader />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-6 py-10">
          {children}
        </main>
      </body>
    </html>
  );
}
