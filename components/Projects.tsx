"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Agritech Smart Farming Dashboard",
    desc: "Real-time agricultural monitoring dashboard built during a team hackathon. Tracks crop health metrics and environmental data via API integrations.",
    tech: ["React", "Supabase", "Tailwind CSS", "REST API"],
    live: "#",
    code: "#",
  },
  {
    title: "EchoTitbits Content Platform",
    desc: "WordPress-powered content management system with custom theme development, social media automation, and engagement analytics.",
    tech: ["WordPress", "PHP", "JavaScript", "MySQL"],
    live: "#",
    code: "#",
  },
  {
    title: "Personal Portfolio Website",
    desc: "Premium single-page portfolio built with Next.js 14, featuring interactive canvas particles, deep navy theme, and smooth scroll animations.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    live: "#",
    code: "https://github.com/Abdurrahman-code19/my-portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-navy-primary relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects</h2>
          <p className="text-text-muted max-w-lg">
            Real-world interfaces I&apos;ve built — from hackathon prototypes to production platforms.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card flex flex-col !p-6 group"
            >
              <div className="w-10 h-10 rounded-[12px] bg-accent/15 flex items-center justify-center mb-4 text-accent group-hover:scale-110 transition-transform duration-[.35s]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
              <h3 className="text-text-primary font-semibold mb-2 text-lg">{p.title}</h3>
              <p className="text-sm text-text-body leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
              <div className="flex gap-3 pt-3 border-t border-accent-border">
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors duration-[.35s]"
                >
                  <ExternalLink size={12} /> Live
                </a>
                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-text-muted hover:text-accent transition-colors duration-[.35s]"
                >
                  <Github size={12} /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
