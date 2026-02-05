import { getAllTools } from "@/lib/tools";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aitools-soham.vercel.app";

  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing/free`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing/paid`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pricing/freemium`,
      lastModified: new Date(),
    },
    ...toolUrls,
  ];
}
