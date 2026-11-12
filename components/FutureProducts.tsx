"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Cloud, Shield, Cpu, Database, Code2 } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [BrainCircuit, Cloud, Shield, Cpu, Database, Code2];

export default function FutureProducts() {
  const { t } = usePrefs();

  return (
    <section id="projection" className="section-padding bg-white dark:bg-zala-blue-light/10 border-y border-zala-blue/5 dark:border-white/5 transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.futureProducts.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.futureProducts.title}
          </h2>
          <p className="mt-4 font-body text-zala-blue/70 dark:text-white/60">
            {t.futureProducts.subtitle}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.futureProducts.items.map((product, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="relative overflow-hidden rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/[0.02] p-7 group transition-colors hover:border-zala-orange/30"
              >
                <span className="absolute right-5 top-5 rounded-full border border-zala-orange/20 bg-zala-orange/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-zala-orange">
                  {t.futureProducts.badge}
                </span>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white dark:bg-white/5 text-zala-blue dark:text-white group-hover:text-zala-orange transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-zala-blue dark:text-white">
                  {product.name}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-zala-blue/70 dark:text-white/60">
                  {product.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}