import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Sprout, Leaf, Brush, Package, TreeDeciduous, Recycle, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { partners } from "@/data/site";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
import { ThreadLine, StitchLine, BlobShape, ConcentricRings, TriangleBand, NeedleIcon, YarnIcon, PotteryIcon, ScissorsIcon, DotBadge } from "@/components/site/CraftGraphics";
import craftEmbroidery from "@/assets/craft-embroidery.jpg";
import craftCeramic from "@/assets/craft-ceramic.jpg";
import craftWorkshop from "@/assets/craft-workshop.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ponto de Cultura — Artesanato, formação e saberes tradicionais" },
      { name: "description", content: "Formação cultural, geração de renda, inclusão produtiva e valorização dos saberes por meio do artesanato." },
      { property: "og:title", content: "Ponto de Cultura" },
      { property: "og:description", content: "Saberes que ganham forma, histórias que permanecem." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <HeroCarousel />
      <Presentation />
      <FeaturedProjects />
      <Techniques />
      <NewsSection />
      <Partners />
      <FinalCTA />
    </>
  );
}

/* ----------------------- Hero Carousel ----------------------- */

type Slide = {
  eyebrow: string;
  title: React.ReactNode;
  text: string;
  primary: { label: string; to: string };
  secondary: { label: string; to: string };
  image: string;
  alt: string;
  accent: string;
  decor: "slide1" | "slide2" | "slide3";
};

const slides: Slide[] = [
  {
    eyebrow: "Ponto de Cultura de Artesanato",
    title: <>Saberes feitos à mão <span className="text-[color:var(--brand-gold)]">transformam histórias</span> e criam novos caminhos.</>,
    text: "Oficinas, encontros e projetos que preservam técnicas artesanais, fortalecem vínculos e transformam criatividade em autonomia.",
    primary: { label: "Conheça nossos projetos", to: "/projetos" },
    secondary: { label: "Quem somos", to: "/quem-somos" },
    image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1800&q=80",
    alt: "Grupo de pessoas em oficina artesanal comunitária",
    accent: "var(--brand-red)",
    decor: "slide1",
  },
  {
    eyebrow: "Formação e Criação",
    title: <>Cada técnica compartilhada mantém viva uma <span className="text-[color:var(--brand-gold)]">parte da nossa cultura</span>.</>,
    text: "Bordado, crochê, costura, cerâmica, pintura e outras práticas tornam-se experiências de aprendizagem, expressão e convivência.",
    primary: { label: "Explore os projetos", to: "/projetos" },
    secondary: { label: "Veja a galeria", to: "/galeria" },
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80",
    alt: "Mãos bordando um pano em bastidor",
    accent: "var(--brand-turquoise)",
    decor: "slide2",
  },
  {
    eyebrow: "Artesanato e Autonomia",
    title: <>Criar também é fortalecer trajetórias e <span className="text-[color:var(--brand-gold)]">ampliar oportunidades</span>.</>,
    text: "Formação, acabamento, organização da produção e participação em feiras ajudam artesãs e artesãos a apresentar e valorizar seus trabalhos.",
    primary: { label: "Conheça as ações", to: "/projetos" },
    secondary: { label: "Entre em contato", to: "/contato" },
    image: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&w=1800&q=80",
    alt: "Feira de artesanato com pessoas apresentando peças",
    accent: "var(--brand-green)",
    decor: "slide3",
  },
];

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return reduced;
}

function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const reduced = usePrefersReducedMotion();
  const touchStartX = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused || hovered || reduced) return;
    const t = window.setInterval(next, 7000);
    return () => window.clearInterval(t);
  }, [paused, hovered, reduced, next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!trackRef.current) return;
      const active = document.activeElement;
      if (!trackRef.current.contains(active)) return;
      if (e.key === "ArrowRight") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    touchStartX.current = null;
  };

  return (
    <section
      ref={trackRef}
      className="relative overflow-hidden bg-[color:var(--brand-petrol)]"
      aria-roledescription="carrossel"
      aria-label="Destaques do Ponto de Cultura"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      tabIndex={-1}
    >
      <div className="relative h-[560px] sm:h-[600px] md:h-[640px] lg:h-[680px]">
        {slides.map((s, i) => (
          <article
            key={i}
            className="absolute inset-0 transition-opacity duration-[900ms] ease-in-out"
            style={{ opacity: i === index ? 1 : 0, pointerEvents: i === index ? "auto" : "none" }}
            aria-hidden={i !== index}
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slides.length}`}
          >
            <img src={s.image} alt={s.alt} className="absolute inset-0 h-full w-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
            {/* gradient overlays */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(6,59,74,0.85) 0%, rgba(6,59,74,0.55) 45%, rgba(6,59,74,0.15) 75%, rgba(6,59,74,0.05) 100%)" }} />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, rgba(6,59,74,0.9) 0%, rgba(6,59,74,0.35) 55%, rgba(6,59,74,0.2) 100%)" }} />

            <SlideDecor variant={s.decor} />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-end px-4 pb-24 sm:items-center sm:px-6 sm:pb-0 lg:px-8">
              <div className="max-w-2xl text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] backdrop-blur">
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.accent }} />
                  {s.eyebrow}
                </span>
                <h1 className="mt-4 font-display text-3xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
                  {s.title}
                </h1>
                <ThreadLine className="mt-4 h-2.5 w-28" color={s.accent} />
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{s.text}</p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Link to={s.primary.to} className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-red)] px-5 py-3 text-sm font-bold text-white shadow-[0_5px_0_0_rgba(0,0,0,0.25)] hover:translate-y-[2px] hover:shadow-[0_3px_0_0_rgba(0,0,0,0.25)] transition">
                    {s.primary.label} <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to={s.secondary.to} className="inline-flex items-center justify-center rounded-full border-2 border-white/70 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur hover:bg-white hover:text-[color:var(--brand-petrol)] transition">
                    {s.secondary.label}
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}

        {/* Setas */}
        <button onClick={prev} aria-label="Slide anterior" className="absolute left-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/85 p-2.5 text-[color:var(--brand-petrol)] shadow-lg backdrop-blur hover:bg-white sm:block">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Próximo slide" className="absolute right-2 top-1/2 z-20 hidden -translate-y-1/2 rounded-full bg-white/85 p-2.5 text-[color:var(--brand-petrol)] shadow-lg backdrop-blur hover:bg-white sm:block">
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Controles inferiores */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full bg-black/35 px-3 py-2 backdrop-blur">
          <button
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? "Reproduzir carrossel" : "Pausar carrossel"}
            className="grid h-7 w-7 place-items-center rounded-full bg-white/90 text-[color:var(--brand-petrol)] hover:bg-white"
          >
            {paused || reduced ? <Play className="h-3.5 w-3.5" /> : <Pause className="h-3.5 w-3.5" />}
          </button>
          <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar slide">
            {slides.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para o slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={"h-2.5 rounded-full transition-all " + (i === index ? "w-8 bg-white" : "w-2.5 bg-white/50 hover:bg-white/80")}
              />
            ))}
          </div>
        </div>

        <div aria-live="polite" className="sr-only">Slide {index + 1} de {slides.length}: {slides[index].eyebrow}</div>
      </div>
    </section>
  );
}

function SlideDecor({ variant }: { variant: Slide["decor"] }) {
  if (variant === "slide1") {
    return (
      <>
        <BlobShape className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 opacity-25" color="var(--brand-red)" />
        <StitchLine className="pointer-events-none absolute right-6 top-8 hidden h-2 w-40 opacity-70 md:block" color="#ffffff" />
        <div className="pointer-events-none absolute right-16 top-16 hidden h-16 w-16 rotate-12 rounded bg-[color:var(--brand-gold)]/40 md:block" aria-hidden />
        <div className="pointer-events-none absolute right-40 top-32 hidden h-4 w-4 rotate-45 bg-[color:var(--brand-red)] md:block" aria-hidden />
        <ConcentricRings className="pointer-events-none absolute right-10 bottom-24 hidden h-24 w-24 opacity-60 md:block" color="var(--brand-gold)" />
      </>
    );
  }
  if (variant === "slide2") {
    return (
      <>
        <BlobShape className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-25" color="var(--brand-turquoise)" />
        <div className="pointer-events-none absolute left-8 top-16 hidden h-24 w-24 rounded-full border-[6px] border-dashed border-[color:var(--brand-gold)] opacity-70 md:block" aria-hidden />
        <div className="pointer-events-none absolute right-10 bottom-24 hidden h-14 w-14 rounded-full bg-[color:var(--brand-orange)]/70 md:block" aria-hidden />
        <StitchLine className="pointer-events-none absolute left-24 bottom-16 hidden h-2 w-52 opacity-70 md:block" color="var(--brand-gold)" />
      </>
    );
  }
  return (
    <>
      <BlobShape className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 opacity-25" color="var(--brand-green)" />
      <div className="pointer-events-none absolute right-16 top-12 hidden h-20 w-28 -rotate-6 rounded-lg bg-white/85 shadow-md md:block" aria-hidden>
        <div className="mt-2 mx-3 h-1 rounded bg-[color:var(--brand-red)]" />
        <div className="mt-1 mx-3 h-1 rounded bg-[color:var(--brand-gold)]" />
      </div>
      <TriangleBand className="pointer-events-none absolute bottom-14 left-8 hidden h-3 w-44 md:block" color="var(--brand-gold)" />
      <div className="pointer-events-none absolute right-10 bottom-20 hidden h-16 w-16 rounded-full border-4 border-[color:var(--brand-gold)] md:block" aria-hidden />
    </>
  );
}

/* ----------------------- Institucional ----------------------- */

function Presentation() {
  const areas = [
    "Formação cultural",
    "Artesanato e geração de renda",
    "Valorização dos saberes tradicionais",
    "Inclusão produtiva",
    "Desenvolvimento comunitário",
  ];
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[color:var(--brand-orange)]" />
          <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full border-[6px] border-dashed border-[color:var(--brand-turquoise)]" />
          <div className="relative overflow-hidden rounded-3xl border-8 border-white shadow-2xl">
            <img src={craftWorkshop} alt="Mulheres em oficina de tecelagem" className="h-[420px] w-full object-cover" />
          </div>
          <StitchLine className="mt-6 h-2 w-64" color="var(--brand-red)" />
        </div>
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)]/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-red)]">
            <NeedleIcon className="h-3 w-3" /> Institucional
          </span>
          <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-5xl">
            Arte, cultura e <span className="text-[color:var(--brand-orange)]">transformação social</span>
          </h2>
          <p className="mt-5 text-foreground/75">
            Somos uma organização dedicada à valorização dos saberes artesanais como caminho para autonomia, convivência e desenvolvimento comunitário. Trabalhamos com processos formativos que aproximam gerações e fortalecem a produção cultural do território.
          </p>
          <ul className="mt-6 space-y-2.5">
            {areas.map((a, i) => (
              <li key={a} className="flex items-center gap-3 text-sm">
                <span className="h-3 w-3 rotate-45" style={{ background: ["#E41F26","#FF7A00","#FFB400","#B8DA4A","#13B7DF"][i] }} />
                <span className="font-semibold text-foreground/85">{a}</span>
              </li>
            ))}
          </ul>
          <Link to="/quem-somos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-petrol)] px-5 py-3 text-sm font-bold text-white hover:bg-[color:var(--brand-red)] transition">
            Conheça quem somos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const colors: Record<string, string> = { red: "var(--brand-red)", orange: "var(--brand-orange)", green: "var(--brand-green)", petrol: "var(--brand-petrol)" };
  return (
    <section className="relative bg-[color:var(--brand-sand)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Projetos</span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Projetos que transformam <span className="text-[color:var(--brand-red)]">saberes em oportunidades</span></h2>
          </div>
          <Link to="/projetos" className="inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-red)] hover:underline">Ver todos os projetos <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.hero} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute top-4 left-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-md" style={{ backgroundColor: colors[p.color] }}>{p.category}</span>
                <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full opacity-70" style={{ backgroundColor: colors[p.color] }} />
                <TriangleBand className="absolute bottom-0 left-0 h-3 w-full opacity-90" color={colors[p.color]} />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-extrabold text-[color:var(--brand-petrol)]">{p.title}</h3>
                <ThreadLine className="mt-2 h-2 w-16" color={colors[p.color]} />
                <p className="mt-3 flex-1 text-sm text-foreground/75">{p.summary}</p>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex items-center gap-1 text-sm font-bold" style={{ color: colors[p.color] }}>
                  Conheça o projeto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Techniques() {
  const items = [
    { name: "Bordado", Icon: NeedleIcon, desc: "Pontos, cores e narrativas em tecido.", color: "var(--brand-red)" },
    { name: "Costura", Icon: ScissorsIcon, desc: "Peças utilitárias e criativas.", color: "var(--brand-orange)" },
    { name: "Crochê", Icon: YarnIcon, desc: "Tramas leves e delicadas.", color: "var(--brand-gold)" },
    { name: "Cerâmica", Icon: PotteryIcon, desc: "Formas moldadas à mão.", color: "var(--brand-green)" },
    { name: "Pintura", Icon: Brush, desc: "Traços que revelam identidades.", color: "var(--brand-turquoise)" },
    { name: "Madeira", Icon: TreeDeciduous, desc: "Objetos entalhados e utilitários.", color: "var(--brand-petrol)" },
    { name: "Papel", Icon: Package, desc: "Recorte, dobra e composição.", color: "var(--brand-red)" },
    { name: "Reciclagem", Icon: Recycle, desc: "Materiais que ganham nova vida.", color: "var(--brand-green)" },
    { name: "Fibras naturais", Icon: Leaf, desc: "Trançados sustentáveis.", color: "var(--brand-orange)" },
    { name: "Acessórios", Icon: Sprout, desc: "Detalhes que carregam história.", color: "var(--brand-turquoise)" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-orange)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-orange)]">Técnicas</span>
        <h2 className="mt-3 font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Técnicas e saberes que atravessam o <span className="text-[color:var(--brand-red)]">Ponto de Cultura</span></h2>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ name, Icon, desc, color }) => (
          <div key={name} className="group relative overflow-hidden rounded-2xl bg-white p-5 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-lg transition group-hover:scale-110" style={{ background: color }}>
              <Icon className="h-6 w-6" color="#fff" />
            </div>
            <div className="mt-4 font-display font-extrabold text-[color:var(--brand-petrol)]">{name}</div>
            <p className="mt-1 text-xs text-foreground/65">{desc}</p>
            <span className="absolute -bottom-4 -right-4 h-10 w-10 rounded-full opacity-15" style={{ background: color }} />
          </div>
        ))}
      </div>
    </section>
  );
}

function NewsSection() {
  const recent = news.slice(0, 3);
  return (
    <section className="bg-[color:var(--brand-sand)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-turquoise)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Notícias</span>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Últimas <span className="text-[color:var(--brand-orange)]">atualizações</span></h2>
          </div>
          <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-red)] hover:underline">Ver todas as notícias <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recent.map((n, i) => {
            const tagColor = ["var(--brand-red)","var(--brand-orange)","var(--brand-turquoise)"][i % 3];
            return (
              <article key={n.slug} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={n.cover} alt="" className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow" style={{ background: tagColor }}>{n.tag}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-xs text-foreground/60">
                    <span>{new Date(n.date).toLocaleDateString("pt-BR")}</span>
                  </div>
                  <h3 className="mt-2 line-clamp-2 font-display text-lg font-extrabold text-[color:var(--brand-petrol)]">{n.title}</h3>
                  <p className="mt-2 flex-1 line-clamp-3 text-sm text-foreground/75">{n.excerpt}</p>
                  <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-bold" style={{ color: tagColor }}>
                    Leia a notícia <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const hasPartners = partners.length > 0;
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-petrol)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Parcerias</span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)] sm:text-4xl">Parceiros e apoiadores</h2>
          <ThreadLine className="mx-auto mt-3 h-2 w-24" color="var(--brand-red)" />
          <p className="mt-4 text-sm text-foreground/75">
            Esta área reúne instituições, coletivos e organizações que contribuem para a realização e o fortalecimento das nossas ações.
          </p>
        </div>

        {hasPartners ? (
          <ul className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {partners.map((p) => {
              const content = (
                <div className="flex h-24 items-center justify-center rounded-xl bg-white p-4 ring-1 ring-black/5 transition hover:shadow-md">
                  <img src={p.logo} alt={p.alt} className="max-h-full max-w-full object-contain" loading="lazy" />
                </div>
              );
              return (
                <li key={p.name}>
                  {p.url ? (
                    <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={p.name}>{content}</a>
                  ) : content}
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border-2 border-dashed border-[color:var(--brand-petrol)]/20 bg-[color:var(--brand-sand)]/60 px-6 py-8 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-petrol)]/60">Aviso administrativo</p>
            <p className="mt-2 text-sm text-foreground/75">Logomarcas serão adicionadas em breve.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="px-4 py-14 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid w-full max-w-[1140px] overflow-hidden rounded-[26px] text-white lg:grid-cols-[1fr_32%]" style={{ backgroundColor: "var(--brand-petrol)" }}>
        <div className="relative px-6 py-10 sm:px-10 sm:py-10">
          <BlobShape className="pointer-events-none absolute -left-14 -top-14 h-48 w-48 opacity-15" color="var(--brand-gold)" />
          <div className="pointer-events-none absolute right-6 top-5 hidden h-3 w-3 rotate-12 rounded-sm bg-[color:var(--brand-red)] sm:block" aria-hidden />
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Participe
          </div>
          <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight sm:text-[30px] lg:text-[36px]">
            Faça parte de uma história construída com criatividade e colaboração.
          </h2>
          <ThreadLine className="mt-3 h-2 w-20" color="var(--brand-gold)" />
          <p className="mt-3 line-clamp-3 max-w-xl text-sm text-white/90">
            Conheça os projetos, acompanhe as atividades e descubra como se aproximar das ações do Ponto de Cultura.
          </p>
          <div className="mt-5 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <Link to="/projetos" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-5 py-2.5 text-sm font-semibold text-[color:var(--brand-petrol)] hover:opacity-90">
              Conheça os projetos <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contato" className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
              Entre em contato
            </Link>
          </div>
        </div>
        <div className="relative min-h-[180px] lg:min-h-full">
          <img src={craftEmbroidery} alt="Mãos bordando durante oficina" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, var(--brand-petrol) 0%, transparent 55%)" }} />
          <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, var(--brand-petrol) 0%, transparent 35%)" }} />
          <StitchLine className="pointer-events-none absolute left-3 top-3 hidden h-2 w-24 lg:block" color="#ffffff" />
          <DotBadge className="pointer-events-none absolute bottom-3 right-3 hidden h-10 w-10 lg:block" color="var(--brand-gold)" />
          <img src={craftCeramic} alt="" className="pointer-events-none absolute -bottom-4 -left-4 hidden h-16 w-16 rounded-full border-4 border-white shadow-md lg:block" />
        </div>
      </div>
    </section>
  );
}
