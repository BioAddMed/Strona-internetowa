"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

export default function Franek() {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        let mounted = true
        fetch('/api/images?folder=projekty/Franek')
            .then(r => r.json())
            .then(data => { if (mounted) setImages(data.images || []) })
            .catch(() => { if (mounted) setImages([]) })
        return () => { mounted = false }
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Franek</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium">Koordynator:</span> Jakub Gruszka
            </p>
            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img src="https://placehold.co/200x200" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                )}
                <p>
                    
                </p>
            </div>
        </div>
    );
}
