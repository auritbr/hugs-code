import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Users, HandHeart, Palette, Sprout, Leaf, Scissors, Brush, Package, Layers, TreeDeciduous, Recycle } from "lucide-react";
import { impactStats, partners } from "@/data/site";
import { projects } from "@/data/projects";
import { news } from "@/data/news";

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
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 right-1/3 h-72 w-72 rounded-full bg-[color:var(--brand-gold)]/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[color:var(--brand-turquoise)]/10 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:py-20 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
            <Sparkles className="h-3 w-3" /> Ponto de Cultura
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl">
            Saberes que ganham forma, <span className="text-[color:var(--brand-red)]">histórias</span> que permanecem.
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Por meio do artesanato, da formação e da convivência, transformamos conhecimentos tradicionais em oportunidades, autonomia e desenvolvimento cultural.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/quem-somos" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition">
              Conheça nossa história <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/projetos" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold hover:bg-secondary transition">
              Explore os projetos
            </Link>
          </div>
        </div>

        {/* Composição visual */}
        <div className="relative h-[420px] lg:h-[520px]">
          <div className="absolute inset-0">
            <div className="absolute top-6 right-4 h-64 w-64 rounded-full bg-[color:var(--brand-red)]/15" />
            <div className="absolute bottom-8 left-2 h-40 w-40 rounded-full border-[6px] border-[color:var(--brand-gold)]/60" />
            <div className="absolute top-10 left-10 h-20 w-40 craft-dots text-[color:var(--brand-turquoise)] opacity-40" />
          </div>
          <div className="absolute right-6 top-10 h-80 w-64 overflow-hidden rounded-[40%_60%_45%_55%/45%_50%_50%_55%] shadow-xl">
            <img src="https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80" alt="Artesã bordando" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-4 left-2 h-52 w-52 overflow-hidden rounded-3xl border-8 border-background shadow-xl">
            <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80" alt="Modelagem em cerâmica" className="h-full w-full object-cover" />
          </div>
          <div className="absolute bottom-8 right-2 rounded-2xl border border-border bg-card p-4 shadow-lg">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Impacto</div>
            <div className="mt-1 text-2xl font-bold text-primary">1.200+</div>
            <div className="text-xs text-muted-foreground">participantes alcançados</div>
          </div>
        </div>
      </div>
      <div className="craft-line text-primary/40" />
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
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[color:var(--brand-gold)]/30" />
          <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=800&q=80" alt="Oficina coletiva" className="relative rounded-2xl shadow-xl" />
        </div>
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">Institucional</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Arte, cultura e transformação social</h2>
          <p className="mt-4 text-muted-foreground">
            Somos uma organização dedicada à valorização dos saberes artesanais como caminho para autonomia, convivência e desenvolvimento comunitário. Trabalhamos com processos formativos que aproximam gerações e fortalecem a produção cultural do território.
          </p>
          <ul className="mt-6 space-y-2">
            {areas.map((a) => (
              <li key={a} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-red)]" /> {a}
              </li>
            ))}
          </ul>
          <Link to="/quem-somos" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
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
      Icon: HandHeart, color: "var(--brand-red)",
    },
    {
      title: "Visão",
      text: "Ser reconhecida como referência na preservação de saberes, na formação de artesãos e na criação de oportunidades por meio da cultura.",
      Icon: Palette, color: "var(--brand-gold)",
    },
    {
      title: "Valores",
      text: "Respeito, ética, diversidade, cooperação, sustentabilidade, criatividade, transparência e compromisso com a comunidade.",
      Icon: Users, color: "var(--brand-turquoise)",
    },
  ];
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Nossos princípios</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Propósito que orienta cada ação</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cards.map(({ title, text, Icon, color }) => (
            <div key={title} className="relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl" style={{ backgroundColor: `color-mix(in oklab, ${color} 20%, white)` }}>
                <Icon className="h-6 w-6" style={{ color }} />
              </div>
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">{text}</p>
              <div className="mt-6 craft-line" style={{ color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactNumbers() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">Indicadores</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Números que refletem um trabalho coletivo</h2>
        </div>
        <p className="max-w-md text-sm text-muted-foreground">Cada dado abaixo representa ações construídas em parceria com participantes, educadores, comunidade e apoiadores.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
        {impactStats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-card p-6">
            <div className="text-3xl font-bold text-primary sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
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
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Projetos</span>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold sm:text-4xl">Projetos que transformam saberes em oportunidades</h2>
          </div>
          <Link to="/projetos" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            Ver todos os projetos <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.hero} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: colors[p.color] }}>{p.category}</span>
                {i === 0 && <div className="absolute bottom-0 left-0 h-14 w-14 rounded-tr-full" style={{ backgroundColor: colors[p.color] }} />}
                {i === 1 && <div className="absolute top-0 right-0 h-12 w-32 rounded-bl-3xl" style={{ backgroundColor: colors[p.color] }} />}
                {i === 2 && <div className="absolute bottom-0 right-0 h-16 w-16 rounded-tl-3xl" style={{ backgroundColor: colors[p.color] }} />}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: colors[p.color] }}>
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
    { name: "Bordado", Icon: Scissors, desc: "Pontos, cores e narrativas em tecido." },
    { name: "Costura", Icon: Scissors, desc: "Peças utilitárias e criativas." },
    { name: "Crochê", Icon: Layers, desc: "Tramas leves e delicadas." },
    { name: "Cerâmica", Icon: Palette, desc: "Formas moldadas à mão." },
    { name: "Pintura", Icon: Brush, desc: "Traços que revelam identidades." },
    { name: "Madeira", Icon: TreeDeciduous, desc: "Objetos entalhados e utilitários." },
    { name: "Papel", Icon: Package, desc: "Recorte, dobra e composição." },
    { name: "Reciclagem", Icon: Recycle, desc: "Materiais que ganham nova vida." },
    { name: "Fibras naturais", Icon: Leaf, desc: "Trançados sustentáveis." },
    { name: "Acessórios", Icon: Sprout, desc: "Detalhes que carregam história." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 max-w-2xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">Técnicas</span>
        <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Técnicas e saberes que atravessam o Ponto de Cultura</h2>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {items.map(({ name, Icon, desc }) => (
          <div key={name} className="group rounded-xl border border-border bg-card p-4 transition hover:bg-secondary">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div className="mt-3 font-semibold">{name}</div>
            <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
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
  return (
    <section className="bg-primary text-primary-foreground py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-2xl">
          <span className="text-[11px] font-semibold uppercase tracking-widest opacity-70">Processo</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Como acontecem as ações</h2>
        </div>
        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute top-6 left-8 right-8 hidden h-px bg-white/20 md:block" />
          {steps.map((s) => (
            <div key={s.n} className="relative">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-[color:var(--brand-gold)] text-primary font-bold">{s.n}</div>
              <h3 className="mt-4 font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm opacity-80">{s.text}</p>
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
    "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">Galeria</span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Momentos do Ponto de Cultura</h2>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">2026</span>
          <Link to="/galeria" search={{ ano: "2025" }} className="rounded-full border border-border px-3 py-1">2025</Link>
          <Link to="/galeria" search={{ ano: "2024" }} className="rounded-full border border-border px-3 py-1">2024</Link>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-4 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl">
          <img src={imgs[0]} alt="" className="h-full w-full object-cover" />
        </div>
        {imgs.slice(1).map((s, i) => (
          <div key={i} className="overflow-hidden rounded-2xl aspect-square md:aspect-auto">
            <img src={s} alt="" className="h-full w-full object-cover" />
          </div>
        ))}
      </div>
      <div className="mt-8">
        <Link to="/galeria" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          Ver galeria completa <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function NewsSection() {
  const recent = news.slice(0, 3);
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">Notícias</span>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Últimas atualizações</h2>
          </div>
          <Link to="/noticias" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">Ver todas as notícias <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {recent.map((n) => (
            <article key={n.slug} className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="aspect-[16/10] overflow-hidden"><img src={n.cover} alt="" className="h-full w-full object-cover" /></div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 font-semibold text-primary">{n.tag}</span>
                  <span>{new Date(n.date).toLocaleDateString("pt-BR")}</span>
                </div>
                <h3 className="mt-3 line-clamp-2 text-lg font-bold">{n.title}</h3>
                <p className="mt-2 flex-1 line-clamp-3 text-sm text-muted-foreground">{n.excerpt}</p>
                <Link to="/noticias/$slug" params={{ slug: n.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Leia a notícia <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-10 rounded-3xl bg-[color:var(--brand-sand)] p-8 lg:grid-cols-[280px_1fr] lg:items-center lg:p-12">
        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border-8 border-white shadow-lg">
          <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" alt="Participante" className="h-full w-full object-cover" />
        </div>
        <div>
          <div className="text-5xl font-bold text-[color:var(--brand-red)]">“</div>
          <p className="text-lg italic text-foreground leading-relaxed">
            Entrei buscando aprender bordado e encontrei uma comunidade. Hoje ensino, produzo e participo de feiras. O Ponto de Cultura mudou minha relação com o trabalho.
          </p>
          <div className="mt-4">
            <div className="font-semibold">Dona Célia</div>
            <div className="text-sm text-muted-foreground">Participante e educadora — Fios da Memória</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="border-y border-border bg-background py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">Parceiros e apoiadores</span>
          <p className="mt-2 text-sm text-muted-foreground">Nossas ações são construídas em parceria com organizações e apoiadores que fortalecem a cultura.</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
          {partners.map((p) => (
            <span key={p} className="text-sm font-semibold tracking-wide text-foreground/70">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="craft-dots absolute inset-0 opacity-10 text-white" />
      <div className="absolute -right-16 top-10 h-64 w-64 rounded-full border-[10px] border-[color:var(--brand-gold)]/50" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div>
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">
            Cada peça começa com um gesto. Cada transformação começa com uma oportunidade.
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">Conheça os projetos ou entre em contato para colaborar com o Ponto de Cultura.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/projetos" className="rounded-full bg-[color:var(--brand-gold)] px-5 py-3 text-sm font-semibold text-primary">Conheça os projetos</Link>
            <Link to="/contato" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Entre em contato</Link>
          </div>
        </div>
        <div className="relative hidden h-64 w-64 lg:block">
          <div className="absolute inset-0 overflow-hidden rounded-full border-8 border-white/20">
            <img src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=600&q=80" alt="Mãos produzindo" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
