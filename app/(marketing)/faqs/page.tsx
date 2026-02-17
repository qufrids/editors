import type { Metadata } from "next";

import { FaqAccordion } from "@/components/faqs/FaqAccordion";
import { Button } from "@/components/shared/Button";

export const metadata: Metadata = {
  title: "FAQs | Oxford Editors",
  description:
    "Find answers to frequently asked questions about Oxford Editors services, pricing, delivery, revisions, and more.",
  alternates: { canonical: "/faqs" },
};

const faqCategories = [
  {
    name: "Services",
    items: [
      {
        question: "What services does Oxford Editors provide?",
        answer:
          "We offer a comprehensive range of academic support services including essay writing, dissertation and thesis guidance, assignment help, coursework assistance, editing and proofreading, research proposals, methodology consultation, research title development, exam preparation, and technical project support across multiple disciplines.",
      },
      {
        question: "Which academic levels do you support?",
        answer:
          "We work with students across all levels of UK higher education, including foundation year, undergraduate, postgraduate (Master\u2019s), and doctoral programmes. Our team tailors every piece of work to match your academic level, module requirements, and marking criteria.",
      },
      {
        question: "What subjects do you cover?",
        answer:
          "Our team covers a wide range of disciplines including business, law, nursing and health sciences, psychology, philosophy, political science, marketing, human resource management, supply chain management, information technology, cyber security, electronics engineering, and machine learning. If your subject is not listed, please contact us and we will let you know if we can help.",
      },
      {
        question: "Is the work you provide original?",
        answer:
          "Yes. Every piece of work is written from scratch based on your specific brief, requirements, and academic level. We do not resell or recycle previous work. All submissions are checked for originality before delivery.",
      },
    ],
  },
  {
    name: "Pricing",
    items: [
      {
        question: "How is pricing determined?",
        answer:
          "Pricing depends on several factors including the type of service, academic level, word count, complexity, and deadline. We provide a clear quote before you commit so there are no surprises. Contact us with your requirements for an accurate estimate.",
      },
      {
        question: "Are there any hidden fees?",
        answer:
          "No. The price you are quoted is the price you pay. Revisions within the original brief are included free of charge. Additional charges only apply if the scope of work changes significantly after the order has been placed.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept major credit and debit cards as well as bank transfers. Payment details and instructions are provided at the time of order confirmation. For larger projects, we may offer staged payment arrangements \u2014 please contact us to discuss.",
      },
    ],
  },
  {
    name: "Delivery",
    items: [
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times depend on the type and complexity of the work. Standard essays typically take 3\u20137 working days, while dissertations and larger projects may require 2\u20134 weeks. We also offer expedited delivery for urgent requests. Your estimated delivery date is confirmed when you place your order.",
      },
      {
        question: "Can you handle urgent deadlines?",
        answer:
          "Yes. We understand that academic deadlines can be tight. We offer expedited turnaround for urgent orders, subject to availability and the scope of the project. Contact us as early as possible so we can confirm whether we can meet your timeline.",
      },
      {
        question: "How will I receive my completed work?",
        answer:
          "Completed work is delivered directly to your registered email address as a downloadable document (typically in Word or PDF format). You will receive a notification as soon as your order is ready for download.",
      },
      {
        question: "What happens if my order is delayed?",
        answer:
          "We make every effort to deliver on time. In the rare event of a delay, we will notify you in advance and work with you to find a solution. Delays caused by incomplete or late instructions from the client are excluded from our on-time guarantee.",
      },
    ],
  },
  {
    name: "Revisions",
    items: [
      {
        question: "Do you offer free revisions?",
        answer:
          "Yes. We offer free revisions within 14 days of delivery, provided the revision request falls within the scope of your original brief. This ensures the final output meets your expectations and matches the agreed requirements.",
      },
      {
        question: "What if I need changes beyond the original brief?",
        answer:
          "If your revision request involves a material change to the topic, structure, or requirements beyond the original brief, it may be treated as a new order. We will always discuss this with you and provide a quote before any additional work begins.",
      },
      {
        question: "Can I request a refund if I am not satisfied?",
        answer:
          "Refund requests are assessed on a case-by-case basis. You may be eligible for a full or partial refund if the delivered work is materially deficient or if we are unable to fulfil your order. Refunds are not available for completed work that meets the original brief or for change-of-mind requests. Please refer to our Terms and Conditions for full details.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Support
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-light">
            Find answers to common questions about our services, pricing, delivery, and revision
            policies. Can&apos;t find what you&apos;re looking for? Get in touch with our team.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <FaqAccordion categories={faqCategories} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream-200/50 py-14 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Still Have Questions?
            </h2>
            <p className="mt-3 text-base text-ink-light">
              Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button href="/contact-us" size="lg">
                Contact Us
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
