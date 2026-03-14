import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    role: "MERN Stack Developer",
    company: "JClick Solution, Nagercoil",
    period: "2025 — Present",
    description: "Gained practical experience in developing full-stack web applications using MongoDB, Express.js, React.js, and Node.js, focusing on responsive UI design, API development, and database management.",
  },
  {
    role: "React Developer",
    company: " AK Infopark, Nagercoil",
    period: "2024",
    description: "Learned React.js and frontend frameworks, strengthening skills in web development and UI design.",
  },
  {
    role: "Frontend Developer",
    company: "Rexcoders Academy, Nagercoil ",
    period: "2023",
    description: "Learned basic HTML, CSS & JS building a foundation in web development and page styling.",
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
