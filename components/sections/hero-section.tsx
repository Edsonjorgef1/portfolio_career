import Link from "next/link";
import { Download, Github, Globe, BarChart2, Linkedin, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { getCvFile, getLocalizedValue, getProfileImage } from "@/lib/portfolio";
import type { Locale, PortfolioData } from "@/types/portfolio";

export function HeroSection({ locale, data }: { locale: Locale; data: PortfolioData }) {
  const profileImage = getProfileImage();
  const cvFile = getCvFile();
  const tags = getLocalizedValue(locale, data.personal.heroTagsPt, data.personal.heroTagsEn);
  const headline = getLocalizedValue(locale, data.personal.headlinePt, data.personal.headlineEn);
  const summary = getLocalizedValue(locale, data.personal.summaryPt, data.personal.summaryEn);

  return (
    <section id="hero" className="section-shell section-spacing pt-12 sm:pt-16">
      <div className="grid items-center gap-8 lg:grid-cols-[1.25fr_0.85fr] lg:gap-12">
        <Reveal className="space-y-8">
          <div className="space-y-5">
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
          </div>

          <div className="flex flex-wrap gap-3">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href={data.personal.github} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={data.personal.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                {locale === "pt" ? "Contacto" : "Contact"}
              </a>
            </Button>
            <Button asChild variant="ghost" disabled={!cvFile}>
              {cvFile ? (
                <Link href={cvFile} target="_blank">
                  <Download className="h-4 w-4" />
                  {locale === "pt" ? "Baixar CV" : "Download CV"}
                </Link>
              ) : (
                <span>
                  <Download className="h-4 w-4" />
                  {locale === "pt" ? "CV em breve" : "CV coming soon"}
                </span>
              )}
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              {data.personal.location}
            </div>
            <Link href={data.personal.website} target="_blank" className="inline-flex items-center gap-2 transition hover:text-white">
              <Globe className="h-4 w-4 text-primary" />
              {locale === "pt" ? "Currículo Digital" : "Digital Résumé"}
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
