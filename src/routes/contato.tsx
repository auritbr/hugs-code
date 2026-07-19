import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { site } from "@/data/site";
import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Ponto de Cultura" },
      { name: "description", content: "Fale com o Ponto de Cultura: parcerias, matrículas, imprensa e visitas." },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: ContatoPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  subject: z.string().trim().min(2, "Informe o assunto").max(120),
  message: z.string().trim().min(10, "Escreva uma mensagem com pelo menos 10 caracteres").max(1000),
});

function ContatoPage() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { if (i.path[0]) errs[String(i.path[0])] = i.message; });
      setErrors(errs);
      return;
    }
    setErrors({});
    setSent(true);
    setValues({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <PageHeader
        eyebrow="Contato"
        title="Vamos conversar"
        description="Estamos disponíveis para parcerias, matrículas, imprensa, visitas e para escutar as ideias do território."
        crumbs={[{ label: "Início", to: "/" }, { label: "Contato" }]}
        tone="turquoise"
        image="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1600&q=80"
      />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-bold">Endereço e horários</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 text-[color:var(--brand-red)]" /><span>{site.address}</span></li>
                <li className="flex gap-3"><Clock className="h-4 w-4 shrink-0 text-[color:var(--brand-red)]" /><span>{site.hours}</span></li>
                <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 text-[color:var(--brand-red)]" /><span>{site.phone}</span></li>
                <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 text-[color:var(--brand-red)]" /><a href={`mailto:${site.email}`} className="hover:text-primary">{site.email}</a></li>
              </ul>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--brand-green)] px-5 py-3 text-sm font-semibold text-primary hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Falar pelo WhatsApp
              </a>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mapa do Ponto de Cultura"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-46.6438%2C-23.5556%2C-46.6338%2C-23.5456&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="rounded-3xl border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">Envie sua mensagem</h2>
            <p className="mt-2 text-sm text-muted-foreground">Retornaremos em até 3 dias úteis.</p>
            {sent && (
              <div className="mt-4 rounded-xl bg-[color:var(--brand-green)]/20 p-4 text-sm text-primary">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome" error={errors.name}>
                  <input value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} className="input" maxLength={100} />
                </Field>
                <Field label="E-mail" error={errors.email}>
                  <input type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} className="input" maxLength={255} />
                </Field>
              </div>
              <Field label="Assunto" error={errors.subject}>
                <input value={values.subject} onChange={(e) => setValues({ ...values, subject: e.target.value })} className="input" maxLength={120} />
              </Field>
              <Field label="Mensagem" error={errors.message}>
                <textarea rows={5} value={values.message} onChange={(e) => setValues({ ...values, message: e.target.value })} className="input resize-none" maxLength={1000} />
              </Field>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90">
                <Send className="h-4 w-4" /> Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`.input{width:100%;border:1px solid var(--color-border);border-radius:0.75rem;background:var(--color-background);padding:0.65rem 0.85rem;font-size:0.9rem}.input:focus{outline:none;box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary) 25%, transparent)}`}</style>
    </>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </label>
  );
}