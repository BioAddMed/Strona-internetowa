"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { getProjectDetails } from '@/app/context/data'
import { useLanguage } from '@/app/context/LanguageContext'

export default function Kampus3D() {
  const { language } = useLanguage()
  const project = getProjectDetails(language).find(p => p.id === 'kampus3d')
  if (!project) return null
  return <ProjectDetail project={project} />
}
