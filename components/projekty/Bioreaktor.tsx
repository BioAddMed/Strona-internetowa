"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

export default function Bioreaktor() {
    const [images, setImages] = useState<string[]>([])
    useEffect(() => {
        let mounted = true
        fetch('/api/images?folder=projekty/Bioreaktor')
            .then(r => r.json())
            .then(data => { if (mounted) setImages(data.images || []) })
            .catch(() => { if (mounted) setImages([]) })
        return () => { mounted = false }
    }, [])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold flex-1">Bioreaktor</h2>
            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img src="/projekty/Bioreaktor/idk" alt="Placeholder" className="rounded-lg m-10 mx-auto" />
                )}
                <p>
                „Bioreaktor” to projekt współrealizowany z kołem naukowym z Uniwersytetu Przyrodniczego we
Wrocławiu „Biosus”.
Nasze koło zajmuje się w nim projektowaniem za pomocą programu Inventor/ Autocad/
Fusion360 i drukowaniem elementów wchodzących w skład statywu, mechanizmu działania i
zabezpieczeń do urządzenia, które umożliwić ma nieustanny przepływ płynów i prowadzenie
procesów mikrobiologicznych, enzymatycznych i hodowli komórek.
                </p>
            </div>
        </div>
    );
}
