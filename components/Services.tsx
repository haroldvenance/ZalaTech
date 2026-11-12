"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, ShieldCheck, Network, Database, Terminal } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [Code2, BrainCircuit, ShieldCheck, Network, Database, Terminal];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

export default function Services() {
  const { t } = usePrefs();

  return (
    <section id="services" className="section-padding bg-zala-cream dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.services.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 font-body text-zala-blue/70 dark:text-white/60">
            {t.services.subtitle}
          </p>
        </div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={service.title}
                variants={item}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-zala-blue/5 dark:border-white/10 bg-white dark:bg-white/[0.02] p-7 shadow-sm dark:shadow-glass transition-shadow hover:shadow-xl dark:hover:bg-white/[0.05]"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-zala-orange/10 text-zala-orange transition-colors group-hover:bg-zala-orange group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-semibold text-zala-blue dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-zala-blue/70 dark:text-white/60">
                  {service.description}
                </p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-zala-orange uppercase tracking-wide">
                  {service.tag}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}