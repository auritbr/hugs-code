import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/termos-de-uso")({
  head: () => ({
    meta: [
      { title: "Termos de Uso — Ponto de Cultura" },
      { name: "description", content: "Condições de uso do site institucional do Ponto de Cultura." },
      { property: "og:url", content: "/termos-de-uso" },
    ],
    links: [{ rel: "canonical", href: "/termos-de-uso" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Termos de Uso"
        description="Condições que regem a navegação e utilização deste site institucional."
        crumbs={[{ label: "Início", to: "/" }, { label: "Termos de Uso" }]}
      />
      <LegalContent
        sections={[
          { title: "1. Objeto", body: "Este site tem finalidade institucional e informativa, divulgando as ações, projetos, notícias e a trajetória do Ponto de Cultura." },
          { title: "2. Propriedade intelectual", body: "Textos, imagens, marcas e materiais publicados são de titularidade do Ponto de Cultura ou dos autores identificados, protegidos pela legislação brasileira. É vedada a reprodução sem autorização prévia." },
          { title: "3. Uso adequado", body: "O visitante compromete-se a utilizar o site de forma respeitosa, sem violar direitos de terceiros, sem publicar conteúdos ofensivos e sem tentar comprometer a segurança do serviço." },
          { title: "4. Links externos", body: "O site pode conter links para páginas de terceiros. Não nos responsabilizamos pelo conteúdo, práticas ou políticas de sites externos." },
          { title: "5. Alterações", body: "Estes termos podem ser atualizados a qualquer momento. Recomendamos consulta periódica." },
          { title: "6. Foro", body: "Fica eleito o foro da comarca da sede da instituição para dirimir eventuais controvérsias." },
        ]}
      />
    </>
  ),
});