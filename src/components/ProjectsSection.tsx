import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Cakekart",
    description:
      "Developed a responsive e-commerce cake ordering app using React and Redux with authentication, product listing, cart, and order features. Integrated APIs using Axios, implemented YUP validation, and used JSON Server as the backend.",
    tech: ["React", "JSON Server", "MUI", "API's", "Axios"],
    github: "https://github.com/Shahid-cs22/CakeKart", // Replace with your repo
    live: "https://cakekart.netlify.app/", // Replace with your live URL
  },
  {
    title: "Elite Car Shop",
    description:
      "Developed a responsive static website for a real client using React, leveraging reusable components to deliver a clean, modern UI and an optimized user experience across devices.",
    tech: ["React", "MUI", "API's"],
    github: "https://github.com/Shahid-cs22/Elite-Shine", // Replace with your repo
    live: "https://elite-shine-carwash.vercel.app/", // Replace with your live URL
  },
  {
    title: "FoodHub",
    description:
      "Developed a food ordering web application that allows users to browse menus, add items to cart, and place orders. Implemented React Hooks for state management and React Router DOM for navigation across multiple views.",
    tech: ["React", "Hooks", "React Router DOM", "Tailwind"],
    github: "https://github.com/Shahid-cs22/FoodHUB_React", // Replace with your repo
    live: "https://food-hub-react-ten.vercel.app", // Replace with your live URL
  },
  {
    title: "Eathamozhi Masjid Website",
    description:
      "Built a modern and responsive mosque website using HTML, CSS, JavaScript, and Bootstrap to serve the Eathamozhi Muslim community. Features include prayer schedules, Islamic program announcements, event updates, image galleries, contact information, and community resources. Optimized for performance, accessibility, and seamless viewing across desktop and mobile devices.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],

    github: "https://github.com/Shahid-cs22/",
    live: "https://eathamozhi-masjid.netlify.app/",
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
                {/* GitHub Repository Link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`${project.title} GitHub Repository`}
                >
                  <Github size={18} />
                </a>

                {/* Live Project Link */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                  aria-label={`${project.title} Live Demo`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>

            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs font-body rounded bg-secondary text-muted-foreground"
                >
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