// Centralised brand + contact constants so every component references
// a single source of truth (avoids drift between Navbar, Hero, Footer, etc.)

export const WHATSAPP_NUMBER = "242064426075";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const PHONE_DISPLAY = "+242 06 442 60 75";

// Nouveaux emails
export const EMAIL = "zalatechentreprise@gmail.com";
export const SECONDARY_EMAIL = "venanceharold@gmail.com";

export const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "Expertise", href: "#expertise" },
  { label: "Services", href: "#services" },
  { label: "À propos", href: "#a-propos" },
  { label: "Équipe", href: "#equipe" },
  { label: "Projection", href: "#projection" },
  { label: "Contact", href: "#contact" },
] as const;