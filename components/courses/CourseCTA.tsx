import { Award, Clock, Mail, MessageCircle, ShieldCheck, Users } from "lucide-react";

import { Button } from "@/components/shared/Button";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappMessage =
  "Hello Oxford Editors, I would like to learn more about your course offerings.";

const trustReasons = [
  "Expert academic support tailored to your subject area",
  "Rigorous quality checks and plagiarism-free assurance",
  "Responsive communication with deadline-focused delivery",
  "UK university standards for formatting and referencing",
];

const trustIndicators = [
  { icon: Users, label: "5,000+", description: "Students Supported" },
  { icon: Award, label: "4.8/5", description: "Average Rating" },
  { icon: Clock, label: "24h", description: "Response Time" },
];

export function CourseCTA() {
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined;

  return (
    <section className="bg-ink py-14 text-cream md:py-20">
      <div className="container">
        <div className="grid gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-200">
              Ready to Get Started?
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Submit with Confidence
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-faint">
              Get the academic support you need to produce high-quality, assessment-ready
              coursework. Our experts are here to help you achieve the grades you deserve.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-md bg-[#25D366] px-4 text-sm font-semibold text-white transition-transform duration-200 hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp Us
                </a>
              ) : null}
              <a
                href="mailto:info@oxfordeditors.co.uk"
                className="inline-flex h-11 items-center gap-2 rounded-md border border-white/30 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {trustIndicators.map((item) => (
                <div key={item.description} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                    <item.icon className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-lg font-bold">{item.label}</p>
                    <p className="text-xs text-ink-faint">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              Why Students Trust Oxford Editors
            </h3>
            <ul className="mt-4 space-y-3">
              {trustReasons.map((reason) => (
                <li
                  key={reason}
                  className="flex items-start gap-2 text-sm text-ink-faint"
                >
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact-us" className="mt-6" size="lg">
              Get Expert Support Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
