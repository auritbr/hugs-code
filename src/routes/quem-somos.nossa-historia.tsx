import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Lightbox } from "@/components/site/Lightbox";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Ponto de Cultura" },
      { name: "description", content: "A trajetória do Ponto de Cultura, seus marcos e sua relação com o território." },
      { property: "og:url", content: "/quem-somos/nossa-historia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/nossa-historia" }],
  }),
  component: History,
});

const timeline = [
  { year: "2010", title: "Uma ideia que se torna organização", text: "Um grupo de bordadeiras e educadores da comunidade se reúne para transformar rodas informais em ações permanentes." },
  { year: "2012", title: "Primeiro ateliê", text: "Inauguração do primeiro espaço dedicado às oficinas coletivas." },
  { year: "2014", title: "Chegada da cerâmica", text: "Novo espaço permite ampliar o trabalho com barro e modelagem." },
  { year: "2016", title: "Ampliação do quadro formativo", text: "Novas educadoras se integram e a metodologia é registrada." },
  { year: "2019", title: "Reconhecimento oficial", text: "A organização passa a integrar a rede de Pontos de Cultura." },
  { year: "2021", title: "Feiras e mostras", text: "Consolidação de calendários de exposição e comercialização." },
  { year: "2023", title: "Novos territórios", text: "Ações itinerantes ampliam o alcance para bairros parceiros." },
  { year: "2026", title: "Continuidade dos saberes", text: "O programa de mentoria entre gerações se consolida como frente estratégica." },
];

const history = [
  "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1610478920392-95888b0e5b21?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1607013407627-6ee814329547?auto=format&fit=crop&w=1000&q=80",
];

function History() {
  const [idx, setIdx] = useState<number | null>(null);
  const photos = history.map((src) => ({ src, caption: "Momento histórico do Ponto de Cultura" }));

  return (
    <>
      <PageHeader
        eyebrow="Nossa História"
        title="Uma trajetória tecida por muitas mãos."
        description="Desde 2010, o Ponto de Cultura constrói um percurso que une saberes tradicionais, formação continuada e presença comunitária."
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos", to: "/quem-somos" }, { label: "Nossa História" }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4 text-muted-foreground">
          <p>A origem do Ponto de Cultura está enraizada no encontro cotidiano entre pessoas que reconheciam, no fazer artesanal, uma linguagem capaz de sustentar memórias, criar vínculos e abrir caminhos.</p>
          <p>De rodas informais em varandas e centros comunitários, o trabalho ganhou espaço próprio, encontrou parceiros e assumiu o compromisso público com a formação, a preservação e a criação de oportunidades.</p>
          <p>Ao longo de mais de uma década, a organização acompanhou transformações do território e desenvolveu metodologia própria, baseada em escuta, cooperação e valorização das mestras e mestres artesãos.</p>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Linha do tempo</h2>
          <div className="mt-10 space-y-8">
            {timeline.map((m, i) => (
              <div key={m.year} className="grid gap-4 sm:grid-cols-[100px_1fr]">
                <div>
                  <div className="text-xl font-bold text-primary">{m.year}</div>
                  <div className="h-px w-10 bg-[color:var(--brand-red)]" />
                </div>
                <div className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-bold">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                </div>
              </div>
            )).slice(0, 8)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Território e comunidade</h2>
            <p className="mt-3 text-muted-foreground">O Ponto de Cultura acompanha as transformações do território onde atua. Cada projeto é construído com escuta ativa, respeito às histórias locais e disposição para experimentar novos caminhos com quem participa.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Continuidade dos saberes</h2>
            <p className="mt-3 text-muted-foreground">Um dos compromissos centrais é a mentoria entre gerações: mestras artesãs partilham técnicas com jovens aprendizes, mantendo vivas práticas que atravessam décadas.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold">Galeria histórica</h2>
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
            {history.map((src, i) => (
              <button key={i} onClick={() => setIdx(i)} className="aspect-[4/3] overflow-hidden rounded-xl">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover transition hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {idx !== null && (
        <Lightbox
          photos={photos}
          index={idx}
          onClose={() => setIdx(null)}
          onPrev={() => setIdx((i) => (i === null ? 0 : (i + photos.length - 1) % photos.length))}
          onNext={() => setIdx((i) => (i === null ? 0 : (i + 1) % photos.length))}
        />
      )}

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary p-8 text-primary-foreground">
          <h2 className="text-2xl font-bold">Uma história em construção contínua.</h2>
          <p className="mt-2 max-w-2xl opacity-80">Descubra os projetos e a equipe que dão continuidade a essa trajetória.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/projetos" className="rounded-full bg-[color:var(--brand-gold)] px-4 py-2 text-sm font-semibold text-primary">Ver projetos</Link>
            <Link to="/quem-somos/equipe" className="rounded-full border border-white/30 px-4 py-2 text-sm text-white">Conhecer a equipe <ArrowRight className="ml-1 inline h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </>
  );
}