import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

type Crumb = { label: string; to?: string };

export function PageHeader({
  eyebrow, title, description, crumbs, image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  crumbs?: Crumb[];
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-[color:var(--brand-red)]" />
        <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-[color:var(--brand-turquoise)]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        {crumbs && crumbs.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-4 flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
            {crumbs.map((c, i) => (
              <span key={i} className="inline-flex items-center gap-1.5">
                {c.to ? <Link to={c.to} className="hover:text-primary">{c.label}</Link> : <span className="text-foreground">{c.label}</span>}
                {i < crumbs.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            {eyebrow && (
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary">
                {eyebrow}
              </span>
            )}
            <h1 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">{description}</p>}
          </div>
          {image && (
            <div className="hidden lg:block">
              <div className="relative h-40 w-56 overflow-hidden rounded-xl border border-border shadow-lg">
                <img src={image} alt="" className="h-full w-full object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="craft-line text-primary/40" />
    </section>
  );
}