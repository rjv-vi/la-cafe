import { useState } from 'react'

// Простое фото блюда. На белом фоне, без декораций — как в reference.
// При отсутствии файла показывает большой эмодзи и название.
export default function DishImage({ slug, name, emoji = '🍽️', className = '' }) {
  const [ok, setOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [format, setFormat] = useState('png')

  return (
    <div className={`relative overflow-hidden bg-white ${className}`}>
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
      >
        <span className="text-6xl opacity-30 sm:text-7xl">{emoji}</span>
      </div>
      {ok && (
        <img
          src={`/images/menu/${slug}.${format}`}
          alt={name}
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (format === 'png') {
              setFormat('jpg')
            } else {
              setOk(false)
            }
          }}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
            loaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  )
}
