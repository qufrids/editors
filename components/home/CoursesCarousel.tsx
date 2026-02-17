"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
    <section className="bg-primary-50/40 py-16 md:py-20">
      <div className="container">
        <div className="mb-7 flex items-center justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">Featured Courses</h2>
          <Link href="/courses" className="text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800">
            All Courses ?
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
                  className="group overflow-hidden rounded-xl border border-navy-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={course.image_url}
                      alt={course.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                      £{course.price}
                    </span>
                  </div>

                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-semibold text-navy-900">{course.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-navy-600">{course.subtitle}</p>

                    <div className="mt-4 flex items-center gap-1.5 text-sm text-amber-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="font-medium text-navy-800">{course.rating.toFixed(1)}</span>
                    </div>

                    <Button href={`/courses/${course.slug}`} variant="outline" className="mt-5 w-full">
                      Get Support
                    </Button>
                  </div>
                </article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-7 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous courses"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next courses"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 bg-white text-navy-700 transition-colors hover:bg-navy-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}