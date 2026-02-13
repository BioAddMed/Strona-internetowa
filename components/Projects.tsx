"use client"
// src/components/Projects.tsx
import ProjectCard from './ProjectCard'
import { getProjects } from '@/app/context/data'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Projects({ limit }: { limit?: number }) {
  const { language } = useLanguage()
  const PROJECTS = getProjects(language)
  const list = typeof limit === 'number' ? PROJECTS.slice(0, limit) : PROJECTS
  
  return (
    <div id="projects" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((project, index) => (
        <ProjectCard key={project.title} index={index} {...project} />
      ))}
    </div>
  )
}
