import { useState, useEffect } from 'react'

export default function Carousel({ images = [], alt = '' }) {
    const [idx, setIdx] = useState(0)
    const [loadedImages, setLoadedImages] = useState(new Set([0]))
    const total = images.length

    useEffect(() => {
        const toPreload = [(idx + 1) % total, (idx - 1 + total) % total]
        toPreload.forEach(i => {
            if (!loadedImages.has(i)) {
                const img = new Image()
                img.src = images[i]
                setLoadedImages(prev => new Set([...prev, i]))
            }
        })
    }, [idx, total, images, loadedImages])

    if (total === 0) return null

    const prev = () => setIdx((idx - 1 + total) % total)
    const next = () => setIdx((idx + 1) % total)

    return (
        <div className="carousel">
            <div className="carousel-image">
                <img 
                    src={images[idx]} 
                    alt={alt}
                    width="600"
                    height="400"
                    decoding="async"
                />
            </div>
            <div className="carousel-controls">
                <button className="carousel-btn prev" onClick={prev} aria-label="Föregående">‹</button>
                <span className="carousel-status">{idx + 1} / {total}</span>
                <button className="carousel-btn next" onClick={next} aria-label="Nästa">›</button>
            </div>
            <div className="carousel-thumbs">
                {images.map((src, i) => (
                    <button
                        key={i}
                        className={`thumb ${i === idx ? 'active' : ''}`}
                        onClick={() => setIdx(i)}
                        aria-label={`Bild ${i + 1}`}
                    >
                        <img 
                            src={src} 
                            alt={`${alt} ${i + 1}`}
                            width="80"
                            height="60"
                            loading="lazy"
                            decoding="async"
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}
