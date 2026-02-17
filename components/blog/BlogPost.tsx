"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, Facebook, Linkedin, LinkIcon, Tag, Twitter } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import type { BlogPost as BlogPostType } from "@/types";

type BlogPostProps = {
  post: BlogPostType;
};

export function BlogPost({ post }: BlogPostProps) {
  const [copied, setCopied] = useState(false);

  const postUrl = typeof window !== "undefined" ? `${window.location.origin}/blog/${post.slug}` : "";
  const encodedUrl = encodeURIComponent(postUrl);
  const encodedTitle = encodeURIComponent(post.title);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article>
      <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-cream-200">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold-700 transition-colors hover:bg-gold/20"
        >
          {post.category}
        </Link>
        <span className="flex items-center gap-1 text-sm text-ink-muted">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.published_at)}
        </span>
      </div>

      <h1 className="mt-4 font-display text-3xl leading-tight text-ink md:text-4xl">
        {post.title}
      </h1>

      <div className="mt-5 flex items-center gap-3 border-b border-ink/10 pb-6">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gold/10">
          <Image
            src={post.author_image}
            alt={post.author}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-ink">{post.author}</p>
          <p className="text-xs text-ink-muted">Oxford Editors</p>
        </div>
      </div>

      <div
        className={cn(
          "prose mt-8 max-w-none",
          "prose-headings:font-display prose-headings:font-semibold prose-headings:text-ink",
          "prose-h2:mt-10 prose-h2:text-2xl",
          "prose-p:leading-8 prose-p:text-ink-light",
          "prose-li:text-ink-light prose-li:leading-7",
          "prose-strong:text-ink",
          "prose-a:text-gold prose-a:no-underline hover:prose-a:underline",
        )}
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />

      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-ink/10 pt-6">
          <Tag className="h-4 w-4 text-ink-faint" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-light"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-ink/10 pt-6">
        <span className="text-sm font-medium text-ink-light">Share:</span>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-ink-light transition-colors hover:bg-cream-200"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-ink-light transition-colors hover:bg-cream-200"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-cream text-ink-light transition-colors hover:bg-cream-200"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-cream px-3 text-xs font-medium text-ink-light transition-colors hover:bg-cream-200"
        >
          <LinkIcon className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </article>
  );
}

function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const html: string[] = [];
  let inList = false;

  for (const raw of lines) {
    const line = raw.trimEnd();

    if (line.trim() === "") {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
    if (headingMatch) {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      const level = headingMatch[1].length;
      html.push(`<h${level}>${inlineFormat(headingMatch[2])}</h${level}>`);
      continue;
    }

    const listMatch = line.match(/^[-*]\s+(.*)/);
    if (listMatch) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inlineFormat(listMatch[1])}</li>`);
      continue;
    }

    if (inList) {
      html.push("</ul>");
      inList = false;
    }
    html.push(`<p>${inlineFormat(line)}</p>`);
  }

  if (inList) html.push("</ul>");

  return html.join("\n");
}

function inlineFormat(text: string): string {
  return (
    text
      .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  );
}
