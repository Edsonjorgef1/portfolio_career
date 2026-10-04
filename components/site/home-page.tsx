import { existsSync } from "node:fs";
import path from "node:path";

import { About, Contact, Experience, FeaturedCases, Hero } from "@/components/site/home-sections";
import { Shell } from "@/components/site/shell";
import { PROJECTS, getFeatured } from "@/lib/content/projects";
import type { Locale } from "@/types/content";

export function cvHref(locale: Locale) {
  const file = `cv/Edson-Francisco-CV-${locale.toUpperCase()}.pdf`;
  return existsSync(path.join(process.cwd(), "public", file)) ? `/${file}` : null;
}

export function HomePage({ locale }: { locale: Locale }) {
  const cv = cvHref(locale);

  return (
    <Shell locale={locale}>
      <Hero locale={locale} cvHref={cv} />
      <FeaturedCases locale={locale} projects={getFeatured()} total={PROJECTS.length} />
      <Experience locale={locale} />
      <About locale={locale} />
      <Contact locale={locale} cvHref={cv} />
    </Shell>
  );
}
