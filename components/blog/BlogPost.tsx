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
      {/* Featured Image */}
      <div className="relative aspect-[21/9] overflow-hidden rounded-2xl bg-navy-100">
        <Image
          src={post.featured_image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
          priority
        />
      </div>

      {/* Meta */}
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Link
          href={`/blog?category=${encodeURIComponent(post.category)}`}
          className="rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold text-primary-700 transition-colors hover:bg-primary-200"
        >
          {post.category}
        </Link>
        <span className="flex items-center gap-1 text-sm text-navy-500">
          <Calendar className="h-3.5 w-3.5" />
          {formatDate(post.published_at)}
        </span>
      </div>

      {/* Title */}
      <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
        {post.title}
      </h1>

      {/* Author */}
      <div className="mt-5 flex items-center gap-3 border-b border-navy-100 pb-6">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-primary-100">
          <Image
            src={post.author_image}
            alt={post.author}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-navy-900">{post.author}</p>
          <p className="text-xs text-navy-500">Oxford Editors</p>
        </div>
      </div>

      {/* Content */}
      <div
        className={cn(
          "prose prose-navy mt-8 max-w-none",
          "prose-headings:font-display prose-headings:font-semibold prose-headings:text-navy-900",
          "prose-h2:mt-10 prose-h2:text-2xl",
          "prose-p:leading-8 prose-p:text-navy-700",
          "prose-li:text-navy-700 prose-li:leading-7",
          "prose-strong:text-navy-900",
          "prose-a:text-primary-700 prose-a:no-underline hover:prose-a:underline",
        )}
        dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
      />

      {/* Tags */}
      {post.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap items-center gap-2 border-t border-navy-100 pt-6">
          <Tag className="h-4 w-4 text-navy-400" />
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-navy-50 px-3 py-1 text-xs font-medium text-navy-600"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Share */}
      <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-navy-100 pt-6">
        <span className="text-sm font-medium text-navy-700">Share:</span>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-600 transition-colors hover:bg-navy-100"
          aria-label="Share on Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-600 transition-colors hover:bg-navy-100"
          aria-label="Share on Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-navy-600 transition-colors hover:bg-navy-100"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-navy-50 px-3 text-xs font-medium text-navy-600 transition-colors hover:bg-navy-100"
        >
          <LinkIcon className="h-3.5 w-3.5" />
          {copied ? "Copied!" : "Copy link"}
        </button>
      </div>
    </article>
  );
}

/**
 * Minimal markdown-to-HTML converter for blog content.
 * Handles headings, bold, italic, links, unordered lists, and paragraphs.
 */
function markdownToHtml(md: string): string {
  const lines = md.split("\n");
  const html: string[] = [];
  let inList = false;

  for (const raw of lines) {
    const line = raw.trimEnd();

    // Blank line — close list if open, skip
    if (line.trim() === "") {
      if (inList) {
        html.push("</ul>");
        inList = false;
      }
      continue;
    }

    // Headings
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

    // List items
    const listMatch = line.match(/^[-*]\s+(.*)/);
    if (listMatch) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${inlineFormat(listMatch[1])}</li>`);
      continue;
    }

    // Paragraph
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
      // Bold + italic
      .replace(/\*\*\*(.*?)\*\*\*/g, "<strong><em>$1</em></strong>")
      // Bold
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      // Italic
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      // Links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
  );
}
