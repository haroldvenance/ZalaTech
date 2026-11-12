import Link from "next/link";
import { Home } from "lucide-react";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-zala-gradient px-6 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-zala-radial" />
      <div className="relative z-10">
        {/* Suppression de la prop variant="light" */}
        <Logo className="justify-center" />
        
        <p className="mt-10 font-heading text-7xl font-bold text-white sm:text-8xl">
          404
        </p>
        <h1 className="mt-4 font-heading text-2xl font-semibold text-white sm:text-3xl">
          Cette page n&apos;existe pas.
        </h1>
        <p className="mx-auto mt-3 max-w-md font-body text-white/70">
          Simplement, retournez à l&apos;accueil pour continuer votre visite.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-zala-orange px-7 py-3.5 font-body font-semibold text-white shadow-glow transition-transform hover:scale-105"
        >
          <Home size={18} />
          Retour à l&apos;accueil
        </Link>
      </div>
    </div>
  );
}