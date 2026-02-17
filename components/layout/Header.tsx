"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/shared/Button";
import { getAllCourses } from "@/lib/data/courses";
import { getAllServices } from "@/lib/data/services";
import { cn } from "@/lib/utils";

const services = getAllServices();
const courses = getAllCourses();

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        isScrolled
          ? "border-navy-200 bg-white/95 shadow-sm backdrop-blur"
          : "border-transparent bg-white/70",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Oxford Editors Home">
          <Image
            src="/images/logo.svg"
            alt="Oxford Editors"
            width={40}
            height={40}
            className="h-10 w-10 rounded-sm object-contain"
            priority
          />
          <div className="leading-tight">
            <span className="block font-display text-lg font-semibold text-navy-900">Oxford Editors</span>
            <span className="block text-xs text-navy-600">Academic Services</span>
          </div>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          <Link href="/about-us" className="text-sm font-medium text-navy-700 transition-colors hover:text-primary-600">
            About Us
          </Link>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-navy-700 transition-colors hover:text-primary-600"
            >
              Services
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[340px] rounded-lg border border-navy-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="max-h-[420px] space-y-1 overflow-auto pr-1">
                {services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-1 text-sm font-medium text-navy-700 transition-colors hover:text-primary-600"
            >
              Courses
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full mt-3 w-[340px] rounded-lg border border-navy-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="max-h-[420px] space-y-1 overflow-auto pr-1">
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    className="block rounded-md px-3 py-2 text-sm text-navy-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium text-navy-700 transition-colors hover:text-primary-600">
            Blog
          </Link>

          <Link href="/contact-us" className="text-sm font-medium text-navy-700 transition-colors hover:text-primary-600">
            Contact Us
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact-us" variant="primary" size="md">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-navy-200 text-navy-800 transition-colors hover:bg-navy-50 md:hidden"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-navy-100 bg-white transition-all duration-300 md:hidden",
          mobileMenuOpen ? "max-h-[85vh] opacity-100" : "max-h-0 overflow-hidden opacity-0",
        )}
      >
        <div className="container space-y-6 py-5">
          <div className="space-y-3">
            <Link href="/about-us" className="block text-sm font-medium text-navy-800" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link href="/blog" className="block text-sm font-medium text-navy-800" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </Link>
            <Link href="/contact-us" className="block text-sm font-medium text-navy-800" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </Link>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-500">Services</p>
            <div className="max-h-44 space-y-1 overflow-auto pr-1">
              {services.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-navy-700 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-navy-500">Courses</p>
            <div className="max-h-44 space-y-1 overflow-auto pr-1">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  className="block rounded-md px-2 py-1.5 text-sm text-navy-700 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {course.title}
                </Link>
              ))}
            </div>
          </div>

          <Button href="/contact-us" variant="primary" className="w-full" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}