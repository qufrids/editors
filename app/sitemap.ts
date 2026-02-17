import type { MetadataRoute } from "next";

import { getPublishedPosts } from "@/lib/data/blog";
import { getAllCourses } from "@/lib/data/courses";
import { getAllServices } from "@/lib/data/services";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://oxfordeditors.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-condition`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const servicePages: MetadataRoute.Sitemap = getAllServices().map(
    (service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    }),
  );

  const coursePages: MetadataRoute.Sitemap = getAllCourses().map((course) => ({
    url: `${siteUrl}/courses/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...coursePages, ...blogPages];
}
