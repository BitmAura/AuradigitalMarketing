import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://auradigitalservice.com";

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/ai", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/industries/healthcare", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/finance", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/real-estate", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/ecommerce", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/tech-saas", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries/education", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
