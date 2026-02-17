import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseCTA } from "@/components/courses/CourseCTA";
import { CourseDetails } from "@/components/courses/CourseDetails";
import { CourseHero } from "@/components/courses/CourseHero";
import { getAllCourses, getCourseBySlug } from "@/lib/data/courses";

type CoursePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {};
  }

  return {
    title: course.meta_title,
    description: course.meta_description,
    alternates: {
      canonical: `/courses/${course.slug}`,
    },
    openGraph: {
      title: course.meta_title,
      description: course.meta_description,
      type: "website",
      url: `/courses/${course.slug}`,
    },
  };
}

export function generateStaticParams() {
  return getAllCourses().map((course) => ({ slug: course.slug }));
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <CourseHero course={course} />
      <CourseDetails course={course} />
      <CourseCTA />
    </>
  );
}
