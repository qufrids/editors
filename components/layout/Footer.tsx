import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

import { NewsletterForm } from "@/components/shared/NewsletterForm";
import { getAllServices } from "@/lib/data/services";

const services = getAllServices();

const socialLinks = [
  { name: "Facebook", href: "https://www.facebook.com", icon: Facebook },
  { name: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { name: "Twitter", href: "https://x.com", icon: Twitter },
  { name: "YouTube", href: "https://www.youtube.com", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="border-b border-white/10">
        <div className="container grid gap-6 py-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold">Stay Updated</h2>
            <p className="mt-2 max-w-2xl text-sm text-navy-200">
              Get academic insights, service updates, and practical guidance for your coursework and research journey.
            </p>
          </div>
          <NewsletterForm />
        </div>
      </div>

      <div className="container py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-semibold">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-200">
              <li>
                <Link href="/about-us" className="transition-colors hover:text-white">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/courses" className="transition-colors hover:text-white">
                  Courses
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-lg font-semibold">Services</h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm text-navy-200 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.slug}`} className="transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold">Support</h3>
            <ul className="mt-4 space-y-2 text-sm text-navy-200">
              <li>
                <Link href="/faqs" className="transition-colors hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="transition-colors hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-condition" className="transition-colors hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-navy-300">Copyright� 2024 Oxford Editor, All rights reserved.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-navy-200 transition-colors hover:border-white hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}