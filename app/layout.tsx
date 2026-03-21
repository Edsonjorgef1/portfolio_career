import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  metadataBase: new URL("https://edsonfrancisco.vercel.app"),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  keywords: portfolioData.seo.keywords,
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    type: "website",
    siteName: portfolioData.personal.name,
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
