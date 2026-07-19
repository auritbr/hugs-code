export function LegalContent({ sections }: { sections: { title: string; body: string }[] }) {
  return (
    <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="mb-8 text-xs uppercase tracking-widest text-muted-foreground">
        Última atualização: julho de 2026
      </p>
      <div className="space-y-8">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}