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
    <section className="bg-white py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Testimonials</p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl">
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
              className="rounded-2xl border border-ink/10 bg-cream/50 p-8 text-center md:p-12"
            >
              <Quote className="mx-auto h-10 w-10 text-gold/30" />

              <p className="mt-6 text-lg leading-relaxed text-ink-light md:text-xl md:leading-relaxed">
                &ldquo;{current.content}&rdquo;
              </p>

              <div className="mt-6 flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`${current.id}-star-${index}`}
                    className={`h-5 w-5 ${index < Math.round(current.rating) ? "fill-gold text-gold" : "text-ink/10"}`}
                  />
                ))}
              </div>

              <div className="mt-6 flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold font-display text-xl text-ink">
                  {initial}
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">{current.name}</p>
                  <p className="text-sm text-ink-muted">{current.role}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous testimonial"
            className="absolute -left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink-light shadow-sm transition-colors hover:bg-cream hover:text-ink md:inline-flex lg:-left-14"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next testimonial"
            className="absolute -right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-ink/10 bg-white text-ink-light shadow-sm transition-colors hover:bg-cream hover:text-ink md:inline-flex lg:-right-14"
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
                index === currentIndex ? "w-8 bg-gold" : "w-2.5 bg-ink/10 hover:bg-ink/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
