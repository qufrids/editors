import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

import { Button } from "@/components/shared/Button";
import type { Course } from "@/types";

type CourseHeroProps = {
  course: Course;
};

export function CourseHero({ course }: CourseHeroProps) {
  const fullStars = Math.floor(course.rating);
  const hasHalfStar = course.rating - fullStars >= 0.25;

  return (
    <section className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-navy-600">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-primary-700">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/courses" className="hover:text-primary-700">
                Courses
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-navy-900">{course.title}</li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
          <div>
            <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-primary-700">
              {course.category}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
              {course.title}
            </h1>
            <p className="mt-4 max-w-xl text-lg font-medium text-navy-700">
              {course.subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-sm font-medium text-navy-500">Price</p>
                <p className="text-3xl font-bold text-navy-900">
                  &pound;{course.price}
                </p>
              </div>

              <div className="h-10 w-px bg-navy-200" />

              <div>
                <p className="text-sm font-medium text-navy-500">Rating</p>
                <div className="flex items-center gap-1.5">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < fullStars
                            ? "fill-amber-400 text-amber-400"
                            : i === fullStars && hasHalfStar
                              ? "fill-amber-400/50 text-amber-400"
                              : "fill-navy-200 text-navy-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-bold text-navy-900">
                    {course.rating}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <Button href="#course-details" size="lg">
                View Course Details
              </Button>
            </div>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-navy-100 shadow-lg">
            <Image
              src={course.image_url}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
