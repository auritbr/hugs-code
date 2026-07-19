import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { news, newsTags } from "@/data/news";
import { useMemo, useState } from "react";
import { Search, Calendar, Clock } from "lucide-react";

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
  const filtered = useMemo(() => {
    return news.filter((n) => {
      const tagOk = tag === "Todas" || n.tag === tag;
      const q = query.trim().toLowerCase();
      const qOk = !q || n.title.toLowerCase().includes(q) || n.excerpt.toLowerCase().includes(q);
      return tagOk && qOk;
    });
  }, [tag, query]);

  return (
    <>
      <PageHeader
        eyebrow="Notícias"
        title="O que acontece no Ponto de Cultura"
        description="Acompanhe as ações, oficinas, feiras, conquistas e histórias que emergem do território."
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias" }]}
        tone="orange"
        image="https://images.unsplash.com/photo-1470309864661-68328b2cd0a5?auto=format&fit=crop&w=800&q=80"
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

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-border bg-card p-8 text-center text-muted-foreground">Nenhuma notícia encontrada com esses filtros.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((n) => (
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
        )}
      </section>
    </>
  );
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}