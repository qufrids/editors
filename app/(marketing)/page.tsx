import type { Metadata } from "next";

import { AboutSection } from "@/components/home/AboutSection";
import { CoursesCarousel } from "@/components/home/CoursesCarousel";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { StatsSection } from "@/components/home/StatsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { getAllCourses } from "@/lib/data/courses";
import { testimonials } from "@/lib/data/testimonials";

export const metadata: Metadata = {
  title: "Oxford Editors | Academic Services and Higher Education Support",
  description:
    "Oxford Editors provides UK-focused academic support including coursework assistance, dissertation guidance, technical project help, and professional proofreading.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Oxford Editors | Academic Services and Higher Education Support",
    description:
      "Partnering with students for academic brilliance through expert-led coursework, dissertation, and project support.",
    type: "website",
    url: "/",
  },
};

export default function MarketingHomePage() {
  const featuredCourses = getAllCourses().slice(0, 8);
  const allTestimonials = testimonials;

  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <CoursesCarousel courses={featuredCourses} />
      <TestimonialsSection testimonials={allTestimonials} />
      <PartnersSection />
      <WhyUsSection />
    </>
  );
}