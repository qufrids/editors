"use client";

import { useInView } from "react-intersection-observer";

import { cn } from "@/lib/utils";

const stats = [
  {
    value: "100%",
    label: "Plagiarism Free",
    description:
      "Every submission is developed with original, source-backed academic writing and reviewed for quality and integrity.",
  },
  {
    value: "24/7",
    label: "On-Time Delivery",
    description:
      "Round-the-clock support and deadline-focused workflows help ensure your work is delivered when you need it.",
  },
  {
    value: "Free",
    label: "Free Revisions",
    description:
      "Revision requests are handled promptly so your final draft aligns with your brief, feedback, and expectations.",
  },
  {
    value: "100%",
    label: "Money Back Guarantee",
    description:
      "Our service commitment is backed by a transparent guarantee policy designed to protect your confidence.",
  },
];

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white py-14 md:py-20" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <article
              key={item.label}
              className={cn(
                "rounded-xl border border-primary-100 bg-primary-50/40 p-6 transition-all duration-700",
                inView ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="font-display text-4xl font-semibold text-primary-700">{item.value}</p>
              <h3 className="mt-2 text-lg font-bold text-navy-900">{item.label}</h3>
              <p className="mt-3 text-sm leading-6 text-navy-700">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}