import { Award, BookOpen, GraduationCap, Shield, Users } from "lucide-react";

const trustSignals = [
  { icon: Users, label: "2,000+ Students Helped" },
  { icon: GraduationCap, label: "50+ Subject Areas" },
  { icon: Award, label: "98% Satisfaction Rate" },
  { icon: Shield, label: "Confidential & Secure" },
  { icon: BookOpen, label: "All UK Universities" },
];

export function PartnersSection() {
  return (
    <section className="border-y border-ink/10 bg-white py-14">
      <div className="container">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-ink-muted">
          Trusted Across UK Higher Education
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {trustSignals.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 text-ink-light">
              <Icon className="h-5 w-5 text-gold" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
