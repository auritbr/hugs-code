import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/politica-de-cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies — Ponto de Cultura" },
      { name: "description", content: "Entenda como usamos cookies para melhorar sua experiência." },
      { property: "og:url", content: "/politica-de-cookies" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-cookies" }],
  }),
  component: () => (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Política de Cookies"
        description="Utilizamos cookies para melhorar a navegação, medir audiência e personalizar sua experiência."
        crumbs={[{ label: "Início", to: "/" }, { label: "Política de Cookies" }]}
      />
      <LegalContent
        sections={[
          { title: "O que são cookies", body: "Cookies são pequenos arquivos armazenados no seu dispositivo que permitem lembrar preferências e coletar dados sobre a navegação." },
          { title: "Tipos de cookies utilizados", body: "Utilizamos cookies essenciais (necessários ao funcionamento do site), de preferência (idioma, contraste, tamanho de fonte) e analíticos (para compreender como o site é utilizado, de forma anônima)." },
          { title: "Gerenciamento", body: "Você pode aceitar, recusar ou personalizar as categorias de cookies a qualquer momento pelo painel disponível no rodapé do site, ou configurar seu navegador para bloqueá-los." },
          { title: "Cookies de terceiros", body: "Podemos utilizar ferramentas de terceiros (como serviços de vídeo) que instalam seus próprios cookies. Recomendamos consultar as políticas específicas desses provedores." },
          { title: "Atualizações", body: "Esta política pode ser atualizada periodicamente para refletir mudanças em nossos serviços ou na legislação aplicável." },
        ]}
      />
    </>
  ),
});