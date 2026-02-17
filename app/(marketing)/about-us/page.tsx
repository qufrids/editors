import type { Metadata } from "next";
import {
  Award,
  BookOpen,
  GraduationCap,
  Heart,
  Shield,
  Target,
  Users,
} from "lucide-react";

import { Button } from "@/components/shared/Button";
import { StatsSection } from "@/components/home/StatsSection";

export const metadata: Metadata = {
  title: "About Us | Oxford Editors",
  description:
    "Learn about Oxford Editors — a UK-based academic support service helping students achieve their potential through expert guidance, quality writing, and personalised support.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Oxford Editors",
    description:
      "Learn about Oxford Editors — a UK-based academic support service helping students achieve their potential through expert guidance, quality writing, and personalised support.",
    type: "website",
    url: "/about-us",
  },
};

const values = [
  {
    icon: Shield,
    title: "Academic Integrity",
    description:
      "Every piece of work we deliver is original, properly referenced, and designed to support genuine learning outcomes.",
  },
  {
    icon: Target,
    title: "Assessment-Focused",
    description:
      "We align every project to your module brief, marking criteria, and learning outcomes so your submission is on target.",
  },
  {
    icon: Heart,
    title: "Student-Centred Approach",
    description:
      "We listen to your needs, adapt to your schedule, and provide support that fits your academic journey.",
  },
  {
    icon: Award,
    title: "Quality Without Compromise",
    description:
      "Rigorous internal review processes ensure consistently high standards across every service we provide.",
  },
  {
    icon: BookOpen,
    title: "Subject Expertise",
    description:
      "Our team covers a wide range of disciplines, from business and law to nursing, technology, and the social sciences.",
  },
  {
    icon: Users,
    title: "Responsive Communication",
    description:
      "We maintain open, timely communication throughout your project so you always know where things stand.",
  },
];

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Academic Director",
    description:
      "Oversees academic quality standards and ensures every service meets UK higher-education expectations.",
  },
  {
    name: "James Okonkwo",
    role: "Head of Client Support",
    description:
      "Manages student enquiries and ensures a seamless, responsive experience from first contact to final delivery.",
  },
  {
    name: "Dr. Emily Carter",
    role: "Senior Research Consultant",
    description:
      "Leads dissertation and research methodology support, bringing over a decade of postgraduate supervision experience.",
  },
  {
    name: "Priya Sharma",
    role: "Lead Editor",
    description:
      "Heads the editing and proofreading team with meticulous attention to language, structure, and presentation quality.",
  },
];

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Who We Are
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            About Oxford Editors
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            We partner with students across the UK to deliver expert academic support that is
            structured, reliable, and aligned with university standards.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
                Our Mission
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink md:text-4xl">
                Empowering Students to Achieve Academic Excellence
              </h2>
              <p className="mt-5 text-base leading-8 text-ink-light">
                Oxford Editors was founded on a simple belief: every student deserves access to
                high-quality academic support. Whether you are navigating your first essay or
                completing a doctoral thesis, the quality of guidance you receive can shape your
                confidence, your grades, and your future.
              </p>
              <p className="mt-4 text-base leading-8 text-ink-light">
                We bring together experienced academics, subject specialists, and professional
                editors who understand the demands of UK higher education. Our team works closely
                with students to provide personalised, assessment-focused support that respects
                academic integrity while helping you produce your best work.
              </p>
              <p className="mt-4 text-base leading-8 text-ink-light">
                From coursework and dissertations to exam preparation and research proposals, we
                are here to help you succeed at every stage of your academic journey.
              </p>
            </div>

            <div className="relative min-h-[340px] rounded-2xl border border-gold/20 bg-gradient-to-br from-cream-200 via-cream to-gold/10 p-8 shadow-sm">
              <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-gold-200/70" />
              <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-gold/10" />
              <div className="relative flex h-full min-h-[260px] items-center justify-center rounded-xl border border-dashed border-gold-200 bg-white/70 text-center">
                <p className="max-w-[280px] text-sm font-medium text-gold">
                  Brand image or team photograph placeholder
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-cream-200/50 py-14 md:py-20">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Why Choose Us
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold text-ink md:text-4xl">
              What Sets Oxford Editors Apart
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-light">
              We combine academic expertise with a genuine commitment to student success.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="rounded-xl border border-ink/10 bg-white p-6 shadow-sm"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-light">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Team */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
              Our Team
            </p>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-semibold text-ink md:text-4xl">
              Meet the People Behind Oxford Editors
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-ink-light">
              A dedicated team of academics and professionals committed to helping students succeed.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-xl border border-ink/10 bg-white p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                  <GraduationCap className="h-8 w-8 text-gold" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-ink">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-gold">{member.role}</p>
                <p className="mt-3 text-sm leading-6 text-ink-light">{member.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-14 text-white md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-200">
              Ready to Get Started?
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl">
              Let Us Support Your Academic Success
            </h2>
            <p className="mt-4 text-sm leading-7 text-ink-faint">
              Whether you need help with an essay, a dissertation, or exam preparation, our team is
              here to guide you every step of the way.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href="/services" size="lg">
                Explore Our Services
              </Button>
              <Button href="/contact-us" variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
