"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Focus, Shield, Zap } from "lucide-react";

const highlights = [
  { icon: Target, label: "My Mission", text: "To build performant, accessible web interfaces that deliver delightful user experiences." },
  { icon: Focus, label: "Professional Focus", text: "Frontend Development, UI Engineering, Interactive Web Experiences" },
  { icon: Shield, label: "Core Strengths", text: "Problem Solving, Clean Code, Responsive Design, Performance Optimization" },
  { icon: Zap, label: "Current Focus", text: "React, TypeScript, Next.js, Three.js, and Motion Design" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-charcoal relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-teal-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">About Me</span>
          <h2 className="section-title">Frontend Developer & Creative Coder</h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card !p-8">
              <div className="flex flex-col sm:flex-row gap-6 mb-6">
                <div className="sm:hidden w-24 h-24 rounded-full overflow-hidden border-2 border-teal-bright/20 shrink-0 mx-auto">
                  <Image
                    src="/profile.jpg"
                    alt="Abdurrahman Oriolowo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <p className="text-soft/70 leading-relaxed mb-4">
                I am a dedicated Frontend Developer with a strong foundation in modern web technologies.
                My journey in tech started with curiosity about how websites work and has evolved into
                a passion for crafting beautiful, performant interfaces.
              </p>
              <p className="text-soft/70 leading-relaxed mb-6">
                As a Computer Science student at Miva Open University, I combine academic knowledge
                with hands-on experience building real-world applications. I specialize in React,
                TypeScript, and Tailwind CSS, and I&apos;m always exploring new tools to elevate my craft.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Three.js"].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.label}
                  className="card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-teal-dark/30 text-teal-bright shrink-0">
                      <h.icon size={16} />
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-teal-bright mb-1">{h.label}</p>
                      <p className="text-sm text-soft/60 leading-relaxed">{h.text}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
