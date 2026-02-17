"use client";

import { useCallback, useState } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
};

export function Accordion({
  items,
  allowMultiple = false,
  className,
}: AccordionProps) {
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = useCallback(
    (index: number) => {
      setOpenIndices((prev) => {
        const next = new Set(allowMultiple ? prev : []);
        if (prev.has(index)) {
          next.delete(index);
        } else {
          next.add(index);
        }
        return next;
      });
    },
    [allowMultiple],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          const nextIndex = (index + 1) % items.length;
          const nextButton = document.getElementById(
            `accordion-trigger-${nextIndex}`,
          );
          nextButton?.focus();
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          const prevIndex = (index - 1 + items.length) % items.length;
          const prevButton = document.getElementById(
            `accordion-trigger-${prevIndex}`,
          );
          prevButton?.focus();
          break;
        }
        case "Home": {
          e.preventDefault();
          document.getElementById("accordion-trigger-0")?.focus();
          break;
        }
        case "End": {
          e.preventDefault();
          document
            .getElementById(`accordion-trigger-${items.length - 1}`)
            ?.focus();
          break;
        }
      }
    },
    [items.length],
  );

  return (
    <div className={cn("space-y-3", className)} role="region">
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        const panelId = `accordion-panel-${index}`;
        const triggerId = `accordion-trigger-${index}`;

        return (
          <div
            key={`${item.title}-${index}`}
            className="rounded-xl border border-ink/10 bg-white shadow-sm transition-shadow hover:shadow-md"
          >
            <h3>
              <button
                id={triggerId}
                type="button"
                onClick={() => toggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:rounded-xl"
              >
                <span className="text-base font-semibold text-ink">
                  {item.title}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
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
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
