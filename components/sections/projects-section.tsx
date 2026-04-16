"use client";

import { motion } from 'framer-motion';
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
      <div className="mt-12 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {items.map((item, index) => (
          <motion.div 
            key={item.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="break-inside-avoid neon-glow"
          >
            <ProjectCard item={item} locale={locale} index={index} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

