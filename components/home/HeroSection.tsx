"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Shield, Star } from "lucide-react";

import { Button } from "@/components/shared/Button";

const highlights = [
  { icon: GraduationCap, text: "Expert UK Academics" },
  { icon: Shield, text: "100% Plagiarism Free" },
  { icon: BookOpen, text: "All Subjects Covered" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,76,0.08),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(201,168,76,0.05),transparent_50%)]" />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold-300">
              <Star className="h-4 w-4 fill-gold text-gold" />
              Trusted by 2,000+ UK Students
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl leading-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Your Partner in{" "}
            <span className="text-gold">Academic Excellence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted md:text-xl"
          >
            Expert academic support for UK university students. From essays and dissertations
            to technical projects — we help you achieve the grades you deserve.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button href="/contact-us" variant="primary" size="lg" className="rounded-xl px-8 text-base">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="rounded-xl px-8 text-base text-cream/80 hover:bg-white/5 hover:text-cream">
              Browse Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-sm text-ink-muted">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
                  <Icon className="h-4 w-4 text-gold" />
                </div>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
}
