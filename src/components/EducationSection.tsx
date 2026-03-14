import AnimatedSection from "./AnimatedSection";
import { GraduationCap } from "lucide-react";
// import { School } from "lucide-react";

const education = [
  {
    degree: "B.E, CSE",
    school: "Stella Mary's College of Engineering, Kanyakumari",
    period: "2022 — 2026",
    details: "Graduated with honors. Active member of the ACM student chapter and hackathon organizer.",
  },
  {
    degree: "Higher Secondary Education",
    school: "GHSS, Eathamozhi",
    period: "2021 — 2022",
    details: "Government Higher Secondary School, Eathamozhi Specialization: Computer Science | Scored 390 marks in Public Examination",
  },
  {
    degree: "Secondary School Leaving Certificate",
    school: "GHSS, Eathamozhi",
    period: "2019 - 2020",
    details: "Government Higher Secondary School, Eathamozhi Scored 340 marks in Public Examination.",
  },
];

const EducationSection = () => (
  <AnimatedSection id="education" className="py-24">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
        <span className="text-primary">Education</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-12" />
      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, i) => (
          <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-colors">
            <GraduationCap size={28} className="text-primary mb-4" />
            <p className="text-xs text-primary font-body tracking-wider uppercase mb-1">{edu.period}</p>
            <h3 className="font-display text-lg font-semibold text-foreground mb-1">{edu.degree}</h3>
            <p className="text-sm text-muted-foreground font-body mb-3">{edu.school}</p>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default EducationSection;
