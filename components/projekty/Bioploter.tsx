"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Bioploter() {
  const project = PROJECT_DETAILS.find(p => p.id === 'bioploter')
  if (!project) return null
  return <ProjectDetail project={project} />
}
