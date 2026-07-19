import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { getNews, news, type NewsItem } from "@/data/news";
import { Calendar, Clock, User, Share2 } from "lucide-react";

export const Route = createFileRoute("/noticias/$slug")({
  loader: ({ params }): { article: NewsItem } => {
    const article = getNews(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Notícia — Ponto de Cultura" }, { name: "robots", content: "noindex" }] };
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} — Ponto de Cultura` },
        { name: "description", content: article.excerpt },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.excerpt },
        { property: "og:image", content: article.cover },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/noticias/${article.slug}` },
      ],
      links: [{ rel: "canonical", href: `/noticias/${article.slug}` }],
    };
  },
  component: NewsArticle,
  notFoundComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Notícia não encontrada</h1>
      <Link to="/noticias" className="mt-4 inline-block text-primary underline">Ver todas as notícias</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
});

function NewsArticle() {
  const { article } = Route.useLoaderData() as { article: NewsItem };
  const related = news.filter((n) => n.slug !== article.slug && n.tag === article.tag).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow={article.tag}
        title={article.title}
        description={article.subtitle}
        crumbs={[{ label: "Início", to: "/" }, { label: "Notícias", to: "/noticias" }, { label: article.title }]}
        image={article.cover}
      />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-4 border-b border-border pb-6 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</span>
          <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{article.author}</span>
          <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingMinutes} min de leitura</span>
          <button
            onClick={() => {
              if (navigator.share) navigator.share({ title: article.title, url: window.location.href });
              else navigator.clipboard.writeText(window.location.href);
            }}
            className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs hover:bg-secondary"
          >
            <Share2 className="h-3.5 w-3.5" /> Compartilhar
          </button>
        </div>

        <div className="prose prose-lg mt-8 max-w-none text-foreground">
          {article.body.map((p, i) => (
            <p key={i} className="mb-5 leading-relaxed text-muted-foreground">{p}</p>
          ))}
        </div>

        {article.gallery.length > 0 && (
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3">
            {article.gallery.map((src, i) => (
              <img key={i} src={src} alt={article.title} loading="lazy" className="aspect-[4/3] rounded-xl object-cover" />
            ))}
          </div>
        )}
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">Notícias relacionadas</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((n) => (
                <Link key={n.slug} to="/noticias/$slug" params={{ slug: n.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={n.cover} alt={n.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="line-clamp-2 font-bold group-hover:text-primary">{n.title}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{n.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}