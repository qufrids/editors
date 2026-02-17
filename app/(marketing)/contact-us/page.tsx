import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { ContactForm } from "@/components/shared/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Oxford Editors",
  description:
    "Get in touch with Oxford Editors for academic support, course enquiries, or any questions. We respond within 24 hours.",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Oxford Editors",
    description:
      "Get in touch with Oxford Editors for academic support, course enquiries, or any questions. We respond within 24 hours.",
    type: "website",
    url: "/contact-us",
  },
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappMessage =
  "Hello Oxford Editors, I would like to enquire about your academic services.";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@oxfordeditors.co.uk",
    href: "mailto:info@oxfordeditors.co.uk",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7706 669603",
    href: "tel:+447706669603",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: undefined,
  },
];

const businessHours = [
  { day: "Monday \u2013 Friday", hours: "9:00 AM \u2013 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM \u2013 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactUsPage() {
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Get in Touch
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Have a question about our services or need academic support? We&apos;d love to hear from
            you. Fill in the form below or reach out directly &mdash; our team typically responds
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">
            {/* Left: Form */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm leading-7 text-ink-light">
                All fields marked with <span className="text-red-500">*</span> are required.
                We&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>

            {/* Right: Contact Info */}
            <aside className="space-y-6">
              {/* Contact Details Card */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-ink">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                        <item.icon className="h-4 w-4 text-gold" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-ink hover:text-gold"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-ink">{item.value}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>

                {whatsappUrl && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#25D366] text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                )}
              </div>

              {/* Business Hours Card */}
              <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold" />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Business Hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {businessHours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-ink-light">{entry.day}</span>
                      <span className="font-medium text-ink">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border border-ink/10 bg-cream">
                <div className="flex h-48 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-ink-faint" />
                    <p className="mt-2 text-sm font-medium text-ink-muted">
                      United Kingdom
                    </p>
                    <p className="mt-0.5 text-xs text-ink-faint">
                      Serving students nationwide
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
