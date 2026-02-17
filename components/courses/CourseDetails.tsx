import { BookOpen, CheckCircle } from "lucide-react";

import type { Course } from "@/types";

type CourseDetailsProps = {
  course: Course;
};

export function CourseDetails({ course }: CourseDetailsProps) {
  return (
    <section id="course-details" className="bg-white py-14 md:py-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Course Overview
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              What You Will Gain
            </h2>
            <div className="mt-6 space-y-4 whitespace-pre-line text-base leading-8 text-ink-light">
              {course.description}
            </div>

            <div className="mt-10">
              <h3 className="font-display text-xl text-ink">
                Course Features
              </h3>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {course.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 rounded-lg border border-ink/10 bg-white p-4 shadow-sm"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                    <span className="text-sm leading-6 text-ink-light">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="rounded-2xl border border-gold/20 bg-gold/5 p-6 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                <BookOpen className="h-5 w-5 text-gold" />
              </div>
              <h3 className="font-display text-2xl text-ink">
                Supporting Future Professionals
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-ink-light">
              This course is designed to help students build the academic skills they need for
              long-term success. Whether you are working towards your first degree or refining
              postgraduate research, the support you receive is tailored to your level, discipline,
              and assessment requirements.
            </p>

            <div className="mt-6 space-y-4">
              {[
                {
                  title: "Tailored to Your Level",
                  text: "Content is adapted for undergraduate, postgraduate, and doctoral learners, meeting you where you are.",
                },
                {
                  title: "Assessment-Focused",
                  text: "Every element of the course connects directly to how your work will be marked and evaluated.",
                },
                {
                  title: "Practical and Applicable",
                  text: "Skills and techniques you develop here carry forward into future modules, research, and professional roles.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg bg-white p-4 shadow-sm">
                  <h4 className="text-sm font-semibold text-ink">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-ink-light">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg bg-gold/10 p-4">
              <p className="text-sm font-medium leading-6 text-ink">
                All courses include structured guidance, expert feedback, and a commitment to
                academic integrity aligned with UK university standards.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
