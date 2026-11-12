"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

export default function Testimonials() {
  const { t } = usePrefs();
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % t.testimonials.items.length);
  }, [t.testimonials.items.length]);

  const prev = () => setIndex((i) => (i - 1 + t.testimonials.items.length) % t.testimonials.items.length);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="section-padding bg-white dark:bg-zala-blue-light/10 border-y border-zala-blue/5 dark:border-white/5 transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.testimonials.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.testimonials.title}
          </h2>
        </div>

        <div className="relative mx-auto mt-8 max-w-3xl">
          <div className="overflow-hidden rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/[0.02] p-10 shadow-sm dark:shadow-glass sm:p-14">
            <Quote className="mx-auto text-zala-orange" size={32} />
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.45 }}
                className="mt-6 text-center"
              >
                <p className="font-heading text-xl font-medium leading-relaxed text-zala-blue dark:text-white sm:text-2xl">
                  {/* CORRECTION ICI : Utilisation de &quot; pour les guillemets */}
                  &quot;{t.testimonials.items[index].quote}&quot;
                </p>
                <p className="mt-6 font-mono text-sm font-semibold text-zala-orange">
                  {t.testimonials.items[index].author}
                </p>
                <p className="font-body text-xs text-zala-blue/50 dark:text-white/50">
                  {t.testimonials.items[index].business}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={prev}
            aria-label="Témoignage précédent"
            className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-zala-blue-light p-3 text-zala-blue dark:text-white shadow-sm dark:shadow-glass transition-transform hover:scale-110 sm:flex"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Témoignage suivant"
            className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-zala-blue-light p-3 text-zala-blue dark:text-white shadow-sm dark:shadow-glass transition-transform hover:scale-110 sm:flex"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {t.testimonials.items.map((item, i) => (
              <button
                key={item.author}
                type="button"
                aria-label={`Aller au témoignage ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index ? "w-7 bg-zala-orange" : "w-2 bg-zala-blue/20 dark:bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}