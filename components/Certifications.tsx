"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certs = [
  { name: "Responsive Web Design", provider: "freeCodeCamp", year: 2024, link: "#" },
  { name: "Software Development", provider: "PLP Academy", year: 2025, link: "#" },
  { name: "Arabic Language Proficiency", provider: "Certified", year: 2025, link: "#" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-navy-secondary">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card !p-6 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-[12px] bg-accent/15 text-accent">
                  <Award size={18} />
                </div>
                <span className="text-xs text-accent font-medium">{cert.provider}</span>
              </div>
              <h3 className="text-text-primary font-semibold mb-2">{cert.name}</h3>
              <p className="text-xs text-text-muted mb-4">{cert.year}</p>
              <a
                href={cert.link}
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-text-primary transition-colors duration-[.35s]"
              >
                <ExternalLink size={12} />
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
