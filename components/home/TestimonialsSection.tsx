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
    if (testimonials.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => {
      window.clearInterval(timer);
    };
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const current = testimonials[currentIndex];

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const initial = current.name.trim().charAt(0).toUpperCase();

  return (
    <section className="bg-primary-50 py-16 md:py-20">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">What Our Customers Say?</h2>

          <div className="relative mt-10">
            <AnimatePresence mode="wait">
              <motion.article
                key={current.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-primary-100 bg-white p-8 shadow-sm md:p-10"
              >
                <Quote className="mx-auto h-8 w-8 text-primary-600" />

                <p className="mt-6 text-base leading-8 text-navy-700 md:text-lg">{current.content}</p>

                <div className="mt-6 flex items-center justify-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={`${current.id}-star-${index}`}
                      className={`h-4 w-4 ${index < Math.round(current.rating) ? "fill-current" : ""}`}
                    />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-navy-800">{current.rating.toFixed(1)}</span>
                </div>

                <div className="mt-7 flex flex-col items-center justify-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 font-display text-lg font-semibold text-primary-700">
                    {initial}
                  </div>
                  <div>
                    <p className="text-base font-semibold text-navy-900">{current.name}</p>
                    <p className="text-sm text-navy-600">{current.role}</p>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous testimonial"
              className="absolute left-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm transition-colors hover:bg-navy-50"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next testimonial"
              className="absolute right-2 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-navy-200 bg-white text-navy-700 shadow-sm transition-colors hover:bg-navy-50"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.id}
                type="button"
                aria-label={`Go to testimonial ${index + 1}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all ${index === currentIndex ? "w-6 bg-primary-600" : "w-2.5 bg-primary-200 hover:bg-primary-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}