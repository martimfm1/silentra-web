import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.silentra.me",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // future
  ];
}
