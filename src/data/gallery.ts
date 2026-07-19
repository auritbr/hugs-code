export type GalleryPhoto = { src: string; caption: string };
export const galleryByYear: Record<string, { title: string; description: string; photos: GalleryPhoto[] }> = {
  "2026": {
    title: "Ações, oficinas e encontros de 2026",
    description: "Registros do primeiro ciclo formativo e das atividades comunitárias do ano.",
    photos: [
      { src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80", caption: "Oficina de bordado — turma inicial" },
      { src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=80", caption: "Modelagem em argila no ateliê" },
      { src: "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1000&q=80", caption: "Roda de escuta com o território" },
      { src: "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=1000&q=80", caption: "Detalhe de peça finalizada" },
      { src: "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=1000&q=80", caption: "Materiais em preparação" },
      { src: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1000&q=80", caption: "Mãos que criam" },
      { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80", caption: "Feira coletiva" },
      { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=80", caption: "Exposição das peças" },
    ],
  },
  "2025": {
    title: "Trajetória de 2025",
    description: "Um ano marcado pela consolidação das trilhas formativas.",
    photos: [
      { src: "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=1000&q=80", caption: "Ciclo têxtil" },
      { src: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=1000&q=80", caption: "Bordados coletivos" },
      { src: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1000&q=80", caption: "Cerâmica em processo" },
      { src: "https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=1000&q=80", caption: "Encontro institucional" },
      { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80", caption: "Formação continuada" },
      { src: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?auto=format&fit=crop&w=1000&q=80", caption: "Ateliê de cerâmica" },
    ],
  },
  "2024": {
    title: "Memórias de 2024",
    description: "Ampliação das parcerias e novos projetos formativos.",
    photos: [
      { src: "https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=1000&q=80", caption: "Feira de artesanato" },
      { src: "https://images.unsplash.com/photo-1556909195-4e5cbe07f79d?auto=format&fit=crop&w=1000&q=80", caption: "Encontro entre gerações" },
      { src: "https://images.unsplash.com/photo-1519222970733-f546218fa6d7?auto=format&fit=crop&w=1000&q=80", caption: "Peças em desenvolvimento" },
      { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80", caption: "Roda comunitária" },
    ],
  },
  "2023": {
    title: "Registros de 2023",
    description: "Momentos de escuta e criação coletiva.",
    photos: [
      { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80", caption: "Encontros no território" },
      { src: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1000&q=80", caption: "Cerâmica no ateliê" },
      { src: "https://images.unsplash.com/photo-1556909172-6ab63f18fd12?auto=format&fit=crop&w=1000&q=80", caption: "Mostra de produtos" },
    ],
  },
};

export const galleryYears = Object.keys(galleryByYear).sort((a, b) => Number(b) - Number(a));