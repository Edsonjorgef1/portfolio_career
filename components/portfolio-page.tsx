import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ConsultancySection } from "@/components/sections/consultancy-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { portfolioData } from "@/lib/portfolioData";
import type { Locale, NavigationItem } from "@/types/portfolio";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const navigation: NavigationItem[] = locale === "pt"
    ? [
        { label: "Início", href: "#hero" },
        { label: "Projectos", href: "#projects" },
        { label: "Consultorias", href: "#consulting" },
      ]
    : [
        { label: "Home", href: "#hero" },
        { label: "Projects", href: "#projects" },
        { label: "Consulting", href: "#consulting" },
      ];

  return (
    <>
      <SiteHeader locale={locale} navigation={navigation} name={portfolioData.personal.name} />
      <main>
        <HeroSection locale={locale} data={portfolioData} />
        <ProjectsSection locale={locale} data={portfolioData} />
        <ConsultancySection locale={locale} data={portfolioData} />
      </main>
      <SiteFooter locale={locale} name={portfolioData.personal.name} email={portfolioData.personal.email} />
    </>
  );
}
