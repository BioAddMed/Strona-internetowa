"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Bioreaktor() {
  const project = PROJECT_DETAILS.find(p => p.id === 'bioreaktor')
  if (!project) return null
  return <ProjectDetail project={project} />
}
