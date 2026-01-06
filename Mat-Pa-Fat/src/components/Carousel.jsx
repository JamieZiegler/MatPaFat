import { useState } from 'react'

export default function Carousel({ images = [], alt = '' }) {
  const [idx, setIdx] = useState(0)
  const total = images.length

  if (total === 0) return null

  const prev = () => setIdx((idx - 1 + total) % total)
  const next = () => setIdx((idx + 1) % total)

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={images[idx]} alt={alt} />
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
            <img src={src} alt={`${alt} ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  )
}
