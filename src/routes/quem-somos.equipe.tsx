import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { team, type TeamMember } from "@/data/team";

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

const palette: Array<TeamMember["color"]> = ["turquoise" as any, "red", "gold", "orange", "green", "petrol"] as any;
const colorMap: Record<string, { bg: string; fg: string }> = {
  petrol: { bg: "var(--brand-petrol)", fg: "#fff" },
  red: { bg: "var(--brand-red)", fg: "#fff" },
  orange: { bg: "var(--brand-orange)", fg: "#fff" },
  gold: { bg: "var(--brand-gold)", fg: "#1a1a1a" },
  green: { bg: "var(--brand-green)", fg: "#1a1a1a" },
  turquoise: { bg: "var(--brand-turquoise)", fg: "#fff" },
};

function Equipe() {
  return (
    <>
      <PageHeader
        eyebrow="Equipe"
        title="Quem faz acontecer"
        description="Conheça as pessoas que compartilham saberes, organizam as atividades e constroem diariamente as ações do Ponto de Cultura."
        tone="green"
        image="https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <p className="mx-auto max-w-3xl text-center text-base text-muted-foreground sm:text-lg">
          Nossa equipe reúne coordenação, artesãos, educadores, oficineiros e colaboradores comprometidos com a valorização dos saberes, a formação cultural e o desenvolvimento comunitário.
        </p>

        <div className="mt-10 grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m, i) => {
            const key = palette[i % palette.length] as string;
            const c = colorMap[key];
            return (
              <article
                key={m.name}
                className="relative aspect-square overflow-hidden rounded-3xl shadow-md transition hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: c.bg, color: c.fg }}
              >
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <div className="font-display text-lg font-extrabold leading-tight uppercase sm:text-xl">{m.name}</div>
                  <div className="mt-1 text-xs opacity-90 sm:text-sm line-clamp-3">{m.role}</div>
                </div>
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute right-0 top-0 h-full w-2/3 object-cover object-center mix-blend-luminosity opacity-95"
                  style={{ maskImage: "linear-gradient(to left, black 60%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)" }}
                />
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}