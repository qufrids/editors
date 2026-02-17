"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqCategory = {
  name: string;
  items: FaqItem[];
};

type FaqAccordionProps = {
  categories: FaqCategory[];
};

export function FaqAccordion({ categories }: FaqAccordionProps) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.name ?? "");
  const [openIndex, setOpenIndex] = useState<number>(0);

  const currentCategory = categories.find((c) => c.name === activeCategory);

  return (
    <div>
      <div role="group" aria-label="FAQ categories" className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.name}
            type="button"
            onClick={() => {
              setActiveCategory(category.name);
              setOpenIndex(0);
            }}
            aria-pressed={activeCategory === category.name}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200",
              activeCategory === category.name
                ? "bg-gold text-ink"
                : "bg-cream text-ink-light hover:bg-cream-200",
            )}
          >
            {category.name}
          </button>
        ))}
      </div>

      {currentCategory && (
        <div className="space-y-3">
          {currentCategory.items.map((item, index) => {
            const isOpen = openIndex === index;
            const triggerId = `faq-trigger-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div
                key={item.question}
                className="rounded-xl border border-ink/10 bg-white shadow-sm"
              >
                <button
                  id={triggerId}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                >
                  <h3 className="text-base font-semibold text-ink">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "mt-0.5 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200",
                      isOpen && "rotate-180",
                    )}
                  />
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  className={cn(
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-7 text-ink-light">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
