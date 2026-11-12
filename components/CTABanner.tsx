"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";
import { usePrefs } from "@/components/Preferences";

export default function CTABanner() {
  const { t } = usePrefs();

  return (
    <section className="relative overflow-hidden bg-zala-blue dark:bg-zala-blue py-24 transition-colors duration-300">
      <div aria-hidden="true" className="absolute inset-0 bg-zala-radial" />
      <div className="section-container relative z-10 flex flex-col items-center gap-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-3xl font-bold text-white sm:text-4xl"
        >
          {t.ctaBanner.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-xl font-body text-white/70"
        >
          {t.ctaBanner.subtitle}
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-zala-orange px-8 py-4 font-body font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          <MessageCircle size={20} />
          {t.ctaBanner.cta}
        </motion.a>
      </div>
    </section>
  );
}