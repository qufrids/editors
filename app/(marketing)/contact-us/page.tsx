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
      <section className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
            Get in Touch
          </p>
          <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight text-navy-900 md:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-navy-700">
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
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Send Us a Message
              </h2>
              <p className="mt-2 text-sm leading-7 text-navy-600">
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
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-semibold text-navy-900">
                  Contact Information
                </h3>
                <ul className="mt-4 space-y-4">
                  {contactDetails.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-50">
                        <item.icon className="h-4 w-4 text-primary-700" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wide text-navy-500">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-navy-900 hover:text-primary-700"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-navy-900">{item.value}</p>
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
              <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary-700" />
                  <h3 className="font-display text-lg font-semibold text-navy-900">
                    Business Hours
                  </h3>
                </div>
                <ul className="mt-4 space-y-2">
                  {businessHours.map((entry) => (
                    <li
                      key={entry.day}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-navy-700">{entry.day}</span>
                      <span className="font-medium text-navy-900">{entry.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map Placeholder */}
              <div className="overflow-hidden rounded-2xl border border-navy-100 bg-navy-50">
                <div className="flex h-48 items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto h-8 w-8 text-navy-300" />
                    <p className="mt-2 text-sm font-medium text-navy-500">
                      United Kingdom
                    </p>
                    <p className="mt-0.5 text-xs text-navy-400">
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
