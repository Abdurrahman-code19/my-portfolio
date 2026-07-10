"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download, Eye } from "lucide-react";
import Image from "next/image";

const roles = [
  "Frontend Developer",
  "UI Enthusiast",
  "React Specialist",
  "Creative Coder",
];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; s: number; a: number }[] = [];
    const count = 60;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        s: Math.random() * 3 + 1,
        a: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(35, 150, 175, ${p.a})`;
        ctx.fill();

        // draw connections
        particles.forEach((p2) => {
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(35, 150, 175, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-charcoal/50 to-charcoal pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.p
            className="section-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-4 font-display">
            I&apos;m{" "}
            <span className="gradient-text">Abdurrahman</span>
          </h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {roles.map((role, i) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="tag"
              >
                {role}
              </motion.span>
            ))}
          </div>

          <p className="text-base sm:text-lg text-soft/60 max-w-xl mb-8 leading-relaxed">
            I craft polished, performant web interfaces with modern frontend technologies.
            Pixel-perfect. Responsive. Human-centered.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              <Eye size={16} />
              View Projects
            </a>
            <a href="/my-cv.pdf" download className="btn-outline">
              <Download size={16} />
              Download CV
            </a>
          </div>

          <motion.div
            className="hidden lg:flex items-center gap-8 mt-12 pt-8 border-t border-teal-bright/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {[
              { label: "Experience", value: "2+" },
              { label: "Projects", value: "10+" },
              { label: "Certifications", value: "3+" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-white font-display">{s.value}</p>
                <p className="text-xs text-soft/40">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="hidden lg:flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative">
            <div className="w-72 h-72 rounded-full overflow-hidden border-2 border-teal-bright/20 shadow-2xl shadow-teal-dark/30 animate-glow">
              <Image
                src="/profile.jpg"
                alt="Abdurrahman Oriolowo"
                width={288}
                height={288}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -inset-4 rounded-full border border-teal-bright/10 animate-float pointer-events-none" />
            <div className="absolute -inset-8 rounded-full border border-teal-bright/5 animate-float pointer-events-none" style={{ animationDelay: "1s" }} />
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: [0.16, 1, 0.3, 1] }}
      >
        <a href="#about" className="block text-soft/40 hover:text-teal-bright transition-colors">
          <ArrowDown size={20} />
        </a>
      </motion.div>
    </section>
  );
}
