/**
 * Biblioteca de grafismos artesanais em SVG.
 * Cores usam CSS vars --brand-* para respeitar o sistema de design.
 */

export function ArcShape({ className = "", color = "var(--brand-red)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 100" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 100 A 100 100 0 0 1 200 100 Z" fill={color} />
    </svg>
  );
}

export function BlobShape({ className = "", color = "var(--brand-gold)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill={color}
        d="M42,-64.6C54.2,-56.4,63.2,-42.9,68.9,-28.4C74.6,-13.9,77.1,1.6,73.6,15.9C70.1,30.3,60.7,43.5,48.6,53.5C36.4,63.5,21.5,70.3,5.4,71.6C-10.6,72.9,-27.8,68.7,-40.7,59.2C-53.6,49.7,-62.3,34.9,-67.5,18.7C-72.7,2.5,-74.5,-15.1,-68.4,-29.7C-62.4,-44.3,-48.5,-55.9,-33.7,-63.1C-18.9,-70.3,-3.2,-73.1,10.9,-72C25,-70.9,29.8,-72.7,42,-64.6Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Linha ondulada tipo fio bordado */
export function ThreadLine({ className = "", color = "var(--brand-red)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 20" className={className} preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 10 Q 25 0, 50 10 T 100 10 T 150 10 T 200 10 T 250 10 T 300 10 T 350 10 T 400 10"
        fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/** Costura tracejada */
export function StitchLine({ className = "", color = "var(--brand-petrol)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 6" className={className} preserveAspectRatio="none" aria-hidden="true">
      <line x1="0" y1="3" x2="400" y2="3" stroke={color} strokeWidth="2.5" strokeDasharray="10 8" strokeLinecap="round" />
    </svg>
  );
}

/** Botão/pastilha (arte popular) */
export function DotBadge({ className = "", color = "var(--brand-gold)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="18" fill={color} />
      <circle cx="14" cy="16" r="2" fill="rgba(0,0,0,0.25)" />
      <circle cx="26" cy="16" r="2" fill="rgba(0,0,0,0.25)" />
      <circle cx="14" cy="24" r="2" fill="rgba(0,0,0,0.25)" />
      <circle cx="26" cy="24" r="2" fill="rgba(0,0,0,0.25)" />
    </svg>
  );
}

/** Ícones artesanais (agulha, novelo, vaso, tesoura) */
export function NeedleIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 28 L 26 6" />
      <circle cx="26" cy="6" r="2.5" />
      <path d="M20 12 C 24 14, 24 18, 20 20" />
    </svg>
  );
}
export function YarnIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="16" cy="16" r="12" />
      <path d="M8 10 C 14 16, 18 16, 24 22" />
      <path d="M6 18 C 12 12, 20 20, 26 14" />
      <path d="M10 26 L 12 30" />
    </svg>
  );
}
export function PotteryIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 6 L 22 6 L 20 10 C 26 12, 26 24, 20 28 L 12 28 C 6 24, 6 12, 12 10 Z" />
      <path d="M12 14 L 20 14" />
    </svg>
  );
}
export function ScissorsIcon({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="22" r="4" />
      <circle cx="24" cy="22" r="4" />
      <path d="M11 20 L 28 6" />
      <path d="M21 20 L 4 6" />
    </svg>
  );
}

/** Onda tipo divisor de seção */
export function WaveDivider({ className = "", color = "var(--brand-gold)", flip = false }: { className?: string; color?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className={className} aria-hidden="true" style={{ transform: flip ? "scaleY(-1)" : undefined }}>
      <path d="M0,40 C 240,0 480,80 720,40 C 960,0 1200,80 1440,40 L 1440 80 L 0 80 Z" fill={color} />
    </svg>
  );
}

/** Círculos concêntricos (bordado) */
export function ConcentricRings({ className = "", color = "var(--brand-turquoise)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      {[54, 42, 30, 18, 8].map((r, i) => (
        <circle key={r} cx="60" cy="60" r={r} fill="none" stroke={color} strokeWidth="2" strokeDasharray={i % 2 ? "6 6" : "0"} opacity={0.4 + i * 0.12} />
      ))}
    </svg>
  );
}

/** Estampa geométrica bg */
export function TriangleBand({ className = "", color = "var(--brand-red)" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 400 30" preserveAspectRatio="none" className={className} aria-hidden="true">
      {Array.from({ length: 20 }).map((_, i) => (
        <polygon key={i} points={`${i * 20},30 ${i * 20 + 10},0 ${i * 20 + 20},30`} fill={color} opacity={i % 2 ? 1 : 0.5} />
      ))}
    </svg>
  );
}
