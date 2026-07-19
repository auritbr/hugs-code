export const site = {
  name: "Ponto de Cultura",
  tagline: "Saberes que ganham forma",
  description:
    "Ponto de Cultura dedicado ao artesanato, formação cultural, geração de renda e valorização dos saberes tradicionais.",
  address: "Rua das Artes, 123 — Centro Cultural, São Paulo/SP",
  phone: "(11) 4002-8922",
  whatsapp: "5511900000000",
  whatsappMessage: "Olá! Gostaria de saber mais sobre o Ponto de Cultura.",
  email: "contato@pontodecultura.org.br",
  hours: "Segunda a sexta, das 9h às 18h",
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
} as const;

export const impactStats = [
  { value: "15", label: "anos de atuação" },
  { value: "1.200+", label: "participantes" },
  { value: "40", label: "oficinas realizadas" },
  { value: "18", label: "ações culturais" },
  { value: "12", label: "parceiros institucionais" },
];

export type Partner = {
  name: string;
  logo: string;
  alt: string;
  url?: string;
  category?: string;
};

// Preencher com logomarcas reais. Enquanto estiver vazio, a seção
// exibe apenas o estado administrativo na página inicial.
export const partners: Partner[] = [];