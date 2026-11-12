"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Logo from "@/components/Logo";
import { usePrefs } from "@/components/Preferences";
import Controls from "@/components/Controls";

export default function Navbar() {
  const { t } = usePrefs();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const NAV_LINKS = [
    { label: t.nav.home, href: "#accueil" },
    { label: t.nav.expertise, href: "#expertise" },
    { label: t.nav.services, href: "#services" },
    { label: t.nav.team, href: "#equipe" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4 transition-all duration-300">
      <nav
        className={clsx(
          "mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 transition-all duration-300",
          scrolled
            ? "bg-white/80 dark:bg-zala-blue/80 backdrop-blur-md border border-zala-blue/10 dark:border-white/10 shadow-lg"
            : "bg-transparent"
        )}
      >
        <a href="#accueil" aria-label="Zala Tech">
          {/* Suppression de la prop variant */}
          <Logo />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs uppercase tracking-wider text-zala-blue/70 dark:text-white/70 transition-colors hover:text-zala-orange dark:hover:text-zala-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Controls />
          <a
            href="#contact"
            className="rounded-full bg-zala-orange px-6 py-2.5 font-body text-sm font-semibold text-white shadow-glow transition-transform hover:scale-105"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-zala-blue dark:text-white lg:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-4 right-4 top-24 z-40 rounded-2xl bg-white dark:bg-zala-blue/95 backdrop-blur-xl border border-zala-blue/10 dark:border-white/10 p-8 shadow-2xl lg:hidden"
          >
            <div className="mb-6 flex justify-center">
              <Controls />
            </div>
            <ul className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-xl font-semibold text-zala-blue dark:text-white hover:text-zala-orange dark:hover:text-zala-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}