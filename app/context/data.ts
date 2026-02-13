import { translations, type Language } from './translations'

// ====================================
// TypeScript Interfaces for Type Safety
// ====================================

export interface NewsItem {
  title: string
  excerpt: string
}

export interface Project {
  title: string
  tag: string
  excerpt: string
  coordinator: string
  status: 'ongoing' | 'finished'
}

export interface Department {
  name: string
  desc: string
  coordinator: string
}

export interface Sponsor {
  name: string
  description: string
  website: string[]
  email: string | null
}

export interface Member {
  name: string
  role: string
  imageUrl?: string
}

export interface Stat {
  value: string
  label: string
  helper: string
}

export interface HeroContent {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta: {
    text: string
    href: string
  }
  heroImage: {
    src: string
    alt: string
  }
  stats: {
    members: string
    projects: string
    partnerships: string
  }
}

export interface CTAContent {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton: {
    text: string
    href: string
  }
}

export interface ProjectDetail {
  id: string
  title: string
  coordinator: string
  description: string
  imageFolder: string
}

// ====================================
// Content Data - Language-aware getters
// ====================================

/**
 * Get Hero content for the specified language
 */
export const getHero = (lang: Language = 'pl'): HeroContent => {
  const t = translations[lang]
  return {
    title: t.hero.title,
    subtitle: t.hero.subtitle,
    primaryCta: {
      text: t.hero.primaryCta,
      href: '/projects'
    },
    secondaryCta: {
      text: t.hero.secondaryCta,
      href: '/contact'
    },
    heroImage: {
      src: '/images/team/bioaddmed.jpg',
      alt: t.hero.imageAlt
    },
    stats: {
      members: t.hero.stats.members,
      projects: t.hero.stats.projects,
      partnerships: t.hero.stats.partnerships
    }
  }
}

/**
 * Get CTA content for the specified language
 */
export const getCTA = (lang: Language = 'pl'): CTAContent => {
  const t = translations[lang]
  return {
    title: t.cta.title,
    description: t.cta.description,
    primaryButton: {
      text: t.cta.primaryButton,
      href: '#contact'
    },
    secondaryButton: {
      text: t.cta.secondaryButton,
      href: '#'
    }
  }
}

/**
 * Get Stats for the specified language
 */
export const getStats = (lang: Language = 'pl'): Stat[] => {
  const t = translations[lang]
  return [
    { value: '50', label: t.stats.members, helper: t.stats.membersHelper },
    { value: '7', label: t.stats.activeProjects, helper: t.stats.projectsHelper },
    { value: '12', label: t.stats.workshops, helper: t.stats.workshopsHelper },
    { value: '8', label: t.stats.partners, helper: t.stats.partnersHelper }
  ]
}

/**
 * Get Management members for the specified language
 */
export const getManagement = (lang: Language = 'pl'): Member[] => {
  return translations[lang].data.management
}

/**
 * Get Coordinators for the specified language
 */
export const getCoordinators = (lang: Language = 'pl'): Member[] => {
  return translations[lang].data.coordinators
}

/**
 * Get Team members for the specified language
 */
export const getTeam = (lang: Language = 'pl'): Member[] => {
  return translations[lang].data.team
}

/**
 * Get Projects for the specified language
 */
export const getProjects = (lang: Language = 'pl'): Project[] => {
  return translations[lang].data.projects
}

/**
 * Get Departments for the specified language
 */
export const getDepartments = (lang: Language = 'pl'): Department[] => {
  return translations[lang].data.departments
}

/**
 * Get Sponsors for the specified language
 */
export const getSponsors = (lang: Language = 'pl'): Sponsor[] => {
  return translations[lang].data.sponsors
}

/**
 * Get Project Details for the specified language
 */
export const getProjectDetails = (lang: Language = 'pl'): ProjectDetail[] => {
  return translations[lang].data.projectDetails
}

// ====================================
// Default exports for backwards compatibility
// ====================================

export const HERO = getHero('pl')
export const CTA = getCTA('pl')
export const STATS = getStats('pl')
export const MANAGEMENT = getManagement('pl')
export const COORDINATORS = getCoordinators('pl')
export const TEAM = getTeam('pl')
export const PROJECTS = getProjects('pl')
export const DEPARTMENTS = getDepartments('pl')
export const SPONSORS = getSponsors('pl')
export const PROJECT_DETAILS = getProjectDetails('pl')