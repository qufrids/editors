import type { Metadata } from "next";

import { BlogGrid } from "@/components/blog/BlogGrid";
import {
  getAllCategories,
  getPublishedPosts,
} from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog | Oxford Editors",
  description:
    "Read the latest academic tips, study guides, and insights from Oxford Editors. Practical advice to help UK students succeed at university.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Oxford Editors",
    description:
      "Read the latest academic tips, study guides, and insights from Oxford Editors.",
    type: "website",
    url: "/blog",
  },
};

type BlogPageProps = {
  searchParams: Promise<{ category?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const posts = getPublishedPosts();
  const categories = getAllCategories();

  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
            Our Blog
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
            Academic Insights &amp; Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-700">
            Practical tips, study strategies, and expert advice to help you succeed in your academic
            journey.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <BlogGrid
            posts={posts}
            categories={categories}
            initialCategory={category}
          />
        </div>
      </section>
    </>
  );
}
