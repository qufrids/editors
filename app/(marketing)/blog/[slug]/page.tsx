import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { BlogCard } from "@/components/blog/BlogCard";
import { BlogPost } from "@/components/blog/BlogPost";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import {
  getAllCategories,
  getAllPostSlugs,
  getAllTags,
  getPostBySlug,
  getPublishedPosts,
  getRelatedPosts,
} from "@/lib/data/blog";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Oxford Editors Blog`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `/blog/${post.slug}`,
      publishedTime: post.published_at,
      authors: [post.author],
      images: [{ url: post.featured_image }],
    },
  };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const recentPosts = getPublishedPosts();
  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <>
      {/* Breadcrumbs */}
      <section className="bg-gradient-to-b from-primary-50 via-white to-white pb-0 pt-14 md:pt-20">
        <div className="container">
          <nav aria-label="Breadcrumb" className="text-sm text-navy-600">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-primary-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-700">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-medium text-navy-900 line-clamp-1">
                {post.title}
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Post + Sidebar */}
      <section className="bg-white py-10 md:py-14">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
            <BlogPost post={post} />
            <BlogSidebar
              recentPosts={recentPosts}
              categories={categories}
              tags={tags}
              currentSlug={slug}
            />
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-navy-100 bg-primary-50/40 py-14 md:py-20">
          <div className="container">
            <h2 className="font-display text-2xl font-semibold text-navy-900 md:text-3xl">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogCard key={related.id} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
