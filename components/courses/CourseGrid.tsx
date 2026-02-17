"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/shared/Button";
import type { Course } from "@/types";

type CourseGridProps = {
  courses: Course[];
  categories: string[];
};

export function CourseGrid({ courses, categories }: CourseGridProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? courses
      : courses.filter((c) => c.category === activeCategory);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <div role="group" aria-label="Course categories" className="mb-8 flex flex-wrap gap-2">
          {["All", ...categories].map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <article
              key={course.id}
              className="group overflow-hidden rounded-xl border border-ink/10 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image_url}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-ink">
                  &pound;{course.price}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-light backdrop-blur-sm">
                  {course.category}
                </span>
              </div>

              <div className="p-5">
                <h2 className="line-clamp-2 font-display text-lg font-semibold text-ink group-hover:text-gold-700">
                  {course.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-ink-light">
                  {course.subtitle}
                </p>

                <div className="mt-4 flex items-center gap-1.5">
                  <Star className="h-4 w-4 fill-gold text-gold" />
                  <span className="text-sm font-medium text-ink">
                    {course.rating.toFixed(1)}
                  </span>
                </div>

                <Button
                  href={`/courses/${course.slug}`}
                  variant="outline"
                  className="mt-5 w-full"
                >
                  View Course
                </Button>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-8 text-center text-ink-muted">
            No courses found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
