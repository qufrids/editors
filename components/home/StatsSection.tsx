"use client";

import { useInView } from "react-intersection-observer";
import { CheckCircle, Clock, RefreshCw, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/utils";

const stats = [
  {
    value: "100%",
    label: "Plagiarism Free",
    description: "Original, source-backed academic writing reviewed for quality and integrity.",
    icon: ShieldCheck,
  },
  {
    value: "24/7",
    label: "On-Time Delivery",
    description: "Round-the-clock support and deadline-focused workflows for reliable delivery.",
    icon: Clock,
  },
  {
    value: "Free",
    label: "Unlimited Revisions",
    description: "Revision requests handled promptly until your final draft is assessment-ready.",
    icon: RefreshCw,
  },
  {
    value: "100%",
    label: "Money Back Guarantee",
    description: "Transparent guarantee policy designed to protect your confidence and investment.",
    icon: CheckCircle,
  },
];

export function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="relative z-10 -mt-12 pb-8 pt-0" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <article
                key={item.label}
                className={cn(
                  "rounded-2xl border border-ink/10 bg-white p-6 shadow-lg shadow-ink/5 transition-all duration-700",
                  inView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-4 font-display text-3xl text-ink">{item.value}</p>
                <h3 className="mt-1 text-base font-semibold text-ink">{item.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-light">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
