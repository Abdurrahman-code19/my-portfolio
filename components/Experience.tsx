"use client";

import { motion } from "framer-motion";

const jobs = [
  {
    role: "Content Manager & Social Media Handler",
    org: "EchoTitbits",
    period: "2024 – Present",
    desc: "Manage end-to-end content publishing, grew social engagement by 40% through data-driven strategies, and collaborated on brand-aligned marketing campaigns.",
    tags: ["Content Strategy", "Social Media", "Analytics"],
  },
  {
    role: "Frontend Developer (Freelance)",
    org: "Self-Employed",
    period: "2023 – Present",
    desc: "Built responsive web interfaces for clients using React, Tailwind CSS, and WordPress. Focused on pixel-perfect execution and cross-browser compatibility.",
    tags: ["React", "Tailwind CSS", "WordPress", "Responsive Design"],
  },
  {
    role: "Computer Science Student",
    org: "Miva Open University",
    period: "2026 – Present",
    desc: "Pursuing B.Sc. in Computer Science. Building foundational knowledge in algorithms, data structures, and software engineering principles.",
    tags: ["Algorithms", "Data Structures", "Python", "C++"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-navy-primary relative">
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Work Experience</h2>
        </motion.div>

        <div className="relative pl-8 md:pl-12 border-l border-accent/30 space-y-8 max-w-3xl mx-auto">
          {jobs.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative group"
            >
              <div className="absolute -left-[calc(2rem+6px)] md:-left-[calc(3rem+6px)] top-1 timeline-dot group-hover:scale-125" />
              <div className="card !p-6">
                <p className="text-xs text-accent font-mono mb-1">{job.period}</p>
                <h3 className="text-text-primary font-semibold text-lg">{job.role}</h3>
                <p className="text-sm text-text-muted mb-3">{job.org}</p>
                <p className="text-sm text-text-body leading-relaxed mb-3">{job.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
