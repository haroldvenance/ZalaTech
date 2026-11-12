"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

export default function Hero() {
  const { t } = usePrefs();

  return (
    <section
      id="accueil"
      className="relative flex min-h-screen items-center overflow-hidden bg-zala-cream dark:bg-zala-gradient pt-20 transition-colors duration-300"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-[18%] h-40 w-40 rounded-full bg-zala-orange/10 blur-2xl animate-float-slow" />
        <div className="absolute bottom-[12%] left-[12%] h-56 w-56 rounded-full bg-zala-blue/5 dark:bg-white/5 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-zala-radial" />
      </div>

      <div className="section-container relative z-10 grid gap-14 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-eyebrow bg-zala-orange/10 dark:bg-white/5 rounded-full px-4 py-1.5 text-zala-orange dark:text-white/90"
          >
            {t.hero.badge}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl font-bold leading-[1.08] text-zala-blue dark:text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl font-body text-lg leading-relaxed text-zala-blue/70 dark:text-white/80"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 rounded-full bg-zala-orange px-7 py-3.5 font-body font-semibold text-white shadow-glow transition-all hover:scale-105"
            >
              {t.hero.cta}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
            {/* Le bouton CV a été supprimé ici */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {t.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zala-blue/10 dark:border-white/15 bg-white dark:bg-white/5 px-3.5 py-1.5 font-body text-xs font-medium text-zala-blue/70 dark:text-white/70 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mx-auto hidden w-full max-w-md lg:block"
        >
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-white/50 dark:bg-[#0a1120]/80 p-6 shadow-xl dark:shadow-2xl backdrop-blur-md"
          >
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-2 text-xs text-zala-blue/40 dark:text-white/40 font-mono">~/zala-tech/deploy</span>
            </div>
            <div className="mt-6 space-y-3 font-mono text-xs text-zala-blue/70 dark:text-white/70">
              <p><span className="text-zala-orange">➜</span> Initializing AI engine...</p>
              <p><span className="text-green-500">✓</span> RAG pipeline connected</p>
              <p><span className="text-green-500">✓</span> Security audit passed</p>
              <p><span className="text-green-500">✓</span> Smart contracts deployed</p>
              <p className="mt-4 animate-pulse"><span className="text-zala-orange">➜</span> Mission accomplished_</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}