# KN BioAddMed Website

Official website for the BioAddMed Scientific Club at Wrocław University of Science and Technology.

---

## 📝 How to Change Website Content (For Non-Technical Users)

This guide will help you update the website content without any programming knowledge. All content is stored in easy-to-edit files.

### 🌍 Understanding the Bilingual System

The website supports **Polish (PL)** and **English (EN)**. All content exists in both languages.

---

## 📂 Where to Find Content Files

All content is organized in the following folder:

```
app/context/translations/
```

### Content Files Structure:

| File                 | What It Contains                                            |
| -------------------- | ----------------------------------------------------------- |
| **`data.ts`**        | Main content: projects, team members, sponsors, departments |
| **`home.ts`**        | Homepage text (hero section, stats, CTA)                    |
| **`projects.ts`**    | Projects page labels                                        |
| **`departments.ts`** | Departments page labels                                     |
| **`management.ts`**  | Management page labels                                      |
| **`contact.ts`**     | Contact page text                                           |
| **`partners.ts`**    | Partners/sponsors page text                                 |
| **`common.ts`**      | Navigation menu and footer                                  |

---

## 🔧 How to Edit Content

### Step 1: Open the File

1. Navigate to `app/context/translations/`
2. Choose the file you want to edit (see table above)
3. Open it with any text editor (VS Code, Notepad++, or even Notepad)

### Step 2: Find the Text

Content is organized like this:

```typescript
export const homeTranslations = {
  pl: {
    // Polish text here
    hero: {
      title: "KN BioAddMed",
      subtitle: "Łączymy inżynierię z medycyną...",
    },
  },
  en: {
    // English text here
    hero: {
      title: "KN BioAddMed",
      subtitle: "Connecting engineering with medicine...",
    },
  },
};
```

### Step 3: Edit the Text

**Important Rules:**

- Text must stay between **single quotes** `'...'` or **double quotes** `"..."`
- Don't change the words **before the colon** (`:`) - these are keys
- Only change the text **after the colon** (`:`)
- Keep the **comma** (`,`) at the end of each line

**Example - Correct:**

```typescript
title: 'KN BioAddMed',  // ✅ Good
```

**Example - Wrong:**

```typescript
title: KN BioAddMed,  // ❌ Missing quotes
title 'New Title',    // ❌ Missing colon
title: 'New Title'    // ❌ Missing comma (if not last item)
```

---

## 📋 Common Content Updates

### 1. Update Projects List

**File:** `app/context/translations/data.ts`

**Find the `projects` section:**

```typescript
projects: [
  {
    title: "Franek 2.0",
    tag: "AI / Hardware",
    excerpt: "Interactive skull model...",
    coordinator: "Jakub Gruszka",
    status: "ongoing" as const,
  },
  // ... more projects
];
```

**To add a new project:**

1. Copy an existing project block (everything between `{ }`)
2. Paste it at the end, before the closing `]`
3. Change the details:
   - `title` - Project name
   - `tag` - Category (e.g., 'Hardware', 'Software', 'Medical')
   - `excerpt` - Short description
   - `coordinator` - Person's name
   - `status` - Either `'ongoing'` or `'finished'`

**Remember:** Update BOTH `pl` and `en` sections!

### 2. Update Team Members

**File:** `app/context/translations/data.ts`

**Find the `team` or `management` section:**

```typescript
management: [
  {
    name: "Kamila Saferna",
    role: "Przewodniczący", // Polish role
    imageUrl: "/images/management/kamila_saferna.jpeg",
  },
];
```

**To add/edit members:**

1. Change `name` - Full name
2. Change `role` - Position/title (translate for both PL and EN)
3. Change `imageUrl` - Path to photo (if available)

### 3. Update Sponsors/Partners

**File:** `app/context/translations/data.ts`

**Find the `sponsors` section:**

```typescript
sponsors: [
  {
    name: "ChitoMed",
    description: "Medical chitosan products...",
    website: ["https://cyberbone.eu/"],
    email: "office@chitomed.com",
  },
];
```

**To add/edit sponsors:**

1. `name` - Company name
2. `description` - What they do
3. `website` - Array of website URLs (keep the `['...']` format)
4. `email` - Contact email or `null` if none

### 4. Update Departments

**File:** `app/context/translations/data.ts`

**Find the `departments` section:**

```typescript
departments: [
  {
    name: "Dział Promocji",
    desc: "Communication, social media, collaborations.",
    coordinator: "Mateusz Witkowski",
  },
];
```

### 5. Update Contact Information

**File:** `app/context/translations/contact.ts`

```typescript
contact: {
  title: 'Kontakt',
  subtitle: 'Get in touch...',
  email: 'E-mail',
  address: 'Politechnika Wrocławska...'
}
```

### 6. Update Navigation Menu

**File:** `app/context/translations/common.ts`

```typescript
nav: {
  home: 'Strona główna',
  projects: 'Projekty',
  departments: 'Działy',
  // etc...
}
```

---

## 🖼️ How to Add Images

### Project Images

1. Go to folder: `public/projekty/[ProjectName]/`
2. Create a new folder if it doesn't exist
3. Add your images (`.jpg`, `.png`, `.jpeg`)
4. Images will automatically appear in the carousel

### Team/Management Photos

1. Go to folder: `public/images/management/` or `public/images/team/`
2. Add photo with name: `firstname_lastname.jpg` (lowercase, underscore)
3. Update the `imageUrl` in the data file

---

## ⚠️ Important Tips

1. **Always edit BOTH Polish and English sections** - Keep content synchronized
2. **Save the file after editing** - Use `Ctrl+S` (Windows) or `Cmd+S` (Mac)
3. **Check for typos** - Missing quotes or commas will break the website
4. **Test your changes** - See "Testing Changes" section below
5. **Special characters** - Polish characters (ą, ć, ę, etc.) work fine in quotes

### Common Mistakes to Avoid:

- ❌ Deleting commas at the end of lines
- ❌ Removing quotes around text
- ❌ Forgetting to update both PL and EN sections
- ❌ Changing the structure (keys before colons)

---

## 🧪 Testing Your Changes

After editing content files:

1. **Save all files** you've edited
2. **Refresh your browser** - The website should update automatically
3. **Check both languages** - Toggle between PL/EN using the language switcher
4. **If something breaks:**
   - Check for missing commas or quotes
   - Compare your changes with the original structure
   - Ask for help from a technical team member

---

## 🆘 Need Help?

If you're stuck or something doesn't work:

1. **Check the syntax** - Make sure quotes and commas are correct
2. **Compare with existing entries** - Use them as templates
3. **Contact IT Department Coordinator:** Jakub Gruszka
4. **Email:** bioaddmed@pwr.edu.pl

---

## 👨‍💻 For Developers

### Tech Stack

- Next.js 15 (React framework)
- TypeScript
- Tailwind CSS
- Framer Motion

### Development Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Project Structure

```
app/
  context/
    translations/     # All translatable content
    data.ts          # Content data utilities
components/          # React components
public/             # Static assets (images)
```

### Translation System

- Language-aware getter functions in `app/context/data.ts`
- Separate translation files per page in `app/context/translations/`
- Central export via `app/context/translations/index.ts`

---

## 📄 License

© 2024-2026 KN BioAddMed. All rights reserved.
