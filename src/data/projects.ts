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
  about: string[];
  activities: { title: string; text: string; color: "red" | "orange" | "gold" | "green" | "turquoise" | "petrol" }[];
  techniqueCards: { name: string; text: string }[];
  cta: {
    title: string;
    text: string;
    buttons: { label: string; to: string }[];
    bg: "red" | "orange" | "petrol" | "green";
    image: string;
  };
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
    about: [
      "O projeto Fios da Memória promove encontros formativos dedicados ao bordado, ao crochê, à costura criativa e a outras técnicas têxteis. As atividades valorizam conhecimentos transmitidos entre gerações e criam oportunidades para que cada participante desenvolva sua própria linguagem de criação.",
      "Durante as oficinas, linhas, tecidos, agulhas e retalhos tornam-se ferramentas de expressão, convivência e fortalecimento da memória comunitária. O processo combina aprendizagem técnica, experimentação, troca de experiências e desenvolvimento de peças autorais.",
      "Além da produção artesanal, o projeto estimula autonomia, criatividade e organização coletiva, reconhecendo cada participante como portador de conhecimentos e histórias que podem ser compartilhados e preservados.",
    ],
    activities: [
      { title: "Introdução ao bordado", text: "Primeiros pontos, materiais e traços tradicionais.", color: "red" },
      { title: "Oficinas de crochê", text: "Correntes, laçadas e composição de peças únicas.", color: "gold" },
      { title: "Costura criativa", text: "Combinação de tecidos, retalhos e experimentação estética.", color: "turquoise" },
      { title: "Criação com retalhos", text: "Reaproveitamento e composição de patchworks autorais.", color: "orange" },
      { title: "Desenvolvimento de peças autorais", text: "Construção de projetos pessoais orientados pelas educadoras.", color: "green" },
      { title: "Mostra de trabalhos", text: "Exposição coletiva das criações produzidas nas oficinas.", color: "petrol" },
    ],
    techniqueCards: [
      { name: "Bordado livre", text: "Pontos tradicionais aplicados de forma autoral." },
      { name: "Crochê", text: "Correntes, laçadas e composição de peças únicas." },
      { name: "Costura criativa", text: "Combinações de tecidos e acabamentos artesanais." },
      { name: "Patchwork", text: "Composição de retalhos coloridos em peças autorais." },
      { name: "Customização", text: "Intervenções em roupas e acessórios existentes." },
      { name: "Acessórios têxteis", text: "Bolsas, brincos e adornos produzidos à mão." },
    ],
    cta: {
      title: "Cada ponto preserva uma memória e abre espaço para novas criações.",
      text: "Conheça as atividades, acompanhe as próximas oficinas e descubra como participar.",
      buttons: [ { label: "Entre em contato", to: "/contato" }, { label: "Veja as notícias", to: "/noticias" } ],
      bg: "red",
      image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1400&q=80",
    },
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
    about: [
      "O projeto Barro, Forma e Identidade oferece experiências de criação por meio da cerâmica, da modelagem e da pintura de peças. A proposta aproxima os participantes das possibilidades expressivas do barro e valoriza a produção manual como prática cultural.",
      "As oficinas apresentam os materiais, as ferramentas e as diferentes etapas de criação, desde a preparação da argila até a modelagem, o acabamento e a pintura. Cada peça é desenvolvida a partir da experimentação e das referências trazidas pelos próprios participantes.",
      "Ao trabalhar com formas, texturas e volumes, o projeto fortalece a criatividade, a concentração e a percepção de que cada objeto artesanal pode carregar memórias, identidades e modos próprios de interpretar o território.",
    ],
    activities: [
      { title: "Conhecimento dos materiais", text: "Estudo do barro, ferramentas e ambiente de trabalho.", color: "orange" },
      { title: "Preparação da argila", text: "Sova, hidratação e preparo da argila para o trabalho.", color: "red" },
      { title: "Modelagem manual", text: "Técnicas de construção livre e em placas.", color: "gold" },
      { title: "Criação de objetos", text: "Desenvolvimento de peças utilitárias e decorativas.", color: "green" },
      { title: "Pintura e acabamento", text: "Aplicação de engobes, pigmentos e finalizações.", color: "turquoise" },
      { title: "Exposição das peças", text: "Mostras coletivas apresentando as produções.", color: "petrol" },
    ],
    techniqueCards: [
      { name: "Modelagem manual", text: "Construção livre com pinçado e placas." },
      { name: "Cerâmica decorativa", text: "Peças de valor estético e cultural." },
      { name: "Esculturas", text: "Formas volumétricas com identidade autoral." },
      { name: "Objetos utilitários", text: "Vasos, potes e utensílios feitos à mão." },
      { name: "Pintura em peças", text: "Aplicação de pigmentos e engobes coloridos." },
      { name: "Acabamentos artesanais", text: "Texturas, lixamentos e detalhes finais." },
    ],
    cta: {
      title: "Cada forma carrega a presença e a identidade de quem cria.",
      text: "Acompanhe as oficinas e conheça as experiências desenvolvidas com cerâmica e modelagem.",
      buttons: [ { label: "Entre em contato", to: "/contato" }, { label: "Veja a galeria", to: "/galeria" } ],
      bg: "orange",
      image: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1400&q=80",
    },
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
    about: [
      "O projeto Artesanato que Gera Renda fortalece artesãs e artesãos que desejam aprimorar seus produtos, organizar a produção e ampliar as possibilidades de comercialização. A formação integra conhecimentos técnicos, planejamento e estratégias de economia criativa.",
      "As atividades abordam desenvolvimento de produtos, acabamento, precificação, apresentação das peças, fotografia, divulgação, atendimento e participação em feiras. Os participantes são orientados a reconhecer os custos envolvidos na produção e a comunicar melhor o valor cultural e manual de seus trabalhos.",
      "O projeto compreende o artesanato como expressão cultural e também como possibilidade de autonomia. Por isso, combina criação, formação e circulação, respeitando as características de cada participante e incentivando redes locais de colaboração.",
    ],
    activities: [
      { title: "Desenvolvimento de produtos", text: "Refino de linhas de peças e coleções autorais.", color: "green" },
      { title: "Melhoria do acabamento", text: "Padronização e cuidado nos detalhes finais.", color: "gold" },
      { title: "Organização da produção", text: "Planejamento de tempo, insumos e etapas.", color: "petrol" },
      { title: "Precificação", text: "Cálculo de custos, tempo e valor cultural.", color: "red" },
      { title: "Fotografia e divulgação", text: "Imagens, redes sociais e comunicação de produto.", color: "turquoise" },
      { title: "Preparação para feiras", text: "Apresentação, montagem e atendimento em eventos.", color: "orange" },
    ],
    techniqueCards: [
      { name: "Produtos têxteis", text: "Bolsas, acessórios e peças autorais em tecido." },
      { name: "Acessórios", text: "Peças de vestuário e adornos artesanais." },
      { name: "Objetos decorativos", text: "Itens para casa produzidos manualmente." },
      { name: "Peças sustentáveis", text: "Uso consciente de materiais e reaproveitamento." },
      { name: "Embalagens artesanais", text: "Apresentação cuidadosa para valorizar o produto." },
      { name: "Produtos para feiras", text: "Linhas preparadas para exposição e venda." },
    ],
    cta: {
      title: "Quando criação e conhecimento se encontram, novas oportunidades ganham forma.",
      text: "Conheça as ações de formação, circulação e fortalecimento do trabalho artesanal.",
      buttons: [ { label: "Entre em contato", to: "/contato" }, { label: "Veja as notícias", to: "/noticias" } ],
      bg: "green",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=80",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);