import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Henry AI | Enterprise AI Consulting — Houston, TX",
  description:
    "We help mid-market companies implement AI that delivers measurable ROI in 90 days. Fixed-price engagements. Houston-based, nationwide reach.",
  keywords: [
    "AI consulting Houston",
    "enterprise AI implementation",
    "AI strategy consultant",
    "machine learning consulting",
    "oil and gas AI",
    "workflow automation",
    "AI agents",
    "energy AI consulting",
  ],
  openGraph: {
    title: "Henry AI | Enterprise AI Consulting",
    description:
      "90-day AI implementations. Fixed-price. Measurable ROI.",
    url: "https://henry-consulting.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://henry-consulting.vercel.app/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness"],
  name: "Henry AI Corporation",
  description:
    "Enterprise AI consulting and implementation for mid-market companies",
  url: "https://henry-consulting.vercel.app",
  areaServed: ["Houston, TX", "United States"],
  priceRange: "$$$",
  serviceType: "AI Consulting",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="noise min-h-full flex flex-col bg-background text-foreground">
        <RevealProvider>{children}</RevealProvider>
        <Script
          defer
          data-domain="henry-consulting.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
