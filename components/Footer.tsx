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
    <footer className="border-t border-accent-border bg-navy-primary">
      <div className="max-w-[1280px] mx-auto px-4 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <a
              href="#hero"
              className="text-xl font-bold font-display text-text-primary tracking-tight"
            >
              AO<span className="text-accent">.</span>
            </a>
            <p className="text-sm text-text-muted mt-2 max-w-xs">
              Frontend Developer crafting polished, performant web interfaces.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
              Quick Links
            </p>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-sm text-text-muted hover:text-accent transition-colors duration-[.35s]"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-3">
              Connect
            </p>
            <div className="flex gap-2">
              {links.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-[12px] bg-navy-secondary border border-accent-border text-text-muted hover:text-accent hover:border-accent transition-all duration-[.35s]"
                  aria-label={s.label}
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-accent-border text-center">
          <p className="text-xs text-text-muted/50 flex items-center justify-center gap-1">
            &copy; {new Date().getFullYear()} Abdurrahman Oriolowo. Built with{" "}
            <Heart size={10} className="text-accent" /> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
