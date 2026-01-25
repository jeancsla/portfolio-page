
import { Translation, Entry } from './types';

export const TRANSLATIONS: Translation = {
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.projects': { en: 'Projects', pt: 'Projetos' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'hero.title': { en: 'Creative Engineer', pt: 'Engenheiro Criativo' },
  'hero.subtitle': { en: 'Building intelligent solutions for the modern web.', pt: 'Construindo soluções inteligentes para a web moderna.' },
  'about.title': { en: 'About Me', pt: 'Sobre Mim' },
  'about.text': { 
    en: 'I am a passionate developer focused on clean code, performance, and aesthetic user experiences. I believe in the power of open source and convention-driven architecture.',
    pt: 'Sou um desenvolvedor apaixonado, focado em código limpo, performance e experiências de usuário estéticas. Acredito no poder do código aberto e na arquitetura baseada em convenções.'
  },
  'github.loading': { en: 'Fetching README...', pt: 'Buscando README...' },
  'github.error': { en: 'Failed to load README', pt: 'Falha ao carregar README' },
  'github.view': { en: 'View on GitHub', pt: 'Ver no GitHub' },
};

export const PORTFOLIO_ENTRIES: Entry[] = [
  {
    id: 'p1',
    type: 'project',
    titleKey: 'Sky Engine',
    descriptionKey: 'A time-based CSS engine for dynamic gradients.',
    date: '2025-01-20',
    tags: ['typescript', 'css', 'design'],
    github: 'username/sky-engine',
    showReadme: true,
    fullContent: [
      { type: 'heading', text: 'Architecture & Concept' },
      { type: 'paragraph', text: 'Sky Engine uses a procedural generation approach to calculate sun and moon positions based on the user\'s local latitude and longitude (simulated via local hour for simplicity). The core logic resides in a lightweight hook that interpolates HEX color values.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&q=80&w=1000', alt: 'Sunrise visualization', text: 'Conceptual gradient flow for early morning transitions.' },
      { type: 'heading', text: 'Key Implementation Details' },
      { type: 'list', items: [
        'Hone-in color interpolation for 24 distinct hours',
        'Minimal performance footprint (< 2kb gzipped)',
        'Built-in accessibility check for contrast ratios',
        'React and Vanilla JS compatible'
      ]},
      { type: 'link', text: 'Documentation & Examples', url: 'https://example.com/docs' }
    ]
  },
  {
    id: 'p2',
    type: 'project',
    titleKey: 'Glass UI Kit',
    descriptionKey: 'Modern glassmorphism components for React.',
    date: '2024-11-15',
    tags: ['react', 'tailwind', 'glassmorphism'],
    github: 'username/glass-ui',
    showReadme: false,
    fullContent: [
      { type: 'heading', text: 'The Visual Philosophy' },
      { type: 'paragraph', text: 'The Glass UI Kit focuses on "Soft Glass" effects—low opacity, high blur, and subtle inner borders. It solves the common readability issue by automatically adjusting text color contrast against high-saturation backgrounds.' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1000', alt: 'Glass components', text: 'Preview of buttons, cards, and modal components in light and dark modes.' },
      { type: 'paragraph', text: 'Each component is built with Tailwind CSS and Framer Motion for micro-interactions that feel premium and tactile.' }
    ]
  },
  {
    id: 'e1',
    type: 'experience',
    titleKey: 'Senior Frontend Engineer',
    descriptionKey: 'Leading the UI/UX transition to modern web standards.',
    date: '2023 - Present',
    company: 'TechFlow Inc',
    role: 'Senior Developer'
  },
  {
    id: 'e2',
    type: 'experience',
    titleKey: 'Software Developer',
    descriptionKey: 'Fullstack development with focus on developer experience.',
    date: '2021 - 2023',
    company: 'CodeCraft Studio',
    role: 'Fullstack Developer'
  }
];
