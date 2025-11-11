// src/components/NewsGrid.tsx
import SocialCarousel from './SocialCarousel'

export default function NewsGrid({ limit }: { limit?: number }) {
  void limit
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <SocialCarousel source="facebook" />
      <SocialCarousel source="instagram" />
    </div>
  )
}
