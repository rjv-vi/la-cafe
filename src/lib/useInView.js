import { useEffect, useRef, useState } from 'react'

// Один раз отмечает элемент как видимый, когда он появляется в viewport.
// Используется для тихого fade-up без библиотек анимаций.
export default function useInView(options) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    if (!ref.current || shown) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05, ...options },
    )
    io.observe(ref.current)
    return () => io.disconnect()
  }, [shown])

  return [ref, shown]
}
