"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { cn } from "@/lib/utils";
import type { Course, Service } from "@/types";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  services: Service[];
  courses: Course[];
};

export function MobileMenu({ isOpen, onClose, services, courses }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<"services" | "courses" | null>(null);

  const toggleSection = (section: "services" | "courses") => {
    setOpenSection((current) => (current === section ? null : section));
  };

  return (
    <AnimatePresence>
      {isOpen ? (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <motion.button
            type="button"
            aria-label="Close menu overlay"
            className="absolute inset-0 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />

          <motion.aside
            className="absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-ink text-cream shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-white/15 px-5 py-4">
              <span className="font-display text-xl">Oxford Editors</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/20 text-cream transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav aria-label="Mobile" className="px-5 py-5">
              <div className="space-y-2">
                <Link href="/about-us" className="block rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={onClose}>
                  About Us
                </Link>
                <Link href="/blog" className="block rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={onClose}>
                  Blog
                </Link>
                <Link href="/contact-us" className="block rounded-md px-2 py-2 text-sm hover:bg-white/10" onClick={onClose}>
                  Contact Us
                </Link>
              </div>

              <div className="mt-5 border-t border-white/15 pt-5">
                <button
                  type="button"
                  onClick={() => toggleSection("services")}
                  aria-expanded={openSection === "services"}
                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium hover:bg-white/10"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openSection === "services" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openSection === "services" ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 space-y-1 pl-2">
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            className="block rounded-md px-2 py-1.5 text-sm text-cream/80 hover:bg-white/10 hover:text-cream"
                            onClick={onClose}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="mt-3">
                <button
                  type="button"
                  onClick={() => toggleSection("courses")}
                  aria-expanded={openSection === "courses"}
                  className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium hover:bg-white/10"
                >
                  <span>Courses</span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      openSection === "courses" && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openSection === "courses" ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="mt-1 space-y-1 pl-2">
                        {courses.map((course) => (
                          <Link
                            key={course.id}
                            href={`/courses/${course.slug}`}
                            className="block rounded-md px-2 py-1.5 text-sm text-cream/80 hover:bg-white/10 hover:text-cream"
                            onClick={onClose}
                          >
                            {course.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>

              <div className="mt-8">
                <Button href="/contact-us" className="w-full" onClick={onClose}>
                  Get Started
                </Button>
              </div>
            </nav>
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
