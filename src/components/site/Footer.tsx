import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site, partners } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="craft-line text-[color:var(--brand-gold)] opacity-80" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-[color:var(--brand-gold)] text-primary">
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 12c2 -4 6 -6 8 -6s6 2 8 6c-2 4 -6 6 -8 6s-6 -2 -8 -6z" />
                  <circle cx="12" cy="12" r="2.5" fill="currentColor" />
                </svg>
              </span>
              <div className="leading-tight">
                <div className="text-[11px] uppercase tracking-[0.14em] opacity-70">Ponto de</div>
                <div className="text-lg font-bold">Cultura</div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm opacity-80">
              Organização dedicada ao artesanato, à formação cultural e à valorização dos saberes tradicionais no território.
            </p>
            <div className="mt-6 flex gap-2">
              <a href={site.socials.instagram} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href={site.socials.facebook} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href={site.socials.youtube} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              <a href={site.socials.linkedin} className="rounded-full bg-white/10 p-2 hover:bg-white/20" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Início</Link></li>
              <li><Link to="/quem-somos" className="opacity-80 hover:opacity-100">Quem Somos</Link></li>
              <li><Link to="/noticias" className="opacity-80 hover:opacity-100">Notícias</Link></li>
              <li><Link to="/galeria" className="opacity-80 hover:opacity-100">Galeria</Link></li>
              <li><Link to="/contato" className="opacity-80 hover:opacity-100">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Projetos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/projetos/fios-da-memoria" className="opacity-80 hover:opacity-100">Fios da Memória</Link></li>
              <li><Link to="/projetos/barro-forma-identidade" className="opacity-80 hover:opacity-100">Barro, Forma e Identidade</Link></li>
              <li><Link to="/projetos/artesanato-que-gera-renda" className="opacity-80 hover:opacity-100">Artesanato que Gera Renda</Link></li>
              <li><Link to="/quem-somos/transparencia" className="opacity-80 hover:opacity-100">Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider opacity-80">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-90">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />{site.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" />{site.phone}</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" />{site.email}</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5" />{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="text-xs uppercase tracking-widest opacity-70">Parceiros e apoiadores</div>
          <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3 text-sm opacity-80">
            {partners.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs opacity-75 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ponto de Cultura. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link to="/politica-de-privacidade" className="hover:opacity-100">Política de Privacidade</Link>
            <Link to="/termos-de-uso" className="hover:opacity-100">Termos de Uso</Link>
            <Link to="/politica-de-cookies" className="hover:opacity-100">Política de Cookies</Link>
            <Link to="/quem-somos/transparencia" className="hover:opacity-100">Transparência</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}