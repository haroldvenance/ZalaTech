"use client";

import { motion } from "framer-motion";
import { Rocket, Building2, ShieldAlert, Landmark, GraduationCap } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [Rocket, Building2, ShieldAlert, Landmark, GraduationCap];

export default function IdealClients() {
  const { t } = usePrefs();

  return (
    <section className="section-padding bg-zala-cream dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.idealClients.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.idealClients.title}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.idealClients.items.map((text, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center rounded-2xl border border-zala-blue/5 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 text-center transition-all hover:border-zala-orange/30 hover:bg-white dark:hover:bg-white/[0.05] shadow-sm dark:shadow-glass"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-zala-orange/10 text-zala-orange">
                  <Icon size={24} />
                </span>
                <p className="mt-4 font-body text-sm leading-relaxed text-zala-blue/70 dark:text-white/60">
                  {text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}