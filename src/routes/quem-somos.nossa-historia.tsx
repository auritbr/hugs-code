import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, Sparkles, Handshake, Store, Award, Users, HeartHandshake } from "lucide-react";
import { StitchLine, ThreadLine, ArcShape, BlobShape } from "@/components/site/CraftGraphics";

export const Route = createFileRoute("/quem-somos/nossa-historia")({
  head: () => ({
    meta: [
      { title: "Nossa História — Ponto de Cultura" },
      { name: "description", content: "Origem, trajetória, marcos e reconhecimento do Ponto de Cultura como referência em artesanato e formação." },
      { property: "og:title", content: "Nossa História — Ponto de Cultura" },
      { property: "og:description", content: "Origem, trajetória e marcos do Ponto de Cultura." },
      { property: "og:url", content: "/quem-somos/nossa-historia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/nossa-historia" }],
  }),
  component: NossaHistoria,
});

const timeline = [
  { year: "2010", title: "Fundação da organização", text: "Início das primeiras atividades comunitárias e encontros voltados ao artesanato.", color: "#E85A52", Icon: Sparkles },
  { year: "2013", title: "Primeiras oficinas formativas", text: "Organização de oficinas regulares e fortalecimento da metodologia participativa.", color: "#36B7D4", Icon: Users },
  { year: "2016", title: "Ampliação das atividades", text: "Inclusão de novas técnicas artesanais e ampliação do público atendido.", color: "#E9B743", Icon: Handshake },
  { year: "2019", title: "Reconhecimento como Ponto de Cultura", text: "Consolidação da atuação cultural e fortalecimento das parcerias institucionais.", color: "#A8C957", Icon: Award },
  { year: "2022", title: "Artesanato e geração de renda", text: "Criação de ações voltadas ao desenvolvimento de produtos, feiras e autonomia dos participantes.", color: "#FF7A00", Icon: Store },
  { year: "2025", title: "Novas redes e parcerias", text: "Ampliação da circulação das atividades e da articulação com diferentes espaços culturais.", color: "#073B4C", Icon: HeartHandshake },
];

const historicalPhotos = [
  { src: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80", caption: "Primeiras oficinas comunitárias" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80", caption: "Bordado em produção coletiva" },
  { src: "https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?auto=format&fit=crop&w=800&q=80", caption: "Cerâmica e experimentação" },
  { src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80", caption: "Encontros e formações" },
];

function NossaHistoria() {
  return (
    <>
      <PageHeader
        eyebrow="Nossa História"
        title="Uma trajetória construída por saberes, encontros e muitas mãos."
        description="Da fundação ao reconhecimento como Ponto de Cultura: conheça a origem, os marcos e as pessoas que sustentam essa caminhada."
        tone="orange"
        image="https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Origem e desenvolvimento */}
      <section className="relative overflow-hidden bg-[color:var(--brand-sand)]/60 py-14 sm:py-16">
        <ArcShape className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 opacity-20" color="#E85A52" />
        <BlobShape className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 opacity-15" color="#36B7D4" />
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8">
          <div>
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Origem</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Do primeiro encontro à consolidação de um Ponto de Cultura.
            </h2>
            <ThreadLine className="mt-4 h-2.5 w-24" color="#E85A52" />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A organização nasceu do encontro entre pessoas que reconhecem no fazer artesanal uma forma de preservar memórias, compartilhar conhecimentos e criar novas possibilidades para a comunidade.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Com o passar dos anos, as atividades se ampliaram: novas técnicas foram incorporadas, oficinas passaram a acontecer regularmente e a participação da comunidade cresceu, dando origem a projetos, exposições e ações de circulação.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O reconhecimento como Ponto de Cultura fortaleceu a atuação, ampliou parcerias e permitiu que os saberes construídos no território alcançassem novos espaços, sem perder o vínculo com quem faz.
            </p>
          </div>
          <div className="relative mx-auto grid w-full max-w-md grid-cols-6 grid-rows-6 gap-3 lg:max-w-none">
            <div className="col-span-4 row-span-4 overflow-hidden rounded-[2.5rem] rounded-tr-[1rem] border-4 border-white shadow-md">
              <img src={historicalPhotos[0].src} alt={historicalPhotos[0].caption} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-2 row-span-3 col-start-5 overflow-hidden rounded-[1.5rem] rounded-bl-[2rem] border-4 border-white shadow-md">
              <img src={historicalPhotos[2].src} alt={historicalPhotos[2].caption} className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="col-span-3 row-span-2 col-start-3 row-start-5 overflow-hidden rounded-[1.5rem] rounded-tr-[2rem] border-4 border-white shadow-md">
              <img src={historicalPhotos[1].src} alt={historicalPhotos[1].caption} className="h-full w-full object-cover" loading="lazy" />
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
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Linha do tempo</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[color:var(--brand-petrol)] sm:text-4xl">
              Marcos de uma trajetória construída coletivamente
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground">
              Cada etapa representa encontros, aprendizados e novos caminhos para a atuação cultural.
            </p>
          </div>

          <div className="relative mt-14 hidden lg:block">
            <div className="absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 bg-[image:repeating-linear-gradient(90deg,#E85A52_0_10px,transparent_10px_20px)]" aria-hidden />
            <div className="grid grid-cols-6 gap-6">
              {timeline.map((m, i) => {
                const top = i % 2 === 0;
                return (
                  <div key={m.year} className={top ? "flex flex-col items-center pb-24" : "flex flex-col-reverse items-center pt-24"}>
                    <div className="w-full">
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

      {/* Fotografias históricas */}
      <section className="bg-[color:var(--brand-sand)]/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-[color:var(--brand-red)]">Registros</div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)] sm:text-4xl">Fotografias que contam nossa trajetória</h2>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {historicalPhotos.map((p, i) => (
              <figure key={i} className="overflow-hidden rounded-2xl border-4 border-white bg-white shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.src} alt={p.caption} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="px-4 py-3 text-xs font-semibold text-[color:var(--brand-petrol)]">{p.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="relative mx-auto grid w-full max-w-[1140px] overflow-hidden rounded-[24px] text-white lg:grid-cols-[1fr_34%]" style={{ backgroundColor: "var(--brand-petrol)" }}>
          <div className="relative px-6 py-8 sm:px-10 sm:py-10">
            <ArcShape className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 opacity-15" color="#E9B743" />
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Nossa história
            </div>
            <h2 className="mt-3 font-display text-[26px] font-extrabold leading-tight sm:text-[30px] lg:text-[36px]">
              Essa história continua sendo construída todos os dias.
            </h2>
            <ThreadLine className="mt-3 h-2 w-20" color="#E9B743" />
            <p className="mt-2 line-clamp-3 max-w-xl text-sm text-white/90">
              Conheça a equipe, acompanhe os projetos e descubra como participar das ações do Ponto de Cultura.
            </p>
            <div className="mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link to="/quem-somos/equipe" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-4 py-2.5 text-sm font-semibold text-[color:var(--brand-petrol)] hover:opacity-90">
                Conheça a equipe <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projetos" className="inline-flex items-center justify-center rounded-full border border-white/40 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                Explore os projetos
              </Link>
            </div>
          </div>
          <div className="relative min-h-[180px] lg:min-h-full">
            <img src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80" alt="Grupo em oficina do Ponto de Cultura" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, var(--brand-petrol) 0%, transparent 55%)" }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, var(--brand-petrol) 0%, transparent 40%)" }} />
          </div>
        </div>
      </section>
    </>
  );
}
