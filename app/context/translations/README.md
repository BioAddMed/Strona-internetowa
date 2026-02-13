# Translations Structure

This folder contains the translation files for the BioAddMed website, organized by page/section.

## Structure

```
translations/
├── common.ts          # Navigation, footer, and common UI elements
├── home.ts            # Home page (hero, CTA, stats)
├── projects.ts        # Projects page
├── departments.ts     # Departments page
├── management.ts      # Management page
├── contact.ts         # Contact page
├── partners.ts        # Partners/sponsors page
├── data.ts            # Translatable content data
└── index.ts           # Main export file that combines all translations
```

## Usage

### Import all translations

```typescript
import { translations } from "./translations";

// Access translations
const t = translations["pl"]; // or 'en'
console.log(t.nav.home); // 'Strona główna'
```

### Import specific translation modules

```typescript
import { homeTranslations } from "./translations/home";

const t = homeTranslations["pl"];
console.log(t.hero.title); // 'KN BioAddMed'
```

### Using with data functions

The `data.ts` file has been updated to support language-aware functions:

```typescript
import { getProjects, getHero, getStats } from "./data";

// Get data in Polish (default)
const projectsPL = getProjects("pl");

// Get data in English
const projectsEN = getProjects("en");
const heroEN = getHero("en");
const statsEN = getStats("en");
```

## Backwards Compatibility

All existing exports are maintained for backwards compatibility:

- `HERO`, `CTA`, `STATS`, `MANAGEMENT`, `COORDINATORS`, `TEAM`, etc. still work
- They default to Polish ('pl') language
- The original `translations.ts` file now re-exports from the new structure

## Adding New Translations

1. Add your translation to the appropriate file (e.g., `home.ts` for homepage content)
2. Add both `pl` and `en` versions
3. If adding data that should be translatable, add it to `data.ts`
4. The main `index.ts` will automatically include it when you import `translations`

## Supported Languages

- `pl` - Polish (Polski)
- `en` - English

To add more languages, extend each translation file with the new language code.
