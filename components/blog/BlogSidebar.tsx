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
      <div className="rounded-2xl bg-ink p-6 text-cream">
        <h3 className="font-display text-lg font-semibold">Stay Updated</h3>
        <p className="mt-2 text-sm leading-6 text-ink-faint">
          Get the latest academic tips, guides, and resources delivered to your inbox.
        </p>
        <div className="mt-4">
          <NewsletterForm />
        </div>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-ink">Recent Posts</h3>
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
                  <h4 className="line-clamp-2 text-sm font-semibold text-ink transition-colors group-hover:text-gold">
                    {post.title}
                  </h4>
                  <span className="mt-1 flex items-center gap-1 text-xs text-ink-muted">
                    <Calendar className="h-3 w-3" />
                    {formatDate(post.published_at)}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-ink">Categories</h3>
        <ul className="mt-4 space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="flex items-center justify-between text-sm text-ink-light transition-colors hover:text-gold"
              >
                <span>{category}</span>
                <span className="text-xs text-ink-faint">&rarr;</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <h3 className="font-display text-lg font-semibold text-ink">Tags</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-light"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
}
