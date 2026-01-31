import { Entry, SkillCategory, ContactInfo } from "../types";

export const PORTFOLIO_ENTRIES: Entry[] = [
  {
    id: "p2",
    type: "project",
    titleKey: "p2.title",
    descriptionKey: "p2.description",
    date: "2024-03-01",
    tags: [
      "crm",
      "automation",
      "data-quality",
      "hubspot",
      "zoho-crm",
      "n8n",
      "workflows",
    ],
    github: "jeancsla/crm-data-quality",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "p2.content.heading1" },
      {
        type: "paragraph",
        text: "p2.content.para1",
      },
      { type: "heading", text: "p2.content.heading2" },
      {
        type: "list",
        items: [
          "p2.content.item1",
          "p2.content.item2",
          "p2.content.item3",
          "p2.content.item4",
          "p2.content.item5",
          "p2.content.item6",
        ],
      },
      { type: "heading", text: "p2.content.heading3" },
      {
        type: "paragraph",
        text: "p2.content.para2",
      },
    ],
  },

  {
    id: "p3",
    type: "project",
    titleKey: "p3.title",
    descriptionKey: "p3.description",
    date: "2024-02-01",
    tags: ["whatsapp", "javascript", "meta-api", "customer-retention", "mvp"],
    github: "jeancsla/whatsapp-survey-mvp",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "p3.content.heading1" },
      {
        type: "paragraph",
        text: "p3.content.para1",
      },
      { type: "heading", text: "p3.content.heading2" },
      {
        type: "list",
        items: [
          "p3.content.item1",
          "p3.content.item2",
          "p3.content.item3",
          "p3.content.item4",
          "p3.content.item5",
          "p3.content.item6",
        ],
      },
      { type: "heading", text: "p3.content.heading3" },
      {
        type: "paragraph",
        text: "p3.content.para2",
      },
    ],
  },

  {
    id: "p4",
    type: "project",
    titleKey: "p4.title",
    descriptionKey: "p4.description",
    date: "2025-01-01",
    tags: ["automation", "n8n", "whatsapp", "agentic", "workflows", "reports"],
    github: "jeancsla/whatsapp-job-agent",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "p4.content.heading1" },
      {
        type: "paragraph",
        text: "p4.content.para1",
      },
      { type: "heading", text: "p4.content.heading2" },
      {
        type: "list",
        items: [
          "p4.content.item1",
          "p4.content.item2",
          "p4.content.item3",
          "p4.content.item4",
        ],
      },
      { type: "heading", text: "p4.content.heading3" },
      {
        type: "paragraph",
        text: "p4.content.para2",
      },
    ],
  },

  {
    id: "p5",
    type: "project",
    titleKey: "p5.title",
    descriptionKey: "p5.description",
    date: "2026-01-01",
    tags: ["full-stack", "react", "typescript", "postgres", "integrations"],
    github: "jeancsla/notifica-frete",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "p5.content.heading1" },
      {
        type: "paragraph",
        text: "p5.content.para1",
      },
      { type: "heading", text: "p5.content.heading2" },
      {
        type: "list",
        items: [
          "p5.content.item1",
          "p5.content.item2",
          "p5.content.item3",
          "p5.content.item4",
          "p5.content.item5",
          "p5.content.item6",
        ],
      },
      { type: "heading", text: "p5.content.heading3" },
      {
        type: "list",
        items: [
          "p5.content.item7",
          "p5.content.item8",
          "p5.content.item9",
          "p5.content.item10",
        ],
      },
      {
        type: "link",
        text: "p5.content.link",
        url: "https://notifica-frete.janiceto.com.br",
      },
    ],
  },

  {
    id: "p6",
    type: "project",
    titleKey: "p6.title",
    descriptionKey: "p6.description",
    date: "2026-01-15",
    tags: ["react", "typescript", "vite", "frontend", "design", "ci-cd"],
    github: "jeancsla/portfolio-page",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "p6.content.heading1" },
      {
        type: "paragraph",
        text: "p6.content.para1",
      },
      { type: "heading", text: "p6.content.heading2" },
      {
        type: "list",
        items: [
          "p6.content.item1",
          "p6.content.item2",
          "p6.content.item3",
          "p6.content.item4",
          "p6.content.item5",
          "p6.content.item6",
          "p6.content.item7",
        ],
      },
      { type: "heading", text: "p6.content.heading3" },
      {
        type: "list",
        items: [
          "p6.content.item8",
          "p6.content.item9",
          "p6.content.item10",
          "p6.content.item11",
          "p6.content.item12",
        ],
      },
    ],
  },

  {
    id: "e1",
    type: "experience",
    titleKey: "e1.title",
    descriptionKey: "e1.description",
    date: "Jan 2025 - Apr 2025",
    company: "Escola DNC",
    role: "CRM Analyst",
    fullContent: [
      { type: "heading", text: "e1.content.heading1" },
      {
        type: "list",
        items: [
          "e1.content.item1",
          "e1.content.item2",
          "e1.content.item3",
          "e1.content.item4",
        ],
      },
    ],
  },

  {
    id: "e2",
    type: "experience",
    titleKey: "e2.title",
    descriptionKey: "e2.description",
    date: "Feb 2024 - Dec 2024",
    company: "SoluCX",
    role: "Revenue Operations",
    fullContent: [
      { type: "heading", text: "e2.content.heading1" },
      {
        type: "list",
        items: [
          "e2.content.item1",
          "e2.content.item2",
          "e2.content.item3",
          "e2.content.item4",
          "e2.content.item5",
          "e2.content.item6",
        ],
      },
    ],
  },

  {
    id: "e3",
    type: "experience",
    titleKey: "e3.title",
    descriptionKey: "e3.description",
    date: "Oct 2022 - Feb 2024",
    company: "Remote",
    role: "Financial Analyst",
    fullContent: [
      { type: "heading", text: "e3.content.heading1" },
      {
        type: "list",
        items: [
          "e3.content.item1",
          "e3.content.item2",
          "e3.content.item3",
          "e3.content.item4",
          "e3.content.item5",
          "e3.content.item6",
        ],
      },
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "revops",
    categoryKey: "skill.revops.title",
    descriptionKey: "skill.revops.description",
    skills: [
      { name: "HubSpot CRM", level: "expert" as const },
      { name: "Revenue Forecasting", level: "expert" as const },
      { name: "Sales Analytics", level: "expert" as const },
      { name: "Process Optimization", level: "proficient" as const },
      { name: "Zoho CRM", level: "proficient" as const },
    ],
  },
  {
    id: "automation",
    categoryKey: "skill.automation.title",
    descriptionKey: "skill.automation.description",
    skills: [
      { name: "n8n", level: "expert" as const },
      { name: "Zapier/Make", level: "proficient" as const },
      { name: "API Integration", level: "proficient" as const },
      { name: "Manychat", level: "proficient" as const },
      { name: "VBA/Excel Automation", level: "proficient" as const },
      { name: "Python Scripts", level: "proficient" as const },
    ],
  },
  {
    id: "data",
    categoryKey: "skill.data.title",
    descriptionKey: "skill.data.description",
    skills: [
      { name: "SQL", level: "expert" as const },
      { name: "PostgreSQL", level: "proficient" as const },
      { name: "Metabase/Looker", level: "proficient" as const },
      { name: "Google Sheets Advanced", level: "expert" as const },
      { name: "Data Modeling", level: "proficient" as const },
    ],
  },
  {
    id: "development",
    categoryKey: "skill.development.title",
    descriptionKey: "skill.development.description",
    skills: [
      { name: "React + TypeScript", level: "proficient" as const },
      { name: "Python", level: "proficient" as const },
      { name: "JavaScript", level: "proficient" as const },
      { name: "Git/GitHub", level: "proficient" as const },
      { name: "RESTful APIs", level: "proficient" as const },
      { name: "HTML/CSS", level: "proficient" as const },
    ],
  },
];

export const CONTACT_INFO: ContactInfo = {
  headline: {
    en: "Let's Build Revenue Operations Excellence Together",
    pt: "Vamos Construir Excelência em Revenue Operations Juntos",
  },
  subheadline: {
    en: "Open to Revenue Operations, CRM Analyst, and Data Analytics roles. Available for immediate start.",
    pt: "Aberto para posições em Revenue Operations, Analista de CRM e Análise de Dados. Disponível para início imediato.",
  },
  email: "jeancsla@gmail.com",
  linkedin: "https://www.linkedin.com/in/jean-aniceto/",
  github: "https://github.com/jeancsla",
  calendly: "https://calendar.app.google/yQqyXCrMQpRJaoTu8",
  resumeUrl:
    "https://drive.google.com/file/d/1pAOk3QQSgPRf7A1EKhxUQXwzqvZmjgfy/view?usp=sharing",
};
