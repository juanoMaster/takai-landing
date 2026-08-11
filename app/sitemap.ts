import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const BASE = "https://www.takai.cl"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastUpdated = new Date("2026-08-11T00:00:00-04:00")
  return [
    { url: BASE, lastModified: lastUpdated, changeFrequency: "weekly", priority: 1 },
    { url: BASE + "/blog", lastModified: lastUpdated, changeFrequency: "weekly", priority: 0.7 },
    { url: BASE + "/terminos", lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.3 },
    { url: BASE + "/privacidad", lastModified: lastUpdated, changeFrequency: "yearly", priority: 0.3 },
    ...articles.map(function (a) {
      return {
        url: BASE + "/blog/" + a.slug,
        lastModified: new Date(a.updatedDate),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }
    }),
  ]
}
