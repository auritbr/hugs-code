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
  gold: "var(--brand-gold)", turquoise: "var(--brand-turquoise)",
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
        image={project.hero}
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-start">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color }}>Sobre o projeto</div>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)] sm:text-4xl">O que é o {project.title}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {project.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
          <aside className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-widest" style={{ color }}>Público atendido</div>
            <p className="mt-2 text-sm text-muted-foreground">{project.audience}</p>
            <div className="mt-5 h-px bg-border" />
            <div className="mt-5 text-xs font-semibold uppercase tracking-widest" style={{ color }}>Objetivos</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {project.goals.map((g) => (
                <li key={g.title} className="flex gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: color }} />
                  <span><span className="font-semibold text-foreground">{g.title}.</span> {g.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color }}>Atividades realizadas</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)]">O que acontece no projeto</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.activities.map((a, i) => {
              const c = colorMap[a.color];
              return (
                <div key={a.title} className="relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-sm font-bold text-white" style={{ backgroundColor: c }}>{String(i + 1).padStart(2, "0")}</div>
                    <div className="font-display text-base font-bold text-[color:var(--brand-petrol)]">{a.title}</div>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{a.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color }}>Técnicas trabalhadas</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)]">Saberes e práticas do projeto</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.techniqueCards.map((t) => (
            <div key={t.name} className="rounded-2xl border border-dashed border-border bg-card p-5">
              <div className="mb-2 h-1 w-10 rounded-full" style={{ backgroundColor: color }} />
              <div className="font-display text-base font-bold text-[color:var(--brand-petrol)]">{t.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color }}>Galeria de fotos</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)]">Registros do projeto</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {project.gallery.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)} className="group aspect-[4/3] overflow-hidden rounded-xl">
                <img src={src} alt={project.title} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 text-white" style={{ backgroundColor: colorMap[project.cta.bg] }}>
        <div className="craft-dots absolute inset-0 opacity-15" />
        <div className="absolute inset-y-0 right-0 hidden w-1/3 lg:block">
          <img src={project.cta.image} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to right, ${colorMap[project.cta.bg]}, transparent 60%)` }} />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> {project.category}
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl">{project.cta.title}</h2>
            <p className="mt-3 max-w-2xl text-base text-white/90">{project.cta.text}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.cta.buttons.map((b, i) => (
                <Link
                  key={b.label}
                  to={b.to}
                  className={i === 0 ? "rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90" : "rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"}
                >
                  {b.label} {i === 0 && <ArrowRight className="ml-1 inline h-4 w-4" />}
                </Link>
              ))}
              <Link to="/projetos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10">Ver outros projetos</Link>
            </div>
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