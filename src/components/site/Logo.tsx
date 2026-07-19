import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const stroke = variant === "light" ? "#FAF8F3" : "#063B4A";
  return (
    <Link to="/" aria-label="Ponto de Cultura — início" className="group flex items-center gap-3">
      <span className="relative grid h-11 w-11 shrink-0 place-items-center">
        <span className="absolute inset-0 rounded-full bg-[color:var(--brand-gold)]" />
        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[color:var(--brand-red)]" />
        <span className="absolute -top-1 -left-1 h-3 w-3 rounded-full bg-[color:var(--brand-turquoise)]" />
        <svg viewBox="0 0 32 32" className="relative h-6 w-6" fill="none" stroke={stroke} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* agulha + fio */}
          <path d="M5 26 C 12 20, 18 24, 26 16" />
          <circle cx="6" cy="26" r="1.4" fill={stroke} stroke="none" />
          <path d="M23 13 L 28 8" />
          <circle cx="24.5" cy="11.5" r="1.1" fill={stroke} stroke="none" />
          <path d="M27 9 L 29 7" />
        </svg>
      </span>
      <span className="flex flex-col leading-tight">
        <span className={variant === "light" ? "text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-gold)]" : "text-[10px] font-semibold uppercase tracking-[0.22em] text-[color:var(--brand-red)]"}>Ponto de</span>
        <span className={variant === "light" ? "font-display text-lg font-extrabold text-white" : "font-display text-lg font-extrabold text-[color:var(--brand-petrol)]"}>Cultura<span className="text-[color:var(--brand-turquoise)]">.</span></span>
      </span>
    </Link>
  );
}