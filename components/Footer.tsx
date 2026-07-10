import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const links = [
  { icon: Github, href: "https://github.com/Abdurrahman-code19", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/abdurrahman-oriolowo", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:abefeori@gmail.com", label: "Email" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-teal-bright/10 bg-[#1A202C]">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#hero" className="text-xl font-bold font-display text-white tracking-tight">
              AO<span className="text-teal-bright">.</span>
            </a>
            <p className="text-sm text-soft/40 mt-2 max-w-xs">
              Frontend Developer crafting polished, performant web interfaces.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-soft/40 mb-3">Quick Links</p>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-soft/50 hover:text-teal-bright transition-colors">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-soft/40 mb-3">Connect</p>
            <div className="flex gap-2">
              {links.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass glass-hover text-soft/50 hover:text-teal-bright transition-colors"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-teal-bright/10 text-center">
          <p className="text-xs text-soft/30 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Abdurrahman Oriolowo. Built with
            <Heart size={10} className="text-teal-bright" />
            using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
