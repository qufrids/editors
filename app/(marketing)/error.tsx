"use client";

import { AlertTriangle } from "lucide-react";

import { Button } from "@/components/shared/Button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function MarketingError({ error, reset }: ErrorPageProps) {
  return (
    <section className="flex min-h-[60vh] items-center bg-white py-20">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>

          <h1 className="mt-6 font-display text-3xl font-semibold text-ink">
            Something Went Wrong
          </h1>
          <p className="mt-3 text-base leading-7 text-ink-light">
            We encountered an unexpected error while loading this page. Please try again, or
            contact our team if the problem persists.
          </p>

          {error.digest && (
            <p className="mt-2 text-xs text-ink-faint">
              Error reference: {error.digest}
            </p>
          )}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={reset}
              className="inline-flex h-11 items-center justify-center rounded-md bg-gold px-6 text-sm font-semibold text-ink transition-colors hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
            >
              Try Again
            </button>
            <Button href="/" variant="outline" size="lg">
              Back to Home
            </Button>
          </div>

          <div className="mt-10 rounded-xl border border-ink/10 bg-cream p-5">
            <p className="text-sm text-ink-light">
              Need help?{" "}
              <a
                href="mailto:info@oxfordeditors.co.uk"
                className="font-medium text-gold hover:underline"
              >
                Email our support team
              </a>{" "}
              or reach us on{" "}
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || ""}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold hover:underline"
              >
                WhatsApp
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
