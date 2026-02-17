"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { newsletterSchema, type NewsletterSchemaData } from "@/lib/validations/newsletter";
import { cn } from "@/lib/utils";

export function NewsletterForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterSchemaData>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: NewsletterSchemaData) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to subscribe right now. Please try again.");
      }

      setSubmitSuccess(payload?.message || "Thanks for subscribing. We'll keep you updated.");
      reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-2" noValidate>
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            placeholder="Enter your email"
            autoComplete="email"
            disabled={isSubmitting}
            aria-invalid={errors.email ? "true" : "false"}
            className={cn(
              "h-11 w-full rounded-md border bg-white px-3 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-gold disabled:cursor-not-allowed disabled:opacity-70",
              errors.email ? "border-red-400 focus:ring-red-400" : "border-white/70",
            )}
            {...register("email")}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="h-11 shrink-0 rounded-md bg-gold px-4 text-sm font-medium text-ink transition-colors hover:bg-gold-500 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-ink disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Submitting..." : "Subscribe"}
        </button>
      </div>

      {errors.email ? <p className="text-sm text-red-300">{errors.email.message}</p> : null}

      {submitError ? <p className="text-sm text-red-300">{submitError}</p> : null}

      {submitSuccess ? <p className="text-sm text-emerald-300">{submitSuccess}</p> : null}
    </form>
  );
}
