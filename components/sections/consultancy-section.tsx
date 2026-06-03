import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getConsultancyItems, getProjectImage } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ConsultancySection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const consultancyProjects = getConsultancyItems().filter((item) => item.featured);

  return (
    <section id="consulting" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Consultoria" : "Consulting"}
        title={
          locale === "pt"
            ? "Implementações em Destaque"
            : "Featured Implementations"
        }
        description={
          locale === "pt"
            ? "As implementações de maior impacto em consultoria e transformação digital."
            : "Top highest-impact consulting and digital transformation implementations."
        }
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {consultancyProjects.map((item, index) => (
          <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={getProjectImage(item.slug)} />
        ))}
      </div>
    </section>
  );
}
