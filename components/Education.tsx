"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, School } from "lucide-react";

const education = [
  {
    degree: "B.Sc. Computer Science",
    school: "Miva Open University",
    year: "2026 – Present",
    desc: "Building foundational knowledge in algorithms, data structures, and software engineering principles.",
    icon: GraduationCap,
  },
  {
    degree: "Secondary School Education",
    school: "Oke-Ira Grammer School",
    year: "2024",
    desc: "Completed secondary education with a strong focus on sciences and mathematics.",
    icon: School,
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding bg-charcoal">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Academic</span>
          <h2 className="section-title">Education</h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {education.map((edu, i) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-teal-dark/30 text-teal-bright shrink-0">
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{edu.degree}</h3>
                    <span className="text-xs text-soft/40 font-mono">{edu.year}</span>
                  </div>
                  <p className="text-sm text-teal-bright mb-2">{edu.school}</p>
                  <p className="text-sm text-soft/60 leading-relaxed">{edu.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
