import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/cards/project-card";
import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getFeaturedProjects, getLocalizedValue, getProjectImage } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function ProjectsSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const items = getFeaturedProjects().slice(0, 4);

  return (
    <section id="projects" className="section-shell section-spacing">
      <SectionTitle
        eyebrow={locale === "pt" ? "Projectos" : "Projects"}
        title={getLocalizedValue(locale, data.featuredProjects.titlePt, data.featuredProjects.titleEn)}
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {items.map((item, index) => (
          <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={getProjectImage(item.slug)} />
        ))}
      </div>
      <Reveal delay={0.3}>
        <div className="mt-10 flex justify-center">
          <Link
            href={`/${locale}/projects`}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/20 hover:border-primary/50"
          >
            {locale === "pt" ? "Ver todos os projectos" : "View all projects"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
