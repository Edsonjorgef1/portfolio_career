import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { AdditionalInfoSection } from "@/components/sections/additional-info-section";
import { AwardsSection } from "@/components/sections/awards-section";
import { CertificationsSection } from "@/components/sections/certifications-section";
import { CompetenciesSection } from "@/components/sections/competencies-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DeploymentsSection } from "@/components/sections/deployments-section";
import { DifferentiatorsSection } from "@/components/sections/differentiators-section";
import { EducationSection } from "@/components/sections/education-section";
import { ExpertiseAreasSection } from "@/components/sections/expertise-areas-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LeadershipSection } from "@/components/sections/leadership-section";
import { MetricsSection } from "@/components/sections/metrics-section";
import { OtherProductsSection } from "@/components/sections/other-products-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { getNavigation } from "@/lib/portfolio";
import { portfolioData } from "@/lib/portfolioData";
import type { Locale } from "@/types/portfolio";

export function PortfolioPage({ locale }: { locale: Locale }) {
  return (
    <>
      <SiteHeader locale={locale} navigation={getNavigation(locale)} name={portfolioData.personal.name} />
      <main>
        <HeroSection locale={locale} data={portfolioData} />
        <ExpertiseAreasSection locale={locale} data={portfolioData} />
        <MetricsSection locale={locale} data={portfolioData} />
        <DifferentiatorsSection locale={locale} data={portfolioData} />
        <AboutSection locale={locale} data={portfolioData} />
        <CompetenciesSection locale={locale} data={portfolioData} />
        <ExperienceSection locale={locale} data={portfolioData} />
        <AwardsSection locale={locale} data={portfolioData} />
        <ProjectsSection locale={locale} data={portfolioData} />
        <DeploymentsSection locale={locale} data={portfolioData} />
        <OtherProductsSection locale={locale} data={portfolioData} />
        <SkillsSection locale={locale} data={portfolioData} />
        <LeadershipSection locale={locale} data={portfolioData} />
        <EducationSection locale={locale} data={portfolioData} />
        <CertificationsSection locale={locale} data={portfolioData} />
        <AdditionalInfoSection locale={locale} data={portfolioData} />
        <ContactSection locale={locale} data={portfolioData} />
      </main>
      <SiteFooter locale={locale} name={portfolioData.personal.name} email={portfolioData.personal.email} />
    </>
  );
}
