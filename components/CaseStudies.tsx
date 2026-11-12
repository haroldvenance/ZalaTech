"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrainCircuit, ShieldCheck, Network, Database, Code2, Terminal, X, ChevronDown, ChevronUp, ArrowUpRight } from "lucide-react";
import { usePrefs } from "@/components/Preferences";

const icons = [BrainCircuit, Network, ShieldCheck, Network, BrainCircuit, Code2, ShieldCheck, Database, Network, BrainCircuit, Code2, ShieldCheck, Database, Network, BrainCircuit, Code2, ShieldCheck, Database, Network, BrainCircuit];

export default function CaseStudies() {
  const { t } = usePrefs();
  const [showAll, setShowAll] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeProject !== null) setActiveProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject]);

  const activeData = activeProject !== null ? t.projects.items[activeProject] : null;
  const displayedProjects = showAll ? t.projects.items : t.projects.items.slice(0, 5);

  return (
    <section className="section-padding bg-zala-cream dark:bg-zala-blue transition-colors duration-300">
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="section-eyebrow">{t.projects.eyebrow}</span>
          <h2 className="mt-4 font-heading text-3xl font-bold text-zala-blue dark:text-white sm:text-4xl">
            {t.projects.title}
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/[0.02] p-6 transition-all hover:bg-white dark:hover:bg-white/[0.05] hover:border-zala-orange/50 dark:hover:border-zala-orange/30 shadow-sm dark:shadow-none"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zala-orange/10 text-zala-orange">
                      <Icon size={20} />
                    </div>
                    <span className="font-mono text-xs text-zala-blue/40 dark:text-white/40">{(index + 1).toString().padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-zala-blue dark:text-white group-hover:text-zala-orange transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-zala-orange/80">{project.domain}</p>
                  <p className="mt-3 font-body text-sm text-zala-blue/70 dark:text-white/60 line-clamp-3">{project.desc}</p>
                </div>

                <div className="mt-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded bg-zala-blue/5 dark:bg-white/5 px-2 py-1 font-mono text-[10px] text-zala-blue/60 dark:text-white/50">{tech}</span>
                    ))}
                  </div>
                  <button onClick={() => setActiveProject(index)} className="inline-flex items-center gap-1 font-body text-xs font-semibold text-zala-blue dark:text-white hover:text-zala-orange dark:hover:text-zala-orange transition-colors">
                    {t.projects.explore} <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <button onClick={() => setShowAll(!showAll)} className="inline-flex items-center gap-2 rounded-full border border-zala-blue/20 dark:border-white/20 bg-white dark:bg-white/5 px-6 py-3 font-body text-sm font-semibold text-zala-blue dark:text-white transition-all hover:bg-zala-blue/5 dark:hover:bg-white/10 shadow-sm dark:shadow-none">
            {showAll ? t.projects.seeLess : t.projects.seeMore}
            {showAll ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {activeProject !== null && activeData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)} className="absolute inset-0 bg-zala-blue/60 dark:bg-black/60 backdrop-blur-sm" />
            <motion.div initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }} className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-zala-blue p-8 shadow-2xl">
              <button onClick={() => setActiveProject(null)} className="absolute right-4 top-4 text-zala-blue/50 dark:text-white/50 hover:text-zala-blue dark:hover:text-white">
                <X size={24} />
              </button>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zala-orange/10 text-zala-orange">
                  {(() => { const Icon = icons[activeProject]; return <Icon size={24} />; })()}
                </div>
                <div>
                  <span className="font-mono text-xs text-zala-orange">{(activeProject + 1).toString().padStart(2, '0')} / {t.projects.modalIndex}</span>
                  <h3 className="font-heading text-xl font-bold text-zala-blue dark:text-white">{activeData.title}</h3>
                </div>
              </div>
              <p className="font-body text-sm leading-relaxed text-zala-blue/70 dark:text-white/70">{activeData.desc}</p>
              <div className="mt-6">
                <h4 className="font-heading text-sm font-semibold text-zala-blue dark:text-white mb-3">{t.projects.stackTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {activeData.stack.map((tech) => (
                    <span key={tech} className="rounded border border-zala-blue/10 dark:border-white/10 bg-zala-cream dark:bg-white/5 px-3 py-1.5 font-mono text-xs text-zala-blue/70 dark:text-white/70">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mt-8 flex justify-end">
                <button onClick={() => setActiveProject(null)} className="rounded-full bg-zala-orange px-6 py-2.5 font-body text-sm font-semibold text-white shadow-glow">
                  {t.projects.close}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}