import type { MetadataRoute } from "next"
import { articles } from "@/lib/articles"

const BASE = "https://www.takai.cl"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: BASE + "/blog", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    ...articles.map(function (a) {
      return {
        url: BASE + "/blog/" + a.slug,
        lastModified: new Date(a.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }
    }),
  ]
}
