"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Star } from "lucide-react";

import { Button } from "@/components/shared/Button";
import type { Course } from "@/types";

type CoursesCarouselProps = {
  courses: Course[];
};

const PAGE_SIZE = 4;

export function CoursesCarousel({ courses }: CoursesCarouselProps) {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const totalPages = Math.max(1, Math.ceil(courses.length / PAGE_SIZE));

  const visibleCourses = useMemo(() => {
    const start = currentPage * PAGE_SIZE;
    return courses.slice(start, start + PAGE_SIZE);
  }, [courses, currentPage]);

  const goPrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="bg-cream-200/50 py-24">
      <div className="container">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">Explore Courses</p>
            <h2 className="mt-3 font-display text-3xl text-ink sm:text-4xl">Featured Courses</h2>
          </div>
          <Link
            href="/courses"
            className="hidden items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-700 sm:flex"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 36 : -36 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -36 : 36 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
            >
              {visibleCourses.map((course) => (
                <article
                  key={course.id}
                  className="group overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={course.image_url}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-ink shadow-sm">
                      {"\u00A3"}{course.price}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="line-clamp-2 font-display text-base font-semibold text-ink group-hover:text-gold-700">
                      {course.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-light">{course.subtitle}</p>

                    <div className="mt-4 flex items-center gap-1.5">
                      <Star className="h-4 w-4 fill-gold text-gold" />
                      <span className="text-sm font-semibold text-ink">{course.rating.toFixed(1)}</span>
                    </div>

                    <Button href={`/courses/${course.slug}`} variant="outline" className="mt-5 w-full rounded-xl">
                      View Course
                    </Button>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-between">
          <Link
            href="/courses"
            className="flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-700 sm:hidden"
          >
            View All Courses
            <ArrowRight className="h-4 w-4" />
          </Link>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous courses"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink-light transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next courses"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink-light transition-colors hover:bg-cream hover:text-ink"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
