import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    period: "2022 — Present",
    description: "Leading the frontend team in building scalable SaaS products. Improved page load times by 40% and implemented a design system used across 3 products.",
  },
  {
    role: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 — 2022",
    description: "Built and maintained the core platform serving 50K+ users. Architected the real-time notification system and payment integration.",
  },
  {
    role: "Junior Developer",
    company: "WebAgency Co.",
    period: "2018 — 2020",
    description: "Developed responsive websites and web applications for diverse clients. Collaborated with designers to deliver pixel-perfect interfaces.",
  },
];

const ExperienceSection = () => (
  <AnimatedSection id="experience" className="py-24">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
        Work <span className="text-primary">Experience</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-12" />
      <div className="space-y-0">
        {experiences.map((exp, i) => (
          <div key={i} className="relative pl-8 pb-12 last:pb-0 border-l border-border">
            <div className="absolute left-0 top-1 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
            <p className="text-xs text-primary font-body tracking-wider uppercase mb-1">{exp.period}</p>
            <h3 className="font-display text-xl font-semibold text-foreground">{exp.role}</h3>
            <p className="text-sm text-muted-foreground font-body mb-2">{exp.company}</p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ExperienceSection;
