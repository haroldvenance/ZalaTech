import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { PreferencesProvider } from "@/components/Preferences";

// Remplace cette URL par ton futur nom de domaine si tu en achètes un
const baseUrl = "https://zala-tech.vercel.app"; 

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Zala Tech | Ingénierie Logicielle & Systèmes Intelligents",
  description: "Zala Tech conçoit des systèmes intelligents, sécurisés et évolutifs. Expertise en Data/IA, cybersécurité applicative et blockchain.",
  
  // C'est ici que l'image est configurée pour WhatsApp / LinkedIn / Facebook
  openGraph: {
    title: "Zala Tech | Ingénierie Logicielle & Systèmes Intelligents",
    description: "Bâtir des systèmes intelligents. Protéger ce qui compte. Découvrez notre expertise en Data/IA, Sécurité et Web3.",
    url: baseUrl,
    siteName: "Zala Tech",
    images: [
      {
        url: "/og-image.jpg", // Le chemin vers ton image dans le dossier public
        width: 1200,
        height: 630,
        alt: "Zala Tech - Engineering Studio",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  
  // Configuration pour Twitter (X)
  twitter: {
    card: "summary_large_image",
    title: "Zala Tech | Ingénierie Logicielle & Systèmes Intelligents",
    description: "Bâtir des systèmes intelligents. Protéger ce qui compte.",
    images: ["/og-image.jpg"],
  },
};

// Script pour éviter le flash de thème au chargement
const initTheme = `
  (function() {
    try {
      var theme = localStorage.getItem('zala-theme');
      if (theme === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
      var lang = localStorage.getItem('zala-lang') || 'fr';
      document.documentElement.lang = lang;
    } catch (e) {}
  })();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: initTheme }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-white dark:bg-zala-blue text-zala-blue dark:text-white transition-colors duration-300 overflow-x-hidden">
        <PreferencesProvider>
          {children}
          <FloatingWhatsapp />
        </PreferencesProvider>
      </body>
    </html>
  );
}