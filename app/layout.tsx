import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  metadataBase: new URL("https://edsonfrancisco-portfolio.vercel.app"),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  alternates: {
    canonical: "/pt",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    type: "website",
    siteName: portfolioData.personal.name,
    url: "https://edsonfrancisco-portfolio.vercel.app/pt",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
