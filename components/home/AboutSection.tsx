import { BadgeCheck, BookOpenCheck, GraduationCap, ArrowRight } from "lucide-react";

import { Button } from "@/components/shared/Button";

const features = [
  {
    title: "Certified Expertise",
    description:
      "Experienced academic specialists who understand university standards, assessment criteria, and research expectations.",
    icon: BadgeCheck,
  },
  {
    title: "Higher Education Focus",
    description:
      "We work specifically with undergraduate and postgraduate learners, tailoring support to UK university requirements.",
    icon: GraduationCap,
  },
  {
    title: "End-to-End Support",
    description:
      "From assignments and dissertations to editing and technical projects, comprehensive academic assistance at every stage.",
    icon: BookOpenCheck,
  },
];

export function AboutSection() {
  return (
    <section className="bg-cream py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">About Oxford Editors</p>
            <h2 className="mt-4 font-display text-3xl leading-tight text-ink sm:text-4xl md:text-5xl">
              Academic Support You Can <span className="text-gold">Trust</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-light">
              Oxford Editors supports students with professional, reliable academic guidance designed for real university
              demands. We combine subject-aware expertise with clear communication and quality-focused delivery so that
              every piece of work is structured, polished, and assessment-ready.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-ink p-8">
              <h3 className="font-display text-xl text-cream sm:text-2xl">
                Struggling with your academic work?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-faint">
                Get matched with an expert in your subject area. Fast turnaround, guaranteed quality.
              </p>
              <Button href="/contact-us" className="mt-6 rounded-xl" size="lg">
                Get Expert Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            {features.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="group rounded-2xl border border-ink/10 bg-white p-6 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
              >
                <div className="flex items-start gap-5">
                  <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
