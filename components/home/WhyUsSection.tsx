import { AlarmClock, Clock3, GraduationCap, Sparkles } from "lucide-react";

const points = [
  {
    title: "Expert Team of Scholars",
    description:
      "Our specialists bring deep subject knowledge and strong academic writing standards to support high-quality student outcomes.",
    icon: GraduationCap,
  },
  {
    title: "Personalized Academic Solutions",
    description:
      "Every project is tailored to your module brief, learning outcomes, and level of study for focused, relevant support.",
    icon: Sparkles,
  },
  {
    title: "Strict Commitment to Deadlines",
    description:
      "We use structured workflows and review checkpoints to keep delivery reliable, even for urgent and high-stakes submissions.",
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
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">What Sets Us Apart</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-navy-900 md:text-5xl">
              What Makes Oxford Editors the Best in Higher Education
            </h2>

            <div className="mt-8 space-y-5">
              {points.map(({ title, description, icon: Icon }) => (
                <article key={title} className="rounded-xl border border-navy-100 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900">{title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-navy-700">{description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-primary-100/50 p-8 shadow-sm">
            <div className="absolute right-8 top-8 h-16 w-16 rounded-full bg-primary-200/70" />
            <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-primary-100" />
            <div className="relative flex h-full min-h-[280px] items-center justify-center rounded-xl border border-dashed border-primary-200 bg-white/70 text-center">
              <p className="max-w-[280px] text-sm font-medium text-primary-700">
                Large visual placeholder for a future brand image, team photo, or higher-education illustration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}