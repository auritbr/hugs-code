import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos — Ponto de Cultura" },
      { name: "description", content: "Projetos formativos que unem criação, memória e autonomia." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosLayout,
});

function ProjetosLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId.startsWith("/projetos/") && m.routeId !== "/projetos/");
  if (isChild) return <Outlet />;
  return <ProjetosIndex />;
}

const colorMap: Record<string, string> = {
  red: "var(--brand-red)", orange: "var(--brand-orange)", green: "var(--brand-green)", petrol: "var(--brand-petrol)",
};

function ProjetosIndex() {
  const steps = ["Escuta", "Planejamento", "Formação", "Produção", "Apresentação", "Avaliação"];
  return (
    <>
      <PageHeader
        eyebrow="Projetos"
        title="Projetos que unem criação, memória e autonomia"
        description="Trilhas formativas construídas a partir do diálogo com o território, articulando técnicas artesanais, formação continuada e geração de oportunidades."
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
      />

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground">
          Cada projeto do Ponto de Cultura é planejado a partir da escuta com o território e da experiência acumulada pelas mestras e mestres artesãos. As trilhas se articulam com respeito aos tempos de aprendizagem, valorizando processos coletivos e trocas entre gerações.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article key={p.slug} className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.hero} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest" style={{ color: colorMap[p.color] }}>{p.category}</div>
                {i === 0 && <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full" style={{ backgroundColor: colorMap[p.color] }} />}
                {i === 1 && <div className="absolute inset-x-0 bottom-0 h-4" style={{ backgroundColor: colorMap[p.color] }} />}
                {i === 2 && <div className="absolute bottom-0 left-0 h-16 w-16 rounded-tr-3xl" style={{ backgroundColor: colorMap[p.color] }} />}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.summary}</p>
                <div className="mt-4 text-xs text-muted-foreground">
                  <div><strong className="text-foreground">Público:</strong> {p.audience}</div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {p.techniques.slice(0, 4).map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2 py-0.5">{t}</span>
                    ))}
                  </div>
                </div>
                <Link to="/projetos/$slug" params={{ slug: p.slug }} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold" style={{ color: colorMap[p.color] }}>
                  Explore o projeto <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Como os projetos são construídos</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {steps.map((s, i) => (
              <div key={s} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-xs font-semibold text-[color:var(--brand-red)]">Etapa {i + 1}</div>
                <div className="mt-1 font-bold">{s}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[{ v: "1.200+", l: "participantes" }, { v: "40", l: "oficinas/ano" }, { v: "6", l: "áreas artesanais" }].map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6"><div className="text-3xl font-bold text-primary">{s.v}</div><div className="text-sm text-muted-foreground">{s.l}</div></div>
          ))}
        </div>
        <blockquote className="mt-10 max-w-3xl rounded-2xl bg-[color:var(--brand-sand)] p-6 italic text-foreground">
          “Aqui, cada projeto é uma escuta que se transforma em prática. É bonito ver como algo tão simples quanto uma linha pode mudar tantas histórias.” <div className="mt-3 not-italic text-sm text-muted-foreground">— Educadora do Ponto de Cultura</div>
        </blockquote>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Quer conhecer os detalhes de cada projeto?</h2>
          <Link to="/contato" className="rounded-full bg-[color:var(--brand-gold)] px-5 py-3 text-sm font-semibold text-primary">Entre em contato</Link>
        </div>
      </section>
    </>
  );
}