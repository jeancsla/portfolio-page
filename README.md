# Jean Aniceto - Revenue Operations Portfolio

A modern, fully bilingual (EN/PT) portfolio website showcasing Revenue Operations expertise, automation skills, and data analytics capabilities. Built with React 19, TypeScript, and Framer Motion animations.

**Live Demo:** [jeancsla.github.io/portfolio-page](https://jeancsla.github.io/portfolio-page)

## 🎯 Purpose

This portfolio targets **Revenue Operations hiring managers, CRM team leads, and data analytics recruiters** with a focus on:

- 📊 Revenue Operations expertise (forecasting, CRM optimization, sales metrics)
- 🤖 Automation & integration skills (n8n, Zapier, API integration)
- 📈 Data analytics & business intelligence capabilities
- 💻 Full-stack development experience

## ✨ Key Features

### Design & UX

- **Time-based Sky Gradient**: Background changes dynamically based on user's local time (dawn, day, sunset, night)
- **Glassmorphism Design**: Modern blur effects with translucent frosted glass appearance
- **Smooth Animations**: Framer Motion spring physics for natural, bouncy interactions
- **Scroll-driven Effects**: Viewport-triggered animations with staggered reveals
- **Floating Orbs**: Animated background layer with parallax effects
- **Responsive Design**: Mobile-first responsive layout optimized for all devices

### Internationalization (i18n)

- **Full Bilingual Support**: English & Portuguese
- **Language Toggle**: EN/PT switcher in header
- **Persistent Preference**: Language choice saved to localStorage
- **Complete Coverage**: All content translatable including:
  - 6 projects with full descriptions
  - 3 experience entries
  - 4 skill categories with descriptions
  - Navigation, buttons, footer
- **Graceful Fallback**: English fallback if Portuguese translation missing

### Content & Structure

- **6 Featured Projects**:
  - Revenue Data Platform ($2M+ ARR automation)
  - CRM Data Quality Automation (10% accuracy improvement)
  - WhatsApp Survey MVP (saved R$200k+ customer)
  - WhatsApp Job Notification Bot (75% response time improvement)
  - Notifica-Frete Website (500+ users, 2k+ daily alerts)
  - Interactive Portfolio Website (this site)

- **3 Experience Entries**:
  - CRM Analyst (Escola DNC) - 12% newsletter engagement increase
  - Revenue Operations Analyst (SoluCX) - 30%+ metric improvements
  - Financial Analyst - 75% reporting time reduction

- **4 Skill Categories**:
  - Revenue Operations (HubSpot, forecasting, analytics)
  - Automation & Integration (n8n, Zapier, API integration)
  - Data & Analytics (SQL, Metabase, data modeling)
  - Development (React, Python, JavaScript, Git)

### Technical Excellence

- **Performance**: Lighthouse 98/100, <1.2s FCP
- **Bundle Size**: Optimized via manual chunking and lazy loading
- **Resource Management**: Centralized state with `AppContext` to eliminate redundant background processes
- **Animation Performance**: 60fps, zero CLS (layout shift)
- **Type Safety**: Full TypeScript with zero compilation errors
- **SEO Optimized**: Meta tags, structured data (JSON-LD), semantic HTML
- **Accessibility**: WCAG 2.1 AA compliance, keyboard navigation

## 🏗️ Architecture

### File Structure

```
portfolio-page/
├── components/
│   ├── sections/            # Key modular pages sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   └── ExperienceSection.tsx
│   ├── Header.tsx           # Navigation with language toggle
│   ├── EntryCard.tsx        # Project/experience card component
│   ├── SkillCard.tsx        # Skill category card component
│   ├── ContactSection.tsx   # CTA section with social links
│   ├── ProjectDetail.tsx    # Lazy-loaded project detail view
│   └── FloatingOrbs.tsx     # Animated background orbs
├── services/
│   ├── AppContext.tsx       # Centralized state (theme, i18n, timers)
│   ├── theme.ts             # Theme hooks (uses context)
│   └── i18n.ts              # i18n hooks (uses context)
├── App.tsx                  # Root component with Suspense & routing
├── constants.ts             # All content (projects, experiences, skills, i18n)
├── types.ts                 # TypeScript interfaces
└── index.html               # Entry point with CSS
```

### Key Technologies

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Performance Management**: React Context API
- **Routing**: Hash-based with window.location.hash
- **Deployment**: GitHub Pages via GitHub Actions

## ⚡ Performance Optimization

The portfolio has undergone a comprehensive performance audit and refactoring:

- **Centralized Timers**: Moved background intervals (sky themes) into a single unified context to prevent CPU waste.
- **Code Splitting**: Implemented `React.lazy` for project details, reducing initial paint by ~15%.
- **Manual Chunking**: Optimized Vite build to separate `framer-motion` and vendor libs into independent chunks for better caching.
- **Memoized Sections**: Portions of the UI are wrapped in `React.memo` and `useMemo` to prevent unnecessary re-renders during theme updates.

## 🌐 Internationalization (i18n)

The portfolio includes 40+ translation keys covering all content:

```typescript
// Navigation
"nav.about", "nav.projects", "nav.skills", "nav.experience", "nav.contact"

// Projects (p1-p6)
"p1.title", "p1.description", "p2.title", "p2.description", ...

// Skills
"skill.revops.title", "skill.revops.description", ...

// Sections
"section.projects", "section.skills", "section.experience"

// Contact
"contact.schedule", "contact.resume"

// Footer
"footer.copyright"
```

**To add translations**: Edit `constants.ts` TRANSLATIONS object with new language keys.

## 📊 Content Management

### Adding a Project

Edit `constants.ts` and add to `PORTFOLIO_ENTRIES`:

```typescript
{
  id: 'p7',
  type: 'project',
  titleKey: 'p7.title',           // Must have translation in TRANSLATIONS
  descriptionKey: 'p7.description',
  date: '2025-01-01',
  tags: ['react', 'automation'],
  github: 'jeancsla/project-name',
  showReadme: true,  // Auto-fetch README from GitHub
  fullContent: [
    { type: "heading", text: "Overview" },
    { type: "paragraph", text: "..." },
    { type: "list", items: ["Item 1", "Item 2"] },
  ]
}
```

### Adding a Skill Category

Edit `constants.ts` and add to `SKILL_CATEGORIES`:

```typescript
{
  id: 'new-category',
  categoryKey: 'skill.newcategory.title',      // Must have translation
  descriptionKey: 'skill.newcategory.description',
  skills: [
    { name: "Skill Name", level: "expert" },
    { name: "Skill Name", level: "proficient" },
  ]
}
```

### Adding Translations

Edit `constants.ts` TRANSLATIONS object:

```typescript
"your.key": {
  en: "English text",
  pt: "Texto em Português"
}
```

The translation function `t()` will handle lookups and fallbacks automatically.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at `http://localhost:5173`

### Build

```bash
npm run build
```

Output in `dist/` folder

### Preview Build

```bash
npm run preview
```

## 📱 Features in Detail

### Time-based Sky Gradient

The background changes color based on local time:

- **Dawn** (5-8 AM): Pink/purple
- **Day** (8 AM-5 PM): Blue/teal
- **Sunset** (5-8 PM): Orange/red
- **Night** (8 PM-5 AM): Deep blue/purple

The sun/moon icon in the header also tracks time position horizontally.

### Scroll Animations

All sections animate on scroll with:

- Fade-in effects (opacity)
- Slide-in animations (transform)
- Staggered reveals for grid items
- Viewport-triggered animations
- Spring physics for natural feel

### Glassmorphism

Cards feature:

- `backdrop-filter: blur(12px)`
- Gradient semi-transparent backgrounds
- Inset shadows for depth
- Border with white opacity
- Hover lift effect with enhanced shadows

## 🔍 SEO & Meta Tags

The site includes comprehensive SEO optimization:

- Meta title targeting "Revenue Operations Analyst"
- Meta description with keywords and achievements
- Open Graph tags for social sharing
- Twitter Card meta tags
- JSON-LD structured data (Person schema)
- Canonical URL

## 🔗 Contact & Links

- **Email**: jeancsla@gmail.com
- **LinkedIn**: [jean-aniceto](https://www.linkedin.com/in/jean-aniceto/)
- **GitHub**: [@jeancsla](https://github.com/jeancsla)
- **Calendar**: [Google Calendar link](https://calendar.app.google/yQqyXCrMQpRJaoTu8)
- **Resume**: [Google Drive link](https://drive.google.com/file/d/1pAOk3QQSgPRf7A1EKhxUQXwzqvZmjgfy/view?usp=sharing)

## 📦 Deployment

### GitHub Pages (Default)

The project is configured to deploy to GitHub Pages automatically:

1. Push to `main` branch
2. GitHub Actions workflow builds and deploys to `gh-pages` branch
3. Site live at `https://jeancsla.github.io/portfolio-page`

**Build Output**: ~365KB (115KB gzipped)

### Custom Domain

To use a custom domain:

1. Add CNAME file to `public/` folder
2. Configure GitHub Pages settings
3. Update DNS records

## 🎨 Customization

### Colors

Edit `index.html` CSS for color schemes:

- Primary accent: Indigo (#6366f1)
- Success: Emerald (#10b981)
- Info: Blue (#3b82f6)
- Warning: Purple (#a855f7)

### Fonts

- Headings: System font stack (bold)
- Body: System font stack (regular)
- Can be changed in Tailwind CSS config

### Animations

Adjust animation timing in component files:

- `stiffness`: 200-300 (lower = looser)
- `damping`: 10-20 (higher = bouncier)
- `duration`: 0.3-0.8 seconds

## 🤝 Contributing

This is a personal portfolio. For suggestions or improvements:

1. Create an issue in GitHub
2. Fork and submit a PR

## 📄 License

MIT License - Feel free to fork and customize for your own portfolio!

## 🔧 Development Notes

### Performance Optimization

- Tree-shaking for unused code
- Code splitting for lazy loading
- Image optimization
- CSS purging with Tailwind
- Minification in production build

### Type Safety

- Full TypeScript strict mode
- No `any` types
- Typed props for all components
- Typed translation keys

### Testing

To add tests:

```bash
npm install --save-dev vitest @testing-library/react
```

## 📚 Resources

- [React 19 Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Built with ❤️ by Jean Aniceto**
_Revenue Operations professional | Data Analytics enthusiast | Full-stack developer_
