import { BadgeCheck, BookOpenCheck, GraduationCap } from "lucide-react";

import { Button } from "@/components/shared/Button";

const features = [
  {
    title: "Certified Expertise",
    description:
      "Our team includes experienced academic specialists who understand university standards, assessment criteria, and research expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Higher Education Focus",
    description:
      "We work specifically with undergraduate and postgraduate learners, tailoring support to UK higher-education requirements.",
    icon: GraduationCap,
  },
  {
    title: "Comprehensive Academic Support",
    description:
      "From assignments and dissertations to editing and technical projects, we provide practical end-to-end academic assistance.",
    icon: BookOpenCheck,
  },
];

export function AboutSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">About Us</p>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
              Partnering with You for Academic Brilliance
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-navy-700 md:text-lg">
              Oxford Editors supports students with professional, reliable academic guidance designed for real university
              demands. We combine subject-aware expertise with clear communication and quality-focused delivery so that
              every piece of work is structured, polished, and assessment-ready. Our mission is to help students across
              the UK progress with confidence, clarity, and stronger academic outcomes.
            </p>

            <div className="mt-8 rounded-xl border border-primary-100 bg-primary-50/60 p-6">
              <h3 className="font-display text-2xl font-semibold text-navy-900">
                Academic Challenges? Reach Out for Expert Help Today!
              </h3>
              <Button href="/contact-us" className="mt-5" size="lg">
                Get Expert Support
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {features.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-xl border border-navy-100 bg-white p-6 shadow-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-navy-700">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}