# Content Management Guide

## Overview

This project now follows a clean separation of content and layout. All editable content is centralized in the `app/context/data.ts` file, allowing non-technical content managers to update website content without touching component code.

## Architecture

### Content Layer (`app/context/data.ts`)
- **TypeScript interfaces** define the structure of all content types
- **Data exports** contain all editable content (text, images, links, etc.)
- **Type safety** ensures data consistency across the application

### Presentation Layer (Components)
- Components handle **only** layout, styling, and UI logic
- Components import data from `data.ts` and render it dynamically
- No hardcoded content in components

## Content Types

### 1. Hero Section (`HeroContent`)
Main landing page hero section with title, subtitle, CTAs, and stats.

**Example:**
```typescript
export const HERO: HeroContent = {
  title: 'KN BioAddMed',
  subtitle: 'Łączymy inżynierię z medycyną...',
  primaryCta: {
    text: 'Zobacz projekty',
    href: '/projects'
  },
  secondaryCta: {
    text: 'Kontakt',
    href: '/contact'
  },
  heroImage: {
    src: '/images/bioaddmed_team.jpg',
    alt: 'Zespół KN BioAddMed'
  },
  stats: {
    members: '49',
    projects: '9',
    partnerships: '8'
  }
}
```

### 2. Management & Team (`Member[]`)
Management board and team member information.

**Example:**
```typescript
export const MANAGEMENT: Member[] = [
  { 
    name: 'Kamila Saferna', 
    role: 'Przewodniczący', 
    imageUrl: '/images/management/kamila_saferna.jpeg' 
  },
  // ... more members
]
```

### 3. Statistics (`Stat[]`)
Key statistics displayed on the website.

**Example:**
```typescript
export const STATS: Stat[] = [
  { 
    value: '50', 
    label: 'Członków koła', 
    helper: 'Aktywni w kilku działach' 
  },
  // ... more stats
]
```

### 4. Projects (`Project[]`)
Project cards for the projects listing page.

**Example:**
```typescript
export const PROJECTS: Project[] = [
  { 
    title: 'Franek 2.0', 
    tag: 'AI / Hardware', 
    excerpt: 'Interaktywny model czaszki...', 
    coordinator: 'Jakub Gruszka', 
    status: 'ongoing' 
  },
  // ... more projects
]
```

### 5. Project Details (`ProjectDetail[]`)
Detailed information for individual project pages.

**Example:**
```typescript
export const PROJECT_DETAILS: ProjectDetail[] = [
  {
    id: 'franek2',
    title: 'Franek 2.0',
    coordinator: 'Jakub Gruszka',
    description: 'Franek 2.0 to projekt...',
    imageFolder: 'projekty/Franek20'
  },
  // ... more project details
]
```

### 6. Departments (`Department[]`)
Department information with coordinators.

**Example:**
```typescript
export const DEPARTMENTS: Department[] = [
  { 
    name: 'Dział Promocji', 
    desc: 'Komunikacja, social media...', 
    coordinator: 'Mateusz Witkowski' 
  },
  // ... more departments
]
```

### 7. Sponsors (`Sponsor[]`)
Partner and sponsor information.

**Example:**
```typescript
export const SPONSORS: Sponsor[] = [
  {
    name: 'ChitoMed',
    description: 'Produkty medyczne na bazie chitozanu...',
    website: ['https://cyberbone.eu/'],
    email: 'office@chitomed.com'
  },
  // ... more sponsors
]
```

### 8. CTA Section (`CTAContent`)
Call-to-action section content.

**Example:**
```typescript
export const CTA: CTAContent = {
  title: 'Chcesz dołączyć do KN BioAddMed?',
  description: 'Napisz do nas lub przyjdź...',
  primaryButton: {
    text: 'Napisz do nas',
    href: '#contact'
  },
  secondaryButton: {
    text: 'Kalendarz spotkań',
    href: '#'
  }
}
```

## How to Update Content

### For Non-Technical Content Managers

1. **Open the data file**: Navigate to `app/context/data.ts`
2. **Find the content section** you want to edit (e.g., `HERO`, `PROJECTS`, `TEAM`)
3. **Edit the text** within the quotes, keeping the structure intact
4. **Save the file** - changes will be reflected when the site is rebuilt

### Important Rules

✅ **Do:**
- Edit text within quotes
- Change numbers and values
- Update URLs and image paths
- Add new items to arrays (e.g., new team members)

❌ **Don't:**
- Change property names (e.g., `title`, `coordinator`, `description`)
- Remove commas or brackets
- Edit anything outside the exported constants

### Example: Adding a New Team Member

```typescript
export const TEAM: Member[] = [
  { name: 'Filip Fedoniuk', role: 'Zarząd' },
  { name: 'Gabriel Pankowski', role: 'Zarząd' },
  // Add your new member here:
  { name: 'Jan Kowalski', role: 'Członek' },
]
```

### Example: Updating Hero Stats

```typescript
export const HERO: HeroContent = {
  // ... other properties
  stats: {
    members: '55',    // Changed from '49' to '55'
    projects: '12',   // Changed from '9' to '12'
    partnerships: '10' // Changed from '8' to '10'
  }
}
```

## Component Usage Examples

### Hero Component
```typescript
// components/Hero.tsx
import { HERO } from '@/app/context/data'

export default function Hero() {
  return (
    <div>
      <h1>{HERO.title}</h1>
      <p>{HERO.subtitle}</p>
      <a href={HERO.primaryCta.href}>{HERO.primaryCta.text}</a>
    </div>
  )
}
```

### Project Detail Component
```typescript
// components/projekty/Franek2.tsx
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Franek2() {
  const project = PROJECT_DETAILS.find(p => p.id === 'franek2')
  if (!project) return null
  return <ProjectDetail project={project} />
}
```

## Scalability

### Adding New Projects

1. Add to `PROJECTS` array (for listing page)
2. Add to `PROJECT_DETAILS` array (for detail page)
3. Create a new component in `components/projekty/` that uses `ProjectDetail`

### Adding New Team Members

Simply add a new object to the `TEAM` or `MANAGEMENT` arrays - no code changes needed!

### Adding New Departments

Add to the `DEPARTMENTS` array with the same structure.

## Benefits of This Architecture

1. **Content Manager Friendly**: Non-technical users can edit content safely
2. **Type Safety**: TypeScript prevents data structure mistakes
3. **Single Source of Truth**: All content in one place
4. **Scalability**: Easy to add new content without touching components
5. **Maintainability**: Clear separation makes debugging easier
6. **Reusability**: Components can be reused with different data

## Development Notes

### TypeScript Interfaces

All content types are defined as interfaces at the top of `data.ts`:
- Provides autocomplete in IDEs
- Catches errors at compile time
- Serves as documentation for data structure

### Project Detail Component

The `ProjectDetail` component is a reusable template that:
- Fetches images from the specified folder
- Displays project title and coordinator
- Shows description
- Supports additional custom content via `children` prop

This allows both simple and complex project pages to use the same component.

## Future Enhancements

Potential improvements to this architecture:

1. **CMS Integration**: Connect to a headless CMS (Contentful, Strapi, etc.)
2. **i18n Support**: Add multi-language support
3. **Admin Panel**: Build a simple admin UI for content editing
4. **Content Versioning**: Track content changes over time
5. **Validation**: Add runtime validation for content structure
