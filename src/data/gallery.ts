export type GalleryPhoto = { src: string; caption: string };
export type GalleryGroup = { title: string; date: string; description: string; photos: GalleryPhoto[] };
export const galleryByYear: Record<string, { description: string; groups: GalleryGroup[] }> = {
  "2026": {
    description: "Registros do primeiro ciclo formativo e das atividades comunitárias do ano.",
    groups: [
      {
        title: "Abertura das Oficinas de Bordado",
        date: "Março de 2026",
        description: "Turma inicial reunida no ateliê para os primeiros pontos e apresentação das mestras.",
        photos: [
          { src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80", caption: "Turma inicial de bordado" },
          { src: "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=1000&q=80", caption: "Materiais em preparação" },
          { src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80", caption: "Mãos que criam" },
          { src: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=1000&q=80", caption: "Detalhe de peça finalizada" },
        ],
      },
      {
        title: "Ateliê de Cerâmica",
        date: "Abril de 2026",
        description: "Sessão de modelagem em argila com foco em texturas e formas orgânicas.",
        photos: [
          { src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=80", caption: "Modelagem em argila" },
          { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80", caption: "Peças no torno" },
          { src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80", caption: "Acabamento das peças" },
        ],
      },
      {
        title: "Feira Coletiva de Artesanato",
        date: "Maio de 2026",
        description: "Encontro com 40 artesãs apresentando produções do ciclo.",
        photos: [
          { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", caption: "Feira coletiva" },
          { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80", caption: "Exposição das peças" },
          { src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80", caption: "Roda de escuta" },
        ],
      },
    ],
  },
  "2025": {
    description: "Um ano marcado pela consolidação das trilhas formativas.",
    groups: [
      {
        title: "Ciclo Têxtil",
        date: "Abril de 2025",
        description: "Bordados coletivos e experimentações em costura criativa.",
        photos: [
          { src: "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=1000&q=80", caption: "Ciclo têxtil" },
          { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80", caption: "Bordados coletivos" },
        ],
      },
      {
        title: "Encontro Institucional",
        date: "Agosto de 2025",
        description: "Reunião com parceiros e apresentação dos resultados do semestre.",
        photos: [
          { src: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=1000&q=80", caption: "Encontro institucional" },
          { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80", caption: "Formação continuada" },
        ],
      },
    ],
  },
  "2024": {
    description: "Ampliação das parcerias e novos projetos formativos.",
    groups: [
      {
        title: "Feira de Artesanato",
        date: "Outubro de 2024",
        description: "Primeira grande feira aberta ao público na sede do Ponto de Cultura.",
        photos: [
          { src: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1000&q=80", caption: "Feira de artesanato" },
          { src: "https://images.unsplash.com/photo-1556909195-4e5cbe07f79d?auto=format&fit=crop&w=1000&q=80", caption: "Encontro entre gerações" },
        ],
      },
      {
        title: "Rodas Comunitárias",
        date: "Junho de 2024",
        description: "Encontros para escuta e planejamento coletivo de novas ações.",
        photos: [
          { src: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=1000&q=80", caption: "Peças em desenvolvimento" },
          { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", caption: "Roda comunitária" },
        ],
      },
    ],
  },
  "2023": {
    description: "Momentos de escuta e criação coletiva.",
    groups: [
      {
        title: "Encontros no Território",
        date: "Julho de 2023",
        description: "Primeiros diálogos com moradores e mapeamento de saberes.",
        photos: [
          { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80", caption: "Encontros no território" },
          { src: "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?auto=format&fit=crop&w=1000&q=80", caption: "Mostra de produtos" },
        ],
      },
      {
        title: "Ateliê Aberto",
        date: "Setembro de 2023",
        description: "Primeiras sessões abertas de cerâmica com público visitante.",
        photos: [
          { src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80", caption: "Cerâmica no ateliê" },
        ],
      },
    ],
  },
};

export const galleryYears = Object.keys(galleryByYear).sort((a, b) => Number(b) - Number(a));