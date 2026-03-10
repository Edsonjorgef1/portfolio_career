import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: `${portfolioData.personal.name} | Gestor de IT`,
  description: portfolioData.personal.summaryPt,
  alternates: {
    canonical: "/pt",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
};

export default function PortuguesePage() {
  return <PortfolioPage locale="pt" />;
}
