import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Shell } from "@/components/site/shell";
import { NOW } from "@/lib/content/profile";
import { pageMetadata } from "@/lib/content/seo";
import { LOCALES, UI, t } from "@/lib/content/ui";
import type { Locale } from "@/types/content";

type Params = Promise<{ locale: string }>;

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  return pageMetadata({
    locale: locale as Locale,
    path: "/now",
    title: t(locale as Locale, UI.now.title),
    description: t(locale as Locale, UI.now.intro),
  });
}

export default async function NowPage({ params }: { params: Params }) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const updated = new Intl.DateTimeFormat(locale === "pt" ? "pt-PT" : "en-GB", { dateStyle: "long" }).format(
    new Date(`${NOW.updated}T12:00:00Z`),
  );

  return (
    <Shell locale={locale}>
      <div className="container-page max-w-3xl py-16 sm:py-24">
        <h1 className="fade-up text-4xl font-semibold tracking-tight sm:text-5xl">{t(locale, UI.now.title)}</h1>
        <p className="mt-4 max-w-prose leading-relaxed text-muted">{t(locale, UI.now.intro)}</p>
        <p className="mt-2 font-mono text-xs text-subtle">
          {t(locale, UI.now.updated)} <time dateTime={NOW.updated}>{updated}</time>
        </p>
        <ol className="mt-12 space-y-8 border-l border-border pl-6">
          {NOW.items.map((item) => (
            <li key={item.title.en} className="relative">
              <span aria-hidden="true" className="absolute -left-[1.72rem] top-2 h-2 w-2 rounded-full bg-accent" />
              <h2 className="font-semibold text-foreground">{item.title[locale]}</h2>
              <p className="mt-2 leading-relaxed text-muted">{item.body[locale]}</p>
              <p className="mt-2 font-mono text-xs text-subtle">{item.evidence[locale]}</p>
            </li>
          ))}
        </ol>
      </div>
    </Shell>
  );
}
