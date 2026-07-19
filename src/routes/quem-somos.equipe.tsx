import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { team, teamAreas, type TeamMember } from "@/data/team";
import { useMemo, useState } from "react";
import { Mail, Linkedin, X as XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quem-somos/equipe")({
  head: () => ({
    meta: [
      { title: "Equipe — Ponto de Cultura" },
      { name: "description", content: "Conheça a equipe do Ponto de Cultura: diretoria, coordenação, educadores, artesãos e colaboradores." },
      { property: "og:url", content: "/quem-somos/equipe" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/equipe" }],
  }),
  component: Equipe,
});

const colorMap: Record<TeamMember["color"], string> = {
  petrol: "var(--brand-petrol)",
  red: "var(--brand-red)",
  orange: "var(--brand-orange)",
  gold: "var(--brand-gold)",
  green: "var(--brand-green)",
};

function Equipe() {
  const [area, setArea] = useState<(typeof teamAreas)[number]>("Todos");
  const [selected, setSelected] = useState<TeamMember | null>(null);
  const filtered = useMemo(() => (area === "Todos" ? team : team.filter((t) => t.area === area)), [area]);

  return (
    <>
      <PageHeader
        eyebrow="Equipe"
        title="Pessoas que transformam ideias em ação"
        description="Conheça as pessoas dedicadas a construir cotidianamente o Ponto de Cultura: diretoria, coordenação, educadoras, artesãs e parceiros."
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        tone="green"
        image="https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=800&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {teamAreas.map((a) => (
            <button
              key={a}
              onClick={() => setArea(a)}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm transition",
                area === a ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background hover:bg-secondary",
              )}
            >
              {a}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <article key={m.name} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <div className="relative aspect-[4/5]" style={{ backgroundColor: colorMap[m.color] }}>
                <img src={m.photo} alt={m.name} className="h-full w-full object-cover mix-blend-luminosity opacity-90 transition group-hover:mix-blend-normal group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: colorMap[m.color] }}>{m.area}</div>
                <h3 className="mt-1 text-lg font-bold">{m.name}</h3>
                <div className="text-sm text-muted-foreground">{m.role}</div>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-4 flex items-center justify-between">
                  <button onClick={() => setSelected(m)} className="text-sm font-semibold text-primary hover:underline">Conheça a trajetória</button>
                  <div className="flex gap-2 text-muted-foreground">
                    <a href="#" aria-label="E-mail" className="hover:text-primary"><Mail className="h-4 w-4" /></a>
                    <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Um trabalho coletivo</h2>
          <p className="mt-3 text-muted-foreground">A força do Ponto de Cultura está na articulação entre pessoas com diferentes trajetórias, saberes e olhares. É esse encontro que sustenta a continuidade das ações e o cuidado com cada processo.</p>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div className="w-full max-w-lg rounded-2xl bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-primary">{selected.area}</div>
                <h2 className="mt-1 text-xl font-bold">{selected.name}</h2>
                <div className="text-sm text-muted-foreground">{selected.role}</div>
              </div>
              <button onClick={() => setSelected(null)} aria-label="Fechar" className="rounded p-1 hover:bg-secondary"><XIcon className="h-5 w-5" /></button>
            </div>
            <img src={selected.photo} alt={selected.name} className="mt-4 aspect-video w-full rounded-lg object-cover" />
            <div className="mt-4 space-y-3 text-sm text-muted-foreground">
              <p><strong className="text-foreground">Biografia:</strong> {selected.bio}</p>
              <p><strong className="text-foreground">Atuação:</strong> Contribui diretamente com processos formativos, planejamento e execução das atividades no Ponto de Cultura.</p>
              <p><strong className="text-foreground">Áreas de conhecimento:</strong> {selected.area === "Educadores" ? "Metodologia participativa, técnicas artesanais, mediação cultural." : "Gestão, articulação institucional e apoio às ações formativas."}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}