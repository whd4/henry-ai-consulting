import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RevealProvider from "@/components/RevealProvider";
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
  title: "HENRY AI | AI Consulting for Energy & Industry",
  description:
    "Houston-based AI consulting firm. We deploy autonomous AI agents that run your operations 24/7 — purpose-built for energy, oil & gas, and industrial companies.",
  keywords: [
    "AI consulting Houston",
    "oil and gas AI",
    "workflow automation",
    "AI agents",
    "energy AI consulting",
    "autonomous agents",
    "industrial AI",
  ],
  openGraph: {
    title: "HENRY AI | AI That Works While You Sleep",
    description:
      "Autonomous AI agents for energy and industrial operations. Houston-based consulting.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="noise min-h-full flex flex-col bg-background text-foreground">
        <RevealProvider>{children}</RevealProvider>
      </body>
    </html>
  );
}
