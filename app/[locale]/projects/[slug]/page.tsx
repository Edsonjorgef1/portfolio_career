import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Users } from "lucide-react";
import { notFound } from "next/navigation";

import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { ImageLightbox } from "@/components/ui/image-lightbox";
import {
  getAllCaseStudySlugs,
  getCaseStudyContent,
  getProjectBySlug,
  getProjectImage,
} from "@/lib/portfolio";
import { portfolioData } from "@/lib/portfolioData";
import type { Locale } from "@/types/portfolio";

const allowedLocales: Locale[] = ["pt", "en"];

type Params = { locale: string; slug: string };

export function generateStaticParams() {
  return allowedLocales.flatMap((locale) =>
    getAllCaseStudySlugs().map((slug) => ({
      locale,
      slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const validLocale = allowedLocales.includes(locale as Locale) ? (locale as Locale) : "pt";
  const source = getProjectBySlug(slug);

  if (!source) {
    return {};
  }

  const content = getCaseStudyContent(source, validLocale);

  return {
    title: `${content.title} | ${portfolioData.personal.name}`,
    description: content.summary,
    openGraph: {
      title: `${content.title} | ${portfolioData.personal.name}`,
      description: content.summary,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;

  if (!allowedLocales.includes(locale as Locale)) {
    notFound();
  }

  const typedLocale = locale as Locale;
  const source = getProjectBySlug(slug);

  if (!source) {
    notFound();
  }

  const image = getProjectImage(slug);
  const content = getCaseStudyContent(source, typedLocale);

  const labels = {
    back: typedLocale === "pt" ? "Voltar ao portfólio" : "Back to portfolio",
    technologies: typedLocale === "pt" ? "Tecnologias" : "Technologies",
    context: typedLocale === "pt" ? "Contexto" : "Context",
    solution: typedLocale === "pt" ? "Solução" : "Solution",
    myRole: typedLocale === "pt" ? "O Meu Papel" : "My Role",
    impact: typedLocale === "pt" ? "Impacto" : "Impact",
    highlights: typedLocale === "pt" ? "Destaques" : "Highlights",
    liveProject: typedLocale === "pt" ? "Projecto online" : "Live project",
    fundedBy: typedLocale === "pt" ? "Financiado por / Parceiros" : "Funded by / Partners",
  };

  return (
    <div className="min-h-screen">
      <header className="border-b border-white/5 bg-background/70 backdrop-blur-xl">
        <div className="section-shell flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Button asChild variant="ghost">
            <Link href={`/${typedLocale}`}>
              <ArrowLeft className="h-4 w-4" />
              {labels.back}
            </Link>
          </Button>
          <LanguageSwitcher locale={typedLocale} />
        </div>
      </header>

      <main className="section-shell section-spacing">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <Badge className="border-primary/20 bg-primary/10 text-primary">{content.eyebrow}</Badge>
            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {content.title}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">{content.summary}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Badge>{content.role}</Badge>
              <Badge>{content.period}</Badge>
            </div>
            {content.donors && (
              <div className="inline-flex items-center gap-2 rounded-xl border border-accent/20 bg-accent/5 px-4 py-2.5">
                <Users className="h-4 w-4 text-accent shrink-0" />
                <span className="text-sm text-accent/90">
                  <span className="font-semibold">{labels.fundedBy}:</span> {content.donors}
                </span>
              </div>
            )}
            {content.externalLink ? (
              <Button asChild>
                <Link href={content.externalLink} target="_blank" rel="noreferrer">
                  {labels.liveProject}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            ) : null}
          </div>

          <GlassCard className="overflow-hidden p-4">
            <div
              className="min-h-[320px] rounded-[1.5rem] border border-white/10 bg-cover bg-center"
              style={{
                backgroundImage: image
                  ? `linear-gradient(to top, rgba(7, 10, 20, 0.45), rgba(7, 10, 20, 0.15)), url(${image})`
                  : "radial-gradient(circle at top, rgba(88,166,255,0.25), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              }}
            />
          </GlassCard>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.context}</h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">{content.sections.context}</p>
          </GlassCard>
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.solution}</h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">{content.sections.solution}</p>
          </GlassCard>
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.myRole}</h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">{content.sections.myRole}</p>
          </GlassCard>
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.impact}</h2>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">{content.sections.impact}</p>
          </GlassCard>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.highlights}</h2>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              {content.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </GlassCard>
          <GlassCard className="p-8">
            <h2 className="font-display text-2xl font-semibold text-white">{labels.technologies}</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {content.technologies.map((technology) => (
                <Badge key={technology} className="px-4 py-2 text-sm text-white">
                  {technology}
                </Badge>
              ))}
            </div>
          </GlassCard>
        </div>

        {source.item.images && source.item.images.length > 0 && (
          <div className="mt-12">
            <GlassCard className="p-8">
              <h2 className="font-display text-2xl font-semibold text-white">
                {typedLocale === "pt" ? "Galeria" : "Gallery"}
              </h2>
              <ImageLightbox
                images={source.item.images}
                title={content.title}
                galleryLabel={typedLocale === "pt" ? "Galeria" : "Gallery"}
              />
            </GlassCard>
          </div>
        )}
      </main>
    </div>
  );
}
