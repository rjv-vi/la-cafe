import Logo from './Logo.jsx'
import Reveal from './Reveal.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="visit" className="bg-sand-100 pt-16 pb-10 sm:pt-20">
      <div className="container-x">
        <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Контакты + лого */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <Logo size={48} />
              <span className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                La&nbsp;Cafe
              </span>
            </div>
            <h2 className="display mt-8 text-4xl font-bold leading-[0.95] sm:text-5xl">
              Чыңгыз Айтматов
              <br />
              299/4, Бишкек
            </h2>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-700/60">Телефон</p>
                <a
                  href="tel:+996555811122"
                  className="mt-1 block font-display text-2xl font-semibold text-ink-900 hover:text-coffee-500"
                >
                  0555 81 11 22
                </a>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-ink-700/60">Часы работы</p>
                <p className="mt-1 font-display text-2xl font-semibold text-ink-900">
                  08:00 – 02:00
                </p>
                <p className="mt-0.5 text-xs text-ink-700/70">каждый день</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="https://2gis.kg/bishkek/search/Чыңгыз%20Айтматов%20299%2F4"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-sand-50 transition hover:bg-ink-800 active:scale-[0.98] tap"
              >
                Маршрут в 2GIS
              </a>
              <a
                href="https://instagram.com/lacafe_kg"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-900/15 bg-sand-50 px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-sand-200 active:scale-[0.98] tap"
              >
                @lacafe_kg
              </a>
            </div>
          </div>

          {/* Карта */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-3xl border border-ink-900/10 bg-sand-50">
              <iframe
                title="La Cafe на карте"
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.5760%2C42.8520%2C74.6160%2C42.8720&amp;layer=mapnik&amp;marker=42.8620%2C74.5960"
                className="h-[280px] w-full border-0 sm:h-[360px] lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-ink-900/10 pt-6 text-xs text-ink-700/70 sm:flex-row">
          <p>© {year} La Cafe. Все права защищены.</p>
          <p>Сделано с ☕ в Бишкеке</p>
        </div>
      </div>
    </footer>
  )
}
