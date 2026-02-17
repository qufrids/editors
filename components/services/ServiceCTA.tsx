import { Mail, MessageCircle, ShieldCheck } from "lucide-react";

import { Button } from "@/components/shared/Button";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappMessage = "Hello Oxford Editors, I would like support with academic essay services.";

const benefits = [
  "Subject-aware academic experts across multiple disciplines",
  "Structured, plagiarism-free writing with rigorous quality checks",
  "Deadline-focused delivery with responsive communication",
  "UK-focused academic formatting and referencing standards",
];

export function ServiceCTA() {
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined;

  return (
    <section className="bg-ink py-14 text-cream md:py-20">
      <div className="container">
        <div className="grid gap-8 rounded-2xl border border-white/15 bg-white/5 p-8 md:p-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold-200">Need Reliable Support?</p>
            <h2 className="mt-3 font-display text-3xl leading-tight md:text-4xl">
              Get Academic Essays that Impress Every Time
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-faint">
              Let our specialists help you produce high-quality, assessment-ready work with clear structure, critical
              depth, and polished academic presentation.
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
          </div>

          <div>
            <h3 className="text-xl font-semibold">Why Choose Oxford Editors</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-ink-faint">
                  <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button href="/contact-us" className="mt-6" size="lg">
              Let Our Experts Craft Your Essay
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
