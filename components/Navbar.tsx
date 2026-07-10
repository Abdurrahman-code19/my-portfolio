"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-strong shadow-lg shadow-teal-dark/10"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold font-display text-white tracking-tight">
          AO<span className="text-teal-bright">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-soft/70 hover:text-teal-bright transition-colors rounded-lg hover:bg-teal-dark/20"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/my-cv.pdf"
            download
            className="ml-3 btn-primary text-xs !px-4 !py-2"
          >
            Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2 text-soft hover:text-teal-bright transition-colors"
          onClick={() => setOpen(true)}
          aria-label="Menu"
        >
          <Menu size={22} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div className="absolute inset-0 bg-charcoal/95 backdrop-blur-xl" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm glass-strong p-6"
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setOpen(false)} className="p-2 text-soft hover:text-teal-bright">
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-lg text-soft/80 hover:text-teal-bright hover:bg-teal-dark/20 rounded-xl transition-all"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/my-cv.pdf"
                  download
                  className="mt-4 btn-primary justify-center"
                  onClick={() => setOpen(false)}
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
