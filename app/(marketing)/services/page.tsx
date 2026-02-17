import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getAllServices } from "@/lib/data/services";

export const metadata: Metadata = {
  title: "Our Services | Oxford Editors",
  description:
    "Explore our full range of academic support services including essay writing, dissertation guidance, editing, research proposals, and more.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Oxford Editors",
    description:
      "Explore our full range of academic support services including essay writing, dissertation guidance, editing, research proposals, and more.",
    type: "website",
    url: "/services",
  },
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <>
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            What We Offer
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Academic Services
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            From essay writing to dissertation support, our expert team helps UK students achieve
            their academic goals with confidence.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-ink/10 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                <h2 className="font-display text-xl font-semibold text-ink group-hover:text-gold">
                  {service.title}
                </h2>
                <p className="mt-2 text-sm leading-7 text-ink-light">
                  {service.subtitle}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
