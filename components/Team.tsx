"use client";

import { motion } from "framer-motion";
import { usePrefs } from "@/components/Preferences";

export default function Team() {
  const { t } = usePrefs();

  return (
    <section id="equipe" className="section-padding bg-zala-cream dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">{t.team.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.team.title}
          </h2>
          <p className="mt-4 font-body text-zala-blue/70 dark:text-white/60">
            {t.team.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {t.team.items.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-2xl border border-zala-blue/5 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 text-center shadow-sm dark:shadow-glass transition-shadow hover:shadow-md dark:hover:bg-white/[0.05]"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zala-gradient font-heading text-lg font-bold text-white">
                {member.initials}
              </div>
              <h3 className="mt-4 font-heading text-sm font-semibold text-zala-blue dark:text-white">
                {member.name}
              </h3>
              <p className="mt-1 font-body text-xs text-zala-orange">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}