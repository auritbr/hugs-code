import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { galleryByYear, galleryYears } from "@/data/gallery";
import { useState } from "react";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria — Ponto de Cultura" },
      { name: "description", content: "Registros das oficinas, feiras e vivências do Ponto de Cultura ao longo dos anos." },
      { property: "og:url", content: "/galeria" },
    ],
    links: [{ rel: "canonical", href: "/galeria" }],
  }),
  component: GaleriaPage,
});

function GaleriaPage() {
  const [year, setYear] = useState(galleryYears[0]);
  const [idx, setIdx] = useState<number | null>(null);
  const collection = galleryByYear[year];

  return (
    <>
      <PageHeader
        eyebrow="Galeria"
        title="Cada imagem, uma história"
        description="Registros das oficinas, feiras, encontros e vivências que compõem a memória viva do Ponto de Cultura."
        crumbs={[{ label: "Início", to: "/" }, { label: "Galeria" }]}
        tone="turquoise"
        image="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2 border-b border-border pb-6">
          {galleryYears.map((y) => (
            <button
              key={y}
              onClick={() => setYear(y)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                year === y ? "bg-primary text-primary-foreground" : "bg-secondary text-foreground hover:bg-secondary/80"
              }`}
            >
              {y}
            </button>
          ))}
        </div>

        <div className="mt-8 max-w-3xl">
          <h2 className="text-2xl font-bold">{collection.title}</h2>
          <p className="mt-2 text-muted-foreground">{collection.description}</p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {collection.photos.map((p, i) => (
            <button key={i} onClick={() => setIdx(i)} className="group aspect-square overflow-hidden rounded-xl">
              <img src={p.src} alt={p.caption} loading="lazy" className="h-full w-full object-cover transition group-hover:scale-105" />
            </button>
          ))}
        </div>
      </section>

      {idx !== null && (
        <Lightbox
          photos={collection.photos}
          index={idx}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx((i) => (i === null ? 0 : (i + collection.photos.length - 1) % collection.photos.length))}
          onNext={() => setIdx((i) => (i === null ? 0 : (i + 1) % collection.photos.length))}
        />
      )}
    </>
  );
}