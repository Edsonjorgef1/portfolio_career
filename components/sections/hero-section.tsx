import Link from "next/link";
import { Download, Github, Globe, BarChart2, Linkedin, Mail, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { Reveal } from "@/components/ui/reveal";
import { ParticlesCanvas } from "@/components/particles-canvas";
import { ThreeDOrb } from "@/components/3d-orb";
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
<h1 className="font-display bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-5xl font-black tracking-tight text-transparent drop-shadow-2xl lg:text-7xl neon-glow sm:text-6xl">
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

        <ParticlesCanvas />
        <Reveal delay={0.2}>
          <GlassCard neon className="overflow-hidden p-8 mx-auto max-w-md">
            <ThreeDOrb 
              image={profileImage} 
              initials="EF"
              className="neon-glow"
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full rounded-[2rem] bg-gradient-to-r from-primary/20 to-accent/20 blur-xl animate-pulse" />
            </div>
            <div className="relative z-10 mt-6 text-center">
              <p className="neon-text text-xs uppercase tracking-[0.3em] mb-2">
                {locale === "pt" ? "Perfil Executivo" : "Executive Profile"}
              </p>
              <h2 className="font-display text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-2xl">
                {data.personal.name}
              </h2>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
