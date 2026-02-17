import Link from "next/link";

const partnerPlaceholders = Array.from({ length: 9 }, (_, index) => `Partner ${index + 1}`);

export function PartnersSection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container text-center">
        <h2 className="font-display text-3xl font-semibold text-navy-900 md:text-4xl">
          Partnerships Driving Quality Academic Support
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-navy-700">
          We collaborate with trusted academic and professional networks to strengthen service quality, subject coverage,
          and student outcomes across higher education.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partnerPlaceholders.map((label) => (
            <div
              key={label}
              className="group flex h-28 items-center justify-center rounded-xl border border-navy-100 bg-navy-50/60 px-5 text-sm font-semibold text-navy-500 grayscale transition-all duration-300 hover:-translate-y-0.5 hover:text-navy-800 hover:grayscale-0 hover:shadow-md"
            >
              <span>{label} Logo</span>
            </div>
          ))}
        </div>

        <Link href="/partners" className="mt-8 inline-block text-sm font-semibold text-primary-700 hover:text-primary-800">
          Browse all partner
        </Link>
      </div>
    </section>
  );
}