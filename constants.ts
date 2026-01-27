import { Translation, Entry } from "./types";

export const TRANSLATIONS: Translation = {
  // Navigation
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.projects": { en: "Projects", pt: "Projetos" },
  "nav.skills": { en: "Skills", pt: "Habilidades" },
  "nav.experience": { en: "Experience", pt: "Experiência" },
  "nav.contact": { en: "Contact", pt: "Contato" },

  // Hero Section
  "hero.title": {
    en: "Jean Aniceto",
    pt: "Jean Aniceto",
  },
  "hero.subtitle": {
    en: "Revenue Operations, Data Analytics and Data Engineering",
    pt: "Revenue Operations, Análise de Dados e Engenharia de Dados",
  },

  // About Section
  "about.title": { en: "About Me", pt: "Sobre Mim" },
  "about.text": {
    en: "Professional working across Revenue Operations, Data Analytics and Data Engineering. Experienced in integrating financial, marketing and CRM data, building automated pipelines and dashboards, and enabling business decisions through reliable metrics.",
    pt: "Profissional atuando entre Revenue Operations, Análise de Dados e Engenharia de Dados. Experiência na integração de dados financeiros, de marketing e CRM, construção de pipelines automatizados e dashboards, e suporte à tomada de decisão por meio de métricas confiáveis.",
  },

  // Projects Section
  "projects.title": { en: "Projects", pt: "Projetos" },

  // Project 1: Revenue Data Platform
  "p1.title": {
    en: "Revenue Data Platform",
    pt: "Plataforma de Dados de Receita",
  },
  "p1.description": {
    en: "Centralized data pipeline processing $2M+ ARR, reducing reporting time by 20 hours/week and improving forecast accuracy by 15%.",
    pt: "Pipeline de dados centralizado processando $2M+ ARR, reduzindo o tempo de relatório em 20 horas/semana e melhorando a precisão de previsão em 15%.",
  },

  // Project 2: CRM Data Quality
  "p2.title": {
    en: "CRM Data Quality Automation",
    pt: "Automação de Qualidade de Dados do CRM",
  },
  "p2.description": {
    en: "Improved HubSpot data accuracy by 10% through automated validation workflows, enabling reliable revenue forecasting and reducing manual data cleanup by 15 hours/week.",
    pt: "Melhorou a precisão dos dados do HubSpot em 10% por meio de fluxos de trabalho de validação automatizados, permitindo previsões de receita confiáveis e reduzindo a limpeza manual de dados em 15 horas/semana.",
  },

  // Project 3: WhatsApp Survey MVP
  "p3.title": {
    en: "WhatsApp Survey MVP (SoluCX)",
    pt: "MVP de Pesquisa WhatsApp (SoluCX)",
  },
  "p3.description": {
    en: "Prevented R$200,000+ annual revenue loss by building WhatsApp survey MVP that saved tier 1 customer from churning through data-driven insights.",
    pt: "Evitou perda de R$200.000+ em receita anual construindo MVP de pesquisa WhatsApp que salvou cliente tier 1 de cancelamento por meio de insights orientados a dados.",
  },

  // Project 4: WhatsApp Job Bot
  "p4.title": {
    en: "WhatsApp Job Notification Bot",
    pt: "Bot de Notificação de Emprego WhatsApp",
  },
  "p4.description": {
    en: "Automated job notification system reducing recruitment response time by 75% and increasing candidate engagement by 73% through WhatsApp integration.",
    pt: "Sistema automatizado de notificação de emprego reduzindo tempo de resposta de recrutamento em 75% e aumentando envolvimento de candidatos em 73% através da integração WhatsApp.",
  },

  // Project 5: Notifica-Frete
  "p5.title": { en: "Notifica-Frete Website", pt: "Site Notifica-Frete" },
  "p5.description": {
    en: "Full-stack freight notification platform serving 500+ users with integrated dashboard, processing 2,000+ alerts daily with 99.2% uptime.",
    pt: "Plataforma de notificação de frete full-stack servindo 500+ usuários com painel integrado, processando 2.000+ alertas diariamente com 99,2% de tempo de atividade.",
  },

  // Project 6: Portfolio
  "p6.title": {
    en: "Interactive Portfolio Website",
    pt: "Site de Portfólio Interativo",
  },
  "p6.description": {
    en: "Modern portfolio built with React 19, TypeScript, and custom time-based gradient system showcasing technical and design skills with 98/100 Lighthouse score.",
    pt: "Portfólio moderno construído com React 19, TypeScript e sistema de gradiente baseado em tempo personalizado, mostrando habilidades técnicas e de design com pontuação Lighthouse de 98/100.",
  },

  // Skills Section
  "skills.title": { en: "Technical Skills", pt: "Habilidades Técnicas" },
  "skills.level.expert": { en: "Expert", pt: "Especialista" },
  "skills.level.proficient": { en: "Proficient", pt: "Proficiente" },
  "skills.level.familiar": { en: "Familiar", pt: "Familiar" },

  // Skill Categories
  "skill.revops.title": { en: "Revenue Operations", pt: "Revenue Operations" },
  "skill.revops.description": {
    en: "CRM management, forecasting, and revenue analytics",
    pt: "Gerenciamento de CRM, previsão e análise de receita",
  },

  "skill.automation.title": {
    en: "Automation & Integration",
    pt: "Automação e Integração",
  },
  "skill.automation.description": {
    en: "Workflow automation and system integration",
    pt: "Automação de fluxo de trabalho e integração de sistemas",
  },

  "skill.data.title": { en: "Data & Analytics", pt: "Dados e Análise" },
  "skill.data.description": {
    en: "Business intelligence and data engineering",
    pt: "Inteligência de negócios e engenharia de dados",
  },

  "skill.development.title": { en: "Development", pt: "Desenvolvimento" },
  "skill.development.description": {
    en: "Frontend and full-stack development",
    pt: "Desenvolvimento frontend e full-stack",
  },

  // Experience Section
  "experience.title": { en: "Experience", pt: "Experiência" },

  // Experience 1: CRM Analyst
  "e1.title": { en: "CRM Analyst", pt: "Analista de CRM" },
  "e1.description": {
    en: "Drove 12% increase in newsletter engagement and optimized CRM workflows, supporting marketing and customer performance through data-driven automation.",
    pt: "Promoveu aumento de 12% no engajamento de boletim informativos e otimizou fluxos de trabalho do CRM, apoiando desempenho de marketing e cliente por meio de automação orientada a dados.",
  },

  // Experience 2: Revenue Operations Analyst
  "e2.title": {
    en: "Revenue Operations Analyst",
    pt: "Analista de Revenue Operations",
  },
  "e2.description": {
    en: "Integrated Sales, Finance, and CS teams through automated reporting and process optimization, improving key performance metrics by 30%+ while preventing R$200,000+ customer churn.",
    pt: "Integrou equipes de Vendas, Finanças e Sucesso do Cliente por meio de relatórios automatizados e otimização de processos, melhorando métricas de desempenho-chave em 30%+ enquanto evitava cancelamento de cliente de R$200.000+.",
  },

  // Experience 3: Financial Analyst
  "e3.title": { en: "Financial Analyst", pt: "Analista Financeiro" },
  "e3.description": {
    en: "Transformed manual financial reporting into automated KPI dashboards, reducing reporting time by 75% and enabling real-time business decision making.",
    pt: "Transformou relatórios financeiros manuais em painéis de KPI automatizados, reduzindo tempo de relatório em 75% e permitindo tomada de decisão comercial em tempo real.",
  },

  // Contact Section
  "contact.title": {
    en: "Let's Build Revenue Operations Excellence Together",
    pt: "Vamos Construir Excelência em Revenue Operations Juntos",
  },
  "contact.subtitle": {
    en: "Open to Revenue Operations, CRM Analyst, and Data Analytics roles. Available for immediate start.",
    pt: "Aberto para posições em Revenue Operations, Analista de CRM e Análise de Dados. Disponível para início imediato.",
  },
  "contact.schedule": { en: "Schedule a Call", pt: "Agendar uma Conversa" },
  "contact.resume": { en: "Download Resume", pt: "Baixar Currículo" },

  // GitHub
  "github.loading": { en: "Fetching README...", pt: "Buscando README..." },
  "github.error": {
    en: "Failed to load README",
    pt: "Falha ao carregar README",
  },
  "github.view": { en: "View on GitHub", pt: "Ver no GitHub" },

  // Footer
  "footer.copyright": {
    en: "© 2025 • Designed with Sky Gradient Logic",
    pt: "© 2025 • Desenvolvido com Sky Gradient Logic",
  },

  // Sections (for consistency)
  "section.projects": { en: "Projects", pt: "Projetos" },
  "section.skills": { en: "Skills", pt: "Habilidades" },
  "section.experience": { en: "Experience", pt: "Experiência" },
};

export const PORTFOLIO_ENTRIES: Entry[] = [
  {
    id: "p1",
    type: "project",
    titleKey: "p1.title",
    descriptionKey: "p1.description",
    date: "2024-08-01",
    tags: ["sql", "pipelines", "bi", "revenue", "crm", "n8n"],
    github: "jeancsla/revenue-data-platform",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "Business Impact" },
      {
        type: "paragraph",
        text: "Integrated fragmented revenue data across CRM (HubSpot), billing systems, and marketing platforms to create single source of truth for $2M+ ARR business. Enabled executive team to make faster, data-driven decisions on sales strategy and resource allocation.",
      },
      { type: "heading", text: "Key Achievements" },
      {
        type: "list",
        items: [
          "Reduced manual reporting effort from 20 hours to 2 hours per week (90% reduction)",
          "Improved revenue forecast accuracy by 15% through unified data model",
          "Automated calculation of critical KPIs: LTV ($4,200), CAC ($850), CAC Payback (3.2 months)",
          "Created executive dashboard tracking MRR growth, churn (4.2%), and expansion revenue",
          "Integrated 5 data sources: HubSpot CRM, billing system, Google Ads, email platform, support tickets",
          "Built data quality checks reducing reporting errors by 95%",
        ],
      },
      { type: "heading", text: "Technical Architecture" },
      {
        type: "paragraph",
        text: "n8n workflows orchestrate daily ETL processes pulling data from APIs into PostgreSQL data warehouse. SQL transformations create dimensional models for reliable analytics. Metabase dashboards surface insights to Sales, CS, and Finance teams.",
      },
    ],
  },

  {
    id: "p2",
    type: "project",
    titleKey: "p2.title",
    descriptionKey: "p2.description",
    date: "2024-03-01",
    tags: ["crm", "automation", "data-quality", "hubspot", "n8n", "workflows"],
    github: "jeancsla/crm-data-quality",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "Problem Statement" },
      {
        type: "paragraph",
        text: "HubSpot CRM contained inconsistent data across 10,000+ contacts and 2,000+ deals, resulting in inaccurate sales forecasts and wasted rep time. Revenue projections were off by up to 20%, and sales team spent 15 hours weekly fixing data issues.",
      },
      { type: "heading", text: "Automation Strategy & Results" },
      {
        type: "list",
        items: [
          "Increased CRM data accuracy from 78% to 88% (10 percentage point improvement)",
          "Reduced manual data cleanup from 15 hours to 2 hours per week (87% reduction)",
          "Implemented 25+ automated validation rules for critical deal and contact fields",
          "Built automated revenue projections reducing forecast errors from 20% to 8%",
          "Created data health monitoring dashboard tracking accuracy metrics over time",
          "Improved sales forecast confidence from 'low' to 'high' rating by CFO",
        ],
      },
      { type: "heading", text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "n8n workflows monitor HubSpot for data changes, running validation rules on contact information, deal stages, and revenue fields. Automated notifications alert sales reps of data issues with suggested fixes. Nightly batch jobs normalize formatting and fill missing fields using external data sources.",
      },
    ],
  },

  {
    id: "p3",
    type: "project",
    titleKey: "p3.title",
    descriptionKey: "p3.description",
    date: "2024-06-01",
    tags: ["whatsapp", "javascript", "meta-api", "customer-retention", "mvp"],
    github: "jeancsla/whatsapp-survey-mvp",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "Business Challenge" },
      {
        type: "paragraph",
        text: "Tier 1 customer (representing R$200,000+ annual recurring revenue) decided to churn due to unmet needs. Team needed to understand pain points quickly and demonstrate commitment to retention.",
      },
      { type: "heading", text: "Solution & Impact" },
      {
        type: "list",
        items: [
          "Built WhatsApp survey MVP using Meta API (JavaScript) in rapid timeframe",
          "Deployed survey directly to customer, gathering actionable feedback",
          "Reverted customer churn decision based on data-driven insights from survey",
          "Saved R$200,000+ in annual recurring revenue through customer retention",
          "Demonstrated product innovation and customer success ownership",
          "Validated Meta WhatsApp Business API integration for future product roadmap",
        ],
      },
      { type: "heading", text: "Technical Implementation" },
      {
        type: "paragraph",
        text: "Built JavaScript application integrating with Meta WhatsApp Business API to send surveys and collect responses. Connected survey results to n8n workflows for automated data processing and summary generation. Delivered MVP from concept to customer deployment in 48 hours.",
      },
    ],
  },

  {
    id: "p4",
    type: "project",
    titleKey: "p4.title",
    descriptionKey: "p4.description",
    date: "2024-09-01",
    tags: ["automation", "n8n", "whatsapp", "manychat", "workflows"],
    github: "jeancsla/whatsapp-job-bot",
    showReadme: false,
    fullContent: [
      { type: "heading", text: "Business Challenge" },
      {
        type: "paragraph",
        text: "Company needed real-time notifications for new job postings to reduce time-to-contact from hours to minutes, improving candidate engagement in competitive recruitment market.",
      },
      { type: "heading", text: "Solution & Impact" },
      {
        type: "list",
        items: [
          "Built n8n workflow integrating job board APIs with WhatsApp Business API",
          "Reduced notification response time from 4 hours to 15 minutes (75% improvement)",
          "Automated 200+ notifications monthly, saving 10+ hours of manual work",
          "Increased candidate response rate from 30% to 52% (73% improvement)",
          "Implemented intelligent filtering logic to match candidates with relevant opportunities",
          "Integrated with CRM for automatic contact creation and follow-up tracking",
        ],
      },
      { type: "heading", text: "Technical Architecture" },
      {
        type: "paragraph",
        text: "n8n orchestrates job board API polling, filtering job postings, and routing to WhatsApp Business API. Smart matching algorithm considers candidate preferences stored in CRM (job category, location, experience level). Manychat handles two-way messaging for candidate responses.",
      },
    ],
  },

  {
    id: "p5",
    type: "project",
    titleKey: "p5.title",
    descriptionKey: "p5.description",
    date: "2024-09-01",
    tags: ["full-stack", "react", "typescript", "database", "integrations"],
    github: "jeancsla/notifica-frete",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "Product Overview" },
      {
        type: "paragraph",
        text: "Web application (notifica-frete.janiceto.com.br) enabling freight companies to register for real-time shipping notifications, reducing manual tracking effort and improving customer service response times.",
      },
      { type: "heading", text: "Key Features & Metrics" },
      {
        type: "list",
        items: [
          "User registration system managing 500+ active accounts",
          "Real-time notification engine processing 2,000+ alerts daily",
          "Interactive dashboard with filtering, search, and preference management",
          "Multi-channel alerts: Email, SMS, and in-app notifications",
          "Reduced customer inquiry calls by 40% through proactive notifications",
          "99.2% uptime over 6-month period with automated monitoring",
          "Mobile-responsive design accessible on all devices",
        ],
      },
      { type: "heading", text: "Technical Stack" },
      {
        type: "list",
        items: [
          "Frontend: React 18 + TypeScript for responsive user interface",
          "Backend: Python/Node.js API connecting freight tracking systems",
          "Database: PostgreSQL for user management and notification history",
          "Integration: n8n workflows for notification routing and delivery",
          "Deployment: Docker containers with automated CI/CD pipeline",
        ],
      },
      {
        type: "link",
        text: "Visit Live Application",
        url: "https://notifica-frete.janiceto.com.br",
      },
    ],
  },

  {
    id: "p6",
    type: "project",
    titleKey: "p6.title",
    descriptionKey: "p6.description",
    date: "2025-01-01",
    tags: ["react", "typescript", "vite", "frontend", "design", "ci-cd"],
    github: "jeancsla/portfolio-page",
    showReadme: true,
    fullContent: [
      { type: "heading", text: "Design Philosophy" },
      {
        type: "paragraph",
        text: "Created custom portfolio to demonstrate frontend development capabilities and design thinking beyond traditional resume format. Focuses on user experience through glassmorphism design system and dynamic time-based theming.",
      },
      { type: "heading", text: "Technical Highlights" },
      {
        type: "list",
        items: [
          "React 19 with TypeScript for type-safe component architecture",
          "Custom sky gradient engine with 4 dynamic time periods (dawn, day, sunset, night)",
          "Glassmorphism design system with smooth theme transitions",
          "Bilingual support (English/Portuguese) with localStorage persistence",
          "Hash-based routing for seamless single-page navigation",
          "GitHub Actions CI/CD pipeline for automated GitHub Pages deployment",
          "Mobile-first responsive design optimized for all devices",
        ],
      },
      { type: "heading", text: "Performance & Accessibility" },
      {
        type: "list",
        items: [
          "Lighthouse Score: 98/100 Performance, 100/100 Accessibility",
          "Bundle size: <100KB with optimal code splitting",
          "First Contentful Paint: <1.2 seconds on 4G connection",
          "WCAG 2.1 AA compliance with keyboard navigation support",
          "SEO optimized with structured data (JSON-LD) and meta tags",
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
      { type: "heading", text: "Key Achievements" },
      {
        type: "list",
        items: [
          "Increased newsletter open rate from 8% to 12% (50% improvement) through audience segmentation and A/B testing",
          "Built automated email nurture sequences generating 200+ MQLs monthly",
          "Optimized CRM workflows reducing manual data entry by 12 hours/week",
          "Created marketing attribution reports connecting campaigns to revenue impact",
          "Managed HubSpot CRM for 50,000+ contacts across 15 lifecycle stages",
          "Designed CRM strategies and data analyses to improve marketing and customer performance",
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
      { type: "heading", text: "Cross-Functional Impact" },
      {
        type: "list",
        items: [
          "Built WhatsApp survey MVP that saved tier 1 customer from churning, preventing R$200,000+ annual revenue loss",
          "Integrated Sales, Finance, and Customer Success reporting, increasing metric alignment by 30%",
          "Automated billing and collections workflows, saving 20+ hours weekly across finance team",
          "Built revenue forecasting model with 92% accuracy for $3M+ ARR business",
          "Reduced month-end close time from 10 days to 4 days through process automation",
          "Created unified KPI dashboard tracking CAC ($1,200), LTV ($5,800), and churn (3.8%)",
          "Implemented HubSpot-to-accounting system integration eliminating manual data entry",
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
      { type: "heading", text: "Automation & Analytics" },
      {
        type: "list",
        items: [
          "Automated monthly financial reporting using VBA and Python, reducing 40-hour process to 10 hours",
          "Built executive dashboard tracking burn rate, runway, and unit economics",
          "Created financial models for scenario planning and strategic decision making",
          "Improved forecast accuracy by 18% through enhanced data validation",
          "Analyzed financial KPIs including LTV, CAC, churn, and recurring revenue",
          "Structured and optimized financial processes (accounts payable/receivable, controlling)",
          "Trained 5 team members on automated reporting tools and best practices",
        ],
      },
    ],
  },
];

export const SKILL_CATEGORIES = [
  {
    id: "revops",
    categoryKey: "skill.revops.title",
    descriptionKey: "skill.revops.description",
    skills: [
      { name: "HubSpot CRM", level: "expert" as const },
      { name: "Revenue Forecasting", level: "expert" as const },
      { name: "Sales Analytics", level: "expert" as const },
      { name: "Process Optimization", level: "proficient" as const },
      { name: "Salesforce", level: "familiar" as const },
      { name: "Pipedrive", level: "familiar" as const },
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
      { name: "dbt", level: "familiar" as const },
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

export const CONTACT_INFO = {
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
