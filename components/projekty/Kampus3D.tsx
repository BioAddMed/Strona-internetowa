"use client"
import ProjectDetail from '@/components/ProjectDetail'
import { PROJECT_DETAILS } from '@/app/context/data'

export default function Kampus3D() {
  const project = PROJECT_DETAILS.find(p => p.id === 'kampus3d')
  if (!project) return null
  return <ProjectDetail project={project} />
}
