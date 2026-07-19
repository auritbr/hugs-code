export type TeamMember = {
  name: string;
  role: string;
  area: "Diretoria" | "Coordenação" | "Educadores" | "Artesãos" | "Colaboradores";
  photo: string;
  bio: string;
  color: "petrol" | "red" | "orange" | "gold" | "green";
};

export const team: TeamMember[] = [
  {
    name: "Ana Ribeiro",
    role: "Diretora Executiva",
    area: "Diretoria",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    bio: "Atua há mais de duas décadas na articulação de projetos culturais e no fortalecimento de organizações comunitárias.",
    color: "petrol",
  },
  {
    name: "Marcos Pereira",
    role: "Coordenador Pedagógico",
    area: "Coordenação",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    bio: "Responsável pelo planejamento formativo e pelo diálogo com educadoras, articulando trilhas por área artesanal.",
    color: "red",
  },
  {
    name: "Dona Célia",
    role: "Mestra Bordadeira",
    area: "Educadores",
    photo: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    bio: "Referência em bordado tradicional, transmite técnicas herdadas de sua família há três gerações.",
    color: "orange",
  },
  {
    name: "Rafael Souza",
    role: "Educador de Cerâmica",
    area: "Educadores",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
    bio: "Ceramista com formação em arte, coordena a produção do ateliê e conduz mostras coletivas.",
    color: "gold",
  },
  {
    name: "Joana Lima",
    role: "Artesã Colaboradora",
    area: "Artesãos",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Trabalha com crochê e costura criativa, participa das feiras e apoia a formação de novas turmas.",
    color: "green",
  },
  {
    name: "Pedro Alves",
    role: "Comunicação",
    area: "Colaboradores",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Cuida da comunicação institucional, cobertura das ações e das redes sociais do Ponto de Cultura.",
    color: "petrol",
  },
  {
    name: "Beatriz Nogueira",
    role: "Coordenadora Administrativa",
    area: "Coordenação",
    photo: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80",
    bio: "Responsável pela gestão administrativa, financeira e pelo relacionamento com parceiros.",
    color: "red",
  },
  {
    name: "Seu Antônio",
    role: "Mestre em Madeira",
    area: "Educadores",
    photo: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=600&q=80",
    bio: "Marceneiro e educador, conduz oficinas de peças utilitárias e objetos decorativos.",
    color: "orange",
  },
];

export const teamAreas = ["Todos", "Diretoria", "Coordenação", "Educadores", "Artesãos", "Colaboradores"] as const;