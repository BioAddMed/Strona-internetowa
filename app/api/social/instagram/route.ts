import { NextResponse } from 'next/server'

const fallbackPosts = [
  {
    id: 'ig-fallback-1',
    caption: 'Kulisy naszego projektu Edugut — testujemy nowe materiały i formy druku.',
    media_url: 'https://images.unsplash.com/photo-1582719478181-2cf4e1b92792?auto=format&fit=crop&w=1200&q=60',
    permalink: 'https://www.instagram.com/bioaddmed',
    timestamp: new Date().toISOString()
  },
  {
    id: 'ig-fallback-2',
    caption: 'Zespół BioAddMed na warsztatach technologii przyrostowych. Dziękujemy uczestnikom!',
    media_url: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=60',
    permalink: 'https://www.instagram.com/bioaddmed',
    timestamp: new Date(Date.now() - 172800000).toISOString()
  }
]

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!userId || !accessToken) {
    return NextResponse.json({ source: 'instagram', items: fallbackPosts })
  }

  const fields = ['id', 'caption', 'media_url', 'permalink', 'timestamp'].join(',')
  const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}&limit=10`

  try {
    const res = await fetch(url, { next: { revalidate: 300 } })
    if (!res.ok) {
      throw new Error(`Instagram API error: ${res.status} ${res.statusText}`)
    }
    const data = await res.json()
    const items = Array.isArray(data?.data)
      ? data.data
          .map((post: any) => ({
            id: post.id,
            caption: post.caption,
            media_url: post.media_url,
            permalink: post.permalink,
            timestamp: post.timestamp
          }))
          .filter((post: any) => post.media_url)
      : []
    return NextResponse.json({ source: 'instagram', items: items.length ? items : fallbackPosts })
  } catch (error) {
    console.error('Failed to fetch Instagram posts', error)
    return NextResponse.json({ source: 'instagram', items: fallbackPosts })
  }
}


