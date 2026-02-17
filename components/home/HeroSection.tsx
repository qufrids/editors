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
    <section className="relative overflow-hidden bg-navy-900">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.15),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz48L3N2Zz4=')] opacity-60" />

      <div className="container relative py-20 md:py-28 lg:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 text-sm font-medium text-primary-300">
              <Star className="h-4 w-4 fill-primary-400 text-primary-400" />
              Trusted by 2,000+ UK Students
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Partner in{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
              Academic Excellence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-300 md:text-xl"
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
            <Button href="/contact-us" variant="primary" size="lg" className="h-13 rounded-xl px-8 text-base shadow-lg shadow-primary-600/25">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/services" variant="ghost" size="lg" className="h-13 rounded-xl px-8 text-base text-white hover:bg-white/10">
              Browse Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4"
          >
            {highlights.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5 text-sm text-navy-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                  <Icon className="h-4 w-4 text-primary-400" />
                </div>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
    </section>
  );
}
