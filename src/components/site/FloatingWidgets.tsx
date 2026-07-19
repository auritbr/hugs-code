import { useEffect, useState } from "react";
import { Accessibility, Cookie, X, ArrowUp } from "lucide-react";
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
      <div className="fixed bottom-4 right-3 z-40 flex flex-col items-end gap-3.5 sm:bottom-6 sm:right-4">
        {showTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--brand-gold)] text-[color:var(--brand-petrol)] shadow-md hover:scale-105 transition sm:h-11 sm:w-11"
            aria-label="Voltar ao topo"
            title="Voltar ao topo"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        )}
        <a
          href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="grid h-[52px] w-[52px] place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:brightness-110 transition sm:h-[58px] sm:w-[58px]"
          aria-label="Fale pelo WhatsApp"
          title="Fale pelo WhatsApp"
        >
          <svg viewBox="0 0 32 32" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.28c-.3-.15-1.78-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.28-.2-.58-.35zM16.02 4C9.42 4 4.06 9.36 4.06 15.96c0 2.11.55 4.16 1.6 5.98L4 28l6.22-1.62a11.9 11.9 0 0 0 5.8 1.48h.01c6.6 0 11.96-5.36 11.96-11.95 0-3.2-1.24-6.2-3.5-8.46A11.87 11.87 0 0 0 16.03 4zm0 21.86h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.22-3.7.97.98-3.6-.23-.37a9.9 9.9 0 0 1-1.51-5.3c0-5.48 4.46-9.94 9.95-9.94 2.66 0 5.15 1.04 7.03 2.92a9.88 9.88 0 0 1 2.9 7.03c0 5.48-4.46 9.94-9.95 9.94z"/>
          </svg>
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