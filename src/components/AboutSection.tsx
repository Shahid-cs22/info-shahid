import AnimatedSection from "./AnimatedSection";

const AboutSection = () => (
  <AnimatedSection id="about" className="py-24">
    <div className="container max-w-4xl">
      <h2 className="font-display text-3xl sm:text-4xl font-bold mb-2">
        About <span className="text-primary">Me</span>
      </h2>
      <div className="w-16 h-1 bg-primary rounded mb-8" />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate full-stack developer with 5+ years of experience building
            modern web applications. I love turning complex problems into simple,
            beautiful, and intuitive solutions.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-display text-lg font-semibold text-foreground">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {["JavaScript","React", "TypeScript", "Node.js", "MongoDB", "Express.js", "Python", "Tailwind CSS", "Next.js", "PHP"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs font-body rounded-full bg-secondary text-secondary-foreground border border-border"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default AboutSection;
