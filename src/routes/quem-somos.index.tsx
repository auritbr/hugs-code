import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ArrowRight, HandHeart, Users, Palette, Leaf, Recycle, Sparkles, Award, HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/quem-somos")({
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

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <h2 className="text-2xl font-bold sm:text-3xl">Conheça as pessoas e os projetos por trás do Ponto de Cultura.</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/quem-somos/equipe" className="rounded-full bg-[color:var(--brand-gold)] px-5 py-3 text-sm font-semibold text-primary">Conheça nossa equipe</Link>
            <Link to="/projetos" className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Veja nossos projetos</Link>
          </div>
        </div>
      </section>
    </>
  );
}