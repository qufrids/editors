"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { BlogCard } from "@/components/blog/BlogCard";
import type { BlogPost } from "@/types";

type BlogGridProps = {
  posts: BlogPost[];
  categories: string[];
  initialCategory?: string;
};

const POSTS_PER_PAGE = 6;

export function BlogGrid({ posts, categories, initialCategory }: BlogGridProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory || "All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE,
  );

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  return (
    <div>
      <div role="group" aria-label="Blog categories" className="mb-8 flex flex-wrap gap-2">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => handleCategoryChange(category)}
            aria-pressed={activeCategory === category}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
              activeCategory === category
                ? "bg-gold text-ink"
                : "bg-cream text-ink-light hover:bg-cream-200",
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {paginated.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-ink-muted">
          No posts found in this category.
        </p>
      )}

      {totalPages > 1 && (
        <nav
          aria-label="Blog pagination"
          className="mt-10 flex items-center justify-center gap-2"
        >
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 bg-white text-ink-light transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? "page" : undefined}
              className={cn(
                "inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors",
                p === page
                  ? "bg-gold text-ink"
                  : "border border-ink/10 bg-white text-ink-light hover:bg-cream",
              )}
            >
              {p}
            </button>
          ))}

          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink/10 bg-white text-ink-light transition-colors hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      )}
    </div>
  );
}
