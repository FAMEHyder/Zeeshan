import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    "",
    "#about",
    "#skills",
    "#services",
    "#experience",
    "#certifications",
    "#research",
    "#contact",
  ];

  return sections.map((path) => ({
    url: `${siteConfig.url}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
