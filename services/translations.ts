import { Translation } from "../types";

export const TRANSLATIONS: Translation = {
  // Navigation
  "nav.about": { en: "About", pt: "Sobre" },
  "nav.projects": { en: "Projects", pt: "Projetos" },
  "nav.skills": { en: "Skills", pt: "Habilidades" },
  "nav.experience": { en: "Experience", pt: "Experiência" },
  "nav.contact": { en: "Contact", pt: "Contato" },
  "nav.back": { en: "Back", pt: "Voltar" },
  "nav.previous": { en: "Previous Project", pt: "Projeto Anterior" },
  "nav.next": { en: "Next Project", pt: "Próximo Projeto" },

  // Hero Section
  "hero.title": {
    en: "Jean Aniceto",
    pt: "Jean Aniceto",
  },
  "hero.subtitle": {
    en: "Revenue Operations, Data Analytics and Data Engineering",
    pt: "Revenue Operations, Análise de Dados e Engenharia de Dados",
  },
  "app.loading": { en: "Loading...", pt: "Carregando..." },

  // About Section
  "about.title": { en: "About Me", pt: "Sobre Mim" },
  "about.text": {
    en: "Professional working across Revenue Operations, Data Analytics and Data Engineering. Experienced in integrating financial, marketing and CRM data, building automated pipelines and dashboards, and enabling business decisions through reliable metrics.",
    pt: "Profissional atuando entre Revenue Operations, Análise de Dados e Engenharia de Dados. Experiência na integração de dados financeiros, de marketing e CRM, construção de pipelines automatizados e dashboards, e suporte à tomada de decisão por meio de métricas confiáveis.",
  },

  // Projects Section
  // Sections (for consistency)
  "section.projects": { en: "Projects", pt: "Projetos" },
  "project.repo_details": {
    en: "Repository Details",
    pt: "Detalhes do Repositório",
  },

  // Project 2: CRM Data Quality
  "p2.title": {
    en: "CRM Data Quality Automation",
    pt: "Automação de Qualidade de Dados do CRM",
  },
  "p2.description": {
    en: "Improved CRM data accuracy by 10% through automated validation workflows, enabling reliable revenue forecasting and reducing manual data cleanup by 15 hours/week.",
    pt: "Melhora na precisão dos dados do CRM em 10% por meio de fluxos de trabalho de validação automatizados, permitindo previsões de receita confiáveis e reduzindo a limpeza manual de dados em 15 horas/semana.",
  },

  // Project 2 Content
  "p2.content.heading1": {
    en: "Problem Statement",
    pt: "Declaração do Problema",
  },
  "p2.content.para1": {
    en: "CRM contained inconsistent data across 100,000+ contacts and 20,000+ deals, resulting in inaccurate sales forecasts and wasted rep time. Revenue projections were off by up to 20%, and sales team spent 15 hours weekly fixing data issues.",
    pt: "O CRM continha dados inconsistentes em mais de 100.000 contatos e 20.000 negócios, resultando em previsões de vendas imprecisas e desperdício de tempo da equipe. As projeções de receita estavam erradas em até 20%, e a equipe de vendas gastava 15 horas semanais corrigindo problemas de dados.",
  },
  "p2.content.heading2": {
    en: "Automation Strategy & Results",
    pt: "Estratégia de Automação e Resultados",
  },
  "p2.content.item1": {
    en: "Increased CRM data accuracy from 78% to 88% (10 percentage point improvement)",
    pt: "Aumento na precisão dos dados do CRM de 78% para 88% (melhoria de 10 pontos percentuais)",
  },
  "p2.content.item2": {
    en: "Reduced manual data cleanup from 15 hours to 2 hours per week (87% reduction)",
    pt: "Redução da limpeza manual de dados de 15 horas para 2 horas por semana (redução de 87%)",
  },
  "p2.content.item3": {
    en: "Implemented 25+ automated validation rules for critical deal and contact fields",
    pt: "Implementação de mais de 25 regras de validação automatizadas para campos críticos de negócios e contatos",
  },
  "p2.content.item4": {
    en: "Built automated revenue projections reducing forecast errors from 20% to 8%",
    pt: "Construção de projeções de receita automatizadas reduzindo erros de previsão de 20% para 8%",
  },
  "p2.content.item5": {
    en: "Created data health monitoring dashboard tracking accuracy metrics over time",
    pt: "Criação de dashboard de monitoramento de saúde de dados rastreando métricas de precisão ao longo do tempo",
  },
  "p2.content.item6": {
    en: "Improved sales forecast confidence from 'low' to 'high' rating by CFO",
    pt: "Melhoria na confiança da previsão de vendas de classificação 'baixa' para 'alta' pelo CFO",
  },
  "p2.content.heading3": {
    en: "Technical Implementation",
    pt: "Implementação Técnica",
  },
  "p2.content.para2": {
    en: "n8n workflows monitor HubSpot for data changes, running validation rules on contact information, deal stages, and revenue fields. Automated notifications alert sales reps of data issues with suggested fixes. Nightly batch jobs normalize formatting and fill missing fields using external data sources.",
    pt: "Workflows no n8n monitoram o HubSpot em busca de alterações de dados, executando regras de validação em informações de contato, estágios de negócios e campos de receita. Notificações automatizadas alertam os representantes de vendas sobre problemas de dados com correções sugeridas. Jobs noturnos normalizam a formatação e preenchem campos ausentes usando fontes de dados externas.",
  },

  // Project 3: WhatsApp Survey MVP
  "p3.title": {
    en: "WhatsApp Survey MVP",
    pt: "MVP de Pesquisa WhatsApp",
  },
  "p3.description": {
    en: "Prevented R$200,000+ annual revenue loss by building WhatsApp survey MVP that saved tier 1 customer from churning through MVP.",
    pt: "Prevenção de perda de R$200.000+ em receita anual construindo MVP de pesquisa WhatsApp que salvou cliente tier 1 de cancelamento por meio de MVP.",
  },

  // Project 3 Content
  "p3.content.heading1": {
    en: "Business Challenge",
    pt: "Desafio de Negócio",
  },
  "p3.content.para1": {
    en: "Tier 1 customer (representing R$200,000+ annual recurring revenue) decided to churn due to unmet needs. Team needed to understand pain points quickly, demonstrate commitment to retention and build MVP.",
    pt: "Cliente tier 1 (representando mais de R$200.000 de receita anual recorrente) decidiu cancelar devido a necessidades não atendidas. A equipe precisava entender os pontos de dor rapidamente, demonstrar compromisso com a retenção e construir um MVP.",
  },
  "p3.content.heading2": {
    en: "Solution & Impact",
    pt: "Solução e Impacto",
  },
  "p3.content.item1": {
    en: "Built WhatsApp survey MVP using Meta API (JavaScript) in rapid timeframe",
    pt: "Construção de MVP de pesquisa WhatsApp usando Meta API (JavaScript) em tempo recorde",
  },
  "p3.content.item2": {
    en: "Deployed survey directly to customer, gathering actionable feedback",
    pt: "Disparo da pesquisa diretamente para o cliente, coletando feedback acionável",
  },
  "p3.content.item3": {
    en: "Reverted customer churn decision based on data-driven insights from survey",
    pt: "Reversão da decisão de cancelamento do cliente com base em insights orientados por dados da pesquisa",
  },
  "p3.content.item4": {
    en: "Saved R$200,000+ in annual recurring revenue through customer retention",
    pt: "Economia de mais de R$200.000 em receita anual recorrente por meio de retenção de clientes",
  },
  "p3.content.item5": {
    en: "Demonstrated product innovation and customer success ownership",
    pt: "Demonstrou inovação de produto e ownership de sucesso do cliente",
  },
  "p3.content.item6": {
    en: "Validated Meta WhatsApp Business API integration for future product roadmap",
    pt: "Validou a integração da Meta WhatsApp Business API para o roadmap futuro do produto",
  },
  "p3.content.heading3": {
    en: "Technical Implementation",
    pt: "Implementação Técnica",
  },
  "p3.content.para2": {
    en: "Built JavaScript application integrating with Meta WhatsApp Business API to send surveys and collect responses. Delivered MVP from concept to customer deployment in 15 days.",
    pt: "Aplicação em JavaScript integrada à API do WhatsApp Business para envio de pesquisas e coleta de respostas. MVP entregue do conceito ao cliente em 15 dias.",
  },

  // Project 4: WhatsApp Job Agent
  "p4.title": {
    en: "WhatsApp Job Agent",
    pt: "Agente de Serviços WhatsApp",
  },
  "p4.description": {
    en: "WhatsApp agent integrated into a system that performs notifications for a freight company, agentic fill sheets and send reports, reducing workhours by more than 100 hours monthly.",
    pt: "Agente de WhatsApp integrado a um sistema que realiza notificações para uma transportadora, preenchimento de planilhas e envio de relatórios, reduzindo a carga horária em mais de 100 horas mensais.",
  },

  // Project 4 Content
  "p4.content.heading1": {
    en: "Project Overview",
    pt: "Visão Geral do Projeto",
  },
  "p4.content.para1": {
    en: "Developed a WhatsApp agent integrated into a system that performs notifications for a freight company, agentic fill sheets, and sends reports.",
    pt: "Desenvolvimento de um agente de WhatsApp integrado a um sistema que realiza notificações para uma transportadora, preenchimento de planilhas e envio de relatórios.",
  },
  "p4.content.heading2": {
    en: "Efficiency & Impact",
    pt: "Eficiência e Impacto",
  },
  "p4.content.item1": {
    en: "Reduced workhours by more than 100 hours monthly through automation",
    pt: "Redução da carga horária em mais de 100 horas mensais por meio da automação",
  },
  "p4.content.item2": {
    en: "Automated real-time job notifications for freight company",
    pt: "Notificações de vagas em tempo real automatizadas para a transportadora",
  },
  "p4.content.item3": {
    en: "Implemented agentic systems for intelligent sheet filling and reporting",
    pt: "Implementação de sistemas agênticos para preenchimento inteligente de planilhas e relatórios",
  },
  "p4.content.item4": {
    en: "Streamlined communication and data capture workflows",
    pt: "Fluxos de trabalho de comunicação e captura de dados otimizados",
  },
  "p4.content.heading3": {
    en: "Technical Implementation",
    pt: "Implementação Técnica",
  },
  "p4.content.para2": {
    en: "Orchestrated using n8n for workflow automation, integrating WhatsApp Business API with internal freight company systems for automated notifications and reporting.",
    pt: "Orquestrado utilizando n8n para automação de fluxo de trabalho, integrando a API do WhatsApp Business com sistemas internos da transportadora para notificações e relatórios automatizados.",
  },

  // Project 5: Notifica-Frete
  "p5.title": { en: "Notifica-Frete Website", pt: "Site Notifica-Frete" },
  "p5.description": {
    en: "Full-stack freight notification platform with integrated dashboard, monthly sending more than 300 notifications and using PostgreSQL for persistent database.",
    pt: "Plataforma de notificação de frete full-stack com painel integrado, enviando mensalmente mais de 300 notificações e utilizando PostgreSQL para banco de dados persistente.",
  },

  // Project 5 Content
  "p5.content.heading1": {
    en: "Product Overview",
    pt: "Visão Geral do Produto",
  },
  "p5.content.para1": {
    en: "Full-stack freight notification platform enabling freight companies to register for real-time shipping notifications, reducing manual tracking effort and improving customer service.",
    pt: "Plataforma de notificação de frete full-stack que permite que transportadoras se registrem para notificações de envio em tempo real, reduzindo o esforço de rastreamento manual e melhorando o atendimento ao cliente.",
  },
  "p5.content.heading2": {
    en: "Key Features & Metrics",
    pt: "Principais Recursos e Métricas",
  },
  "p5.content.item1": {
    en: "Monthly sending more than 300 notifications",
    pt: "Envio mensal de mais de 300 notificações",
  },
  "p5.content.item2": {
    en: "Real-time notification engine with integrated dashboard",
    pt: "Motor de notificação em tempo real com painel integrado",
  },
  "p5.content.item3": {
    en: "Interactive dashboard with filtering, search, and preference management",
    pt: "Painel interativo com filtragem, busca e gerenciamento de preferências",
  },
  "p5.content.item4": {
    en: "Multi-channel alerts: Email, SMS, and in-app notifications",
    pt: "Alertas multi-canal: Email, SMS e notificações no aplicativo",
  },
  "p5.content.item5": {
    en: "Uses PostgreSQL for persistent database",
    pt: "Utiliza PostgreSQL para banco de dados persistente",
  },
  "p5.content.item6": {
    en: "Mobile-responsive design accessible on all devices",
    pt: "Design responsivo para dispositivos móveis acessível em todos os aparelhos",
  },
  "p5.content.heading3": { en: "Technical Stack", pt: "Stack Técnica" },
  "p5.content.item7": {
    en: "Frontend: React + TypeScript for responsive user interface",
    pt: "Frontend: React + TypeScript para interface de usuário responsiva",
  },
  "p5.content.item8": {
    en: "Database: PostgreSQL for persistent data storage",
    pt: "Banco de Dados: PostgreSQL para armazenamento persistente de dados",
  },
  "p5.content.item9": {
    en: "Integration: n8n workflows for notification routing and delivery",
    pt: "Integração: Workflows n8n para roteamento e entrega de notificações",
  },
  "p5.content.item10": {
    en: "Deployment: Docker containers with automated CI/CD pipeline",
    pt: "Deployment: Containers Docker com pipeline CI/CD automatizado",
  },
  "p5.content.link": { en: "Visit Live Application", pt: "Visite a Aplicação" },

  // Project 6: Portfolio
  "p6.title": {
    en: "Interactive Portfolio Website",
    pt: "Site de Portfólio Interativo",
  },
  "p6.description": {
    en: "Modern portfolio built with React 19, TypeScript, and custom time-based gradient system showcasing technical and design skills with 98/100 Lighthouse score.",
    pt: "Portfólio moderno construído com React 19, TypeScript e sistema de gradiente baseado em tempo personalizado, mostrando habilidades técnicas e de design com pontuação Lighthouse de 98/100.",
  },

  // Project 6 Content
  "p6.content.heading1": { en: "Design Philosophy", pt: "Filosofia de Design" },
  "p6.content.para1": {
    en: "Created custom portfolio to demonstrate frontend development capabilities and design thinking beyond traditional resume format. Focuses on user experience through glassmorphism design system and dynamic time-based theming.",
    pt: "Portfólio personalizado criado para demonstrar capacidades de desenvolvimento frontend e design thinking além do formato de currículo tradicional. Foca na experiência do usuário através de um sistema de design glassmorphism e temas dinâmicos baseados no tempo.",
  },
  "p6.content.heading2": {
    en: "Technical Highlights",
    pt: "Destaques Técnicos",
  },
  "p6.content.item1": {
    en: "React 19 with TypeScript for type-safe component architecture",
    pt: "React 19 com TypeScript para arquitetura de componentes type-safe",
  },
  "p6.content.item2": {
    en: "Custom sky gradient engine with 4 dynamic time periods (dawn, day, sunset, night)",
    pt: "Motor de gradiente de céu personalizado com 4 períodos dinâmicos (amanhecer, dia, pôr do sol, noite)",
  },
  "p6.content.item3": {
    en: "Glassmorphism design system with smooth theme transitions",
    pt: "Sistema de design glassmorphism com transições de tema suaves",
  },
  "p6.content.item4": {
    en: "Bilingual support (English/Portuguese) with localStorage persistence",
    pt: "Suporte bilíngue (Inglês/Português) com persistência em localStorage",
  },
  "p6.content.item5": {
    en: "Hash-based routing for seamless single-page navigation",
    pt: "Roteamento baseado em hash para navegação contínua em página única",
  },
  "p6.content.item6": {
    en: "GitHub Actions CI/CD pipeline for automated GitHub Pages deployment",
    pt: "Pipeline CI/CD com GitHub Actions para deploy automatizado no GitHub Pages",
  },
  "p6.content.item7": {
    en: "Mobile-first responsive design optimized for all devices",
    pt: "Design responsivo mobile-first otimizado para todos os dispositivos",
  },
  "p6.content.heading3": {
    en: "Performance & Accessibility",
    pt: "Performance e Acessibilidade",
  },
  "p6.content.item8": {
    en: "Lighthouse Score: 98/100 Performance, 100/100 Accessibility",
    pt: "Pontuação Lighthouse: 98/100 Performance, 100/100 Acessibilidade",
  },
  "p6.content.item9": {
    en: "Bundle size: <100KB with optimal code splitting",
    pt: "Tamanho do bundle: <100KB com code splitting otimizado",
  },
  "p6.content.item10": {
    en: "First Contentful Paint: <1.2 seconds on 4G connection",
    pt: "First Contentful Paint: <1,2 segundos em conexão 4G",
  },
  "p6.content.item11": {
    en: "WCAG 2.1 AA compliance with keyboard navigation support",
    pt: "Conformidade WCAG 2.1 AA com suporte para navegação por teclado",
  },
  "p6.content.item12": {
    en: "SEO optimized with structured data (JSON-LD) and meta tags",
    pt: "SEO otimizado com dados estruturados (JSON-LD) e meta tags",
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

  // Experience 1 Content
  "e1.content.heading1": {
    en: "Key Achievements",
    pt: "Principais Conquistas",
  },
  "e1.content.item1": {
    en: "Increased newsletter open rate from 8% to 12% (50% improvement) through audience segmentation and A/B testing",
    pt: "Aumento da taxa de abertura de newsletter de 8% para 12% (melhoria de 50%) através de segmentação de público e testes A/B",
  },
  "e1.content.item2": {
    en: "Built automated WhatsApp nurture/HandRaise sequences generating 100+ MQLs monthly",
    pt: "Construção de sequências automatizadas de nutrição/HandRaise via WhatsApp gerando mais de 100 MQLs mensais",
  },
  "e1.content.item3": {
    en: "Managed HubSpot CRM for 200,000+ contacts across lifecycle stages",
    pt: "Gerenciamento do HubSpot CRM para mais de 200.000 contatos em diferentes estágios do ciclo de vida",
  },
  "e1.content.item4": {
    en: "Designed CRM strategies and data analyses to improve marketing and customer performance",
    pt: "Desenvolvimento de estratégias de CRM e análises de dados para melhorar o desempenho de marketing e sucesso do cliente",
  },

  // Experience 2: Revenue Operations Analyst
  "e2.title": {
    en: "Revenue Operations Analyst",
    pt: "Analista de Revenue Operations",
  },
  "e2.description": {
    en: "Integrated Sales, Finance, and CS teams through automated reporting and process optimization, improving key performance metrics by 30%+ while preventing customer churn.",
    pt: "Integrou equipes de Vendas, Finanças e Sucesso do Cliente por meio de relatórios automatizados e otimização de processos, melhorando métricas de desempenho-chave em 30%+ enquanto evitava cancelamento de cliente.",
  },

  // Experience 2 Content
  "e2.content.heading1": {
    en: "Cross-Functional Impact",
    pt: "Impacto Transversal",
  },
  "e2.content.item1": {
    en: "Built WhatsApp survey MVP that saved tier 1 customer from churning, preventing R$200,000+ annual revenue loss",
    pt: "Construção de MVP de pesquisa via WhatsApp que salvou um cliente tier 1 de cancelamento, evitando a perda de mais de R$200.000 em receita anual",
  },
  "e2.content.item2": {
    en: "Integrated Sales, Finance, and Customer Success reporting, increasing metric alignment by 30%",
    pt: "Integração de relatórios de Vendas, Finanças e Sucesso do Cliente, aumentando o alinhamento de métricas em 30%",
  },
  "e2.content.item3": {
    en: "Automated billing and collections workflows, saving 20+ hours weekly across finance team",
    pt: "Automação de workflows de faturamento e cobrança, economizando mais de 20 horas semanais para a equipe financeira",
  },
  "e2.content.item4": {
    en: "Built revenue forecasting model with 92% accuracy for R$ 24M ARR business",
    pt: "Desenvolvimento de modelo de previsão de receita com 92% de precisão para um negócio de R$ 24M de ARR",
  },
  "e2.content.item5": {
    en: "Created unified KPI dashboard tracking key performance metrics and churn",
    pt: "Criação de dashboard unificado de KPIs acompanhando métricas fundamentais de desempenho e churn",
  },
  "e2.content.item6": {
    en: "CRM migration from HubSpot to Zoho",
    pt: "Migração de CRM do HubSpot para o Zoho",
  },

  // Experience 3: Financial Analyst
  "e3.title": { en: "Financial Analyst", pt: "Analista Financeiro" },
  "e3.description": {
    en: "Transformed manual financial reporting into automated KPI dashboards, reducing reporting time by 75% and enabling real-time business decision making.",
    pt: "Transformou relatórios financeiros manuais em painéis de KPI automatizados, reduzindo tempo de relatório em 75% e permitindo tomada de decisão comercial em tempo real.",
  },

  // Experience 3 Content
  "e3.content.heading1": {
    en: "Automation & Analytics",
    pt: "Automação e Análise",
  },
  "e3.content.item1": {
    en: "Automated monthly financial reporting using VBA and Python, reducing 40-hour process to 10 hours",
    pt: "Automação de relatórios financeiros mensais usando VBA e Python, reduzindo um processo de 40 horas para 10 horas",
  },
  "e3.content.item2": {
    en: "Built executive dashboard tracking burn rate, runway, and unit economics",
    pt: "Construção de dashboard executivo acompanhando burn rate, runway e unit economics",
  },
  "e3.content.item3": {
    en: "Created financial models for scenario planning and strategic decision making",
    pt: "Criação de modelos financeiros para planejamento de cenários e tomada de decisão estratégica",
  },
  "e3.content.item4": {
    en: "Improved forecast accuracy by 18% through enhanced data validation",
    pt: "Melhoria da precisão de previsões em 18% através de validação de dados aprimorada",
  },
  "e3.content.item5": {
    en: "Analyzed financial KPIs including churn and recurring revenue",
    pt: "Análise de KPIs financeiros, incluindo churn e receita recorrente",
  },
  "e3.content.item6": {
    en: "Structured and optimized financial processes (accounts payable/receivable, controlling)",
    pt: "Estruturação e otimização de processos financeiros (contas a pagar/receber, controladoria)",
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
    en: "© 2026 • Engineered for Revenue Growth",
    pt: "© 2026 • Engenharia para Crescimento de Receita",
  },

  // Sections (for consistency)
  "section.skills": { en: "Skills", pt: "Habilidades" },
  "section.experience": { en: "Experience", pt: "Experiência" },
};
