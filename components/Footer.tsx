import { Github, Linkedin, Facebook, Instagram } from "lucide-react";
import Logo from "@/components/Logo";
import { EMAIL, NAV_LINKS, PHONE_DISPLAY } from "@/lib/constants";

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zala-cream dark:bg-zala-blue border-t border-zala-blue/10 dark:border-white/10 transition-colors duration-300">
      <div className="section-container grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-4 max-w-xs font-body text-sm text-zala-blue/60 dark:text-white/50">
            {/* CORRECTION ICI : d&apos;ingénierie */}
            Zala Tech est un studio d&apos;ingénierie logicielle basé à Brazzaville. Nous concevons des systèmes intelligents, sécurisés et évolutifs.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 text-zala-blue dark:text-white transition-colors hover:border-zala-orange hover:text-zala-orange"><Facebook size={18} /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 text-zala-blue dark:text-white transition-colors hover:border-zala-orange hover:text-zala-orange"><Instagram size={18} /></a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 text-zala-blue dark:text-white transition-colors hover:border-zala-orange hover:text-zala-orange"><TikTokIcon size={18} /></a>
            <a href="https://github.com/haroldvenance" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 text-zala-blue dark:text-white transition-colors hover:border-zala-orange hover:text-zala-orange"><Github size={18} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-zala-blue/10 dark:border-white/10 bg-white dark:bg-white/5 text-zala-blue dark:text-white transition-colors hover:border-zala-orange hover:text-zala-orange"><Linkedin size={18} /></a>
          </div>
        </div>
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-zala-blue dark:text-white">Navigation</h3>
          <ul className="mt-6 space-y-3">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-body text-sm text-zala-blue/60 dark:text-white/50 transition-colors hover:text-zala-orange dark:hover:text-zala-orange">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm font-semibold uppercase tracking-wide text-zala-blue dark:text-white">Contact</h3>
          <ul className="mt-6 space-y-3 font-body text-sm text-zala-blue/60 dark:text-white/50">
            <li>{PHONE_DISPLAY}</li>
            <li><a href={`mailto:${EMAIL}`} className="hover:text-zala-orange transition-colors">{EMAIL}</a></li>
            <li>Brazzaville, Congo</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zala-blue/10 dark:border-white/10 py-6">
        <div className="section-container flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-body text-xs text-zala-blue/40 dark:text-white/30">© {year} Zala Tech. Tous droits réservés.</p>
          <p className="font-mono text-xs text-zala-blue/40 dark:text-white/30">Conçu avec intention. Construit avec curiosité.</p>
        </div>
      </div>
    </footer>
  );
}