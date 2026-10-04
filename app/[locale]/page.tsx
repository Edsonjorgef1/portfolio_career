import type { Metadata } from "next";

import { HomePage } from "@/components/site/home-page";
import { pageMetadata } from "@/lib/content/seo";
import type { Locale } from "@/types/content";

type Params = Promise<{ locale: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata({ locale: locale as Locale, path: "" });
}

export default async function Home({ params }: { params: Params }) {
  const { locale } = await params;
  return <HomePage locale={locale as Locale} />;
}
