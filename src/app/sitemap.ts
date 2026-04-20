import type { MetadataRoute } from "next";

const locales = ["es", "pl", "en"] as const;
const fallbackBaseUrl = "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || fallbackBaseUrl;

  return locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
  }));
}
