import { useState } from 'react'

const ASSET_BASE = import.meta.env.BASE_URL

// Hero как в Drinko: LA / продукт / CAFE всегда в одну горизонтальную строку.
export default function Hero() {
  const [ok, setOk] = useState(true)
  const [loaded, setLoaded] = useState(false)
  const [format, setFormat] = useState('png')

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-sand-100"
    >
      {/* мягкий световой блик в углу */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-sand-50 blur-3xl opacity-70"
      />

      <div className="container-x relative pt-[60px] sm:pt-[68px]">
        <div className="flex items-center justify-between gap-1 pb-12 pt-12 sm:gap-3 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-24">
          {/* Левое слово */}
          <h1 className="display shrink-0 text-[13vw] font-extrabold leading-[0.85] sm:text-[14vw] lg:text-[clamp(80px,10vw,180px)]">
            LA
          </h1>

          {/* Продукт по центру */}
          <div className="flex aspect-square w-[30vw] shrink-0 items-center justify-center sm:w-[28vw] lg:w-[22vw] lg:max-w-[360px]">
            <div className="relative h-full w-full">
              {!ok && (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center text-[26vw] sm:text-[24vw] lg:text-[14vw]"
                >
                  ☕
                </div>
              )}
              {/* реальное фото */}
              {ok && (
                <img
                  src={`${ASSET_BASE}images/hero.${format}`}
                  alt="Кофе La Cafe"
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

          {/* Правое слово */}
          <h1 className="display shrink-0 text-[13vw] font-extrabold leading-[0.85] sm:text-[14vw] lg:text-[clamp(80px,10vw,180px)]">
            CAFE
          </h1>
        </div>

        {/* Подвал hero — короткое описание, без перегруза */}
        <div className="flex flex-col items-center gap-6 pb-16 sm:flex-row sm:justify-between sm:pb-24">
          <p className="max-w-md text-center text-base text-ink-700 sm:text-left">
            Кофейня №1 по завтракам в Бишкеке. Открыто каждый день с 08:00 до 02:00.
          </p>

          <a
            href="#menu"
            className="group inline-flex items-center gap-3 rounded-full bg-ink-900 px-6 py-4 text-sm font-medium text-sand-50 transition hover:bg-ink-800 active:scale-[0.98] tap"
          >
            Посмотреть меню
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
