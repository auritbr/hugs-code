import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { projects } from "@/data/projects";
import { ArrowRight, Users, Sparkles, HeartHandshake, Palette, Coins } from "lucide-react";
import { StitchLine, ThreadLine, BlobShape, ArcShape } from "@/components/site/CraftGraphics";

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
        image="https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Nova seção de apresentação dos projetos */}
      <section className="relative overflow-hidden bg-[color:var(--brand-sand)]/50 py-14 sm:py-16">
        <ArcShape className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-25" color="#E85A52" />
        <BlobShape className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 opacity-20" color="#36B7D4" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Nossos projetos</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Saberes que se transformam em experiências, criações e oportunidades.
            </h2>
            <ThreadLine className="mt-4 h-2.5 w-24" color="#E85A52" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Cada projeto nasce do encontro entre conhecimentos tradicionais, novas possibilidades de criação e as necessidades da comunidade. As atividades integram formação, convivência e produção artesanal, valorizando diferentes técnicas e trajetórias.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Linhas, tecidos, argila, tintas e fibras tornam-se instrumentos de expressão, autonomia e fortalecimento cultural.
            </p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {[
                { Icon: Palette, label: "Formação artesanal", c: "#E85A52" },
                { Icon: Sparkles, label: "Valorização da memória", c: "#E9B743" },
                { Icon: HeartHandshake, label: "Criação coletiva", c: "#36B7D4" },
                { Icon: Coins, label: "Geração de oportunidades", c: "#A8C957" },
              ].map(({ Icon, label, c }) => (
                <li key={label} className="flex items-center gap-3 rounded-xl bg-white/70 px-3 py-2">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg" style={{ backgroundColor: `${c}22`, color: c }}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[color:var(--brand-petrol)]">{label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative mx-auto grid w-full max-w-md grid-cols-6 grid-rows-6 gap-3 lg:max-w-none">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-[2.5rem] rounded-tr-[1rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80" alt="Pessoa bordando" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 overflow-hidden rounded-[1.5rem] rounded-bl-[2rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80" alt="Mãos modelando argila" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-5 overflow-hidden rounded-[1.5rem] rounded-tr-[2rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=600&q=80" alt="Artesãos em feira" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-5 grid place-items-center rounded-2xl bg-[#E9B743]/70">
              <Palette className="h-8 w-8 text-[color:var(--brand-petrol)]" />
            </div>
            <div className="col-span-2 row-span-2 col-start-5 row-start-4 grid place-items-center rounded-full bg-[#36B7D4]/25">
              <Sparkles className="h-7 w-7 text-[color:var(--brand-petrol)]" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const c = colorMap[p.color];
            return (
              <article key={p.slug} className="group relative flex">
                <div
                  className="relative flex h-full w-full flex-col overflow-hidden rounded-[24px] border-2 border-dashed bg-card shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-xl"
                  style={{ borderColor: c }}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img src={p.hero} alt={p.title} className="h-full w-full object-cover transition group-hover:scale-105" />
                    <BlobShape className="absolute -top-6 -right-6 h-20 w-20 opacity-90" color={c} />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-widest" style={{ color: c }}>{p.category}</span>
                  </div>
                  <StitchLine className="h-3 w-full" color={c} />
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="min-h-[3.5rem] font-display text-xl font-extrabold leading-tight text-[color:var(--brand-petrol)] line-clamp-2">{p.title}</h3>
                    <ThreadLine className="mt-2 h-2.5 w-20" color={c} />
                    <p className="mt-3 min-h-[5.5rem] text-sm text-muted-foreground line-clamp-4">{p.summary}</p>
                    <div className="mt-4 flex min-h-[3.25rem] items-start gap-2 text-xs text-muted-foreground">
                      <Users className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: c }} />
                      <span className="line-clamp-3">{p.audience}</span>
                    </div>
                    <div className="mt-3 flex min-h-[3.5rem] flex-wrap content-start gap-1.5">
                      {p.techniques.slice(0, 4).map((t) => (
                        <span key={t} className="rounded-full px-2 py-0.5 text-[11px] font-medium" style={{ backgroundColor: `${c}20`, color: c }}>{t}</span>
                      ))}
                    </div>
                    <Link
                      to="/projetos/$slug"
                      params={{ slug: p.slug }}
                      className="mt-auto inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm font-bold text-white transition group-hover:translate-x-1"
                      style={{ backgroundColor: c }}
                    >
                      Conheça o projeto <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* CTA final compacto */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid w-full max-w-[1140px] overflow-hidden rounded-[24px] bg-[color:var(--brand-petrol)] text-white lg:grid-cols-[1fr_34%]">
          <ArcShape className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 opacity-15" color="#E9B743" />
          <div className="pointer-events-none absolute right-6 top-6 hidden h-3 w-3 rotate-12 rounded-sm bg-[#E85A52] sm:block" aria-hidden />
          <div className="relative px-6 py-8 sm:px-10 sm:py-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Projetos
            </div>
            <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight sm:text-[30px] lg:text-[36px]">
              Cada projeto abre espaço para aprender, criar e compartilhar.
            </h2>
            <ThreadLine className="mt-3 h-2 w-20" color="#E9B743" />
            <p className="mt-2 line-clamp-3 max-w-xl text-sm text-white/90">
              Conheça as atividades realizadas, acompanhe as próximas ações e descubra como os diferentes saberes artesanais ganham forma em cada projeto.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link to="/projetos" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-petrol)] hover:opacity-90">
                Conheça os projetos <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/contato" className="inline-flex items-center justify-center rounded-full border border-white/50 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Entre em contato
              </Link>
            </div>
          </div>
          <div className="relative min-h-[180px] lg:min-h-full">
            <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, var(--brand-petrol) 0%, transparent 60%)" }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, var(--brand-petrol) 0%, transparent 40%)" }} />
            <div className="pointer-events-none absolute bottom-3 right-3 hidden h-10 w-10 rotate-6 rounded-md bg-[#E85A52]/80 lg:block" aria-hidden />
          </div>
        </div>
      </section>
    </>
  );
}