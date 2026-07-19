import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { documents } from "@/data/transparency";
import { useMemo, useState } from "react";
import { FileText, Download, Eye, ChevronDown, Archive, FolderArchive, ClipboardList, FileBadge, Handshake, Megaphone, ShieldCheck, FileStack } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/quem-somos/transparencia")({
  head: () => ({
    meta: [
      { title: "Transparência — Ponto de Cultura" },
      { name: "description", content: "Documentos institucionais, prestações de contas e políticas do Ponto de Cultura." },
      { property: "og:url", content: "/quem-somos/transparencia" },
    ],
    links: [{ rel: "canonical", href: "/quem-somos/transparencia" }],
  }),
  component: Transparencia,
});

function Transparencia() {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const byCategory = useMemo(() => {
    const map = new Map<string, typeof documents>();
    documents.forEach((d) => {
      const arr = map.get(d.category) ?? [];
      arr.push(d);
      map.set(d.category, arr);
    });
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b, "pt-BR"));
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Transparência"
        title="Transparência e acesso à informação"
        description="Consulte documentos, relatórios, prestações de contas e registros institucionais do Ponto de Cultura."
        tone="petrol"
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="bg-secondary/40 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white shadow-sm">
            <Archive className="h-6 w-6 text-[color:var(--brand-petrol)]" />
          </div>
          <div className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em] text-[color:var(--brand-red)]">Acervo</div>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-[color:var(--brand-petrol)]">Acervo institucional</h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Acesse documentos, certificados, reconhecimentos, portfólios e registros do Ponto de Cultura, organizados por categoria para facilitar a consulta pública.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
            {byCategory.map(([category, docs]) => {
              const isOpen = open[category] ?? false;
              const CIcon = categoryIcon(category);
              return (
                <div key={category} className="overflow-hidden rounded-[22px] border border-border bg-card">
                  <button
                    onClick={() => setOpen((o) => ({ ...o, [category]: !isOpen }))}
                    className="flex w-full items-center justify-between gap-3 px-5 py-5 text-left hover:bg-secondary/40 sm:px-8 sm:py-6"
                    aria-expanded={isOpen}
                  >
                    <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-[color:var(--brand-petrol)] sm:h-10 sm:w-10"><CIcon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" /></div>
                      <div className="min-w-0">
                        <div className="truncate font-display text-[15px] font-bold text-[color:var(--brand-petrol)] sm:text-base">{category}</div>
                        <div className="text-[11px] text-muted-foreground sm:text-xs">{docs.length} {docs.length === 1 ? "documento" : "documentos"}</div>
                      </div>
                    </div>
                    <ChevronDown className={cn("h-5 w-5 shrink-0 text-[color:var(--brand-petrol)] transition", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border">
                      {docs.map((d) => (
                        <div key={d.name} className="flex flex-col gap-3 border-b border-border/60 px-5 py-4 last:border-0 sm:flex-row sm:items-center sm:justify-between sm:px-8">
                          <div className="flex min-w-0 gap-3">
                            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[color:var(--brand-turquoise)]/15 text-[color:var(--brand-turquoise)]"><FileText className="h-5 w-5" /></div>
                            <div className="min-w-0">
                              <div className="truncate font-medium">{d.name}</div>
                              <div className="text-xs text-muted-foreground">{d.year} · {d.format} · {d.size}</div>
                            </div>
                          </div>
                          <div className="flex shrink-0 gap-2">
                            <a href={d.url} className="inline-flex items-center gap-1 rounded-md border border-border px-3 py-1.5 text-xs hover:bg-secondary"><Eye className="h-3.5 w-3.5" />Visualizar</a>
                            <a href={d.url} className="inline-flex items-center gap-1 rounded-md bg-[color:var(--brand-petrol)] px-3 py-1.5 text-xs text-white hover:opacity-90"><Download className="h-3.5 w-3.5" />Baixar</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
      </section>
    </>
  );
}

function categoryIcon(cat: string) {
  const c = cat.toLowerCase();
  if (c.includes("estatuto") || c.includes("institucion")) return FolderArchive;
  if (c.includes("prestação") || c.includes("portfó")) return FileStack;
  if (c.includes("relatório")) return ClipboardList;
  if (c.includes("certid") || c.includes("certific") || c.includes("reconhec")) return FileBadge;
  if (c.includes("parceria") || c.includes("termo") || c.includes("convênio")) return Handshake;
  if (c.includes("edital") || c.includes("resultado")) return Megaphone;
  if (c.includes("polític")) return ShieldCheck;
  return FileText;
}