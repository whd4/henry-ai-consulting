import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cinzel } from "next/font/google";
import Script from "next/script";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dwyer Financial Security",
  description:
    "Proprietary AI-driven forensic analysis for royalty payouts, production accounting, tax compliance, and trust disbursements. Houston, TX.",
  keywords: [
    "forensic accounting Houston",
    "royalty payout audit",
    "production accounting AI",
    "oil gas royalty verification",
    "trust disbursement audit",
    "financial anomaly detection",
    "tax compliance audit",
  ],
  openGraph: {
    title: "Dwyer Financial Security",
    description:
      "Proprietary mathematical modeling. Forensic precision. Anomaly detection.",
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
  name: "Dwyer Financial Security",
  description:
    "AI-driven forensic financial analysis and anomaly detection",
  url: "https://henry-consulting.vercel.app",
  areaServed: ["Houston, TX", "United States"],
  priceRange: "$$$$",
  serviceType: "Forensic Financial Analysis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      {/* The inline background/color here overrode globals.css entirely — that is why the
          page stayed black after the theme was rewritten. The "noise" class (a fixed
          film-grain overlay) is also dropped: grain reads as texture on a dark luxury page
          and as a dirty screen on a white professional one. */}
      <body className="min-h-full flex flex-col" style={{ background: "#ffffff", color: "#16202e" }}>
        <SmoothScroll>{children}</SmoothScroll>
        <Script
          defer
          data-domain="henry-consulting.vercel.app"
          src="https://plausible.io/js/script.js"
        />
      </body>
    </html>
  );
}
