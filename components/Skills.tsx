"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git/GitHub", "Figma", "VS Code", "npm/yarn", "Vercel", "Netlify", "Chrome DevTools"],
  },
  {
    title: "Backend & Database",
    skills: ["Node.js", "Express", "REST APIs", "Supabase", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Other",
    skills: ["Python", "C++", "Linux", "WordPress", "SEO", "Responsive Design", "Performance"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-primary relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-text-muted max-w-lg">
            Technologies I work with daily and tools in my ecosystem.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card !p-6"
            >
              <p className="text-xs font-medium uppercase tracking-wider text-accent mb-4">
                {cat.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
