# Zala Tech — Site vitrine

Site vitrine one-page pour **Zala Tech**, studio digital basé à Brazzaville.
Construit avec Next.js 14 (App Router), TypeScript, Tailwind CSS et Framer Motion.

## Stack

- **Next.js 14** (App Router, Server Components par défaut)
- **TypeScript**
- **Tailwind CSS** (palette de marque dans `tailwind.config.ts`)
- **Framer Motion** (animations d'entrée, hover, carrousel, menu mobile)
- **lucide-react** (icônes)
- **react-hook-form** (formulaire de contact)

## Démarrage

```bash
npm install
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

## Build production

```bash
npm run build
npm run start
```

## Structure du projet

```
app/
  layout.tsx        → polices Google, métadonnées SEO
  page.tsx           → composition des sections de la page
  not-found.tsx       → page 404
  globals.css         → styles de base, scroll fluide
components/
  Navbar.tsx          → navigation sticky + menu mobile animé
  Hero.tsx            → section d'accueil plein écran
  Services.tsx        → grille des 6 services
  WhyUs.tsx           → pourquoi Zala Tech (lignes alternées)
  Process.tsx          → notre processus (stepper horizontal)
  Team.tsx            → équipe
  FutureProducts.tsx   → notre vision / projection
  Testimonials.tsx     → carrousel de témoignages
  CTABanner.tsx         → bannière d'appel à l'action
  Contact.tsx           → formulaire de contact (react-hook-form)
  Footer.tsx            → pied de page
  FloatingWhatsapp.tsx  → bouton WhatsApp flottant
  NotFound.tsx          → contenu de la page 404
  Logo.tsx              → logo réutilisable (Navbar + Footer + 404)
lib/
  constants.ts        → liens de navigation, contact, WhatsApp (source unique)
```

## Personnalisation rapide

- **Couleurs de marque** : `tailwind.config.ts` → `theme.extend.colors.zala`
- **Numéro WhatsApp / e-mail** : `lib/constants.ts`
- **Liens de navigation** : `lib/constants.ts` → `NAV_LINKS`
- **Contenu des témoignages / équipe / services** : directement dans chaque composant, sous forme de tableaux typés en haut de fichier — faciles à éditer sans toucher au JSX.

## Accessibilité & performance

- Respect de `prefers-reduced-motion`
- Focus clavier visible sur tous les éléments interactifs
- Polices chargées via `next/font` avec `display: swap`
- Composants serveur par défaut ; `"use client"` uniquement là où l'interactivité l'exige (Navbar, Hero, Services, WhyUs, Process, Team, FutureProducts, Testimonials, CTABanner, Contact, FloatingWhatsapp)
