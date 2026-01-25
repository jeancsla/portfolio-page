
# Sky Portfolio

A modern, intelligent, glassmorphic portfolio website.

## Features
- **Time-based Sky Gradient**: Background changes dynamically based on the user's local hour.
- **Sun/Moon Icon**: Header element tracks time of day horizontally.
- **Glassmorphism**: Elegant blur effects and translucent borders.
- **i18n Support**: Ready for English and Portuguese.
- **Convention-based Architecture**: Content is separated from logic using a data-driven approach with `data-*` attributes.

## Content Management
Add new projects or experiences in `constants.ts`. The UI will automatically render them as glassmorphic cards.

### Adding a Project
```typescript
{
  id: 'unique-id',
  type: 'project',
  titleKey: 'Project Title',
  descriptionKey: 'Description here...',
  date: 'YYYY-MM-DD',
  github: 'owner/repo',
  tags: ['react', 'web']
}
```

## Deployment
1. Build the project.
2. Push to GitHub.
3. Enable GitHub Pages on the repository settings pointing to the `docs` or `root` folder.

## AI Governance
Refer to `agent.md` for rules governing AI contributions and code maintenance.
