# Technical Architecture: Content-Layout Separation

## Design Principles

This refactoring implements a **clear separation of concerns** between content (data) and presentation (UI), following industry best practices for maintainable web applications.

### Core Principles

1. **Single Source of Truth**: All editable content lives in `app/context/data.ts`
2. **Type Safety First**: TypeScript interfaces ensure data consistency
3. **Component Reusability**: Components accept data as props, making them reusable
4. **Maintainability**: Content changes never require component modifications

## Architecture Layers

```
┌─────────────────────────────────────────────┐
│          Content Layer (data.ts)            │
│  - TypeScript Interfaces                    │
│  - Exported Constants                       │
│  - All Editable Content                     │
└─────────────────┬───────────────────────────┘
                  │ imports
                  ↓
┌─────────────────────────────────────────────┐
│      Presentation Layer (Components)        │
│  - Layout & Styling                         │
│  - UI Logic                                 │
│  - Dynamic Rendering                        │
└─────────────────────────────────────────────┘
```

## Key Design Decisions

### 1. Centralized Data File

**Decision**: Use a single `data.ts` file for all content

**Rationale**:
- Single point of access for content managers
- Easier to understand and navigate
- Simpler than multiple data files
- Works well for small to medium-sized websites

**Trade-offs**:
- File may become large as content grows
- All content loads at once (acceptable for static sites)

**Future Alternative**: Split into multiple files by domain (e.g., `projects.ts`, `team.ts`) if needed

### 2. TypeScript Interfaces

**Decision**: Define interfaces for all content types

**Benefits**:
- Compile-time type checking
- IDE autocomplete and IntelliSense
- Self-documenting code
- Prevents runtime errors from malformed data

**Example**:
```typescript
export interface Member {
  name: string
  role: string
  imageUrl?: string
}
```

### 3. Generic ProjectDetail Component

**Decision**: Create a reusable component instead of duplicating code

**Benefits**:
- DRY (Don't Repeat Yourself) principle
- Consistent UI across all project pages
- Single point of maintenance
- Supports extensibility via `children` prop

**Implementation**:
```typescript
<ProjectDetail project={project}>
  {/* Custom additional content */}
</ProjectDetail>
```

### 4. Array-Based Content Collections

**Decision**: Use arrays for lists of similar items

**Benefits**:
- Easy to add/remove items
- Natural fit for `.map()` rendering
- Straightforward for non-developers

**Example**:
```typescript
export const TEAM: Member[] = [
  { name: 'Filip Fedoniuk', role: 'Zarząd' },
  { name: 'Gabriel Pankowski', role: 'Zarząd' },
  // Easy to add more...
]
```

## Component Patterns

### Pattern 1: Direct Import and Use
```typescript
import { HERO } from '@/app/context/data'

export default function Hero() {
  return <h1>{HERO.title}</h1>
}
```

### Pattern 2: Filter and Find
```typescript
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Franek2() {
  const project = PROJECT_DETAILS.find(p => p.id === 'franek2')
  return <ProjectDetail project={project} />
}
```

### Pattern 3: Map and Iterate
```typescript
import { TEAM } from '@/app/context/data'

export default function Team() {
  return (
    <div>
      {TEAM.map(member => (
        <MemberCard key={member.name} {...member} />
      ))}
    </div>
  )
}
```

## Data Structure Design

### Flat vs Nested Structures

**Choice**: Use flat structures for simplicity

**Example**: Instead of deeply nested objects:
```typescript
// ❌ Overly nested - harder to edit
export const SITE_CONTENT = {
  sections: {
    hero: {
      content: {
        heading: { text: "..." }
      }
    }
  }
}

// ✅ Flat - easier to find and edit
export const HERO: HeroContent = {
  title: "...",
  subtitle: "..."
}
```

### Optional Fields

Use TypeScript's optional properties (`?`) for fields that may not always be present:
```typescript
export interface Member {
  name: string
  role: string
  imageUrl?: string  // Optional - not all members have images
}
```

## Scalability Considerations

### Current Scale (Small-Medium Site)
- ✅ Single data.ts file
- ✅ Direct imports
- ✅ Static data

### Future Growth (Large Site)
Consider these enhancements:

1. **Split Data Files**:
   ```
   app/context/
   ├── data/
   │   ├── index.ts      (re-exports)
   │   ├── hero.ts
   │   ├── projects.ts
   │   ├── team.ts
   │   └── sponsors.ts
   ```

2. **CMS Integration**:
   - Connect to headless CMS (Contentful, Sanity, Strapi)
   - Keep interfaces, fetch data at build time
   - Content managers use GUI instead of editing files

3. **Database Backend**:
   - Move to database for very dynamic content
   - Keep current structure as API contract
   - Add admin panel for content editing

## Migration Path

The current architecture naturally evolves:

```
Current: data.ts → Components
         ↓
Step 1:  Split data files
         data/*.ts → Components
         ↓
Step 2:  Add CMS
         CMS API → data.ts → Components
         ↓
Step 3:  Full Backend
         Database → API → Components
```

Each step preserves the component interface - components don't need to change!

## Best Practices

### For Content Updates

1. **Always test after changes**: Run `npm run build` to catch errors
2. **Use consistent formatting**: Keep indentation and structure clean
3. **Don't delete properties**: Mark as empty string (`""`) if not used
4. **Follow existing patterns**: Copy existing entries as templates

### For Code Maintenance

1. **Update interfaces first**: When adding new fields, add to interface
2. **Use TypeScript strictly**: Don't use `any` types
3. **Keep components pure**: No hardcoded strings
4. **Document complex structures**: Add comments for clarity

### For Future Development

1. **Extend, don't modify**: Add new fields rather than changing existing ones
2. **Version control**: Use git to track content changes
3. **Validate data**: Consider adding runtime validation (e.g., Zod)
4. **Test coverage**: Add tests for critical data transformations

## Performance Considerations

### Current Implementation
- ✅ Static data loaded at build time
- ✅ No runtime overhead
- ✅ Excellent for SEO (static rendering)
- ✅ Fast page loads

### Future Optimizations
If the data grows very large:
- Code splitting: Load data on-demand
- Lazy loading: Import data only when needed
- Caching: Add caching layer for frequently accessed data

## Security

### Current State
- ✅ No user input in data file
- ✅ Type checking prevents injection
- ✅ Static content = minimal attack surface

### Considerations
- Don't expose sensitive data in data.ts (passwords, API keys, etc.)
- Validate user-submitted content before adding to data file
- Use environment variables for secrets

## Conclusion

This architecture provides:
- **Simplicity**: Easy to understand and maintain
- **Flexibility**: Can evolve as needs grow
- **Type Safety**: Prevents errors before runtime
- **Scalability**: Natural migration path to CMS or database
- **Maintainability**: Clear separation of concerns

The design balances immediate usability with long-term extensibility, making it suitable for both current needs and future growth.
