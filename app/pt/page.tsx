import type { Metadata } from "next";

import { PortfolioPage } from "@/components/portfolio-page";
import { portfolioData } from "@/lib/portfolioData";

export const metadata: Metadata = {
  title: "Edson Francisco | Arquitecto de Sistemas Digitais & Engineering Lead — Cofundador do FAMS AgriTech",
  description:
    "Edson Francisco — Arquitecto de Sistemas Digitais & Engineering Lead, Cofundador do FAMS AgriTech e Especialista em Digitalização. 8+ anos a entregar soluções tecnológicas em AgriTech, GovTech, HealthTech e Fintech em Moçambique. Disponível para oportunidades internacionais.",
  alternates: {
    canonical: "/pt",
    languages: {
      pt: "/pt",
      en: "/en",
    },
  },
  openGraph: {
    title: "Edson Francisco | Arquitecto de Sistemas Digitais & Engineering Lead — Moçambique",
    description:
      "Edson Francisco — Arquitecto de Sistemas Digitais & Engineering Lead, Cofundador do FAMS AgriTech e Especialista em Digitalização. 8+ anos a entregar soluções tecnológicas em AgriTech, GovTech, HealthTech e Fintech em Moçambique. Disponível para oportunidades internacionais.",
    type: "website",
    url: "https://edsonfrancisco-portfolio.vercel.app/pt",
  },
  twitter: {
    card: "summary_large_image",
    title: "Edson Francisco | Arquitecto de Sistemas Digitais & Engineering Lead — Moçambique",
    description:
      "Arquitecto de Sistemas Digitais & Engineering Lead, Cofundador do FAMS AgriTech e Especialista em Digitalização. Disponível para oportunidades internacionais.",
  },
};

export default function PortuguesePage() {
  return <PortfolioPage locale="pt" />;
}
