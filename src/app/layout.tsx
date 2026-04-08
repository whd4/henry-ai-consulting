import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    "Houston-based AI consulting firm specializing in workflow automation, agent deployment, and intelligent systems for energy, oil & gas, and industrial operations.",
  keywords: [
    "AI consulting",
    "Houston AI",
    "oil and gas AI",
    "workflow automation",
    "AI agents",
    "energy AI",
    "industrial AI",
  ],
  openGraph: {
    title: "HENRY AI | AI Consulting for Energy & Industry",
    description:
      "Transform your operations with autonomous AI agents. Houston-based consulting for energy and industrial companies.",
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
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
