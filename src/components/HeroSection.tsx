import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

const HeroSection = () => (
  <section className="min-h-screen flex items-center justify-center relative">
    <div className="container text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-6"
      >
        Full Stack Developer
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6"
      >
        Mohamed <span className="text-primary">Shahid</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-muted-foreground font-body text-lg max-w-xl mx-auto mb-12"
      >
        Crafting elegant digital experiences with clean code and thoughtful design.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Download size={16} /> Download Resume
        </a>
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-primary hover:gap-3 transition-all"
        >
          Scroll down <ArrowDown size={16} />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
