import { Translation, Entry } from "./types";

export const TRANSLATIONS: Translation = {
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.projects": { en: "Projects", pt: "Projetos" },
  "nav.experience": { en: "Experience", pt: "Experiência" },

  "hero.title": {
    en: "Jean Aniceto",
    pt: "Jean Aniceto",
  },
  "hero.subtitle": {
    en: "Revenue Operations, Data Analytics and Data Engineering",
    pt: "Revenue Operations, Análise de Dados e Engenharia de Dados",
  },

  "about.title": { en: "About Me", pt: "Sobre Mim" },
  "about.text": {
    en: "Professional working across Revenue Operations, Data Analytics and Data Engineering. Experienced in integrating financial, marketing and CRM data, building automated pipelines and dashboards, and enabling business decisions through reliable metrics.",
    pt: "Profissional atuando entre Revenue Operations, Análise de Dados e Engenharia de Dados. Experiência na integração de dados financeiros, de marketing e CRM, construção de pipelines automatizados e dashboards, e suporte à tomada de decisão por meio de métricas confiáveis.",
  },

  "github.loading": { en: "Fetching README...", pt: "Buscando README..." },
  "github.error": {
    en: "Failed to load README",
    pt: "Falha ao carregar README",
  },
  "github.view": { en: "View on GitHub", pt: "Ver no GitHub" },
};

export const PORTFOLIO_ENTRIES: Entry[] = [
  {
    id: "p1",
    type: "project",
    titleKey: "Revenue Data Platform",
    descriptionKey:
      "Automated data pipelines and dashboards for revenue and marketing analytics.",
    date: "2024-08-01",
    tags: ["sql", "pipelines", "bi", "revenue", "crm"],
    github: "jeancsla/revenue-data-platform",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "Project Overview" },
      {
        type: "paragraph",
        text: "Design and implementation of automated pipelines integrating CRM, billing and marketing data into analytical datasets for revenue forecasting, CAC, LTV and churn analysis.",
      },
      {
        type: "list",
        items: [
          "ETL automation with n8n and SQL",
          "Unified financial and CRM data model",
          "Executive dashboards and KPIs",
          "Focus on data reliability and reproducibility",
        ],
      },
    ],
  },

  {
    id: "p2",
    type: "project",
    titleKey: "CRM Data Quality Automation",
    descriptionKey: "Data validation and automation for CRM reliability.",
    date: "2024-03-01",
    tags: ["crm", "automation", "data-quality", "hubspot", "n8n"],
    github: "jeancsla/crm-data-quality",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "Automation Strategy" },
      {
        type: "paragraph",
        text: "Implementation of automated rules and workflows to improve CRM data consistency and analytical trustworthiness.",
      },
      {
        type: "list",
        items: [
          "Field validation and normalization",
          "Automated revenue projections",
          "Reduction of manual operational effort",
          "Improved analytical accuracy",
        ],
      },
    ],
  },

  {
    id: "e1",
    type: "experience",
    titleKey: "CRM Analyst",
    descriptionKey: "CRM strategy, automation and marketing analytics.",
    date: "Jan 2025 - Apr 2025",
    company: "Escola DNC",
    role: "CRM Analyst",
  },

  {
    id: "e2",
    type: "experience",
    titleKey: "Revenue Operations Analyst",
    descriptionKey:
      "Financial and operational analytics, forecasting and automation.",
    date: "Feb 2024 - Dec 2024",
    company: "SoluCX",
    role: "Revenue Operations",
  },

  {
    id: "e3",
    type: "experience",
    titleKey: "Financial Analyst",
    descriptionKey: "Automated reporting and KPI analysis.",
    date: "Oct 2022 - Feb 2024",
    company: "Remote",
    role: "Financial Analyst",
  },
];
