import { FileQuestion } from "lucide-react";

import { Button } from "@/components/shared/Button";

const helpfulLinks = [
  { label: "Homepage", href: "/", description: "Back to the main page" },
  { label: "Our Services", href: "/services", description: "Browse academic services" },
  { label: "Courses", href: "/courses", description: "Explore available courses" },
  { label: "Blog", href: "/blog", description: "Read our latest articles" },
  { label: "Contact Us", href: "/contact-us", description: "Get in touch with our team" },
];

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-primary-50 via-white to-white py-20">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50">
            <FileQuestion className="h-8 w-8 text-primary-600" />
          </div>

          <p className="mt-6 text-6xl font-bold text-navy-200">404</p>

          <h1 className="mt-2 font-display text-3xl font-semibold text-navy-900">
            Page Not Found
          </h1>
          <p className="mt-3 text-base leading-7 text-navy-600">
            Sorry, the page you are looking for does not exist or may have been moved. Check the
            URL or use the links below to find what you need.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/" size="lg">
              Back to Home
            </Button>
            <Button href="/contact-us" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>

          <div className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-navy-500">
              Helpful Links
            </h2>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {helpfulLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex flex-col rounded-lg border border-navy-100 bg-white p-4 text-left transition-shadow hover:shadow-md"
                  >
                    <span className="text-sm font-semibold text-navy-900">
                      {link.label}
                    </span>
                    <span className="mt-0.5 text-xs text-navy-500">
                      {link.description}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
