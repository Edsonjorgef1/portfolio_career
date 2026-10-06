import { notFound } from "next/navigation";

import { LOCALES } from "@/lib/content/ui";
import { OG_SIZE, homeOgImage } from "@/lib/og";
import type { Locale } from "@/types/content";

export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const alt = "Edson Francisco — Digital Systems Architect";

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return homeOgImage(locale as Locale);
}
