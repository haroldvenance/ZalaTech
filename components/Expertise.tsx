"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Network, Database, CheckCircle2, ChevronDown } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [Code2, BrainCircuit, ShieldCheck, Network, Database];

export default function Expertise() {
  const { t } = usePrefs();
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="expertise" className="section-padding bg-white dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.expertise.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.expertise.title}
          </h2>
          <p className="mt-4 font-body text-zala-blue/70 dark:text-white/60">
            {t.expertise.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl divide-y divide-zala-blue/10 dark:divide-white/10 overflow-hidden rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/[0.02]">
          {t.expertise.items.map((domain, index) => {
            const isOpen = openIndex === index;
            const Icon = icons[index];
            return (
              <div key={domain.title} className="transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-5 px-6 py-6 text-left transition-colors hover:bg-white dark:hover:bg-white/[0.05] sm:px-8"
                >
                  <span className="hidden font-heading text-2xl font-bold text-zala-blue/15 dark:text-white/15 sm:block">
                    {domain.number}
                  </span>
                  <span className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full transition-colors ${isOpen ? "bg-zala-orange text-white" : "bg-zala-blue/5 dark:bg-white/5 text-zala-blue dark:text-white"}`}>
                    <Icon size={22} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-heading text-base font-semibold text-zala-blue dark:text-white sm:text-lg">
                      {domain.title}
                    </span>
                    <span className="mt-0.5 block font-body text-xs font-medium uppercase tracking-wide text-zala-orange">
                      {domain.subtitle}
                    </span>
                  </span>
                  <ChevronDown size={20} className={`flex-shrink-0 text-zala-blue/50 dark:text-white/50 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="px-6 pb-8 sm:px-8 sm:pl-[5.5rem]">
                        <p className="font-body text-sm font-medium italic text-zala-blue/70 dark:text-white/60">
                          {domain.tagline}
                        </p>
                        <ul className="mt-4 space-y-3">
                          {domain.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5">
                              <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-zala-orange" />
                              <span className="font-body text-sm text-zala-blue/80 dark:text-white/70">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="mt-5 rounded-lg bg-white dark:bg-white/[0.05] px-4 py-3 font-body text-sm text-zala-blue/80 dark:text-white/70">
                          <span className="font-semibold text-zala-blue dark:text-white">Impact : </span>
                          {domain.impact}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}