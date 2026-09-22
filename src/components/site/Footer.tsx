import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/data/site";
import { Logo } from "./Logo";
import { WaveDivider, ThreadLine } from "./CraftGraphics";

export function Footer() {
  return (
    <footer className="relative mt-24 bg-[color:var(--brand-petrol)] text-white">
      <WaveDivider className="absolute -top-[1px] left-0 h-10 w-full text-[color:var(--brand-petrol)]" flip color="var(--brand-petrol)" />
      <div className="rainbow-strip h-2 w-full" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo variant="light" />
            <p className="mt-4 max-w-sm text-sm opacity-80">
              Ponto de Cultura dedicado ao artesanato, à formação cultural, à geração de renda e à valorização dos saberes tradicionais.
            </p>
            <ThreadLine className="mt-6 h-3 w-56" color="var(--brand-gold)" />
            <div className="mt-6 flex gap-2">
              <a href={site.socials.instagram} className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-red)] hover:scale-110 transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
              <a href={site.socials.facebook} className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-turquoise)] hover:scale-110 transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
              <a href={site.socials.youtube} className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-orange)] hover:scale-110 transition" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
              <a href={site.socials.linkedin} className="grid h-9 w-9 place-items-center rounded-full bg-[color:var(--brand-gold)] text-[color:var(--brand-petrol)] hover:scale-110 transition" aria-label="LinkedIn"><Linkedin className="h-4 w-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">Navegação</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/" className="opacity-80 hover:opacity-100">Início</Link></li>
              <li><Link to="/quem-somos" className="opacity-80 hover:opacity-100">Quem Somos</Link></li>
              <li><Link to="/quem-somos/nossa-historia" className="opacity-80 hover:opacity-100">Nossa História</Link></li>
              <li><Link to="/quem-somos/equipe" className="opacity-80 hover:opacity-100">Equipe</Link></li>
              <li><Link to="/noticias" className="opacity-80 hover:opacity-100">Notícias</Link></li>
              <li><Link to="/galeria" className="opacity-80 hover:opacity-100">Galeria</Link></li>
              <li><Link to="/contato" className="opacity-80 hover:opacity-100">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">Projetos</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/projetos/$slug" params={{ slug: "fios-da-memoria" }} className="opacity-80 hover:opacity-100">Fios da Memória</Link></li>
              <li><Link to="/projetos/$slug" params={{ slug: "barro-forma-identidade" }} className="opacity-80 hover:opacity-100">Barro, Forma e Identidade</Link></li>
              <li><Link to="/projetos/$slug" params={{ slug: "artesanato-que-gera-renda" }} className="opacity-80 hover:opacity-100">Artesanato que Gera Renda</Link></li>
              <li><Link to="/quem-somos/transparencia" className="opacity-80 hover:opacity-100">Transparência</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-gold)]">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm opacity-90">
              <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 mt-0.5" />{site.address}</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 mt-0.5" />{site.phone}</li>
              <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 mt-0.5" />{site.email}</li>
              <li className="flex gap-2"><Clock className="h-4 w-4 shrink-0 mt-0.5" />{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="craft-stitch mt-12 text-[color:var(--brand-gold)]/60" />
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs opacity-80 sm:flex-row sm:items-center sm:justify-between">
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