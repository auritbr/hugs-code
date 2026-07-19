import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { getProject, type Project } from "@/data/projects";
import { useState, type ComponentType } from "react";
import { ArrowRight, Scissors, Palette, Tag, Sparkles, Package, Camera, Circle, Square, Star, Heart, Flower2, Leaf, Coins } from "lucide-react";
import { StitchLine, ThreadLine } from "@/components/site/CraftGraphics";

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

const activityIconsBySlug: Record<string, Array<ComponentType<{ className?: string }>>> = {
  "fios-da-memoria": [Circle, Sparkles, Scissors, Square, Star, Heart],
  "barro-forma-identidade": [Flower2, Circle, Sparkles, Palette, Leaf, Star],
  "artesanato-que-gera-renda": [Tag, Sparkles, Package, Coins, Camera, Star],
};

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const [idx, setIdx] = useState<number | null>(null);
  const color = colorMap[project.color];
  const galleryPhotos = project.gallery.map((src) => ({ src, caption: project.title }));
  const icons = activityIconsBySlug[project.slug] ?? [Circle, Sparkles, Scissors, Square, Star, Heart];

  // per-project themed styles for activity cards
  const themeBg =
    project.slug === "fios-da-memoria" ? "#FDECEA" :
    project.slug === "barro-forma-identidade" ? "#F5E7DA" :
    "#EEF5DF";
  const isBarro = project.slug === "barro-forma-identidade";
  const isRenda = project.slug === "artesanato-que-gera-renda";
  const isFios = project.slug === "fios-da-memoria";

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
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.activities.map((a, i) => {
              const c = colorMap[a.color];
              const Icon = icons[i % icons.length];
              const cardRadius = isFios ? "rounded-[22px]" : isBarro ? "rounded-tl-[36px] rounded-br-[36px] rounded-tr-xl rounded-bl-xl" : "rounded-[14px]";
              const border = isFios ? "border-2 border-dashed" : isRenda ? "border border-dashed" : "border border-transparent";
              return (
                <div
                  key={a.title}
                  className={`group relative overflow-hidden p-5 transition hover:-translate-y-[3px] ${cardRadius} ${border}`}
                  style={{ backgroundColor: themeBg, borderColor: `${c}66` }}
                >
                  {/* small numeric marker */}
                  <span className="absolute right-4 top-4 font-display text-2xl font-black opacity-25" style={{ color: c }}>{String(i + 1).padStart(2, "0")}</span>

                  {/* project-specific decorative */}
                  {isFios && (
                    <ThreadLine className="pointer-events-none absolute -left-2 bottom-3 h-2 w-24 opacity-70" color={c} />
                  )}
                  {isBarro && (
                    <div className="pointer-events-none absolute -bottom-6 -right-4 h-16 w-16 rounded-full opacity-25" style={{ backgroundColor: c }} aria-hidden />
                  )}
                  {isRenda && (
                    <div className="pointer-events-none absolute left-0 top-6 h-2 w-2 rounded-full" style={{ backgroundColor: c, marginLeft: -4 }} aria-hidden />
                  )}

                  <div className="relative">
                    <div className="grid h-10 w-10 place-items-center rounded-xl" style={{ backgroundColor: `${c}20`, color: c }}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 font-display text-base font-bold text-[color:var(--brand-petrol)]">{a.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-4">{a.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color }}>Técnicas trabalhadas</div>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)]">Saberes e práticas do projeto</h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {project.techniqueCards.map((t, i) => {
            const img = project.gallery[i % project.gallery.length];
            const cardRadius = isFios ? "rounded-2xl" : isBarro ? "rounded-[28px]" : "rounded-xl";
            return (
              <article
                key={t.name}
                className={`group relative flex h-full flex-col overflow-hidden bg-card shadow-sm transition hover:-translate-y-[3px] hover:shadow-md ${cardRadius}`}
                style={{ borderTop: `4px solid ${color}` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
                  {isFios && <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 -rotate-6 rounded-md border-2 border-dashed border-white/80" aria-hidden />}
                  {isBarro && <div className="pointer-events-none absolute -bottom-6 left-6 h-14 w-14 rounded-full bg-white/60" aria-hidden />}
                  {isRenda && (
                    <span className="absolute left-3 top-3 rounded-sm bg-white px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest" style={{ color }}>Etiqueta</span>
                  )}
                </div>
                {isFios && <StitchLine className="h-2 w-full" color={color} />}
                <div className="flex flex-1 flex-col p-5">
                  <div className="font-display text-base font-bold text-[color:var(--brand-petrol)]">{t.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                </div>
              </article>
            );
          })}
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

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto grid w-full max-w-[1240px] overflow-hidden rounded-[28px] text-white lg:grid-cols-[1fr_auto]"
          style={{ backgroundColor: colorMap[project.cta.bg] }}
        >
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:max-w-2xl lg:py-16">
            {isFios && <ThreadLine className="pointer-events-none absolute left-6 top-6 h-2 w-32 opacity-70" color="#ffffff" />}
            {isBarro && <div className="pointer-events-none absolute -left-6 top-6 h-16 w-16 rounded-full bg-white/10" aria-hidden />}
            {isRenda && <span className="pointer-events-none absolute right-6 top-6 rounded bg-white/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest">Feira</span>}

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-white" /> {project.category}
            </div>
            <h2 className="mt-4 font-display text-[28px] font-extrabold leading-tight sm:text-[34px] lg:text-[40px]">{project.cta.title}</h2>
            <p className="mt-3 max-w-xl text-sm text-white/90 sm:text-base">{project.cta.text}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {project.cta.buttons.map((b, i) => (
                <Link
                  key={b.label}
                  to={b.to}
                  className={i === 0 ? "inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-foreground hover:bg-white/90" : "inline-flex items-center justify-center rounded-full border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"}
                >
                  {b.label} {i === 0 && <ArrowRight className="ml-1 inline h-4 w-4" />}
                </Link>
              ))}
            </div>
          </div>
          <div className="relative min-h-[220px] lg:w-[38%] lg:min-h-full">
            <img src={project.cta.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div
              className="absolute inset-0 lg:bg-gradient-to-r"
              style={{ background: `linear-gradient(to top, ${colorMap[project.cta.bg]} 0%, transparent 55%)` }}
            />
            <div
              className="absolute inset-0 hidden lg:block"
              style={{ background: `linear-gradient(to right, ${colorMap[project.cta.bg]} 0%, transparent 45%)` }}
            />
            {isFios && <div className="pointer-events-none absolute bottom-4 right-4 hidden h-12 w-12 -rotate-12 rounded-md border-2 border-dashed border-white/80 lg:block" aria-hidden />}
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