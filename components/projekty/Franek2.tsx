"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

export default function Franek2() {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        let mounted = true
        fetch('/api/images?folder=projekty/Franek20')
            .then(r => r.json())
            .then(data => { if (mounted) setImages(data.images || []) })
            .catch(() => { if (mounted) setImages([]) })
        return () => { mounted = false }
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Franek 2.0</h2>
            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img src="https://placehold.co/200x200" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                )}
                <p>
                    Franek 2.0 to projekt, który zakłada rozbudowę istniejącego modelu anatomicznego czaszki o interaktywne elementy elektroniczne. Aktualnie system obejmuje oczy wyposażone w kamerę, które wykorzystują techniki uczenia maszynowego do wykrywania oraz śledzenia twarzy osób w polu widzenia. Projekt opiera się na wykorzystaniu Raspberry Pi do przetwarzania obrazu oraz integracji nowoczesnych technologii informatycznych z modelami anatomicznymi.
                </p>
            </div>
        </div>
    );
}
