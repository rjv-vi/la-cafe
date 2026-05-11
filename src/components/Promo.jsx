import { useState } from 'react'
import Reveal from './Reveal.jsx'

const ASSET_BASE = import.meta.env.BASE_URL

// Розовый блок с новинкой — прямой аналог "New drink" из reference.
export default function Promo() {
  const [ok, setOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [format, setFormat] = useState('png')

  return (
    <section className="bg-white pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-[28px] bg-rose-300 p-6 sm:rounded-[36px] sm:p-10 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
            {/* Текстовая часть */}
            <div className="relative z-10">
              <p className="text-[11px] uppercase tracking-[0.22em] text-ink-900/60">
                новинка
              </p>

              <div className="mt-3 flex flex-col">
                <span className="display text-[58px] font-extrabold leading-[0.85] text-white sm:text-[88px]">
                  Свежий
                  <span className="ml-2 align-middle font-script text-2xl font-normal text-ink-900/60 sm:text-3xl">
                    хит
                  </span>
                </span>
                <span className="display text-[58px] font-extrabold leading-[0.85] text-ink-900 sm:text-[88px]">
                  десерт
                </span>
              </div>

              <h3 className="mt-6 font-display text-xl font-semibold text-ink-900 sm:text-2xl">
                Тирамису от La&nbsp;Crème
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-800/85 sm:text-base">
                Классический тирамису на сливочном маскарпоне с эспрессо и какао —
                от собственной кондитерской @la_creme_kg.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <span className="font-display text-3xl font-bold text-ink-900 sm:text-4xl">
                  280<span className="ml-1 text-base font-normal text-ink-800/70">с</span>
                </span>
                <span className="text-base text-ink-800/50 line-through">
                  340 с
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                {['маскарпоне', 'эспрессо', 'какао', '−18%'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-white/65 px-3 py-1 text-[12px] font-medium text-ink-900"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-sand-50 transition hover:bg-ink-800 active:scale-[0.98] tap"
                >
                  Все десерты
                </a>
                <a
                  href="tel:+996555811122"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-white/40 px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-white/70 active:scale-[0.98] tap"
                >
                  Заказать стол
                </a>
              </div>
            </div>

            {/* Фото справа */}
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              {!ok && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[40vw] sm:text-[28vw] lg:text-[14vw]"
                >
                  🍰
                </div>
              )}
              {ok && (
                <img
                  src={`${ASSET_BASE}images/promo.${format}`}
                  alt="Тирамису от La Crème"
                  onLoad={() => setLoaded(true)}
                  onError={() => {
                    if (format === 'png') {
                      setFormat('jpg')
                    } else {
                      setOk(false)
                    }
                  }}
                  className={`absolute inset-0 h-full w-full object-contain transition-opacity duration-700 ${
                    loaded ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
