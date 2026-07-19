import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { team, type TeamMember } from "@/data/team";
import { Mail, Linkedin } from "lucide-react";

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
  return (
    <>
      <PageHeader
        eyebrow="Equipe"
        title="Pessoas que transformam ideias em ação"
        description="Conheça as pessoas dedicadas a construir cotidianamente o Ponto de Cultura: diretoria, coordenação, educadoras, artesãs e parceiros."
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Equipe" }]}
        tone="green"
        image="https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=800&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group relative overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1 hover:shadow-xl"
              style={{ backgroundColor: colorMap[m.color] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={m.photo} alt={m.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-5 text-white">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] opacity-90">{m.area}</div>
                <h3 className="mt-1 font-display text-xl font-extrabold leading-tight">{m.name}</h3>
                <div className="text-sm opacity-90">{m.role}</div>
                <p className="mt-3 text-sm leading-relaxed opacity-95">{m.bio}</p>
                <div className="mt-4 flex gap-2">
                  <a href="#" aria-label={`E-mail de ${m.name}`} className="grid h-8 w-8 place-items-center rounded-full bg-white/20 hover:bg-white/30"><Mail className="h-3.5 w-3.5" /></a>
                  <a href="#" aria-label={`LinkedIn de ${m.name}`} className="grid h-8 w-8 place-items-center rounded-full bg-white/20 hover:bg-white/30"><Linkedin className="h-3.5 w-3.5" /></a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}