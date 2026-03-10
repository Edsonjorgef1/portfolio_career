import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | IT Manager`,
  description: portfolioData.personal.summaryEn,
  alternates: {
    canonical: "/en",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
};

export default function EnglishPage() {
  return <PortfolioPage locale="en" />;
}
