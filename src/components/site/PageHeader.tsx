import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { BlobShape, ConcentricRings, ThreadLine, TriangleBand } from "./CraftGraphics";

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
    <section className="relative overflow-hidden bg-[color:var(--brand-sand)]">
      {/* fundo decorativo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <BlobShape className="absolute -top-24 -right-24 h-[420px] w-[420px] opacity-25" color={color} />
        <ConcentricRings className="absolute -bottom-16 -left-10 h-80 w-80 opacity-40" color="var(--brand-petrol)" />
        <div className="absolute right-8 bottom-6 h-3 w-24 craft-diagonal text-[color:var(--brand-red)] opacity-40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10 sm:pb-12 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-[color:var(--brand-petrol)]/70">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.to ? <Link to={c.to} className="hover:text-[color:var(--brand-red)]">{c.label}</Link> : <span className="font-semibold text-foreground">{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        <div className="grid items-center gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-10">
          <div className="max-w-2xl">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white" style={{ backgroundColor: color }}>
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-[1.05] text-[color:var(--brand-petrol)] sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <ThreadLine className="mt-4 h-3 w-32" color={color} />
            {description && <p className="mt-4 max-w-xl text-sm text-foreground/75 sm:text-base line-clamp-3">{description}</p>}
          </div>
          {image && (
            <div className="relative hidden lg:block">
              <div className="relative ml-auto aspect-square w-full max-w-[280px]">
                <div className="absolute -top-3 -right-3 h-16 w-16 rounded-full" style={{ backgroundColor: color }} />
                <div className="absolute -bottom-3 -left-3 h-12 w-12 rounded-full bg-[color:var(--brand-gold)]" />
                <div className="relative h-full w-full overflow-hidden rounded-[45%_55%_50%_50%/55%_50%_50%_45%] border-8 border-white shadow-2xl">
                  <img src={image} alt="" className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <TriangleBand className="h-4 w-full" color={color} />
    </section>
  );
}