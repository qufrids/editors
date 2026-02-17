"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";

import { contactSchema, type ContactSchemaData } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const inputClasses =
  "h-11 w-full rounded-md border bg-white px-3 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-60";

const labelClasses = "mb-1.5 block text-sm font-medium text-navy-800";

const errorClasses = "mt-1 text-sm text-red-600";

export function ContactForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactSchemaData) => {
    setSubmitError(null);
    setSubmitSuccess(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const payload = (await response.json().catch(() => null)) as {
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(
          payload?.message || "Unable to send your message right now. Please try again.",
        );
      }

      setSubmitSuccess(
        payload?.message ||
          "Thank you for getting in touch. We'll respond within 24 hours.",
      );
      reset();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong. Please try again.";
      setSubmitError(message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Row 1: Name & Email */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClasses}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            placeholder="Your full name"
            autoComplete="name"
            disabled={isSubmitting}
            aria-invalid={errors.name ? "true" : "false"}
            className={cn(inputClasses, errors.name ? "border-red-400 focus:ring-red-400" : "border-navy-200")}
            {...register("name")}
          />
          {errors.name && <p className={errorClasses}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClasses}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            disabled={isSubmitting}
            aria-invalid={errors.email ? "true" : "false"}
            className={cn(inputClasses, errors.email ? "border-red-400 focus:ring-red-400" : "border-navy-200")}
            {...register("email")}
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      {/* Row 2: Phone & Subject */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="contact-phone"
            type="tel"
            placeholder="+44 7700 000000"
            autoComplete="tel"
            disabled={isSubmitting}
            aria-invalid={errors.phone ? "true" : "false"}
            className={cn(inputClasses, errors.phone ? "border-red-400 focus:ring-red-400" : "border-navy-200")}
            {...register("phone")}
          />
          {errors.phone && <p className={errorClasses}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="contact-subject" className={labelClasses}>
            Subject
          </label>
          <input
            id="contact-subject"
            type="text"
            placeholder="How can we help?"
            disabled={isSubmitting}
            aria-invalid={errors.subject ? "true" : "false"}
            className={cn(inputClasses, errors.subject ? "border-red-400 focus:ring-red-400" : "border-navy-200")}
            {...register("subject")}
          />
          {errors.subject && <p className={errorClasses}>{errors.subject.message}</p>}
        </div>
      </div>

      {/* Row 3: Message */}
      <div>
        <label htmlFor="contact-message" className={labelClasses}>
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Tell us about your academic needs..."
          disabled={isSubmitting}
          aria-invalid={errors.message ? "true" : "false"}
          className={cn(
            "w-full resize-y rounded-md border bg-white px-3 py-2.5 text-sm text-navy-900 placeholder:text-navy-400 focus:outline-none focus:ring-2 focus:ring-primary-500 disabled:cursor-not-allowed disabled:opacity-60",
            errors.message ? "border-red-400 focus:ring-red-400" : "border-navy-200",
          )}
          {...register("message")}
        />
        {errors.message && <p className={errorClasses}>{errors.message.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-primary-600 px-6 text-sm font-semibold text-white transition-colors hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {/* Feedback */}
      {submitSuccess && (
        <div className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          {submitSuccess}
        </div>
      )}

      {submitError && (
        <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {submitError}
        </div>
      )}
    </form>
  );
}
