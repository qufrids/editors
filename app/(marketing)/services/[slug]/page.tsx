import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceCTA } from "@/components/services/ServiceCTA";
import { ServiceFeatures } from "@/components/services/ServiceFeatures";
import { ServiceHero } from "@/components/services/ServiceHero";
import { getAllServices, getServiceBySlug } from "@/lib/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.meta_title,
    description: service.meta_description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: service.meta_title,
      description: service.meta_description,
      type: "website",
      url: `/services/${service.slug}`,
    },
  };
}

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceCTA />
    </>
  );
}
