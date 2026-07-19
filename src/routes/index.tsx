import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Users, HandHeart, Palette, Sprout, Leaf, Brush, Package, Layers, TreeDeciduous, Recycle } from "lucide-react";
import { impactStats, partners } from "@/data/site";
import { projects } from "@/data/projects";
import { news } from "@/data/news";
import { ThreadLine, StitchLine, BlobShape, ConcentricRings, WaveDivider, TriangleBand, NeedleIcon, YarnIcon, PotteryIcon, ScissorsIcon, DotBadge } from "@/components/site/CraftGraphics";

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
      <Hero />
      <Presentation />
      <MissionVision />
      <ImpactNumbers />
      <FeaturedProjects />
      <Techniques />
      <ProcessSteps />
      <GalleryPreview />
      <NewsSection />
      <Testimonial />
      <Partners />
      <FinalCTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-sand)]">
      <BlobShape className="pointer-events-none absolute -left-32 -top-24 h-[520px] w-[520px] opacity-30" color="var(--brand-gold)" />
      <BlobShape className="pointer-events-none absolute -right-40 top-20 h-[520px] w-[520px] opacity-20" color="var(--brand-turquoise)" />
      <ConcentricRings className="pointer-events-none absolute left-8 bottom-8 h-40 w-40 opacity-50" color="var(--brand-red)" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 pt-10 pb-20 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pt-16 lg:pb-24 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> Ponto de Cultura
          </span>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.98] text-[color:var(--brand-petrol)] sm:text-6xl lg:text-7xl">
            Saberes que <span className="relative inline-block text-[color:var(--brand-red)]">
              ganham forma
              <span className="brush-underline absolute -bottom-2 left-0 h-3 w-full text-[color:var(--brand-gold)]" />
            </span>, histórias que <em className="not-italic text-[color:var(--brand-turquoise)]">permanecem</em>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-foreground/75">
            Formação cultural, geração de renda e valorização dos saberes tradicionais por meio do artesanato feito à mão pela comunidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_0_0_var(--brand-petrol)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--brand-petrol)] transition-all">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-petrol)] bg-white px-6 py-3 text-sm font-bold text-[color:var(--brand-petrol)] hover:bg-[color:var(--brand-gold)] hover:border-[color:var(--brand-gold)] transition-all">
              Explore os projetos
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["#E41F26","#FFB400","#13B7DF","#B8DA4A"].map(c => (
                <span key={c} className="h-9 w-9 rounded-full border-2 border-white" style={{ background: c }} />
              ))}
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-[color:var(--brand-petrol)]">1.200+ pessoas</div>
              <div className="text-xs text-foreground/60">alcançadas pelas nossas oficinas e ações culturais</div>
            </div>
          </div>
        </div>

        {/* Composição visual — colagem artesanal */}
        <div className="relative h-[440px] lg:h-[560px]">
          {/* fundos geométricos */}
          <div className="absolute right-4 top-2 h-72 w-72 rounded-full bg-[color:var(--brand-red)]" />
          <div className="absolute right-16 top-16 h-52 w-52 rounded-full border-[6px] border-dashed border-[color:var(--brand-gold)]" />
          <div className="absolute bottom-4 left-8 h-24 w-24 rounded-full bg-[color:var(--brand-green)]" />
          <TriangleBand className="absolute left-0 bottom-24 h-5 w-40" color="var(--brand-turquoise)" />

          {/* foto principal — bordado */}
          <div className="absolute right-2 top-8 h-80 w-64 overflow-hidden rounded-[45%_55%_50%_50%/55%_50%_50%_45%] border-8 border-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80" alt="Artesã bordando à mão" className="h-full w-full object-cover" />
          </div>

          {/* foto secundária — cerâmica */}
          <div className="absolute bottom-2 left-2 h-56 w-56 overflow-hidden rounded-3xl border-8 border-white shadow-2xl rotate-[-4deg]">
            <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80" alt="Peça de cerâmica em modelagem" className="h-full w-full object-cover" />
          </div>

          {/* card flutuante */}
          <div className="absolute bottom-16 right-4 rounded-2xl bg-white p-4 shadow-xl border-l-4 border-[color:var(--brand-turquoise)] rotate-2">
            <div className="flex items-center gap-3">
              <YarnIcon className="h-8 w-8 text-[color:var(--brand-red)]" />
              <div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-[color:var(--brand-red)]">Oficinas ativas</div>
                <div className="text-2xl font-extrabold text-[color:var(--brand-petrol)]">40 turmas</div>
              </div>
            </div>
          </div>

          {/* Pastilha decorativa */}
          <DotBadge className="absolute top-4 left-4 h-14 w-14" color="var(--brand-gold)" />
        </div>
      </div>

      <WaveDivider className="h-12 w-full" color="#FFFFFF" />
    </section>
  );
}

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
            <img src="https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=800&q=80" alt="Mulheres em oficina de tecelagem" className="h-[420px] w-full object-cover" />
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

function MissionVision() {
  const cards = [
    {
      title: "Missão",
      text: "Promover o desenvolvimento humano, cultural e social por meio do artesanato, da educação, da criatividade e da valorização dos conhecimentos comunitários.",
      Icon: HandHeart, color: "var(--brand-red)", bg: "#FFE9E9",
    },
    {
      title: "Visão",
      text: "Ser reconhecida como referência na preservação de saberes, na formação de artesãos e na criação de oportunidades por meio da cultura.",
      Icon: Palette, color: "var(--brand-orange)", bg: "#FFEEDA",
    },
    {
      title: "Valores",
      text: "Respeito, ética, diversidade, cooperação, sustentabilidade, criatividade, transparência e compromisso com a comunidade.",
      Icon: Users, color: "var(--brand-turquoise)", bg: "#DDF4FB",
    },
  ];
  return (
    <section className="relative bg-[color:var(--brand-petrol)] py-24 text-white overflow-hidden">
      <div className="craft-weave absolute inset-0 text-white/50" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-petrol)]">Nossos princípios</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Propósito que orienta cada <span className="text-[color:var(--brand-gold)]">ação</span></h2>
        </div>
        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, text, Icon, color, bg }, i) => (
            <div key={title} className="relative flex flex-col rounded-3xl p-7 text-[color:var(--brand-petrol)] shadow-xl transition hover:-translate-y-1" style={{ background: bg, transform: `rotate(${i === 1 ? 0 : i === 0 ? -1.5 : 1.5}deg)` }}>
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg" style={{ backgroundColor: color }}>
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-extrabold">{title}</h3>
              <ThreadLine className="mt-2 h-2 w-24" color={color} />
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[color:var(--brand-petrol)]/80">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactNumbers() {
  const colors = ["var(--brand-red)","var(--brand-orange)","var(--brand-gold)","var(--brand-green)","var(--brand-turquoise)"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-turquoise)]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[color:var(--brand-turquoise)]">Indicadores</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Números que refletem um <span className="text-[color:var(--brand-red)]">trabalho coletivo</span></h2>
        </div>
        <p className="max-w-md text-sm text-foreground/70">Cada dado abaixo representa ações construídas em parceria com participantes, educadores, comunidade e apoiadores.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {impactStats.map((s, i) => (
          <div key={s.label} className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-md ring-1 ring-black/5 transition hover:-translate-y-1" style={{ borderTop: `6px solid ${colors[i % colors.length]}` }}>
            <div className="font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">{s.value}</div>
            <div className="mt-2 text-xs font-semibold text-foreground/70">{s.label}</div>
            <span className="absolute -bottom-4 -right-4 h-14 w-14 rounded-full opacity-15" style={{ background: colors[i % colors.length] }} />
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const colors: Record<string, string> = {
    red: "var(--brand-red)", orange: "var(--brand-orange)", green: "var(--brand-green)", petrol: "var(--brand-petrol)",
  };
  return (
    <section className="relative bg-[color:var(--brand-sand)] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Projetos</span>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Projetos que transformam <span className="text-[color:var(--brand-red)]">saberes em oportunidades</span></h2>
          </div>
          <Link to="/projetos" className="inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-red)] hover:underline">
            Ver todos os projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
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

function ProcessSteps() {
  const steps = [
    { n: "01", title: "Escuta da comunidade", text: "Diálogo com o território para identificar prioridades." },
    { n: "02", title: "Formação e experimentação", text: "Encontros formativos e exercícios abertos." },
    { n: "03", title: "Produção das peças", text: "Desenvolvimento das obras com acompanhamento." },
    { n: "04", title: "Exposição e oportunidades", text: "Circulação das peças em feiras e mostras." },
  ];
  const colors = ["var(--brand-red)","var(--brand-orange)","var(--brand-gold)","var(--brand-turquoise)"];
  return (
    <section className="relative bg-[color:var(--brand-red)] py-24 text-white overflow-hidden">
      <BlobShape className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 opacity-30" color="var(--brand-orange)" />
      <div className="craft-diagonal pointer-events-none absolute inset-0 text-white/10" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Processo</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold sm:text-5xl">Como acontecem <span className="text-[color:var(--brand-gold)]">as ações</span></h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute top-7 left-14 right-14 hidden md:block" aria-hidden="true">
            <StitchLine className="h-3 w-full text-white/40" color="rgba(255,255,255,0.6)" />
          </div>
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
              <div className="grid h-14 w-14 place-items-center rounded-full font-display text-lg font-extrabold text-[color:var(--brand-petrol)] shadow-lg" style={{ background: colors[i] === "var(--brand-red)" ? "#FFB400" : colors[i] }}>{s.n}</div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/85">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [
    "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-petrol)]">Galeria</span>
          <h2 className="mt-3 font-display text-4xl font-extrabold text-[color:var(--brand-petrol)] sm:text-5xl">Momentos do <span className="text-[color:var(--brand-turquoise)]">Ponto de Cultura</span></h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-[color:var(--brand-red)] px-4 py-1 font-bold text-white">2026</span>
          <Link to="/galeria" search={{ ano: "2025" }} className="rounded-full border-2 border-[color:var(--brand-petrol)]/20 px-4 py-1 font-semibold hover:border-[color:var(--brand-red)] hover:text-[color:var(--brand-red)]">2025</Link>
          <Link to="/galeria" search={{ ano: "2024" }} className="rounded-full border-2 border-[color:var(--brand-petrol)]/20 px-4 py-1 font-semibold hover:border-[color:var(--brand-red)] hover:text-[color:var(--brand-red)]">2024</Link>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-3xl border-4 border-white shadow-xl relative">
          <img src={imgs[0]} alt="" className="h-full w-full object-cover" />
          <TriangleBand className="absolute bottom-0 left-0 h-3 w-full" color="var(--brand-red)" />
        </div>
        {imgs.slice(1).map((s, i) => (
          <div key={i} className="overflow-hidden rounded-3xl aspect-square md:aspect-auto border-4 border-white shadow-md" style={{ background: ["#FFB400","#13B7DF","#E41F26","#B8DA4A"][i] }}>
            <img src={s} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/galeria" className="inline-flex items-center gap-1 text-sm font-bold text-[color:var(--brand-red)] hover:underline">
          Ver galeria completa <ArrowRight className="h-4 w-4" />
        </Link>
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
          );})}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="relative grid gap-10 rounded-[2.5rem] bg-gradient-to-br from-[color:var(--brand-gold)] to-[color:var(--brand-orange)] p-8 shadow-2xl lg:grid-cols-[300px_1fr] lg:items-center lg:p-12">
        <div className="craft-dots absolute inset-0 rounded-[2.5rem] text-white/25" />
        <div className="relative mx-auto h-60 w-60 overflow-hidden rounded-full border-8 border-white shadow-xl">
          <img src="https://images.unsplash.com/photo-1591189863430-ab87e120f312?auto=format&fit=crop&w=600&q=80" alt="Participante" className="h-full w-full object-cover" />
        </div>
        <div className="relative">
          <div className="font-display text-7xl font-extrabold leading-none text-[color:var(--brand-red)]">“</div>
          <p className="mt-2 font-display text-xl font-medium italic leading-relaxed text-[color:var(--brand-petrol)] sm:text-2xl">
            Entrei buscando aprender bordado e encontrei uma comunidade. Hoje ensino, produzo e participo de feiras. O Ponto de Cultura mudou minha relação com o trabalho.
          </p>
          <ThreadLine className="mt-5 h-3 w-32" color="var(--brand-red)" />
          <div className="mt-3">
            <div className="font-display text-lg font-bold text-[color:var(--brand-petrol)]">Dona Célia</div>
            <div className="text-sm text-[color:var(--brand-petrol)]/70">Participante e educadora — Fios da Memória</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-petrol)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-white">Parceiros e apoiadores</span>
          <p className="mt-3 text-sm text-foreground/70">Nossas ações são construídas em parceria com organizações e apoiadores que fortalecem a cultura.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {partners.map((p, i) => (
            <span key={p} className="rounded-full border-2 px-4 py-2 text-sm font-bold" style={{ borderColor: ["#E41F26","#FF7A00","#FFB400","#B8DA4A","#13B7DF","#063B4A"][i % 6], color: "#063B4A" }}>{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--brand-turquoise)] text-white">
      <div className="craft-diagonal absolute inset-0 text-white/15" aria-hidden="true" />
      <BlobShape className="absolute -right-32 -bottom-32 h-96 w-96 opacity-30" color="var(--brand-gold)" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">Junte-se a nós</span>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
            Cada peça começa com um <span className="text-[color:var(--brand-gold)]">gesto</span>. Cada transformação começa com uma <span className="text-[color:var(--brand-red)]">oportunidade</span>.
          </h2>
          <p className="mt-5 max-w-xl text-white/90">Conheça os projetos ou entre em contato para colaborar com o Ponto de Cultura.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projetos" className="rounded-full bg-[color:var(--brand-red)] px-6 py-3.5 text-sm font-bold text-white shadow-[0_6px_0_0_var(--brand-petrol)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--brand-petrol)] transition">Conheça os projetos</Link>
            <Link to="/contato" className="rounded-full border-2 border-white px-6 py-3 text-sm font-bold hover:bg-white hover:text-[color:var(--brand-turquoise)] transition">Entre em contato</Link>
          </div>
        </div>
        <div className="relative hidden h-72 w-72 lg:block">
          <div className="absolute inset-0 overflow-hidden rounded-full border-8 border-white shadow-2xl">
            <img src="https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=600&q=80" alt="Mãos bordando" className="h-full w-full object-cover" />
          </div>
          <DotBadge className="absolute -top-4 -left-4 h-16 w-16" color="var(--brand-red)" />
        </div>
      </div>
    </section>
  );
}
