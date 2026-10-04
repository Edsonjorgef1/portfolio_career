import type { Metadata } from "next";

import { Gallery } from "@/components/site/gallery";
import { OpenSource } from "@/components/site/home-sections";
import { Shell } from "@/components/site/shell";
import { OPEN_SOURCE_SLUGS, PROJECTS, getUsedTech } from "@/lib/content/projects";
import { pageMetadata } from "@/lib/content/seo";
import { UI, t } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({
    locale: locale as Locale,
    path: "/projects",
    title: t(locale as Locale, UI.gallery.title),
    description: t(locale as Locale, UI.gallery.metaDescription),
  });
}

export default async function ProjectsIndex({ params }: { params: Params }) {
  const { locale: raw } = await params;
  const locale = raw as Locale;
  const openSource = OPEN_SOURCE_SLUGS.map((slug) => PROJECTS.find((p) => p.slug === slug)).filter(
    (p): p is NonNullable<typeof p> => Boolean(p),
  );

  return (
    <Shell locale={locale}>
      <section aria-labelledby="work" className="container-page pb-8 pt-16 sm:pt-20">
        <div className="max-w-prose">
          <h1 id="work" className="fade-up text-4xl font-semibold tracking-tight sm:text-5xl">
            {t(locale, UI.gallery.title)}
          </h1>
          <p className="mt-4 leading-relaxed text-muted">{t(locale, UI.gallery.intro)}</p>
        </div>
        <div className="mt-10">
          <Gallery projects={PROJECTS} techs={getUsedTech()} locale={locale} />
        </div>
      </section>
      <OpenSource locale={locale} projects={openSource} />
    </Shell>
  );
}
