import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade — Ponto de Cultura" },
      { name: "description", content: "Como coletamos, usamos e protegemos os dados dos visitantes e participantes." },
      { property: "og:url", content: "/politica-de-privacidade" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Privacidade"
        description="Como coletamos, tratamos e protegemos as informações pessoais dos visitantes e participantes."
        crumbs={[{ label: "Início", to: "/" }, { label: "Política de Privacidade" }]}
      />
      <LegalContent
        sections={[
          { title: "1. Dados que coletamos", body: "Coletamos apenas os dados necessários para viabilizar o contato, matrículas e comunicações institucionais: nome, e-mail, telefone e mensagens enviadas voluntariamente por meio dos nossos formulários." },
          { title: "2. Finalidade do tratamento", body: "Utilizamos os dados para responder solicitações, organizar oficinas, prestar contas a apoiadores e comunicar novas ações, sempre respeitando a Lei Geral de Proteção de Dados (LGPD)." },
          { title: "3. Compartilhamento", body: "Não vendemos nem compartilhamos dados pessoais com terceiros para fins comerciais. Compartilhamos apenas com parceiros e órgãos financiadores quando estritamente necessário à prestação de contas." },
          { title: "4. Direitos do titular", body: "Você pode solicitar a qualquer momento acesso, correção, portabilidade, anonimização ou exclusão dos seus dados, entrando em contato pelo e-mail contato@pontodecultura.org.br." },
          { title: "5. Segurança", body: "Adotamos medidas técnicas e organizacionais para proteger seus dados contra acesso, uso ou divulgação não autorizados." },
          { title: "6. Contato do encarregado", body: "Dúvidas sobre esta política podem ser encaminhadas ao encarregado de dados pelo e-mail privacidade@pontodecultura.org.br." },
        ]}
      />
    </>
  ),
});