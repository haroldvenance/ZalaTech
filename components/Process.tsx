"use client";

import { motion } from "framer-motion";
import { Search, FileCode2, Cpu, ShieldCheck, Send, LineChart } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [Search, FileCode2, Cpu, ShieldCheck, Send, LineChart];

export default function Process() {
  const { t } = usePrefs();

  return (
    <section className="section-padding bg-white dark:bg-zala-blue-light/10 border-y border-zala-blue/5 dark:border-white/5 transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.process.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.process.title}
          </h2>
        </div>

        <div className="relative">
          {/* Ligne horizontale lumineuse (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-zala-orange/30 to-transparent dark:via-zala-orange/50 lg:block" />

          <div className="grid gap-10 lg:grid-cols-6 lg:gap-4">
            {t.process.items.map((step, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-zala-cream dark:bg-zala-blue border border-zala-blue/10 dark:border-white/10 text-white shadow-sm dark:shadow-glass transition-all group-hover:border-zala-orange group-hover:shadow-glow">
                    <Icon size={24} className="text-zala-orange" />
                  </div>
                  <span className="mt-4 font-mono text-xs text-zala-orange">
                    0{index + 1}
                  </span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-zala-blue dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 font-body text-xs text-zala-blue/60 dark:text-white/50">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}