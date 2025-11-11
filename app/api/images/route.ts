import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET(req: Request) {
  try {
    const url = new URL(req.url)
    const folder = url.searchParams.get('folder') || 'projekty/Edugut'
    const publicDir = path.join(process.cwd(), 'public')
    const folderPath = path.join(publicDir, folder)

    const files = fs.existsSync(folderPath) ? fs.readdirSync(folderPath) : []
    const images = files.filter((f) => /\.(jpe?g|png|webp|gif|avif)$/i.test(f)).sort().map((f) => `/${folder}/${f}`)

    return NextResponse.json({ images })
  } catch (e) {
    return NextResponse.json({ images: [] })
  }
}
