import type { MetadataRoute } from "next";
import { pages, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((p) => ({ url: SITE_URL + p.path, changeFrequency: "monthly", priority: p.priority }));
}
