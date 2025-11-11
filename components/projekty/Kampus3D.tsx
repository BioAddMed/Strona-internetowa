"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

export default function Kampus3D() {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        let mounted = true
        fetch('/api/images?folder=projekty/Kampus3D')
            .then(r => r.json())
            .then(data => { if (mounted) setImages(data.images || []) })
            .catch(() => { if (mounted) setImages([]) })
        return () => { mounted = false }
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Kampus 3D</h2>
            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img src="https://placehold.co/200x200" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                )}
                <p>
                Kampus3D to projekt, w ramach którego tworzymy trójwymiarową mapę głównego kampusu Politechniki Wrocławskiej przy użyciu technologii druku 3D. Każdy budynek jest odwzorowywany na podstawie zdjęć i map 3D, a następnie drukowany i umieszczany na specjalnie przygotowanej makiecie. Po ukończeniu projektu makieta będzie wykorzystywana jako element promocyjny Koła Naukowego oraz Politechniki Wrocławskiej, prezentując kampus w innowacyjny i nowoczesny sposób.
                </p>
            </div>
        </div>
    );
}
