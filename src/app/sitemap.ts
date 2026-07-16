import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1, lastModified: now },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9, lastModified: now },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.7, lastModified: now },
    { path: "/leadership", changeFrequency: "monthly" as const, priority: 0.5, lastModified: now },
    { path: "/case-studies", changeFrequency: "monthly" as const, priority: 0.8, lastModified: now },
    { path: "/resources", changeFrequency: "monthly" as const, priority: 0.6, lastModified: now },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.7, lastModified: now },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.6, lastModified: now },
    { path: "/privacy-policy", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
    { path: "/terms-conditions", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
    { path: "/cookie-policy", changeFrequency: "yearly" as const, priority: 0.3, lastModified: now },
  ];

  const blogRoutes = blogPosts.map((post) => ({
    path: `/blog/${post.slug}`,
    changeFrequency: "yearly" as const,
    priority: 0.6,
    lastModified: new Date(post.publishedAt),
  }));

  return [...staticRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
