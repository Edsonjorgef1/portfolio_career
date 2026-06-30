import Link from "next/link";
import { BarChart2, CalendarDays, Github, Globe, Linkedin, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getLocalizedValue, getProfileImage } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function HeroSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const profileImage = getProfileImage();
  const tags = getLocalizedValue(locale, data.personal.heroTagsPt, data.personal.heroTagsEn);
  const headline = getLocalizedValue(locale, data.personal.headlinePt, data.personal.headlineEn);
  const summary = getLocalizedValue(locale, data.personal.summaryPt, data.personal.summaryEn);

  return (
    <section id="hero" className="section-shell section-spacing relative overflow-hidden pt-12 sm:pt-16">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-mesh absolute -left-10 top-0 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="hero-mesh-delay absolute -right-14 top-24 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-12">
        <Reveal className="space-y-8">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-emerald-300/20 bg-emerald-400/10 px-4 py-1.5 text-sm font-medium text-emerald-200">
              <span className="mr-2 text-emerald-300">●</span>
              {locale === "pt"
                ? "Disponível para projectos remotos e oportunidades internacionais"
                : "Open to remote projects and international opportunities"}
            </span>

            <Badge className="border-accent/20 bg-accent/10 text-accent">
              {locale === "pt" ? "Posicionamento Executivo" : "Executive Positioning"}
            </Badge>

            <div className="space-y-4">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {data.personal.name}
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-primary sm:text-xl">{headline}</p>
              <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{summary}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 border-y border-white/10 py-5 sm:grid-cols-3 lg:grid-cols-4">
              {data.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.labelEn}`} className="space-y-1">
                  <p className="text-xl font-semibold text-white sm:text-2xl">{metric.value}</p>
                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {locale === "pt" ? metric.labelPt : metric.labelEn}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="https://calendar.app.google/LeUiwfTDvDFKuJpW9" target="_blank" rel="noopener noreferrer">
                <CalendarDays className="h-4 w-4" />
                {locale === "pt" ? "Agendar Reunião" : "Schedule a Meeting"}
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={`/${locale}/projects`}>{locale === "pt" ? "Ver Projectos" : "View Projects"}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={data.personal.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={data.personal.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://edsonjorgef1.github.io/Digital-Resume/" target="_blank" rel="noopener noreferrer">
                {locale === "pt" ? "Currículo Digital" : "Digital Resume"}
              </Link>
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {data.personal.location}
            </div>
            <Link href={data.personal.website} target="_blank" className="inline-flex items-center gap-2 transition hover:text-white">
              <Globe className="h-4 w-4 text-primary" />
              {locale === "pt" ? "Currículo Digital" : "Digital Resume"}
            </Link>
            {data.personal.wakatime && (
              <Link href={data.personal.wakatime} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
                <BarChart2 className="h-4 w-4 text-primary" />
                {locale === "pt" ? "Métricas de Dev" : "Dev Metrics"}
              </Link>
            )}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="overflow-hidden p-5">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
              <div className="relative flex min-h-[420px] items-end overflow-hidden rounded-[1.25rem] bg-hero-grid p-6">
                {profileImage ? (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `linear-gradient(to top, rgba(6, 8, 14, 0.82), rgba(6, 8, 14, 0.24)), url(${profileImage})` }}
                  />
                ) : null}
                <div className="relative z-10 w-full space-y-4">
                  {!profileImage ? (
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/10 font-display text-3xl font-semibold text-white">
                      EF
                    </div>
                  ) : null}
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.3em] text-primary">
                      {locale === "pt" ? "Perfil Executivo" : "Executive Profile"}
                    </p>
                    <h2 className="font-display text-2xl font-semibold text-white">{data.personal.name}</h2>
                    <p className="max-w-sm text-sm leading-7 text-muted-foreground">
                      {locale === "pt"
                        ? "Liderança tecnológica, execução operacional e transformação digital com foco em impacto sustentável."
                        : "Technology leadership, operational execution, and digital transformation focused on sustainable impact."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
