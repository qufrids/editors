import { Button } from "@/components/shared/Button";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-primary-50 via-white to-primary-50">
      <div className="container py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-700">Welcome to Oxford Editors</p>
            <h1 className="mt-4 font-display text-5xl font-semibold leading-tight text-navy-900 lg:text-6xl">
              Partnering with You for Academic Brilliance
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-navy-700 md:text-lg">
              We provide focused academic support for students across the UK, from coursework and dissertation guidance to
              technical project assistance. Our approach combines subject-aware expertise, clear communication, and
              quality-first delivery to help you progress with confidence.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/contact-us" variant="primary" size="lg">
                Get Started
              </Button>
              <Button href="/contact-us" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="relative min-h-[280px] rounded-2xl border border-primary-100 bg-white/70 p-8 shadow-sm">
            <div className="absolute -left-5 -top-5 h-20 w-20 rounded-full bg-primary-100" />
            <div className="absolute -bottom-6 right-8 h-24 w-24 rounded-full bg-primary-200/70" />
            <div className="relative flex h-full min-h-[220px] items-center justify-center rounded-xl border border-dashed border-primary-200 bg-primary-50/50 text-center">
              <p className="max-w-[260px] text-sm font-medium text-primary-700">
                Decorative space reserved for a future hero image or illustration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}