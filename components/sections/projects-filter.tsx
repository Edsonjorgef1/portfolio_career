"use client";

import { useState } from "react";
import { DeploymentCard } from "@/components/cards/deployment-card";
import { ProjectCard } from "@/components/cards/project-card";
import type { DeploymentItem, Locale, ProjectItem } from "@/types/portfolio";

type Category = "all" | "projects" | "consulting" | "initiatives" | "contributors" | "supervisors";

interface Props {
  locale: Locale;
  softwareProjects: ProjectItem[];
  conceptProjects: ProjectItem[];
  consultancyProjects: ProjectItem[];
  deployments: DeploymentItem[];
  initiativeItems: ProjectItem[];
  images: Record<string, string | null>;
}

export function ProjectsFilter({
  locale,
  softwareProjects,
  conceptProjects,
  consultancyProjects,
  deployments,
  initiativeItems,
  images,
}: Props) {
  const [active, setActive] = useState<Category>("all");
  const isEn = locale === "en";
  const softwareAndConcept = [...softwareProjects, ...conceptProjects];
  const contributorProjects = softwareAndConcept.filter((item) => {
    const role = `${item.rolePt} ${item.roleEn}`.toLowerCase();
    return role.includes("contributor") || role.includes("contribuidor");
  });
  const supervisorProjects = softwareAndConcept.filter((item) => {
    const role = `${item.rolePt} ${item.roleEn}`.toLowerCase();
    return role.includes("supervisor");
  });

  const tabs: { id: Category; labelPt: string; labelEn: string; count: number }[] = [
    {
      id: "all",
      labelPt: "Todos",
      labelEn: "All",
      count:
        softwareProjects.length +
        conceptProjects.length +
        consultancyProjects.length +
        deployments.length +
        initiativeItems.length,
    },
    {
      id: "projects",
      labelPt: "Projectos",
      labelEn: "Projects",
      count: softwareProjects.length + conceptProjects.length,
    },
    {
      id: "consulting",
      labelPt: "Consultorias",
      labelEn: "Consulting",
      count: consultancyProjects.length + deployments.length,
    },
    {
      id: "contributors",
      labelPt: "Contribuidor",
      labelEn: "Contributor",
      count: contributorProjects.length,
    },
    {
      id: "supervisors",
      labelPt: "Supervisor",
      labelEn: "Supervisor",
      count: supervisorProjects.length,
    },
    {
      id: "initiatives",
      labelPt: "Iniciativas",
      labelEn: "Initiatives",
      count: initiativeItems.length,
    },
  ];

  const showProjects = active === "all" || active === "projects";
  const showConsulting = active === "all" || active === "consulting";
  const showInitiatives = active === "all" || active === "initiatives";
  const showContributorRole = active === "contributors";
  const showSupervisorRole = active === "supervisors";

  return (
    <>
      {/* Filter tabs */}
      <div className="mb-12 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium transition-all ${
              active === tab.id
                ? "border-primary bg-primary/15 text-white"
                : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:bg-white/10 hover:text-white/80"
            }`}
          >
            {isEn ? tab.labelEn : tab.labelPt}
            <span
              className={`rounded-full px-2 py-0.5 text-xs ${
                active === tab.id ? "bg-primary/30 text-white" : "bg-white/10 text-white/40"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Software Projects */}
      {showProjects && (
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              {isEn ? "Software" : "Software"}
            </p>
            <h2 className="font-display text-2xl font-bold text-white">
              {isEn ? "Software Projects" : "Projectos de Software"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {softwareAndConcept.map((item, index) => (
              <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={images[item.slug]} />
            ))}
          </div>
        </section>
      )}

      {showContributorRole && (
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              {isEn ? "Role" : "Papel"}
            </p>
            <h2 className="font-display text-2xl font-bold text-white">
              {isEn ? "Contributor Projects" : "Projectos como Contribuidor"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {contributorProjects.map((item, index) => (
              <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={images[item.slug]} />
            ))}
          </div>
        </section>
      )}

      {showSupervisorRole && (
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              {isEn ? "Role" : "Papel"}
            </p>
            <h2 className="font-display text-2xl font-bold text-white">
              {isEn ? "Supervisor Projects" : "Projectos como Supervisor"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {supervisorProjects.map((item, index) => (
              <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={images[item.slug]} />
            ))}
          </div>
        </section>
      )}

      {/* Consulting */}
      {showConsulting && (
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              {isEn ? "Consulting" : "Consultoria"}
            </p>
            <h2 className="font-display text-2xl font-bold text-white">
              {isEn ? "Consulting & Implementation" : "Consultoria & Implementação"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {consultancyProjects.map((item, index) => (
              <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={images[item.slug]} />
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
      )}

      {/* Initiatives */}
      {showInitiatives && initiativeItems.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
              {isEn ? "Initiatives" : "Iniciativas"}
            </p>
            <h2 className="font-display text-2xl font-bold text-white">
              {isEn ? "Other Products & Initiatives" : "Outros Produtos & Iniciativas"}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {initiativeItems.map((item, index) => (
              <ProjectCard key={item.slug} item={item} locale={locale} index={index} image={images[item.slug]} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

