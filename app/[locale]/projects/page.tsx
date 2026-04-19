import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

import { DeploymentCard } from "@/components/cards/deployment-card";
import { ProjectCard } from "@/components/cards/project-card";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SectionTitle } from "@/components/layout/section-title";
import { Reveal } from "@/components/ui/reveal";
import { getConceptItems, getConsultancyItems, getNavigation, getProjectItems } from "@/lib/portfolio";
import { portfolioData } from "@/lib/portfolioData";
import type { Locale } from "@/types/portfolio";

const allowedLocales: Locale[] = ["pt", "en"];

type Params = { locale: string };

export function generateStaticParams() {
  return allowedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: isEn
      ? "Projects & Consultancies | Edson Francisco"
      : "Projectos & Consultorias | Edson Francisco",
    description: isEn
      ? "All software projects, civic tech platforms, and consulting engagements by Edson Francisco."
      : "Todos os projectos de software, plataformas cívicas e consultorias de Edson Francisco.",
  };
}

export default async function ProjectsListPage({ params }: { params: Promise<Params> }) {
  const { locale: localeStr } = await params;
  if (!allowedLocales.includes(localeStr as Locale)) notFound();
  const locale = localeStr as Locale;
  const isEn = locale === "en";

  const softwareProjects = getProjectItems();
  const conceptProjects = getConceptItems();
  const consultancyProjects = getConsultancyItems();
  const deployments = portfolioData.freelanceDeployments.items;

  return (
    <>
      <SiteHeader locale={locale} navigation={getNavigation(locale)} name={portfolioData.personal.name} />
      <main className="min-h-screen pt-24">
        <div className="section-shell py-16">
          {/* Page header */}
          <Reveal>
            <div className="mb-3">
              <Link
                href={`/${locale}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                {isEn ? "Back to Portfolio" : "Voltar ao Portfolio"}
              </Link>
            </div>
            <div className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                {isEn ? "Full Portfolio" : "Portfolio Completo"}
              </p>
              <h1 className="font-display text-4xl font-bold text-white md:text-5xl">
                {isEn ? "Projects & Initiatives" : "Projectos & Iniciativas"}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                {isEn
                  ? "All software platforms, civic tech applications, and digital transformation projects built and led by Edson Francisco."
                  : "Todas as plataformas de software, aplicações de tecnologia cívica e projectos de transformação digital construídos e liderados por Edson Francisco."}
              </p>
            </div>
          </Reveal>

          {/* Software Projects */}
          <section className="mb-16">
            <SectionTitle
              eyebrow={isEn ? "Software" : "Software"}
              title={isEn ? "Software Projects" : "Projectos de Software"}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {softwareProjects.map((item, index) => (
                <ProjectCard key={item.slug} item={item} locale={locale} index={index} />
              ))}
            </div>
          </section>

          {/* Concept Platforms */}
          {conceptProjects.length > 0 && (
            <section className="mb-16">
              <SectionTitle
                eyebrow={isEn ? "Concept" : "Conceito"}
                title={isEn ? "Conceptual Platforms" : "Plataformas Conceito"}
              />
              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {conceptProjects.map((item, index) => (
                  <ProjectCard key={item.slug} item={item} locale={locale} index={index} />
                ))}
              </div>
            </section>
          )}

          {/* Consulting & Deployments */}
          <section className="mb-16">
            <SectionTitle
              eyebrow={isEn ? "Consulting" : "Consultoria"}
              title={isEn ? "Consulting & Implementation" : "Consultoria & Implementação"}
            />
            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              {consultancyProjects.map((item, index) => (
                <ProjectCard key={item.slug} item={item} locale={locale} index={index} />
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
        </div>
      </main>
      <SiteFooter locale={locale} name={portfolioData.personal.name} email={portfolioData.personal.email} />
    </>
  );
}
