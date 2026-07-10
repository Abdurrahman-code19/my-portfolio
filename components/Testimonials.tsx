"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "He has a keen eye for detail and consistently delivers clean, well-structured code. A pleasure to work with.",
    name: "Amina Bello",
    role: "Project Lead, EchoTitbits",
  },
  {
    quote: "His frontend work is impressive. He takes the time to understand requirements and delivers beyond expectations.",
    name: "Kehinde Ogunleye",
    role: "Software Engineer",
  },
  {
    quote: "A dedicated developer who always puts the user experience first. His designs are both beautiful and functional.",
    name: "Fatima Usman",
    role: "UI/UX Designer",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (i: number) => {
    setDirection(i > current ? 1 : -1);
    setCurrent(i);
  };

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  };

  return (
    <section id="testimonials" className="section-padding bg-charcoal">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">What People Say</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto text-center relative">
          <div className="relative min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-full"
              >
                <Quote size={32} className="text-teal-bright/30 mx-auto mb-6" />
                <p className="text-lg text-soft/80 leading-relaxed mb-6 italic">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
                <p className="text-white font-semibold">{testimonials[current].name}</p>
                <p className="text-sm text-soft/40">{testimonials[current].role}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => goTo(current === 0 ? testimonials.length - 1 : current - 1)}
              className="p-2 rounded-lg glass text-soft/50 hover:text-teal-bright hover:bg-teal-dark/20 transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-teal-bright w-6" : "bg-soft/20 hover:bg-soft/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(current === testimonials.length - 1 ? 0 : current + 1)}
              className="p-2 rounded-lg glass text-soft/50 hover:text-teal-bright hover:bg-teal-dark/20 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
