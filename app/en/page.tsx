import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Edson Francisco | Digital Systems Architect & Engineering Lead — Co-Founder of FAMS AgriTech",
  description:
    "Edson Francisco — Digital Systems Architect & Engineering Lead, Co-founder of FAMS AgriTech & Digitalization Expert. 8+ years delivering tech across AgriTech, GovTech, HealthTech and Fintech in Mozambique. Open to global opportunities.",
  alternates: {
    canonical: "/en",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
  openGraph: {
    title: "Edson Francisco | Digital Systems Architect & Engineering Lead — Open to Remote",
    description:
      "Edson Francisco — Digital Systems Architect & Engineering Lead, Co-founder of FAMS AgriTech & Digitalization Expert. 8+ years delivering tech across AgriTech, GovTech, HealthTech and Fintech in Mozambique. Open to global opportunities.",
    type: "website",
    url: "https://edsonfrancisco-portfolio.vercel.app/en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Francisco | Digital Systems Architect & Engineering Lead — Open to Remote",
    description:
      "Digital Systems Architect & Engineering Lead, Co-founder of FAMS AgriTech & Digitalization Expert. Open to global opportunities.",
  },
};

export default function EnglishPage() {
  return <PortfolioPage locale="en" />;
}
