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

  const linkClass = (href: string) =>
    `px-3 py-2 text-sm text-text-primary/70 hover:text-accent transition-colors duration-[.35s] rounded-lg hover:bg-accent/10`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto px-4 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-xl font-bold font-display text-text-primary tracking-tight"
        >
          AO<span className="text-accent">.</span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkClass(l.href)}>
              {l.label}
            </a>
          ))}
          <a href="/my-cv.pdf" download className="btn-primary !text-xs !px-4 !py-2 ml-3">
            Download CV
          </a>
        </div>

        <button
          className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
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
            <div
              className="absolute inset-0 bg-navy-primary/95 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-3/4 max-w-sm bg-navy-secondary p-6 border-l border-accent-border"
            >
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-text-primary hover:text-accent transition-colors"
                >
                  <X size={22} />
                </button>
              </div>
              <div className="flex flex-col gap-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="px-4 py-3 text-lg text-text-primary/80 hover:text-accent hover:bg-accent/10 rounded-xl transition-all"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/my-cv.pdf"
                  download
                  className="btn-primary justify-center mt-4"
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
