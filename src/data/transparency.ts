export type Document = {
  name: string;
  category: string;
  year: string;
  size: string;
  format: "PDF" | "DOCX" | "XLSX";
  url: string;
};

export const transparencyCategories = [
  "Todas",
  "Documentos institucionais",
  "Estatuto e atas",
  "Relatórios de atividades",
  "Relatórios financeiros",
  "Prestação de contas",
  "Parcerias e termos",
  "Certidões",
  "Editais e resultados",
  "Políticas institucionais",
];

export const transparencyYears = ["2026", "2025", "2024", "2023"];

export const documents: Document[] = [
  { name: "Estatuto Social — versão consolidada", category: "Estatuto e atas", year: "2026", size: "412 KB", format: "PDF", url: "#" },
  { name: "Ata de Assembleia Geral Ordinária", category: "Estatuto e atas", year: "2026", size: "220 KB", format: "PDF", url: "#" },
  { name: "Relatório Anual de Atividades 2025", category: "Relatórios de atividades", year: "2025", size: "3,2 MB", format: "PDF", url: "#" },
  { name: "Relatório Financeiro 2025", category: "Relatórios financeiros", year: "2025", size: "1,8 MB", format: "PDF", url: "#" },
  { name: "Prestação de Contas — Projeto Fios da Memória", category: "Prestação de contas", year: "2025", size: "980 KB", format: "PDF", url: "#" },
  { name: "Termo de Parceria — Instituto Cultura Viva", category: "Parcerias e termos", year: "2025", size: "540 KB", format: "PDF", url: "#" },
  { name: "Certidão Negativa de Débitos", category: "Certidões", year: "2026", size: "120 KB", format: "PDF", url: "#" },
  { name: "Edital de Chamamento — Oficinas 2026", category: "Editais e resultados", year: "2026", size: "410 KB", format: "PDF", url: "#" },
  { name: "Política de Salvaguarda", category: "Políticas institucionais", year: "2024", size: "260 KB", format: "PDF", url: "#" },
  { name: "Relatório de Atividades 2024", category: "Relatórios de atividades", year: "2024", size: "2,7 MB", format: "PDF", url: "#" },
  { name: "Relatório Financeiro 2024", category: "Relatórios financeiros", year: "2024", size: "1,4 MB", format: "PDF", url: "#" },
  { name: "Relatório de Atividades 2023", category: "Relatórios de atividades", year: "2023", size: "2,1 MB", format: "PDF", url: "#" },
];