export const siteConfig = {
  canonicalUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://douglashsantana.com.br",
  title: "Douglas Santos | Gerente · Engajamento.app",
  description:
    "Douglas Santos — Gerente | Engajamento.app. Escalando marcas e resultados reais. Vivendo do digital.",
  locale: "pt_BR",
  language: "pt-BR",
  ogImage: "/images/og/og-douglas.jpg",
  shareTitle: "Douglas Santos | Engajamento.app",
  shareText: "Conheça o perfil de Douglas Santos — Gerente | Engajamento.app.",
};

export type LinkItem = {
  id: string;
  label: string;
  description: string;
  href: string;
  accent: "gold" | "cream" | "outline";
  external?: boolean;
};

export const profile = {
  name: "Douglas Santos",
  handle: "@douglashsantana",
  role: "Gerente | Engajamento.app",
  tagline: "Escalando marcas e resultados reais",
  verse: "Isaías 54:17",
  location: "Vivendo do digital",
  photo: "/images/profile/douglas-santana.webp",
  photoAlt: "Foto profissional de Douglas Santos",
  backgroundImage: "/images/background/douglas-bg.webp",
  verified: true,
  instagramUrl: "https://www.instagram.com/douglashsantana/",
  threadsUrl: "https://www.threads.net/@douglashsantana",
  luminaUrl: "https://www.instagram.com/institutoluminaooficial/",
  engajamentoUrl: "https://engajamento.app.br/inicio",
  whatsappUrl:
    "https://wa.me/5515988284089?text=Olá%2C%20vim%20pelo%20seu%20perfil%20e%20gostaria%20de%20entrar%20em%20contato.",
};

export const authorityStats = [
  { id: "followers", value: "7.3K", label: "seguidores", fullLabel: "7.376 seguidores" },
  { id: "role", value: "Gerente", label: "Engajamento.app", fullLabel: "Gerente | Engajamento.app" },
  { id: "focus", value: "Digital", label: "resultados reais", fullLabel: "Vivendo do digital" },
];

export const links: LinkItem[] = [
  {
    id: "engajamento",
    label: "Engajamento.app",
    description: "Painel SMM · Instagram, TikTok e YouTube",
    href: profile.engajamentoUrl,
    accent: "gold",
    external: true,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    description: "Para entrar em contato",
    href: profile.whatsappUrl,
    accent: "cream",
    external: true,
  },
  {
    id: "lumina",
    label: "Instituto Lumina",
    description: "Projeto e presença oficial",
    href: profile.luminaUrl,
    accent: "outline",
    external: true,
  },
  {
    id: "threads",
    label: "Threads",
    description: "Ideias e conversas no digital",
    href: profile.threadsUrl,
    accent: "outline",
    external: true,
  },
];
