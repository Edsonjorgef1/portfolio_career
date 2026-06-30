import type { MetadataRoute } from "next";

const baseUrl = "https://edsonfrancisco-portfolio.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/pt`,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/en`,
      alternates: {
        languages: {
          pt: `${baseUrl}/pt`,
          en: `${baseUrl}/en`,
        },
      },
    },
  ];
}