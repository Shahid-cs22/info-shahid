import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cakekart",
    description: "Developed a responsive e-commerce cake ordering app using React and Redux with authentication, product listing, cart, and order features. Integrated APIs using Axios, implemented YUP validation, and used JSON Server as the backend.",
    tech: ["React", "JSON Server", "MUI", "Api's", "Axios"],
  },
  {
    title: "Elite Car Shop",
    description: "Developed a responsive static website for a real client using React, leveraging reusable components to deliver a clean, modern UI and an optimized user experience across devices.",
    tech: ["React", "JSON Server", "MUI", "Api's"],
  },
  {
    title: "FoodHub",
    description: "Developed a food ordering web application that allows users to browse menus, add items to cart, and place orders. Implemented React Hooks for state management and React Router DOM for navigation across multiple views.",
    tech: ["React", "Hooks", "DOM ", "Tailwind"],
  },
];

const ProjectsSection = () => (
  <AnimatedSection id="projects" className="py-24">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
        <span className="text-primary">Projects</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-12" />
      <div className="grid gap-6">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group p-6 rounded-lg bg-card border border-border hover:border-primary/40 transition-all"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-muted-foreground">
                <a href="https://github.com/Shahid-cs22" className="hover:text-primary transition-colors"><Github size={18} /></a>
                <a href="#" className="hover:text-primary transition-colors"><ExternalLink size={18} /></a>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="px-2.5 py-1 text-xs font-body rounded bg-secondary text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </AnimatedSection>
);

export default ProjectsSection;
