import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { ExpertiseAreasSection } from "@/components/sections/expertise-areas-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { GovTechSection } from "@/components/sections/govtech-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { getNavigation } from "@/lib/portfolio";
import { portfolioData } from "@/lib/portfolioData";
import type { Locale } from "@/types/portfolio";

export function PortfolioPage({ locale }: { locale: Locale }) {
  const navigation = getNavigation(locale).filter((item) => item.href !== "#projects" && item.href !== "#consulting");

  return (
    <>
      <SiteHeader locale={locale} navigation={navigation} name={portfolioData.personal.name} />
      <main>
        <HeroSection locale={locale} data={portfolioData} />
        <AboutSection locale={locale} data={portfolioData} />
        <ExpertiseAreasSection locale={locale} data={portfolioData} />
        <DifferentiatorsSection locale={locale} data={portfolioData} />
        <TestimonialsSection locale={locale} />
        <ExperienceSection locale={locale} data={portfolioData} />
        <GovTechSection locale={locale} />
        <SkillsSection locale={locale} data={portfolioData} />
        <LeadershipSection locale={locale} data={portfolioData} />
        <CertificationsSection locale={locale} data={portfolioData} />
        <AwardsSection locale={locale} data={portfolioData} />
        <ContactSection locale={locale} data={portfolioData} />
      </main>
      <SiteFooter locale={locale} name={portfolioData.personal.name} email={portfolioData.personal.email} />
    </>
  );
}
