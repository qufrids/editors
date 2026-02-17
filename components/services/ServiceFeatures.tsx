"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Service } from "@/types";

type ServiceFeaturesProps = {
  service: Service;
};

export function ServiceFeatures({ service }: ServiceFeaturesProps) {
  const [expandedId, setExpandedId] = useState<string | null>(service.features[0]?.id ?? null);

  return (
    <section className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">What We Offer</p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">Service Features</h2>

            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {service.features.map((feature) => {
                const isOpen = expandedId === feature.id;

                return (
                  <article key={feature.id} className="rounded-xl border border-ink/10 bg-white shadow-sm">
                    <button
                      id={`feature-trigger-${feature.id}`}
                      type="button"
                      onClick={() => setExpandedId((prev) => (prev === feature.id ? null : feature.id))}
                      aria-expanded={isOpen}
                      aria-controls={`feature-panel-${feature.id}`}
                      className="flex w-full items-start justify-between gap-3 px-5 py-4 text-left"
                    >
                      <h3 className="text-base font-semibold text-ink">{feature.title}</h3>
                      <ChevronDown
                        className={cn(
                          "mt-0.5 h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200",
                          isOpen && "rotate-180",
                        )}
                      />
                    </button>
                    <div
                      id={`feature-panel-${feature.id}`}
                      role="region"
                      aria-labelledby={`feature-trigger-${feature.id}`}
                      className={cn(
                        "grid transition-all duration-300",
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm leading-7 text-ink-light">{feature.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="rounded-2xl border border-gold/20 bg-gold/5 p-6">
            <h3 className="font-display text-2xl text-ink">Ideal for</h3>
            <ul className="mt-4 space-y-2">
              {service.ideal_for.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-6 text-ink-light">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
