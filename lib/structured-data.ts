import type { BlogPost, Course, Service } from "@/types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://oxfordeditors.co.uk";
const ORG_NAME = "Oxford Editors";
const ORG_EMAIL = "info@oxfordeditors.co.uk";
const ORG_PHONE = "+447706669603";

// ---- Organization ----

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: ORG_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    email: ORG_EMAIL,
    telephone: ORG_PHONE,
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: ORG_PHONE,
      contactType: "customer service",
      email: ORG_EMAIL,
      availableLanguage: "English",
    },
  };
}

// ---- Breadcrumbs ----

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.href}`,
    })),
  };
}

// ---- Service ----

export function generateServiceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: "Academic Support",
    image: `${SITE_URL}${service.image_url}`,
  };
}

// ---- Course ----

export function generateCourseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.description,
    url: `${SITE_URL}/courses/${course.slug}`,
    provider: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
    },
    image: `${SITE_URL}${course.image_url}`,
    offers: {
      "@type": "Offer",
      price: course.price.toString(),
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/courses/${course.slug}`,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: course.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
    inLanguage: "en-GB",
    coursePrerequisites: "None",
    educationalLevel: course.category,
  };
}

// ---- Blog Post ----

export function generateBlogPostSchema(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.slug}`,
    image: `${SITE_URL}${post.featured_image}`,
    datePublished: post.published_at,
    dateCreated: post.created_at,
    author: {
      "@type": "Person",
      name: post.author,
      image: `${SITE_URL}${post.author_image}`,
    },
    publisher: {
      "@type": "Organization",
      name: ORG_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en-GB",
  };
}
