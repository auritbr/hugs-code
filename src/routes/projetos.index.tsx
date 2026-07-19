import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/data/projects";
import { ArrowRight, Users } from "lucide-react";
import { StitchLine, ThreadLine, BlobShape } from "@/components/site/CraftGraphics";

export const Route = createFileRoute("/projetos/")({
  head: () => ({
    meta: [
      { title: "Projetos — Ponto de Cultura" },
      { name: "description", content: "Projetos formativos que unem criação, memória e autonomia." },
      { property: "og:url", content: "/projetos" },
    ],
    links: [{ rel: "canonical", href: "/projetos" }],
  }),
  component: ProjetosIndex,
});

const colorMap: Record<string, string> = {
  red: "var(--brand-red)", orange: "var(--brand-orange)", green: "var(--brand-green)", petrol: "var(--brand-petrol)",
};

function ProjetosIndex() {
  return (
    <>
      <PageHeader
        eyebrow="Projetos"
        title="Projetos que unem criação, memória e autonomia"
        description="Trilhas formativas construídas a partir do diálogo com o território, articulando técnicas artesanais, formação continuada e geração de oportunidades."
        crumbs={[{ label: "Início", to: "/" }, { label: "Projetos" }]}
        tone="red"
        image="https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=800&q=80"
      />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <p className="text-lg text-muted-foreground">
          Cada projeto do Ponto de Cultura é planejado a partir da escuta com o território e da experiência acumulada pelas mestras e mestres artesãos. As trilhas se articulam com respeito aos tempos de aprendizagem, valorizando processos coletivos e trocas entre gerações.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => {
            const c = colorMap[p.color];
            const rotations = ["-rotate-1", "rotate-1", "-rotate-1"];
            const offset = ["md:mt-0", "md:mt-10", "md:mt-4"];
            return (
              <article
                key={p.slug}
                className={`group relative ${offset[i % offset.length]}`}
              >
                {/* colored back plate */}
                <div
                  className={`absolute inset-0 translate-x-2 translate-y-2 rounded-[28px] ${rotations[i % rotations.length]}`}
                  style={{ backgroundColor: c, opacity: 0.25 }}
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[28px] border-2 border-dashed bg-card shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-xl" style={{ borderColor: c }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={p.hero} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <BlobShape className="absolute -top-6 -right-6 h-24 w-24 opacity-90" color={c} />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: c }}>{p.category}</span>
                  </div>
                  <StitchLine className="h-3 w-full" color={c} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-xl font-extrabold text-[color:var(--brand-petrol)]">{p.title}</h3>
                    <ThreadLine className="mt-2 h-2.5 w-20" color={c} />
                    <p className="mt-3 text-sm text-muted-foreground">{p.summary}</p>
                    <div className="mt-4 flex items-start gap-2 text-xs text-muted-foreground">
                      <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: c }} />
                      <span>{p.audience}</span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.techniques.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ backgroundColor: `${c}20`, color: c }}>{t}</span>
                      ))}
                    </div>
                    <Link
                      to="/projetos/$slug"
                      params={{ slug: p.slug }}
                      className="mt-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-bold text-white transition group-hover:translate-x-1"
                      style={{ backgroundColor: c }}
                    >
                      Explore o projeto <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
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