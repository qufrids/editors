"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

import type { Testimonial } from "@/types";

type TestimonialsSectionProps = {
  testimonials: Testimonial[];
};

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  if (testimonials.length === 0) return null;

  const current = testimonials[currentIndex];
  const initial = current.name.trim().charAt(0).toUpperCase();

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Testimonials</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            What Our Students Say
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.article
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="rounded-2xl border border-navy-100 bg-navy-50/30 p-8 text-center md:p-12"
            >
              <Quote className="mx-auto h-10 w-10 text-primary-200" />

              <p className="mt-6 text-lg leading-relaxed text-navy-700 md:text-xl md:leading-relaxed">
                &ldquo;{current.content}&rdquo;
              </p>

              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${current.id}-star-${index}`}
                    className={`h-5 w-5 ${index < Math.round(current.rating) ? "fill-amber-400 text-amber-400" : "text-navy-200"}`}
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 font-display text-xl font-bold text-white">
                  {initial}
                </div>
                <div>
                  <p className="text-base font-bold text-navy-900">{current.name}</p>
                  <p className="text-sm text-navy-500">{current.role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-navy-200 bg-white text-navy-600 shadow-sm transition-colors hover:bg-navy-50 md:inline-flex lg:-left-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-navy-200 bg-white text-navy-600 shadow-sm transition-colors hover:bg-navy-50 md:inline-flex lg:-right-14"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "w-8 bg-primary-600" : "w-2.5 bg-navy-200 hover:bg-navy-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
