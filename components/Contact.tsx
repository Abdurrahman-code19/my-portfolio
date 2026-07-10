"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim() || form.message.trim().length < 10) e.message = "At least 10 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  };

  return (
    <section id="contact" className="section-padding bg-charcoal relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-dark/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-tight relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">Contact</h2>
          <p className="text-soft/50 max-w-md">
            Have a project, opportunity, or just want to say hello? Reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <div className="card !p-6 md:!p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={44} className="text-teal-bright mb-4" />
                  <p className="text-white font-semibold text-lg">Message sent!</p>
                  <p className="text-sm text-soft/50 mt-1">I&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {(["name", "email"] as const).map((field) => (
                      <div key={field}>
                        <label htmlFor={field} className="block text-xs font-medium text-soft/50 mb-1.5 uppercase tracking-wide">
                          {field}
                        </label>
                        <input
                          id={field}
                          name={field}
                          type={field === "email" ? "email" : "text"}
                          value={form[field]}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-soft placeholder:text-soft/30 text-sm focus:outline-none focus:ring-2 focus:ring-teal-bright/40 transition-all ${
                            errors[field] ? "border-red-400/50" : "border-teal-bright/10"
                          }`}
                          placeholder={field === "name" ? "Your name" : "your@email.com"}
                        />
                        {errors[field] && <p className="text-[11px] text-red-400 mt-1">{errors[field]}</p>}
                      </div>
                    ))}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-soft/50 mb-1.5 uppercase tracking-wide">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-charcoal border text-soft placeholder:text-soft/30 text-sm focus:outline-none focus:ring-2 focus:ring-teal-bright/40 transition-all resize-none ${
                        errors.message ? "border-red-400/50" : "border-teal-bright/10"
                      }`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center"
                  >
                    <Send size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              { icon: Mail, label: "Email", value: "abefeori@gmail.com", href: "mailto:abefeori@gmail.com" },
              { icon: Phone, label: "Phone", value: "+234 916 173 4798", href: "tel:+2349161734798" },
              { icon: MapPin, label: "Location", value: "Lagos, Nigeria", href: null },
            ].map((info) => (
              <div key={info.label} className="card !p-5">
                <p className="text-xs text-soft/40 uppercase tracking-wide mb-1">{info.label}</p>
                {info.href ? (
                  <a href={info.href} className="text-soft hover:text-teal-bright text-sm transition-colors">{info.value}</a>
                ) : (
                  <p className="text-soft text-sm">{info.value}</p>
                )}
              </div>
            ))}
            <div className="card !p-5">
              <p className="text-xs text-soft/40 uppercase tracking-wide mb-3">Social</p>
              <div className="flex gap-2">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com/Abdurrahman-code19" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/abdurrahman-oriolowo" },
                  { icon: Twitter, label: "Twitter", href: "#" },
                  { icon: Mail, label: "Email", href: "mailto:abefeori@gmail.com" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="p-2.5 rounded-lg glass glass-hover text-soft/50 hover:text-teal-bright transition-colors"
                    aria-label={s.label}
                  >
                    <s.icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
