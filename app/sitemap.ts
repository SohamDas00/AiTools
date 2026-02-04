import { getAllTools } from "@/lib/tools";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getAllTools();

  const toolUrls = tools.map((tool) => ({
    url: `https://aitools.vercel.app/tools/${tool.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://aitools.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://aitools.vercel.app/tools",
      lastModified: new Date(),
    },
    {
      url: "https://aitools.vercel.app/pricing",
      lastModified: new Date(),
    },
    {
      url: "https://aitools.vercel.app/pricing/free",
      lastModified: new Date(),
    },
    {
      url: "https://aitools.vercel.app/pricing/paid",
      lastModified: new Date(),
    },
    {
      url: "https://aitools.vercel.app/pricing/freemium",
      lastModified: new Date(),
    },
    ...toolUrls,
  ];
}
