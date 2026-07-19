import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { team } from "@/data/team";
import { StitchLine, ThreadLine, ArcShape, BlobShape } from "@/components/site/CraftGraphics";

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

// Softer, cultural palette. dark=true triggers white text.
const softPalette: Array<{ bg: string; dark: boolean; accent: string }> = [
  { bg: "#36B7D4", dark: true,  accent: "#176477" },  // azul suave
  { bg: "#E85A52", dark: true,  accent: "#A8322B" },  // vermelho coral
  { bg: "#E9B743", dark: false, accent: "#7A5A10" },  // amarelo-ocre
  { bg: "#527A63", dark: true,  accent: "#2F4A3B" },  // verde escuro
  { bg: "#E9D7BD", dark: false, accent: "#8A6A3A" },  // bege
  { bg: "#176477", dark: true,  accent: "#0B3E4A" },  // azul-petróleo
  { bg: "#E98343", dark: true,  accent: "#A0501F" },  // laranja suave
  { bg: "#A8C957", dark: false, accent: "#4E6B22" },  // verde artesanal
  { bg: "#D96B73", dark: true,  accent: "#8C3941" },  // rosa queimado
  { bg: "#C86D4D", dark: true,  accent: "#7A3D25" },  // terracota
];

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

      {/* Seção de apresentação da equipe */}
      <section className="relative overflow-hidden bg-[color:var(--brand-sand)]/50 py-14 sm:py-16">
        <ArcShape className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 opacity-30" color="#36B7D4" />
        <BlobShape className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 opacity-20" color="#E9B743" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Nossa equipe</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Pessoas que compartilham saberes e fazem cada projeto acontecer.
            </h2>
            <ThreadLine className="mt-4 h-2.5 w-24" color="#E85A52" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Por trás de cada oficina, encontro e peça criada existe uma equipe que acolhe, ensina, organiza e aprende junto. Artesãos, educadores, coordenadores e colaboradores unem diferentes experiências para fortalecer a cultura, a criatividade e os vínculos com a comunidade.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O trabalho acontece de forma coletiva, respeitando as trajetórias de quem ensina e de quem chega para aprender.
            </p>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-[2rem] bg-[#E9B743]/40 sm:block" aria-hidden />
            <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-full bg-[#36B7D4]/30 sm:block" aria-hidden />
            <div className="relative overflow-hidden rounded-[3rem] rounded-tr-[1rem] border-4 border-white shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe do Ponto de Cultura em atividade coletiva"
                className="h-64 w-full object-cover sm:h-80 lg:h-[360px]"
                loading="lazy"
              />
            </div>
            <StitchLine className="mt-3 h-3 w-40" color="#E85A52" />
          </div>
        </div>
      </section>

      {/* Cabeçalho antes do grid */}
      <section className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Quem faz acontecer</div>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[color:var(--brand-petrol)] sm:text-3xl">Conheça nossa equipe</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Cada pessoa contribui com conhecimentos, experiências e diferentes formas de construir as ações do Ponto de Cultura.
          </p>
        </div>
      </section>

      {/* Grid de cards */}
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {team.map((m, i) => {
            const c = softPalette[i % softPalette.length];
            const fg = c.dark ? "#ffffff" : "#0B3E4A";
            const roleColor = c.dark ? "rgba(255,255,255,0.92)" : "#0B3E4A";
            const detailIdx = i % 3;
            return (
              <article
                key={m.name}
                className="relative aspect-square overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: c.bg, color: fg, boxShadow: "0 6px 18px -12px rgba(15,42,58,0.35)" }}
              >
                {/* discreet craft detail */}
                {detailIdx === 0 && (
                  <div className="pointer-events-none absolute inset-2 rounded-2xl border border-dashed opacity-30" style={{ borderColor: fg }} aria-hidden />
                )}
                {detailIdx === 1 && (
                  <ThreadLine className="pointer-events-none absolute -bottom-1 left-3 h-2 w-24 opacity-70" color={c.accent} />
                )}
                {detailIdx === 2 && (
                  <div className="pointer-events-none absolute right-3 top-3 h-10 w-10 rounded-full opacity-30" style={{ backgroundColor: c.accent }} aria-hidden />
                )}

                {/* photo — natural, with soft bottom gradient */}
                <img
                  src={m.photo}
                  alt={m.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(to top, ${c.bg} 0%, ${c.bg}E6 22%, ${c.bg}66 45%, transparent 68%)` }}
                  aria-hidden
                />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <div className="font-display text-base font-extrabold leading-tight uppercase sm:text-lg" style={{ color: fg }}>{m.name}</div>
                  <div className="mt-1 text-xs font-medium leading-snug sm:text-sm" style={{ color: roleColor }}>{m.role}</div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}