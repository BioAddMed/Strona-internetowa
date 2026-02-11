

"use client"
import { useEffect, useState } from 'react'
import ImageCarousel from '@/components/ImageCarousel'

type Props = {
    folder?: string // relative to public/, e.g. 'projekty/Aeros'
}

export default function Aeros({ folder = 'projekty/Aeros' }: Props) {
    const [images, setImages] = useState<string[]>([])

    useEffect(() => {
        let mounted = true
        fetch(`/api/images?folder=${encodeURIComponent(folder)}`)
            .then((r) => r.json())
            .then((data) => {
                if (!mounted) return
                setImages(data.images || [])
            })
            .catch(() => {
                if (!mounted) return
                setImages([])
            })

        return () => {
            mounted = false
        }
    }, [folder])

    return (
        <div className="flex flex-col space-y-4">
            <h2 className="text-xl font-bold">Aeros — Inteligentny system oddechowy</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
                <span className="font-medium">Koordynator:</span> Mateusz Witkowski
            </p>

            <div className="grid">
                {images.length > 0 ? (
                    <div className="p-4">
                        <ImageCarousel images={images} />
                    </div>
                ) : (
                    <img
                        src="/projekty/Aeros/placeholder.jpg"
                        alt="Aeros placeholder"
                        className="rounded-lg m-10 mx-auto h-80 object-contain"
                    />
                )}

                <div className="prose max-w-none mt-4 text-slate-700 dark:text-slate-300">
                    <p>
                        Projekt Inteligentnego Systemu Monitorowania i Korekcji Oddychania ma na celu stworzenie
                        nowoczesnego urządzenia analizującego wzorce oddechowe w czasie rzeczywistym, wspomagającego
                        profilaktykę chorób serca, astmy i napadów paniki.
                    </p>

                    <p>
                        System wykorzystuje zaawansowane czujniki biomedyczne (przepływu powietrza, ciśnienia, CO₂,
                        SpO₂, EKG) oraz algorytmy sztucznej inteligencji do precyzyjnej analizy i interpretacji danych.
                        Dzięki funkcji biofeedbacku użytkownik otrzymuje natychmiastowe wskazówki dotyczące korekcji
                        oddechu.
                    </p>

                    <p>
                        Projekt realizowany jest w dwóch etapach: fazie stacjonarnej — testującej i walidującej
                        algorytmy — oraz fazie mobilnej, która zapewni wygodne monitorowanie w codziennym życiu.
                    </p>

                    <p>
                        Urządzenie ma potencjał wspierać terapię astmy, poprawiać wydolność oddechową i redukować stres,
                        stając się praktycznym narzędziem dla medycyny i zastosowań sportowych.
                    </p>
                </div>
            </div>
        </div>
    )
}
