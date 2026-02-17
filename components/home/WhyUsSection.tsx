import { AlarmClock, Clock3, GraduationCap, Sparkles } from "lucide-react";

const points = [
  {
    title: "Expert Team of Scholars",
    description:
      "Our specialists bring deep subject knowledge and strong academic writing standards to support high-quality student outcomes.",
    icon: GraduationCap,
  },
  {
    title: "Personalized Solutions",
    description:
      "Every project is tailored to your module brief, learning outcomes, and level of study for focused, relevant support.",
    icon: Sparkles,
  },
  {
    title: "Strict Deadline Commitment",
    description:
      "Structured workflows and review checkpoints keep delivery reliable, even for urgent and high-stakes submissions.",
    icon: AlarmClock,
  },
  {
    title: "24/7 Support",
    description:
      "Our support channels remain available throughout your academic process, ensuring fast responses whenever you need guidance.",
    icon: Clock3,
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-cream-200/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gold">Why Choose Us</p>
          <h2 className="mt-4 font-display text-3xl text-ink sm:text-4xl md:text-5xl">
            What Makes Oxford Editors Different
          </h2>
          <p className="mt-4 text-lg text-ink-light">
            We go beyond generic support — every service is built around UK academic standards and your specific needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-ink/10 bg-white p-7 shadow-sm transition-all duration-300 hover:border-gold/30 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-display text-4xl text-ink/10 transition-colors group-hover:text-gold/20">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-light">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
