import Link from "next/link";

import type { Service } from "@/types";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-ink-light">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gold">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/services" className="hover:text-gold">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-ink">{service.title}</li>
          </ol>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">Academic Service</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight text-ink md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-medium text-ink-light">{service.subtitle}</p>
        <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-ink-light">{service.description}</p>
      </div>
    </section>
  );
}
