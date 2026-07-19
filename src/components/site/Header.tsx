import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

const nav = [
  { label: "Início", to: "/" },
  {
    label: "Quem Somos",
    to: "/quem-somos",
    children: [
      { label: "Equipe", to: "/quem-somos/equipe" },
      { label: "Transparência", to: "/quem-somos/transparencia" },
    ],
  },
  {
    label: "Projetos",
    to: "/projetos",
    children: [
      { label: "Fios da Memória", to: "/projetos/fios-da-memoria" },
      { label: "Barro, Forma e Identidade", to: "/projetos/barro-forma-identidade" },
      { label: "Artesanato que Gera Renda", to: "/projetos/artesanato-que-gera-renda" },
    ],
  },
  { label: "Notícias", to: "/noticias" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full bg-background/95 backdrop-blur transition-all",
        scrolled && "shadow-[0_2px_18px_-8px_rgba(6,59,74,0.35)]",
      )}
    >
      <div className="rainbow-strip h-1.5 w-full" aria-hidden="true" />
      <a href="#conteudo" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground">
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <div key={item.to} className="group relative">
              <Link
                to={item.to}
                className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-foreground/75 hover:text-[color:var(--brand-red)] hover:bg-[color:var(--brand-red)]/8 transition"
                activeProps={{ className: "text-[color:var(--brand-red)] bg-[color:var(--brand-red)]/10" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-[240px] pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div className="rounded-2xl border border-border bg-popover p-2 shadow-xl">
                    <div className="craft-stitch mx-3 mb-2 mt-1 text-[color:var(--brand-red)]/60" />
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-lg px-3 py-2 text-sm text-foreground/80 hover:bg-[color:var(--brand-gold)]/15 hover:text-[color:var(--brand-red)]"
                        activeProps={{ className: "bg-[color:var(--brand-gold)]/15 text-[color:var(--brand-red)]" }}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--brand-red)] px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_0_0_var(--brand-petrol)] hover:translate-y-[2px] hover:shadow-[0_4px_0_0_var(--brand-petrol)] transition-all"
          >
            Fale conosco
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-[color:var(--brand-petrol)] text-[color:var(--brand-petrol)]"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-[color:var(--brand-sand)] max-h-[calc(100vh-64px)] overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
            {nav.map((item) => (
              <div key={item.to} className="border-b border-dashed border-[color:var(--brand-petrol)]/20 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => !item.children && setOpen(false)}
                    className="flex-1 py-3 text-base font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      className="p-3"
                      onClick={() => setMobileSub(mobileSub === item.to ? null : item.to)}
                      aria-label={`Submenu ${item.label}`}
                    >
                      <ChevronDown className={cn("h-4 w-4 transition", mobileSub === item.to && "rotate-180")} />
                    </button>
                  )}
                </div>
                {item.children && mobileSub === item.to && (
                  <div className="pb-3 pl-4">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block py-2 text-sm text-foreground/70 hover:text-[color:var(--brand-red)]"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contato"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[color:var(--brand-red)] px-4 py-3 text-sm font-bold text-white"
            >
              Fale conosco
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}