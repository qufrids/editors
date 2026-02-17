import type { Metadata } from "next";

import { CourseGrid } from "@/components/courses/CourseGrid";
import { getAllCourses } from "@/lib/data/courses";

export const metadata: Metadata = {
  title: "Academic Courses | Oxford Editors",
  description:
    "Browse our academic courses across Health Sciences, Social Sciences, Business, and Technology. Expert-led support tailored to UK university students.",
  alternates: {
    canonical: "/courses",
  },
  openGraph: {
    title: "Academic Courses | Oxford Editors",
    description:
      "Browse our academic courses across Health Sciences, Social Sciences, Business, and Technology. Expert-led support tailored to UK university students.",
    type: "website",
    url: "/courses",
  },
};

export default function CoursesPage() {
  const courses = getAllCourses();
  const categories = [...new Set(courses.map((c) => c.category))];

  return (
    <>
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Explore Our Courses
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Academic Courses
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Expert-led academic support across a range of disciplines, tailored to UK university
            standards and assessment criteria.
          </p>
        </div>
      </section>

      <CourseGrid courses={courses} categories={categories} />
    </>
  );
}
