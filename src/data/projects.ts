export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  hero: string;
  color: "petrol" | "red" | "orange" | "green";
  audience: string;
  techniques: string[];
  goals: { title: string; text: string }[];
  method: { title: string; text: string }[];
  gallery: string[];
  ctaTitle: string;
  overview: string;
};

export const projects: Project[] = [
  {
    slug: "fios-da-memoria",
    title: "Fios da Memória",
    category: "Formação têxtil",
    color: "red",
    summary:
      "Formações em bordado, costura criativa, crochê e técnicas têxteis que atravessam gerações.",
    overview:
      "O projeto Fios da Memória reúne pessoas em torno de práticas têxteis reconhecidas por sua força cultural. Bordadeiras experientes compartilham pontos, ritmos e histórias com jovens e adultos, criando um ambiente de aprendizagem coletiva onde cada linha carrega afeto e identidade.",
    hero:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=80",
    audience:
      "Mulheres, jovens e adultos interessados em técnicas têxteis, com prioridade para moradores do território.",
    techniques: [
      "Bordado livre",
      "Crochê",
      "Costura criativa",
      "Patchwork",
      "Customização",
      "Acessórios têxteis",
    ],
    goals: [
      { title: "Preservar saberes", text: "Registrar e transmitir técnicas transmitidas oralmente." },
      { title: "Estimular criatividade", text: "Ampliar repertório visual e experimentação estética." },
      { title: "Promover autonomia", text: "Fortalecer a produção independente das participantes." },
      { title: "Gerar renda", text: "Abrir caminhos para comercialização das peças." },
      { title: "Fortalecer vínculos", text: "Consolidar a roda de trabalho como espaço de convivência." },
    ],
    method: [
      { title: "Introdução", text: "Apresentação das técnicas, materiais e referências culturais." },
      { title: "Experimentação", text: "Exercícios livres para descobrir traços e ritmos próprios." },
      { title: "Desenvolvimento", text: "Construção de projetos individuais orientados por educadoras." },
      { title: "Produção", text: "Execução das peças com foco em qualidade e acabamento." },
      { title: "Acabamento", text: "Detalhamento, revisão e finalização das obras." },
      { title: "Exposição", text: "Mostras, feiras e circulação das peças produzidas." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=800&q=80",
    ],
    ctaTitle: "Uma linha pode unir técnicas, histórias e novos caminhos.",
  },
  {
    slug: "barro-forma-identidade",
    title: "Barro, Forma e Identidade",
    category: "Cerâmica e modelagem",
    color: "orange",
    summary:
      "Oficinas de cerâmica, modelagem, pintura e produção de objetos decorativos e utilitários.",
    overview:
      "Da matéria à forma, o projeto propõe uma experiência sensível com o barro como linguagem. Participantes exploram texturas, ritmos e memórias, produzindo peças que carregam a marca de quem cria e dialogam com referências da comunidade.",
    hero:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1400&q=80",
    audience:
      "Jovens e adultos com interesse em cerâmica, sem exigência de conhecimento prévio.",
    techniques: [
      "Modelagem manual",
      "Cerâmica decorativa",
      "Pintura em peças",
      "Esculturas",
      "Objetos utilitários",
      "Acabamentos artesanais",
    ],
    goals: [
      { title: "Conhecer a matéria", text: "Reconhecer propriedades do barro e da argila." },
      { title: "Desenvolver forma", text: "Trabalhar volume, proporção e equilíbrio." },
      { title: "Explorar identidade", text: "Traduzir referências culturais em peças autorais." },
      { title: "Produzir com cuidado", text: "Aprofundar acabamento e finalização." },
      { title: "Circular produção", text: "Apresentar peças em mostras e feiras." },
    ],
    method: [
      { title: "Materiais", text: "Estudo do barro, ferramentas e ambiente de trabalho." },
      { title: "Preparação", text: "Sova, hidratação e preparo da argila." },
      { title: "Modelagem", text: "Construção das peças com técnicas variadas." },
      { title: "Secagem", text: "Processos controlados para evitar rachaduras." },
      { title: "Pintura", text: "Aplicação de engobes, esmaltes e pigmentos." },
      { title: "Finalização", text: "Queima, revisão e apresentação das peças." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1565193298357-c5b46b0ff6a1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80",
    ],
    ctaTitle: "Cada forma carrega a marca de quem cria.",
  },
  {
    slug: "artesanato-que-gera-renda",
    title: "Artesanato que Gera Renda",
    category: "Formação profissional",
    color: "green",
    summary:
      "Capacitação em acabamento, precificação, empreendedorismo, exposição e comercialização.",
    overview:
      "Voltado à autonomia econômica, o projeto oferece formação prática em desenvolvimento de produto, gestão, precificação e estratégias de circulação. Participantes constroem, coletivamente, caminhos para transformar habilidades em oportunidades reais.",
    hero:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
    audience:
      "Artesãs e artesãos com produção ativa, interessados em ampliar comercialização e presença em feiras.",
    techniques: [
      "Desenvolvimento de produto",
      "Acabamento",
      "Organização da produção",
      "Precificação",
      "Fotografia de produto",
      "Divulgação",
      "Atendimento",
      "Feiras e exposições",
      "Planejamento financeiro",
    ],
    goals: [
      { title: "Estruturar produção", text: "Padronizar processos e melhorar qualidade." },
      { title: "Precificar com clareza", text: "Considerar custos, tempo e valor cultural." },
      { title: "Ampliar visibilidade", text: "Fotografia, embalagem e comunicação visual." },
      { title: "Acessar mercado", text: "Preparação para feiras, mostras e redes de comercialização." },
      { title: "Fortalecer autonomia", text: "Planejamento financeiro e gestão da própria produção." },
    ],
    method: [
      { title: "Diagnóstico", text: "Reconhecimento da produção atual e potencialidades." },
      { title: "Desenvolvimento", text: "Refino de produtos e criação de linhas." },
      { title: "Comunicação", text: "Fotografia, identidade e materiais de divulgação." },
      { title: "Gestão", text: "Custos, precificação e organização financeira." },
      { title: "Comercialização", text: "Feiras, redes e canais de venda." },
      { title: "Avaliação", text: "Análise de resultados e próximos passos." },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1556909195-4e5cbe07f79d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1607081692251-9d9439e2d2a0?auto=format&fit=crop&w=800&q=80",
    ],
    ctaTitle:
      "Quando o conhecimento encontra oportunidade, o artesanato amplia caminhos.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);