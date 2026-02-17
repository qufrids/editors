import Link from "next/link";

import type { Service } from "@/types";

type ServiceHeroProps = {
  service: Service;
};

export function ServiceHero({ service }: ServiceHeroProps) {
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
              <Link href="/services" className="hover:text-primary-700">
                Services
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-navy-900">{service.title}</li>
          </ol>
        </nav>

        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">Academic Service</p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg font-medium text-navy-700">{service.subtitle}</p>
        <p className="mt-5 max-w-3xl whitespace-pre-line text-base leading-8 text-navy-700">{service.description}</p>
      </div>
    </section>
  );
}