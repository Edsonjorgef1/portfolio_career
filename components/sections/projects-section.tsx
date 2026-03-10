import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getFeaturedProjects, getLocalizedValue } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ProjectsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const items = getFeaturedProjects();

  return (
    <section id="projects" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Projectos" : "Projects"}
        title={getLocalizedValue(locale, data.featuredProjects.titlePt, data.featuredProjects.titleEn)}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <ProjectCard key={item.slug} item={item} locale={locale} index={index} />
        ))}
      </div>
    </section>
  );
}
