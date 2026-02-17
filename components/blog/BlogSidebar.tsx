import Link from "next/link";
import { Calendar } from "lucide-react";

import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

type BlogSidebarProps = {
  recentPosts: BlogPost[];
  categories: string[];
  tags: string[];
  currentSlug?: string;
};

export function BlogSidebar({
  recentPosts,
  categories,
  tags,
  currentSlug,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Newsletter */}
      <div className="rounded-2xl bg-navy-900 p-6 text-white">
        <h3 className="font-display text-lg font-semibold">Stay Updated</h3>
        <p className="mt-2 text-sm leading-6 text-navy-200">
          Get the latest academic tips, guides, and resources delivered to your inbox.
        </p>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </div>

      {/* Recent Posts */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-navy-900">Recent Posts</h3>
        <ul className="mt-4 space-y-4">
          {recentPosts
            .filter((post) => post.slug !== currentSlug)
            .slice(0, 5)
            .map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <h4 className="line-clamp-2 text-sm font-semibold text-navy-900 transition-colors group-hover:text-primary-700">
                    {post.title}
                  </h4>
                  <span className="mt-1 flex items-center gap-1 text-xs text-navy-500">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.published_at)}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      {/* Categories */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-navy-900">Categories</h3>
        <ul className="mt-4 space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between text-sm text-navy-700 transition-colors hover:text-primary-700"
              >
                <span>{category}</span>
                <span className="text-xs text-navy-400">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Tags */}
      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-navy-900">Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
