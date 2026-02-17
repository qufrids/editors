import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

import { formatDate } from "@/lib/utils";
import type { BlogPost } from "@/types";

type BlogCardProps = {
  post: BlogPost;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative h-52 w-full overflow-hidden">
          <Image
            src={post.featured_image}
            alt={post.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-navy-500">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.published_at)}
          </span>
          <span className="h-3 w-px bg-navy-200" />
          <span>{post.author}</span>
        </div>

        <Link href={`/blog/${post.slug}`} className="mt-3 block">
          <h2 className="line-clamp-2 font-display text-lg font-semibold text-navy-900 transition-colors group-hover:text-primary-700">
            {post.title}
          </h2>
        </Link>

        <p className="mt-2 line-clamp-3 text-sm leading-6 text-navy-600">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
        >
          Read more
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
