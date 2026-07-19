import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, HandHeart, Users, Palette, Leaf, Recycle, Sparkles, Award, HeartHandshake } from "lucide-react";
import { StitchLine, ThreadLine, ArcShape } from "@/components/site/CraftGraphics";

export const Route = createFileRoute("/quem-somos/")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Ponto de Cultura" },
      { name: "description", content: "Trajetória, propósito e princípios do Ponto de Cultura." },
      { property: "og:title", content: "Quem Somos — Ponto de Cultura" },
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
        title="Uma trajetória construída por mãos, memórias e oportunidades."
        description="Conheça as pessoas, valores e princípios que orientam o Ponto de Cultura desde a sua fundação."
        crumbs={[{ label: "Início", to: "/" }, { label: "Quem Somos" }]}
        tone="orange"
        image="https://images.unsplash.com/photo-1611095973763-414019e72400?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="space-y-4 text-muted-foreground">
            <p>O Ponto de Cultura nasceu do encontro entre pessoas, saberes e práticas que reconhecem no artesanato uma ferramenta de expressão, preservação cultural, convivência e geração de oportunidades.</p>
            <p>Suas ações aproximam diferentes gerações e fortalecem conhecimentos transmitidos pela comunidade. A organização desenvolve trilhas formativas, encontros culturais, mostras e ações de comercialização.</p>
            <p>Atuamos de forma articulada com o território, respeitando ritmos, memórias e desejos coletivos. Cada projeto é construído com escuta e participação ativa das pessoas envolvidas.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5"><div className="text-3xl font-bold text-primary">15+</div><div className="text-sm text-muted-foreground">anos dedicados à cultura</div></div>
            <div className="rounded-2xl border border-border bg-[color:var(--brand-red)] p-5 text-white"><div className="text-3xl font-bold">1.200+</div><div className="text-sm opacity-90">pessoas atendidas</div></div>
            <div className="rounded-2xl border border-border bg-[color:var(--brand-gold)] p-5 text-primary"><div className="text-3xl font-bold">40</div><div className="text-sm opacity-90">oficinas por ano</div></div>
            <div className="rounded-2xl border border-border bg-card p-5"><div className="text-3xl font-bold text-primary">12</div><div className="text-sm text-muted-foreground">parcerias ativas</div></div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold">Nossa história</h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">Alguns marcos importantes da nossa trajetória.</p>
          <ol className="mt-10 space-y-6 border-l border-border pl-6">
            {[
              { year: "2010", title: "Fundação da organização", text: "Início das primeiras rodas de bordado e cerâmica no território." },
              { year: "2013", title: "Primeiras oficinas formais", text: "Estruturação da metodologia participativa." },
              { year: "2016", title: "Ampliação das atividades", text: "Novas trilhas formativas e ampliação da equipe." },
              { year: "2019", title: "Reconhecimento como Ponto de Cultura", text: "Certificação institucional e ampliação de parcerias." },
              { year: "2022", title: "Projeto de geração de renda", text: "Formação em precificação, comercialização e feiras." },
              { year: "2025", title: "Expansão das parcerias", text: "Parcerias institucionais fortalecem circulação das ações." },
            ].map((m) => (
              <li key={m.year} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-secondary/40" />
                <div className="text-xs font-semibold uppercase tracking-widest text-[color:var(--brand-red)]">{m.year}</div>
                <h3 className="mt-1 text-lg font-bold">{m.title}</h3>
                <p className="text-sm text-muted-foreground">{m.text}</p>
              </li>
            ))}
          </ol>
          <Link to="/quem-somos/nossa-historia" className="mt-8 inline-flex items-center gap-1 text-sm font-semibold text-primary">
            Ver história completa <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Propósito</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { Icon: HandHeart, title: "Missão", text: "Promover desenvolvimento humano, cultural e social por meio do artesanato e da educação." },
            { Icon: Palette, title: "Visão", text: "Ser referência na preservação de saberes e na formação de artesãos." },
            { Icon: Users, title: "Valores", text: "Respeito, ética, diversidade, cooperação, sustentabilidade e transparência." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <c.Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 text-lg font-bold">{c.title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 text-3xl font-bold">Princípios de atuação</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { Icon: Users, label: "Participação comunitária" },
            { Icon: Sparkles, label: "Saberes tradicionais" },
            { Icon: HeartHandshake, label: "Diversidade" },
            { Icon: Leaf, label: "Sustentabilidade" },
            { Icon: Award, label: "Autonomia" },
            { Icon: Users, label: "Cooperação" },
            { Icon: Palette, label: "Acesso à cultura" },
            { Icon: Recycle, label: "Transparência" },
          ].map((p) => (
            <div key={p.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary"><p.Icon className="h-4 w-4" /></div>
              <span className="text-sm font-medium">{p.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div
          className="relative mx-auto grid w-full max-w-[1240px] overflow-hidden rounded-[28px] text-white lg:grid-cols-[1fr_auto]"
          style={{ backgroundColor: "var(--brand-petrol)" }}
        >
          <div className="relative px-6 py-12 sm:px-10 sm:py-14 lg:max-w-2xl lg:py-16">
            <ArcShape className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 opacity-15" color="#E9B743" />
            <div className="pointer-events-none absolute right-6 top-6 hidden h-4 w-4 rotate-12 rounded-sm bg-[#E85A52] sm:block" aria-hidden />
            <div className="pointer-events-none absolute right-14 top-10 hidden h-3 w-3 rounded-full bg-[#36B7D4] sm:block" aria-hidden />

            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.22em]">
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--brand-gold)]" /> Nossa história
            </div>
            <h2 className="mt-4 font-display text-[26px] font-extrabold leading-tight sm:text-[32px] lg:text-[38px]">
              Uma história construída por muitas mãos continua a ganhar novos capítulos.
            </h2>
            <ThreadLine className="mt-4 h-2 w-24" color="#E9B743" />
            <p className="mt-4 max-w-xl text-sm text-white/90 sm:text-base">
              Conheça quem faz parte dessa trajetória, acompanhe os projetos e descubra como os saberes artesanais seguem fortalecendo vínculos e criando oportunidades.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/quem-somos/equipe" className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--brand-gold)] px-5 py-3 text-sm font-semibold text-[color:var(--brand-petrol)] hover:opacity-90">
                Conheça nossa equipe <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/projetos" className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">
                Explore os projetos
              </Link>
            </div>
          </div>
          <div className="relative min-h-[240px] lg:w-[40%] lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=1200&q=80"
              alt="Grupo em oficina do Ponto de Cultura"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 lg:hidden" style={{ background: "linear-gradient(to top, var(--brand-petrol) 0%, transparent 55%)" }} />
            <div className="absolute inset-0 hidden lg:block" style={{ background: "linear-gradient(to right, var(--brand-petrol) 0%, transparent 45%)" }} />
            <div className="pointer-events-none absolute bottom-4 right-4 hidden h-14 w-14 rotate-6 rounded-md bg-[#E85A52]/80 lg:block" aria-hidden />
            <div className="pointer-events-none absolute bottom-16 right-20 hidden h-10 w-10 rounded-full bg-[#E9B743]/80 lg:block" aria-hidden />
            <StitchLine className="pointer-events-none absolute left-4 top-4 hidden h-2 w-32 lg:block" color="#ffffff" />
          </div>
        </div>
      </section>
    </>
  );
}