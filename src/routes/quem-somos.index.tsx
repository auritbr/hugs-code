import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, Compass, Eye, HeartHandshake, Sparkles, Handshake, Store, Award, Users } from "lucide-react";
import { StitchLine, ThreadLine, ArcShape, BlobShape } from "@/components/site/CraftGraphics";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura" },
      { name: "description", content: "Conheça a história, os princípios e as pessoas que constroem o Ponto de Cultura." },
      { property: "og:title", content: "Quem Somos — Ponto de Cultura" },
      { property: "og:description", content: "História, propósito e trajetória do Ponto de Cultura." },
      { property: "og:url", content: "/quem-somos" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos" }],
  }),
  component: QuemSomos,
});

const timeline = [
  { year: "2010", title: "Fundação da organização", text: "Início das primeiras atividades comunitárias e encontros voltados ao artesanato.", color: "#E85A52", Icon: Sparkles },
  { year: "2013", title: "Primeiras oficinas formativas", text: "Organização de oficinas regulares e fortalecimento da metodologia participativa.", color: "#36B7D4", Icon: Users },
  { year: "2016", title: "Ampliação das atividades", text: "Inclusão de novas técnicas artesanais e ampliação do público atendido.", color: "#E9B743", Icon: Handshake },
  { year: "2019", title: "Reconhecimento como Ponto de Cultura", text: "Consolidação da atuação cultural e fortalecimento das parcerias institucionais.", color: "#A8C957", Icon: Award },
  { year: "2022", title: "Artesanato e geração de renda", text: "Criação de ações voltadas ao desenvolvimento de produtos, feiras e autonomia dos participantes.", color: "#FF7A00", Icon: Store },
  { year: "2025", title: "Novas redes e parcerias", text: "Ampliação da circulação das atividades e da articulação com diferentes espaços culturais.", color: "#073B4C", Icon: HeartHandshake },
];

function QuemSomos() {
  return (
    <>
      <PageHeader
        eyebrow="Quem Somos"
        title="Uma trajetória construída por saberes, encontros e muitas mãos."
        description="Conheça a história, os princípios e as pessoas que transformam o artesanato em cultura, convivência e oportunidade."
        tone="orange"
        image="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Seção institucional inicial */}
      <section className="relative overflow-hidden bg-[color:var(--brand-sand)]/60 py-14 sm:py-16">
        <ArcShape className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20" color="#E85A52" />
        <BlobShape className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 opacity-15" color="#36B7D4" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Nossa trajetória</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Artesanato como expressão, memória e transformação.
            </h2>
            <ThreadLine className="mt-4 h-2.5 w-24" color="#E85A52" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              O Ponto de Cultura nasceu do encontro entre pessoas que reconhecem no fazer artesanal uma forma de preservar memórias, compartilhar conhecimentos e criar novas possibilidades para a comunidade.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Ao longo de sua trajetória, a organização passou a desenvolver oficinas, encontros formativos, exposições e ações de circulação, aproximando diferentes gerações e valorizando saberes construídos no território.
            </p>
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
              <Sparkles className="h-8 w-8 text-[color:var(--brand-petrol)]" />
            </div>
            <StitchLine className="absolute -bottom-2 left-6 h-2 w-40 opacity-70" color="#E85A52" />
          </div>
        </div>
      </section>

      {/* Linha do tempo */}
      <section className="relative overflow-hidden py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Nossa história</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Marcos de uma trajetória construída coletivamente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Cada etapa representa encontros, aprendizados e novos caminhos para a atuação cultural.
            </p>
          </div>

          {/* Desktop: alternating around a central stitched line */}
          <div className="relative mt-14 hidden lg:block">
            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-[image:repeating-linear-gradient(90deg,#E85A52_0_10px,transparent_10px_20px)]" aria-hidden />
            <div className="grid grid-cols-6 gap-6">
              {timeline.map((m, i) => {
                const top = i % 2 === 0;
                return (
                  <div key={m.year} className={top ? "flex flex-col items-center pb-24" : "col-start-auto flex flex-col-reverse items-center pt-24"}>
                    <div className={top ? "w-full" : "w-full"}>
                      <div className="mx-auto max-w-[220px] rounded-2xl border-2 border-dashed bg-white p-4 shadow-sm" style={{ borderColor: `${m.color}66` }}>
                        <div className="flex items-center gap-2">
                          <span className="grid h-8 w-8 place-items-center rounded-full text-white" style={{ backgroundColor: m.color }}>
                            <m.Icon className="h-4 w-4" />
                          </span>
                          <span className="font-display text-lg font-extrabold" style={{ color: m.color }}>{m.year}</span>
                        </div>
                        <div className="mt-2 text-sm font-bold text-[color:var(--brand-petrol)]">{m.title}</div>
                        <p className="mt-1 text-xs text-muted-foreground">{m.text}</p>
                      </div>
                    </div>
                    <div className="my-2 h-8 w-[2px] bg-[image:repeating-linear-gradient(180deg,#E85A5266_0_6px,transparent_6px_12px)]" aria-hidden />
                    <span className="grid h-5 w-5 place-items-center rounded-full ring-4 ring-white" style={{ backgroundColor: m.color }} aria-hidden />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile / tablet: vertical stitched timeline */}
          <ol className="mt-10 space-y-6 lg:hidden">
            {timeline.map((m) => (
              <li key={m.year} className="relative pl-10">
                <span className="absolute left-2 top-0 bottom-0 w-[2px] bg-[image:repeating-linear-gradient(180deg,#E85A5266_0_6px,transparent_6px_12px)]" aria-hidden />
                <span className="absolute left-0 top-1.5 grid h-5 w-5 place-items-center rounded-full ring-4 ring-background" style={{ backgroundColor: m.color }} aria-hidden />
                <div className="rounded-xl border-2 border-dashed bg-card p-4" style={{ borderColor: `${m.color}55` }}>
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-full text-white" style={{ backgroundColor: m.color }}>
                      <m.Icon className="h-4 w-4" />
                    </span>
                    <span className="font-display text-lg font-extrabold" style={{ color: m.color }}>{m.year}</span>
                  </div>
                  <h3 className="mt-2 text-base font-bold text-[color:var(--brand-petrol)]">{m.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="bg-[color:var(--brand-sand)]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Propósito</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)] sm:text-4xl">O que orienta nossa atuação</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Princípios que conectam cultura, aprendizagem, respeito e compromisso com a comunidade.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Missão */}
            <article className="relative overflow-hidden rounded-[24px] p-8 text-white" style={{ backgroundColor: "#0E7C93" }}>
              <BlobShape className="pointer-events-none absolute -top-8 -right-8 h-40 w-40 opacity-30" color="#E9B743" />
              <ArcShape className="pointer-events-none absolute -bottom-10 -left-8 h-32 w-32 opacity-20" color="#ffffff" />
              <Compass className="relative h-8 w-8 text-[color:var(--brand-gold)]" />
              <h3 className="relative mt-4 font-display text-2xl font-extrabold">Missão</h3>
              <ThreadLine className="relative mt-2 h-2 w-16" color="#E9B743" />
              <p className="relative mt-4 text-sm leading-relaxed text-white/90">
                Promover o desenvolvimento cultural e comunitário por meio do artesanato, da educação, da criatividade e da valorização dos saberes compartilhados entre gerações.
              </p>
            </article>

            {/* Visão */}
            <article className="relative overflow-hidden rounded-[24px] p-8 text-[color:var(--brand-petrol)]" style={{ backgroundColor: "#F7B23B" }}>
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full border-8 border-white/40" aria-hidden />
              <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#FF7A00]/40" aria-hidden />
              <StitchLine className="pointer-events-none absolute left-3 top-3 h-2 w-16 opacity-60" color="#073B4C" />
              <Eye className="relative h-8 w-8" />
              <h3 className="relative mt-4 font-display text-2xl font-extrabold">Visão</h3>
              <ThreadLine className="relative mt-2 h-2 w-16" color="#073B4C" />
              <p className="relative mt-4 text-sm leading-relaxed">
                Ser reconhecido como espaço de referência na preservação de conhecimentos, na formação de artesãos e na criação de oportunidades por meio da cultura.
              </p>
            </article>

            {/* Valores */}
            <article className="relative overflow-hidden rounded-[24px] p-8 text-white" style={{ backgroundColor: "#E85A52" }}>
              <BlobShape className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 opacity-25" color="#A8C957" />
              <div className="pointer-events-none absolute right-8 top-6 h-4 w-4 rotate-45 bg-[color:var(--brand-gold)]" aria-hidden />
              <div className="pointer-events-none absolute right-16 top-12 h-3 w-3 rotate-45 bg-white/70" aria-hidden />
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

      {/* CTA final compacto */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto grid w-full max-w-[1140px] overflow-hidden rounded-[24px] text-white lg:grid-cols-[1fr_34%]"
          style={{ backgroundColor: "var(--brand-petrol)" }}
        >
          <div className="relative px-6 py-8 sm:px-10 sm:py-10">
            <ArcShape className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 opacity-15" color="#E9B743" />
            <div className="pointer-events-none absolute right-6 top-5 hidden h-3 w-3 rotate-12 rounded-sm bg-[#E85A52] sm:block" aria-hidden />

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Quem Somos
            </div>
            <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight sm:text-[30px] lg:text-[36px]">
              Essa história continua sendo construída todos os dias.
            </h2>
            <ThreadLine className="mt-3 h-2 w-20" color="#E9B743" />
            <p className="mt-2 line-clamp-3 max-w-xl text-sm text-white/90">
              Conheça as pessoas que compartilham seus saberes, acompanhe os projetos e descubra como participar das ações do Ponto de Cultura.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link to="/quem-somos/equipe" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-petrol)] hover:opacity-90">
                Conheça nossa equipe <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projetos" className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Explore os projetos
              </Link>
            </div>
          </div>
          <div className="relative min-h-[180px] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
              alt="Grupo em oficina do Ponto de Cultura"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, var(--brand-petrol) 0%, transparent 55%)" }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, var(--brand-petrol) 0%, transparent 40%)" }} />
            <div className="pointer-events-none absolute bottom-3 right-3 hidden h-10 w-10 rotate-6 rounded-md bg-[#E85A52]/80 lg:block" aria-hidden />
            <StitchLine className="pointer-events-none absolute left-3 top-3 hidden h-2 w-24 lg:block" color="#ffffff" />
          </div>
        </div>
      </section>
    </>
  );
}