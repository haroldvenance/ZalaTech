"use client";

import { motion } from "framer-motion";
import { Code2, Shield, Cpu, Zap, Users } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [Code2, Shield, Cpu, Zap, Users];

export default function WhyUs() {
  const { t } = usePrefs();

  return (
    <section id="a-propos" className="section-padding bg-zala-cream dark:bg-zala-blue relative overflow-hidden transition-colors duration-300">
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.whyUs.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.whyUs.title}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.whyUs.items.map((reason, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-zala-blue/5 dark:border-white/10 bg-white dark:bg-white/[0.02] p-8 shadow-sm dark:shadow-glass transition-all hover:bg-white dark:hover:bg-white/[0.05] hover:border-zala-orange/30"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zala-orange/10 text-zala-orange">
                  <Icon size={24} />
                </div>
                <h3 className="mt-6 font-heading text-xl font-semibold text-zala-blue dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-3 font-body text-sm text-zala-blue/70 dark:text-white/60 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}