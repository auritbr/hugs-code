import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { news, newsTags } from "@/data/news";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/noticias/")({
  head: () => ({
    meta: [
      { title: "Notícias — Ponto de Cultura" },
      { name: "description", content: "Acompanhe as ações, oficinas, feiras e conquistas do Ponto de Cultura." },
      { property: "og:url", content: "/noticias" },
    ],
    links: [{ rel: "canonical", href: "/noticias" }],
  }),
  component: NoticiasIndex,
});

function NoticiasIndex() {
  const [tag, setTag] = useState("Todas");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement | null>(null);
  const PER_PAGE = 6;

  const filtered = useMemo(() => {
    return news.filter((n) => {
      const tagOk = tag === "Todas" || n.tag === tag;
      const q = query.trim().toLowerCase();
      const qOk = !q || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q);
      return tagOk && qOk;
    });
  }, [tag, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));

  // Reset para página 1 quando filtros mudam
  useEffect(() => { setPage(1); }, [tag, query]);
  // Corrige página caso passe do total
  useEffect(() => { if (page > totalPages) setPage(totalPages); }, [page, totalPages]);

  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const goTo = (p: number) => {
    const next = Math.min(Math.max(1, p), totalPages);
    setPage(next);
    if (typeof window !== "undefined") {
      listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Notícias"
        title="Histórias, encontros e criações do nosso território"
        description="Acompanhe as ações, oficinas, feiras, conquistas e histórias que emergem do território."
        tone="orange"
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar notícia..."
              className="w-full rounded-full border border-border bg-background py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {newsTags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition ${
                  tag === t
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section ref={listRef} className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 scroll-mt-24">
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">Nenhuma notícia encontrada com esses filtros.</p>
        ) : (
          <>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {paginated.map((n) => (
              <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={n.cover} alt={n.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">{n.tag}</span>
                  <h3 className="mt-2 line-clamp-2 text-lg font-bold group-hover:text-primary">{n.title}</h3>
                  <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>{formatDate(n.date)}</span>
                    <span>{n.readingMinutes} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} onChange={goTo} />
          )}
          </>
        )}
      </section>
    </>
  );
}

function Pagination({ page, totalPages, onChange }: { page: number; totalPages: number; onChange: (p: number) => void }) {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches;
  const range = buildRange(page, totalPages, isMobile ? 1 : 2);
  return (
    <nav aria-label="Paginação de notícias" className="mt-10 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Página anterior"
        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground sm:text-sm"
      >
        <ChevronLeft className="h-4 w-4" /> <span className="hidden xs:inline sm:inline">Anterior</span>
      </button>
      {range.map((item, i) =>
        item === "..." ? (
          <span key={`e-${i}`} className="px-2 text-sm text-muted-foreground">…</span>
        ) : (
          <button
            key={item}
            onClick={() => onChange(item)}
            aria-current={item === page ? "page" : undefined}
            className={`h-9 min-w-9 rounded-full px-3 text-sm font-semibold transition ${
              item === page
                ? "bg-[color:var(--brand-red)] text-white shadow-md"
                : "border border-border bg-card text-foreground hover:border-primary/50 hover:text-primary"
            }`}
          >
            {item}
          </button>
        )
      )}
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Próxima página"
        className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/50 hover:text-primary disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-border disabled:hover:text-foreground sm:text-sm"
      >
        <span className="hidden xs:inline sm:inline">Próxima</span> <ChevronRight className="h-4 w-4" />
      </button>
    </nav>
  );
}

function buildRange(current: number, total: number, siblings: number): (number | "...")[] {
  const first = 1;
  const last = total;
  const start = Math.max(current - siblings, first + 1);
  const end = Math.min(current + siblings, last - 1);
  const out: (number | "...")[] = [first];
  if (start > first + 1) out.push("...");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < last - 1) out.push("...");
  if (last > first) out.push(last);
  return out;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}