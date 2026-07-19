import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { ConcentricRings, ThreadLine, TriangleBand, StitchLine } from "./CraftGraphics";

type Crumb = { label: string; to?: string };

export function PageHeader({
  eyebrow, title, description, crumbs, image, tone = "red",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
  tone?: "red" | "turquoise" | "gold" | "orange" | "petrol" | "green";
}) {
  const toneMap: Record<string, string> = {
    red: "var(--brand-red)",
    turquoise: "var(--brand-turquoise)",
    gold: "var(--brand-gold)",
    orange: "var(--brand-orange)",
    petrol: "var(--brand-petrol)",
    green: "var(--brand-green)",
  };
  const color = toneMap[tone];
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--brand-petrol)]">
      {/* Fotografia de fundo em todo o hero */}
      {image && (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img
            src={image}
            alt=""
            className="h-full w-full object-cover object-center"
          />
          {/* Degradê para leitura: escuro à esquerda, transparente à direita; extra vertical no mobile */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, color-mix(in oklab, var(--brand-petrol) 88%, transparent) 0%, color-mix(in oklab, var(--brand-petrol) 65%, transparent) 45%, color-mix(in oklab, var(--brand-petrol) 20%, transparent) 100%)",
            }}
          />
          <div className="absolute inset-0 sm:hidden bg-gradient-to-t from-[color:var(--brand-petrol)]/85 via-[color:var(--brand-petrol)]/60 to-[color:var(--brand-petrol)]/70" />
          {/* leve textura de cor por tom */}
          <div
            className="absolute inset-0 mix-blend-multiply opacity-40"
            style={{
              background: `radial-gradient(60% 80% at 15% 50%, ${color} 0%, transparent 70%)`,
            }}
          />
        </div>
      )}

      {/* Elementos decorativos artesanais */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Grande arco na extremidade direita */}
        <svg viewBox="0 0 300 300" className="absolute -right-16 -top-10 h-[280px] w-[280px] opacity-70 sm:h-[360px] sm:w-[360px]">
          <path d="M300 0 A 300 300 0 0 0 0 300 L 0 0 Z" fill="none" stroke={color} strokeWidth="14" opacity="0.35" />
          <path d="M260 0 A 260 260 0 0 0 0 260" fill="none" stroke="var(--brand-gold)" strokeWidth="3" strokeDasharray="6 8" opacity="0.6" />
        </svg>
        {/* Pontos de costura */}
        <StitchLine className="absolute top-8 left-6 h-2 w-40 opacity-60 hidden sm:block" color="var(--brand-gold)" />
        <StitchLine className="absolute bottom-10 right-16 h-2 w-52 opacity-50 hidden md:block" color="var(--brand-turquoise)" />
        {/* Losangos pequenos */}
        <div className="absolute right-40 top-16 h-3 w-3 rotate-45 bg-[color:var(--brand-red)] opacity-80 hidden md:block" />
        <div className="absolute right-24 bottom-10 h-2 w-2 rotate-45 bg-[color:var(--brand-gold)] opacity-90 hidden sm:block" />
        {/* Retalho colorido */}
        <div className="absolute -bottom-6 left-1/3 h-4 w-24 rotate-[-4deg] rounded-sm bg-[color:var(--brand-orange)] opacity-70 hidden md:block" />
        {/* Concêntricos discretos */}
        <ConcentricRings className="absolute -bottom-10 right-4 h-40 w-40 opacity-25 hidden sm:block" color="var(--brand-gold)" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 lg:px-8 min-h-[320px] sm:min-h-[300px] lg:min-h-[360px]">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-white/80">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.to ? <Link to={c.to} className="hover:text-[color:var(--brand-gold)]">{c.label}</Link> : <span className="font-semibold text-white">{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        <div className="max-w-2xl">
          {eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-lg" style={{ backgroundColor: color }}>
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-3 font-display text-2xl font-extrabold leading-[1.1] text-white drop-shadow-md sm:text-3xl md:text-4xl lg:text-5xl">
            {title}
          </h1>
          <ThreadLine className="mt-3 h-3 w-32" color="var(--brand-gold)" />
          {description && <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base line-clamp-3">{description}</p>}
        </div>
      </div>
      <TriangleBand className="h-3 w-full" color={color} />
    </section>
  );
}