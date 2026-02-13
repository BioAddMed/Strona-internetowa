"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { getProjectDetails } from '@/app/context/data'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Franek() {
  const { language } = useLanguage()
  const project = getProjectDetails(language).find(p => p.id === 'franek')
  if (!project) return null
  return <ProjectDetail project={project} />
}
