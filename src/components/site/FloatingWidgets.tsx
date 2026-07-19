import { useEffect, useState } from "react";
import { Accessibility, Cookie, MessageCircle, X, ArrowUp } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

type A11yState = {
  fontScale: number;
  contrast: "normal" | "high";
  grayscale: "off" | "on";
  links: "off" | "on";
  spacing: "off" | "on";
  motion: "on" | "off";
};
const defaultA11y: A11yState = {
  fontScale: 1, contrast: "normal", grayscale: "off", links: "off", spacing: "off", motion: "on",
};

function applyA11y(s: A11yState) {
  const html = document.documentElement;
  html.style.fontSize = `${16 * s.fontScale}px`;
  html.dataset.a11yContrast = s.contrast;
  html.dataset.a11yGrayscale = s.grayscale;
  html.dataset.a11yLinks = s.links;
  html.dataset.a11ySpacing = s.spacing;
  html.dataset.a11yMotion = s.motion;
}

export function FloatingWidgets() {
  const [openA11y, setOpenA11y] = useState(false);
  const [openCookie, setOpenCookie] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [a11y, setA11y] = useState<A11yState>(defaultA11y);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("a11y");
      if (saved) {
        const parsed = { ...defaultA11y, ...JSON.parse(saved) };
        setA11y(parsed);
        applyA11y(parsed);
      }
      const cookie = localStorage.getItem("cookies-consent");
      if (!cookie) setShowBanner(true);
    } catch {}
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const update = (patch: Partial<A11yState>) => {
    const next = { ...a11y, ...patch };
    setA11y(next);
    applyA11y(next);
    try { localStorage.setItem("a11y", JSON.stringify(next)); } catch {}
  };
  const reset = () => { setA11y(defaultA11y); applyA11y(defaultA11y); try { localStorage.removeItem("a11y"); } catch {} };

  const acceptCookies = (mode: "all" | "essential") => {
    try { localStorage.setItem("cookies-consent", mode); } catch {}
    setShowBanner(false);
    setOpenCookie(false);
  };

  return (
    <>
      {/* Left floating buttons */}
      <div className="fixed bottom-4 left-3 z-40 flex flex-col gap-2 sm:bottom-6 sm:left-4">
        <button
          onClick={() => setOpenCookie(true)}
          className="group grid h-10 w-10 place-items-center rounded-full bg-[color:var(--brand-petrol)] text-white shadow-lg hover:scale-105 transition sm:h-11 sm:w-11"
          aria-label="Preferências de cookies"
          title="Preferências de cookies"
        >
          <Cookie className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={() => setOpenA11y(true)}
          className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--brand-turquoise)] text-white shadow-lg hover:scale-105 transition sm:h-11 sm:w-11"
          aria-label="Acessibilidade"
          title="Acessibilidade"
        >
          <Accessibility className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Right floating: WhatsApp + Back to top */}
      <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-2 sm:bottom-6 sm:right-4">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-gold)] text-[color:var(--brand-petrol)] shadow-md hover:scale-105 transition sm:h-10 sm:w-10"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] p-2.5 text-white shadow-lg hover:brightness-110 sm:px-4 sm:py-3"
          aria-label="Fale conosco no WhatsApp"
        >
          <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5" />
          <span className="hidden sm:inline text-sm font-semibold">Fale conosco</span>
        </a>
      </div>

      {/* Cookie banner */}
      {showBanner && (
        <div className="fixed inset-x-3 bottom-20 z-50 sm:inset-x-auto sm:right-4 sm:bottom-24 sm:max-w-md">
          <div className="rounded-xl border border-border bg-card p-4 shadow-2xl">
            <p className="text-sm text-foreground">
              Usamos cookies para melhorar sua experiência e analisar o uso do site. Você pode aceitar todos, apenas os essenciais ou personalizar suas preferências.
            </p>
            <p className="mt-2 text-xs text-muted-foreground">
              Consulte nossa <Link to="/politica-de-privacidade" className="underline">Política de Privacidade</Link>.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <button onClick={() => acceptCookies("all")} className="flex-1 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground">Aceitar todos</button>
              <button onClick={() => acceptCookies("essential")} className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm">Recusar opcionais</button>
              <button onClick={() => { setOpenCookie(true); }} className="rounded-md px-3 py-2 text-sm underline">Personalizar</button>
            </div>
          </div>
        </div>
      )}

      {/* Cookie prefs modal */}
      {openCookie && (
        <Modal onClose={() => setOpenCookie(false)} title="Preferências de cookies">
          <div className="space-y-3 text-sm">
            <CookieRow name="Essenciais" desc="Necessários para o funcionamento básico do site." checked disabled />
            <CookieRow name="Desempenho" desc="Ajudam a entender como o site é utilizado." />
            <CookieRow name="Funcionais" desc="Personalizam a experiência de navegação." />
            <CookieRow name="Marketing" desc="Utilizados para medir campanhas e conteúdos." />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <button onClick={() => acceptCookies("all")} className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Aceitar todos</button>
            <button onClick={() => acceptCookies("essential")} className="rounded-md border border-border px-4 py-2 text-sm">Salvar essenciais</button>
          </div>
        </Modal>
      )}

      {/* Accessibility panel */}
      {openA11y && (
        <Modal onClose={() => setOpenA11y(false)} title="Acessibilidade">
          <div className="space-y-4">
            <div>
              <div className="mb-2 text-sm font-medium">Tamanho da fonte</div>
              <div className="flex gap-2">
                <button onClick={() => update({ fontScale: Math.max(0.85, a11y.fontScale - 0.1) })} className="rounded border border-border px-3 py-1.5 text-sm">A-</button>
                <button onClick={() => update({ fontScale: 1 })} className="rounded border border-border px-3 py-1.5 text-sm">A</button>
                <button onClick={() => update({ fontScale: Math.min(1.4, a11y.fontScale + 0.1) })} className="rounded border border-border px-3 py-1.5 text-sm">A+</button>
              </div>
            </div>
            <A11yToggle label="Alto contraste" on={a11y.contrast === "high"} onChange={(v) => update({ contrast: v ? "high" : "normal" })} />
            <A11yToggle label="Escala de cinza" on={a11y.grayscale === "on"} onChange={(v) => update({ grayscale: v ? "on" : "off" })} />
            <A11yToggle label="Destacar links" on={a11y.links === "on"} onChange={(v) => update({ links: v ? "on" : "off" })} />
            <A11yToggle label="Aumentar espaçamento" on={a11y.spacing === "on"} onChange={(v) => update({ spacing: v ? "on" : "off" })} />
            <A11yToggle label="Pausar animações" on={a11y.motion === "off"} onChange={(v) => update({ motion: v ? "off" : "on" })} />
          </div>
          <button onClick={reset} className="mt-6 w-full rounded-md border border-border px-3 py-2 text-sm">Restaurar configurações</button>
        </Modal>
      )}
    </>
  );
}

function A11yToggle({ label, on, onChange }: { label: string; on: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="flex items-center justify-between gap-4">
      <span className="text-sm">{label}</span>
      <button
        role="switch"
        aria-checked={on}
        onClick={() => onChange(!on)}
        className={cn("h-6 w-11 rounded-full transition", on ? "bg-primary" : "bg-border")}
      >
        <span className={cn("block h-5 w-5 translate-x-0.5 rounded-full bg-white transition", on && "translate-x-5")} />
      </button>
    </label>
  );
}

function CookieRow({ name, desc, checked, disabled }: { name: string; desc: string; checked?: boolean; disabled?: boolean }) {
  const [on, setOn] = useState(!!checked);
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-border p-3">
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
      <button
        role="switch"
        aria-checked={on}
        disabled={disabled}
        onClick={() => !disabled && setOn(!on)}
        className={cn("h-6 w-11 shrink-0 rounded-full transition", on ? "bg-primary" : "bg-border", disabled && "opacity-60")}
      >
        <span className={cn("block h-5 w-5 translate-x-0.5 rounded-full bg-white transition", on && "translate-x-5")} />
      </button>
    </div>
  );
}

function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 p-4" onClick={onClose}>
      <div className="w-full max-w-md rounded-xl bg-card p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-secondary" aria-label="Fechar">
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}