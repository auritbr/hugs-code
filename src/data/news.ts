export type NewsItem = {
  slug: string;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  author: string;
  readingMinutes: number;
  cover: string;
  excerpt: string;
  body: string[];
  gallery: string[];
};

export const newsTags = [
  "Todas",
  "Evento",
  "Oficina",
  "Ação social",
  "Formação",
  "Feira",
  "Institucional",
  "Parceria",
  "Reconhecimento",
];

export const news: NewsItem[] = [
  {
    slug: "abertura-oficinas-2026",
    title: "Abertura das oficinas de bordado e cerâmica de 2026",
    subtitle:
      "Novo ciclo formativo reúne mais de 120 participantes no primeiro semestre.",
    tag: "Oficina",
    date: "2026-06-12",
    author: "Coordenação Pedagógica",
    readingMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "O primeiro ciclo do ano começou com rodas de escuta, mostra das educadoras e a chegada de novos participantes ao Ponto de Cultura.",
    body: [
      "O primeiro ciclo formativo de 2026 teve início com uma programação especial que reuniu educadoras, artesãs e novos participantes em torno das oficinas de bordado e cerâmica. Ao longo de duas semanas, o Ponto de Cultura recebeu rodas de escuta, mostras práticas e apresentações de técnicas.",
      "As turmas iniciaram com atividades introdutórias, exploração de materiais e visitas às áreas de produção. A proposta é aproximar as pessoas dos processos, incentivando um olhar cuidadoso para o tempo do trabalho manual e para a força cultural das técnicas.",
      "As inscrições permanecerão abertas para novas turmas ao longo do ano, com prioridade para moradores da região. Todas as atividades são gratuitas e realizadas em espaços acessíveis.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "feira-de-artesanato-2026",
    title: "Feira coletiva reúne 40 artesãs em edição especial",
    subtitle: "Encontro apresentou peças de projetos formativos do Ponto de Cultura.",
    tag: "Feira",
    date: "2026-05-04",
    author: "Comunicação",
    readingMinutes: 3,
    cover:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A feira apresentou peças produzidas durante o ano, ampliando circulação e diálogo com o público.",
    body: [
      "A edição especial da feira coletiva ocupou o pátio do Centro Cultural com barracas cuidadosamente organizadas pelas próprias participantes. O evento reuniu peças de bordado, cerâmica, costura e acessórios produzidos ao longo do último ciclo formativo.",
      "Além da comercialização, o encontro reservou espaço para apresentações culturais, rodas de conversa e oficinas rápidas abertas ao público. A programação também contou com a presença de parceiros institucionais.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1520975922284-9c9c7e5d8e75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "reconhecimento-ponto-de-cultura",
    title: "Ponto de Cultura recebe reconhecimento estadual",
    subtitle: "Trabalho com saberes tradicionais é destacado em premiação regional.",
    tag: "Reconhecimento",
    date: "2026-03-22",
    author: "Diretoria",
    readingMinutes: 5,
    cover:
      "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "O trabalho contínuo com formação e valorização de saberes tradicionais foi destacado por comissão regional.",
    body: [
      "O reconhecimento reforça a trajetória da organização e destaca o compromisso com a formação, a preservação de saberes e o fortalecimento comunitário. A comissão avaliadora considerou a continuidade das ações, a metodologia participativa e os resultados concretos gerados no território.",
      "A distinção também aponta caminhos para ampliação futura, incluindo novas frentes formativas e parcerias voltadas à economia criativa.",
    ],
    gallery: [
      "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    slug: "parceria-institucional-sesc",
    title: "Nova parceria amplia oficinas itinerantes",
    subtitle:
      "Iniciativa levará formações a bairros parceiros ao longo do segundo semestre.",
    tag: "Parceria",
    date: "2026-02-15",
    author: "Coordenação",
    readingMinutes: 3,
    cover:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A parceria fortalece a presença das oficinas em novos territórios e amplia o alcance da formação.",
    body: [
      "A nova parceria firma compromissos para realização de oficinas itinerantes em espaços comunitários, ampliando o alcance dos processos formativos. A ação prevê deslocamento das educadoras, montagem de estruturas simples e continuidade após o ciclo inicial.",
    ],
    gallery: [],
  },
  {
    slug: "roda-de-escuta-territorio",
    title: "Roda de escuta discute próximos passos com o território",
    subtitle: "Encontro comunitário reuniu artesãs, jovens e lideranças locais.",
    tag: "Ação social",
    date: "2026-01-30",
    author: "Coordenação Pedagógica",
    readingMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "A escuta coletiva orientou as prioridades formativas para o ano e reafirmou o vínculo com a comunidade.",
    body: [
      "O encontro reuniu integrantes da organização, participantes e lideranças da comunidade em uma conversa aberta sobre expectativas, prioridades e caminhos possíveis. Os apontamentos alimentam o planejamento anual do Ponto de Cultura.",
    ],
    gallery: [],
  },
  {
    slug: "formacao-continuada-educadoras",
    title: "Formação continuada fortalece equipe de educadoras",
    subtitle: "Programa interno amplia repertório pedagógico e cuidado com processos.",
    tag: "Formação",
    date: "2025-11-18",
    author: "Equipe Pedagógica",
    readingMinutes: 4,
    cover:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80",
    excerpt:
      "Ciclo interno de estudos aprofunda metodologias e práticas de convivência com o território.",
    body: [
      "O ciclo formativo interno reuniu a equipe pedagógica em encontros regulares, com estudos de referências, revisão de práticas e trocas com convidados. O objetivo é fortalecer a metodologia participativa que orienta o trabalho.",
    ],
    gallery: [],
  },
];

export const getNews = (slug: string) => news.find((n) => n.slug === slug);