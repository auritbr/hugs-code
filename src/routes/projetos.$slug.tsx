import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { getProject, type Project } from "@/data/projects";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Projeto — Ponto de Cultura" }, { name: "robots", content: "noindex" }] };
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Ponto de Cultura` },
        { name: "description", content: project.summary },
        { property: "og:title", content: project.title },
        { property: "og:description", content: project.summary },
        { property: "og:image", content: project.hero },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projetos/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projetos/${project.slug}` }],
    };
  },
  component: ProjectPage,
  errorComponent: ({ error }) => <div className="p-10 text-center">{error.message}</div>,
  notFoundComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-2xl font-bold">Projeto não encontrado</h1>
      <Link to="/projetos" className="mt-4 inline-block text-primary underline">Ver todos os projetos</Link>
    </div>
  ),
});

const colorMap = {
  red: "var(--brand-red)", orange: "var(--brand-orange)", green: "var(--brand-green)", petrol: "var(--brand-petrol)",
} as const;

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [idx, setIdx] = useState<number | null>(null);
  const color = colorMap[project.color];
  const galleryPhotos = project.gallery.map((src) => ({ src, caption: project.title }));

  return (
    <>
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        crumbs={[
          { label: "Início", to: "/" },
          { label: "Projetos", to: "/projetos" },
          { label: project.title },
        ]}
        image={project.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div className="prose max-w-none text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground">Visão geral</h2>
            <p className="mt-3">{project.overview}</p>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6">
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>Público atendido</div>
            <p className="mt-2 text-sm text-muted-foreground">{project.audience}</p>
            <div className="mt-4 h-px bg-border" />
            <div className="mt-4 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Técnicas</div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {project.techniques.map((t) => <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs">{t}</span>)}
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Objetivos</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.goals.map((g) => (
              <div key={g.title} className="rounded-2xl border border-border bg-card p-5">
                <div className="mb-2 h-1 w-8 rounded-full" style={{ backgroundColor: color }} />
                <div className="font-bold">{g.title}</div>
                <p className="mt-1 text-sm text-muted-foreground">{g.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold">Metodologia</h2>
        <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {project.method.map((m, i) => (
            <div key={m.title} className="rounded-2xl border border-border bg-card p-5">
              <div className="text-xs font-semibold" style={{ color }}>Etapa {String(i + 1).padStart(2, "0")}</div>
              <div className="mt-1 font-bold">{m.title}</div>
              <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Galeria</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.gallery.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={src} alt={project.title} loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <blockquote className="rounded-2xl bg-[color:var(--brand-sand)] p-6 italic">
          “A participação neste projeto abriu caminhos que eu não imaginava. Aprendi técnicas, mas também aprendi a acreditar no meu trabalho.”
          <div className="mt-3 not-italic text-sm text-muted-foreground">— Participante do projeto</div>
        </blockquote>
      </section>

      <section className="relative overflow-hidden py-16 text-white" style={{ backgroundColor: color }}>
        <div className="craft-dots absolute inset-0 opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold sm:text-4xl">{project.ctaTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projetos" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground">Ver outros projetos</Link>
            <Link to="/contato" className="rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Entre em contato <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {idx !== null && (
        <Lightbox
          photos={galleryPhotos}
          index={idx}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx((i) => (i === null ? 0 : (i + galleryPhotos.length - 1) % galleryPhotos.length))}
          onNext={() => setIdx((i) => (i === null ? 0 : (i + 1) % galleryPhotos.length))}
        />
      )}
    </>
  );
}