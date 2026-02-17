import { AlarmClock, Clock3, GraduationCap, Sparkles } from "lucide-react";

const points = [
  {
    title: "Expert Team of Scholars",
    description:
      "Our specialists bring deep subject knowledge and strong academic writing standards to support high-quality student outcomes.",
    icon: GraduationCap,
    color: "text-primary-600 bg-primary-50",
  },
  {
    title: "Personalized Solutions",
    description:
      "Every project is tailored to your module brief, learning outcomes, and level of study for focused, relevant support.",
    icon: Sparkles,
    color: "text-violet-600 bg-violet-50",
  },
  {
    title: "Strict Deadline Commitment",
    description:
      "Structured workflows and review checkpoints keep delivery reliable, even for urgent and high-stakes submissions.",
    icon: AlarmClock,
    color: "text-rose-600 bg-rose-50",
  },
  {
    title: "24/7 Support",
    description:
      "Our support channels remain available throughout your academic process, ensuring fast responses whenever you need guidance.",
    icon: Clock3,
    color: "text-emerald-600 bg-emerald-50",
  },
];

export function WhyUsSection() {
  return (
    <section className="bg-navy-50/50 py-20 md:py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">Why Choose Us</p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-900 sm:text-4xl md:text-5xl">
            What Makes Oxford Editors Different
          </h2>
          <p className="mt-4 text-lg text-navy-600">
            We go beyond generic support — every service is built around UK academic standards and your specific needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {points.map(({ title, description, icon: Icon, color }, index) => (
            <article
              key={title}
              className="group relative rounded-2xl border border-navy-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-primary-200 hover:shadow-md"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-display text-4xl font-bold text-navy-100 transition-colors group-hover:text-primary-100">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-bold text-navy-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
