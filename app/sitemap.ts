import type { MetadataRoute } from "next";

import { SITE_URL } from "@/lib/content/profile";
import { PROJECTS } from "@/lib/content/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/projects", "/now", ...PROJECTS.map((project) => `/projects/${project.slug}`)];
  return paths.flatMap((path) =>
    (["pt", "en"] as const).map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      alternates: { languages: { pt: `${SITE_URL}/pt${path}`, en: `${SITE_URL}/en${path}` } },
    })),
  );
}
