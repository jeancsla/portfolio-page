# Agent Governance: Sky Portfolio

## Core Objective
To maintain and evolve a high-performance, visually striking, static-intelligent portfolio website that functions flawlessly on GitHub Pages without a complex build process.

## 1. Architecture & Convention
- **React Environment**: The site uses React but must remain deployable as a single-entry static site.
- **Convention-based Content**: Portfolio items are defined in `constants.ts`. Every entry MUST have a unique `id`, `type`, `titleKey`, `descriptionKey`, and `date`.
- **Flexible Project Pages**: Projects support a `fullContent` array of `ContentBlock` objects. Supported types: `heading`, `paragraph`, `image`, `list`, `link`.
- **Routing**: Simple hash-based routing is used (`#project/id`). Avoid introducing external routing libraries unless explicitly requested.

## 2. Visual Style (Design System)
- **Glassmorphism**: Use the `.glass` class for containers. It defines `backdrop-filter: blur(12px)`, translucent backgrounds, and thin borders.
- **Sky Gradient Logic**: Background colors MUST NOT be hardcoded in CSS. They are calculated dynamically in `services/theme.ts` based on the user's local hour.
- **Theme Adaptation**: Use the `isDark` flag from `useSkyTheme` to toggle text colors (White for Dark/Night/Sunset, Slate/Black for Day/Dawn) to maintain accessibility.
- **Animations**: Use Tailwind transitions and the `animate-fade-in` utility for smooth page transitions. Keep motion subtle (max 10px translate).

## 3. Content Management Rules
- **Internationalization (i18n)**: Never hardcode user-facing strings in JSX. Use the `t()` helper from `useI18n.ts`. All keys must exist in `TRANSLATIONS` inside `constants.ts`.
- **GitHub Integration**:
  - `data-github` attributes must be preserved for SEO/Agent scraping.
  - `showReadme` flag determines if a GitHub README simulation is rendered in the detail view.
- **Rich Content**: When adding a project, use the `fullContent` structure in `constants.ts` to provide a deep dive into architecture and features.

## 4. Technical Constraints
- **Performance**: Maintain Lighthouse scores > 90. Avoid large external dependencies.
- **Static Integrity**: Ensure the app functions correctly when hosted as a static site (handle hash routes correctly).
- **Internal File**: This `agent.md` file is for developer/agent guidance only and should not be linked or referenced in the public-facing UI.

## 5. Forbidden Actions
- **DO NOT** use heavy UI libraries (e.g., Bootstrap, Material UI).
- **DO NOT** hardcode colors that conflict with the dynamic sky system.
- **DO NOT** bypass the `t()` helper for any text that needs translation.
- **DO NOT** create a separate `src/` directory; keep the flat root structure.

## 6. How to Update Content
- **New Project**: Add an object to `PORTFOLIO_ENTRIES` in `constants.ts`. Ensure `fullContent` contains descriptive blocks.
- **New Language**: Update the `Language` type in `types.ts` and add translations to `TRANSLATIONS` in `constants.ts`.
- **UI Changes**: If modifying cards or headers, ensure they use the `glass` class and look good across all four sky phases (Dawn, Day, Sunset, Night).