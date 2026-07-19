import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getNews, news, type NewsItem } from "@/data/news";
import { Lightbox } from "@/components/site/Lightbox";
import { Calendar, Clock, User, ChevronRight, ArrowLeft, Facebook, Linkedin, Twitter, Mail, Link as LinkIcon, MessageCircle } from "lucide-react";
import { useState } from "react";

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
  const [box, setBox] = useState<number | null>(null);
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareText = encodeURIComponent(article.title);
  const enc = encodeURIComponent(shareUrl);
  const galleryPhotos = article.gallery.map((src) => ({ src, caption: article.title }));

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={article.cover} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--brand-petrol)] via-[color:var(--brand-petrol)]/85 to-[color:var(--brand-petrol)]/50" />
        </div>
        <div className="mx-auto max-w-5xl px-4 pt-10 pb-14 text-white sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
          <nav aria-label="breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/80">
            <Link to="/" className="hover:text-[color:var(--brand-gold)]">Início</Link>
            <ChevronRight className="h-3 w-3" />
            <Link to="/noticias" className="hover:text-[color:var(--brand-gold)]">Notícias</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="line-clamp-1 max-w-[240px] font-semibold">{article.title}</span>
          </nav>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-white" /> {article.tag}
          </span>
          <h1 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-[1.1] sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 sm:text-lg">{article.subtitle}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/85">
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(article.date).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" })}</span>
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />{article.author}</span>
            <span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{article.readingMinutes} min de leitura</span>
          </div>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-6 text-xs text-muted-foreground">
          <span className="mr-2 font-semibold uppercase tracking-wider">Compartilhar:</span>
          <ShareBtn href={`https://wa.me/?text=${shareText}%20${enc}`} label="WhatsApp" color="#25D366"><MessageCircle className="h-4 w-4" /></ShareBtn>
          <ShareBtn href={`https://www.facebook.com/sharer/sharer.php?u=${enc}`} label="Facebook" color="#1877F2"><Facebook className="h-4 w-4" /></ShareBtn>
          <ShareBtn href={`https://twitter.com/intent/tweet?text=${shareText}&url=${enc}`} label="X" color="#0F172A"><Twitter className="h-4 w-4" /></ShareBtn>
          <ShareBtn href={`https://www.linkedin.com/sharing/share-offsite/?url=${enc}`} label="LinkedIn" color="#0A66C2"><Linkedin className="h-4 w-4" /></ShareBtn>
          <ShareBtn href={`mailto:?subject=${shareText}&body=${enc}`} label="E-mail" color="#DF2B24"><Mail className="h-4 w-4" /></ShareBtn>
          <button
            onClick={() => navigator.clipboard.writeText(shareUrl)}
            className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1.5 hover:bg-secondary"
            aria-label="Copiar link"
          >
            <LinkIcon className="h-3.5 w-3.5" /> Copiar link
          </button>
        </div>

        <div className="prose prose-lg mt-8 max-w-none text-foreground">
          {article.body.map((p, i) => (
            <p key={i} className="mb-5 leading-relaxed text-muted-foreground">{p}</p>
          ))}
        </div>

        {article.gallery.length > 0 && (
          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-[color:var(--brand-petrol)]">Galeria da matéria</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3">
              {article.gallery.map((src, i) => (
                <button key={i} onClick={() => setBox(i)} className="group aspect-[4/3] overflow-hidden rounded-xl">
                  <img src={src} alt={article.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="mt-12 border-t border-border pt-6">
          <Link to="/noticias" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--brand-red)] hover:underline">
            <ArrowLeft className="h-4 w-4" /> Voltar para todas as notícias
          </Link>
        </div>
      </article>

      {related.length > 0 && (
        <section className="bg-secondary/40 py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-bold text-[color:var(--brand-petrol)]">Notícias relacionadas</h2>
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

      {box !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={box}
          onClose={() => setBox(null)}
          onPrev={() => setBox((i) => (i === null ? 0 : (i + galleryPhotos.length - 1) % galleryPhotos.length))}
          onNext={() => setBox((i) => (i === null ? 0 : (i + 1) % galleryPhotos.length))}
        />
      )}
    </>
  );
}

function ShareBtn({ href, label, color, children }: { href: string; label: string; color: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Compartilhar no ${label}`}
      className="inline-flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:scale-110"
      style={{ backgroundColor: color }}
    >
      {children}
    </a>
  );
}