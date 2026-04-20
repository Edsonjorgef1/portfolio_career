import { DeploymentCard } from "@/components/cards/deployment-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { getConsultancyItems, getProjectImage } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ConsultancySection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const consultancyProjects = getConsultancyItems();
  const deployments = data.freelanceDeployments.items;

  return (
    <section id="consulting" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Consultoria" : "Consulting"}
        title={
          locale === "pt"
            ? "Projectos de Consultoria & Implementação"
            : "Consulting & Implementation Projects"
        }
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {consultancyProjects.map((item, index) => (
          <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={getProjectImage(item.slug)} />
        ))}
        {deployments.map((item, index) => (
          <DeploymentCard
            key={item.slug}
            item={item}
            locale={locale}
            index={consultancyProjects.length + index}
          />
        ))}
      </div>
    </section>
  );
}
