import type { Metadata } from "next";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import FloatingWhatsapp from "@/components/FloatingWhatsapp";
import { PreferencesProvider } from "@/components/Preferences";

const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-poppins", display: "swap" });
const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Zala Tech | Ingénierie Logicielle & Systèmes Intelligents",
  description: "Zala Tech conçoit des systèmes intelligents, sécurisés et évolutifs.",
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
      </head>
      <body className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased bg-white dark:bg-zala-blue text-zala-blue dark:text-white transition-colors duration-300 overflow-x-hidden`}>
        <PreferencesProvider>
          {children}
          <FloatingWhatsapp />
        </PreferencesProvider>
      </body>
    </html>
  );
}