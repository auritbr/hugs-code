import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, Compass, Eye, HeartHandshake, Users, FileText, Camera } from "lucide-react";
import { ThreadLine, ArcShape, BlobShape, StitchLine } from "@/components/site/CraftGraphics";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura" },
      { name: "description", content: "Conheça a atuação institucional, a missão, a visão e os valores do Ponto de Cultura dedicado ao artesanato." },
      { property: "og:title", content: "Quem Somos — Ponto de Cultura" },
      { property: "og:description", content: "Uma organização dedicada ao artesanato, à formação cultural e à valorização dos saberes." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

function QuemSomos() {
  return (
    <>
      <PageHeader
        eyebrow="Quem Somos"
        title="Cultura, artesanato e comunidade em um mesmo caminho."
        description="Somos uma organização dedicada ao artesanato, à formação cultural, à geração de renda e à valorização dos saberes construídos coletivamente."
        tone="orange"
        image="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Apresentação institucional resumida */}
      <section className="relative overflow-hidden bg-[color:var(--brand-sand)]/60 py-14 sm:py-16">
        <ArcShape className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20" color="#E85A52" />
        <BlobShape className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 opacity-15" color="#36B7D4" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Institucional</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Artesanato como expressão, aprendizagem e transformação.
            </h2>
            <ThreadLine className="mt-4 h-2.5 w-24" color="#E85A52" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Atuamos como Ponto de Cultura dedicado à formação, à produção artesanal e à valorização dos saberes tradicionais. Nossas ações envolvem oficinas regulares, encontros formativos, exposições, feiras e projetos de geração de renda.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Nossa atuação é construída em rede, com a participação de artesãs, artesãos, educadores, parceiros e da comunidade que sustenta essa caminhada.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/quem-somos/nossa-historia" className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-5 py-2.5 text-sm font-bold text-white hover:opacity-90">
                Conheça nossa história <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/quem-somos/equipe" className="inline-flex items-center gap-2 rounded-full border-2 border-[color:var(--brand-petrol)] px-5 py-2.5 text-sm font-bold text-[color:var(--brand-petrol)] hover:bg-[color:var(--brand-petrol)] hover:text-white transition">
                Conheça a equipe
              </Link>
            </div>
          </div>
          <div className="relative mx-auto grid w-full max-w-md grid-cols-6 grid-rows-6 gap-3 lg:max-w-none">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-[2.5rem] rounded-tr-[1rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80" alt="Oficina do Ponto de Cultura" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 overflow-hidden rounded-[1.5rem] rounded-bl-[2rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=600&q=80" alt="Peças artesanais em cerâmica" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-5 overflow-hidden rounded-[1.5rem] rounded-tr-[2rem] border-4 border-white shadow-md">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80" alt="Bordado sendo produzido" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-2 col-start-1 row-start-5 grid place-items-center rounded-2xl bg-[#E9B743]/70">
              <Users className="h-8 w-8 text-[color:var(--brand-petrol)]" />
            </div>
            <StitchLine className="absolute -bottom-2 left-6 h-2 w-40 opacity-70" color="#E85A52" />
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Propósito</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)] sm:text-4xl">O que orienta nossa atuação</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <article className="relative overflow-hidden rounded-[24px] p-8 text-white" style={{ backgroundColor: "#0E7C93" }}>
              <BlobShape className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 opacity-30" color="#E9B743" />
              <Compass className="relative h-8 w-8 text-[color:var(--brand-gold)]" />
              <h3 className="relative mt-4 font-display text-2xl font-extrabold">Missão</h3>
              <ThreadLine className="relative mt-2 h-2 w-16" color="#E9B743" />
              <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                Promover o desenvolvimento cultural e comunitário por meio do artesanato, da educação, da criatividade e da valorização dos saberes compartilhados entre gerações.
              </p>
            </article>
            <article className="relative overflow-hidden rounded-[24px] p-8 text-[color:var(--brand-petrol)]" style={{ backgroundColor: "#F7B23B" }}>
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full border-8 border-white/40" aria-hidden />
              <Eye className="relative h-8 w-8" />
              <h3 className="relative mt-4 font-display text-2xl font-extrabold">Visão</h3>
              <ThreadLine className="relative mt-2 h-2 w-16" color="#073B4C" />
              <p className="relative mt-4 text-sm leading-relaxed">
                Ser reconhecido como espaço de referência na preservação de conhecimentos, na formação de artesãos e na criação de oportunidades por meio da cultura.
              </p>
            </article>
            <article className="relative overflow-hidden rounded-[24px] p-8 text-white" style={{ backgroundColor: "#E85A52" }}>
              <BlobShape className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 opacity-25" color="#A8C957" />
              <HeartHandshake className="relative h-8 w-8 text-[color:var(--brand-gold)]" />
              <h3 className="relative mt-4 font-display text-2xl font-extrabold">Valores</h3>
              <ThreadLine className="relative mt-2 h-2 w-16" color="#E9B743" />
              <p className="relative mt-4 text-sm leading-relaxed text-white/95">
                Respeito, ética, diversidade, cooperação, sustentabilidade, transparência, autonomia, criatividade e compromisso com a comunidade.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Atalhos rápidos */}
      <section className="bg-[color:var(--brand-sand)]/60 py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-3">
            <Link to="/quem-somos/nossa-historia" className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-lg transition">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-red)]/10 text-[color:var(--brand-red)]"><Camera className="h-6 w-6" /></span>
              <div>
                <div className="font-display text-lg font-extrabold text-[color:var(--brand-petrol)]">Nossa História</div>
                <p className="mt-1 text-sm text-muted-foreground">Origem, marcos e trajetória do Ponto de Cultura.</p>
              </div>
            </Link>
            <Link to="/quem-somos/equipe" className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-lg transition">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-turquoise)]/15 text-[color:var(--brand-turquoise)]"><Users className="h-6 w-6" /></span>
              <div>
                <div className="font-display text-lg font-extrabold text-[color:var(--brand-petrol)]">Equipe</div>
                <p className="mt-1 text-sm text-muted-foreground">As pessoas que sustentam nossas ações no dia a dia.</p>
              </div>
            </Link>
            <Link to="/quem-somos/transparencia" className="group flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 hover:-translate-y-1 hover:shadow-lg transition">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[color:var(--brand-gold)]/20 text-[color:var(--brand-orange)]"><FileText className="h-6 w-6" /></span>
              <div>
                <div className="font-display text-lg font-extrabold text-[color:var(--brand-petrol)]">Transparência</div>
                <p className="mt-1 text-sm text-muted-foreground">Documentos institucionais e acesso à informação.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
