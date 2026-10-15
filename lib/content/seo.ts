import type { Metadata } from "next";

import { HERO } from "@/lib/content/profile";
import type { Locale } from "@/types/content";

export function pageMetadata({
  locale,
  path,
  title,
  description,
}: {
  locale: Locale;
  /** Path after the locale, e.g. "" or "/projects/fams" */
  path: string;
  title?: string;
  description?: string;
}): Metadata {
  const desc = description ?? HERO.intro[locale];
  const url = `/${locale}${path}`;
  return {
    title: title ?? { absolute: "Edson Francisco — Digital Systems Architect" },
    description: desc,
    alternates: { canonical: url, languages: { pt: `/pt${path}`, en: `/en${path}` } },
    openGraph: {
      type: "website",
      url,
      title: title ? `${title} · Edson Francisco` : "Edson Francisco — Digital Systems Architect",
      description: desc,
      locale: locale === "pt" ? "pt_MZ" : "en_US",
      siteName: "Edson Francisco",
    },
    // Images come from the opengraph-image routes (app/[locale]/…).
    twitter: { card: "summary_large_image" },
  };
}
