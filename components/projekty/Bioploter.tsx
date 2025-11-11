"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

export default function Bioploter() {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        let mounted = true
        fetch('/api/images?folder=projekty/Bioploter')
            .then(r => r.json())
            .then(data => { if (mounted) setImages(data.images || []) })
            .catch(() => { if (mounted) setImages([]) })
        return () => { mounted = false }
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Bioploter</h2>
            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img src="https://placehold.co/200x200" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                )}
                <p>
                Celem projektu Bioplaster/druk tkanek jest analizowanie dostępnych biomaterialow,
znalezienie i wdrożenie innowacyjnych aplikacji technologii przyrostowych (w tym
zbudowanie bioplotera) do produkcji funkcjonalnych tkanek t.j. wypełnienia kostne czy
włókna mięśniowe.
Aktualnie we współpracy z KN Rapid Troopers pod opieką Pani Profesor
Ziółkowskiej-Szymczyk oraz Dr. Wallisa analizujemy dostępną literaturę naukową dotyczącą
używanych biomateriałów i urządzeń, poszukując problemów, które obecnie naukowcy
napotykają w drodze do osiągnięcia w/w celu i próbujemy znaleźć ich rozwiązania.
                </p>
            </div>
        </div>
    );
}
