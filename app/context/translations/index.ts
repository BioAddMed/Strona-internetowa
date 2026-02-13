import { commonTranslations } from './common'
import { homeTranslations } from './home'
import { projectsTranslations } from './projects'
import { departmentsTranslations } from './departments'
import { managementTranslations } from './management'
import { contactTranslations } from './contact'
import { partnersTranslations } from './partners'
import { dataTranslations } from './data'

// Merge all translations
export const translations = {
  pl: {
    ...commonTranslations.pl,
    ...homeTranslations.pl,
    ...projectsTranslations.pl,
    ...departmentsTranslations.pl,
    ...managementTranslations.pl,
    ...contactTranslations.pl,
    ...partnersTranslations.pl,
    data: dataTranslations.pl
  },
  en: {
    ...commonTranslations.en,
    ...homeTranslations.en,
    ...projectsTranslations.en,
    ...departmentsTranslations.en,
    ...managementTranslations.en,
    ...contactTranslations.en,
    ...partnersTranslations.en,
    data: dataTranslations.en
  }
}

// Export individual translation modules for direct use
export {
  commonTranslations,
  homeTranslations,
  projectsTranslations,
  departmentsTranslations,
  managementTranslations,
  contactTranslations,
  partnersTranslations,
  dataTranslations
}

// Type definitions
export type Language = 'pl' | 'en'
export type TranslationKey = keyof typeof translations['pl']
