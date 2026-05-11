import { useEffect, useState } from 'react'
import Logo from './Logo.jsx'

const NAV = [
  { href: '#top', label: 'Главная' },
  { href: '#menu', label: 'Меню' },
  { href: '#visit', label: 'Контакты' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        open ? 'bg-ink-900' : scrolled ? 'bg-sand-100/85 backdrop-blur-md' : ''
      }`}
    >
      <div className="container-x flex h-[60px] items-center justify-between sm:h-[68px]">
        {/* Лого */}
        <a href="#top" className="flex items-center gap-2 tap" onClick={() => setOpen(false)}>
          <Logo size={36} />
          <span className={`font-display text-xl font-semibold tracking-tight transition-colors ${open ? 'text-sand-50' : 'text-ink-900'}`}>
            La&nbsp;Cafe
          </span>
        </a>

        {/* Нав центр */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-ink-800 transition hover:text-coffee-500"
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* Иконки справа */}
        <div className="flex items-center gap-2">
          <a
            href="https://instagram.com/lacafe_kg"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink-700 transition hover:bg-sand-200 hover:text-ink-900 sm:inline-flex tap"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
          <a
            href="tel:+996555811122"
            aria-label="Позвонить"
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition tap ${open ? 'text-sand-50 hover:bg-sand-50/10' : 'text-ink-700 hover:bg-sand-200 hover:text-ink-900'}`}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </a>
          <a
            href="#visit"
            aria-label="Маршрут"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-ink-700 transition hover:bg-sand-200 hover:text-ink-900 sm:inline-flex tap"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </a>
          <button
            type="button"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-full md:hidden tap ${open ? 'text-sand-50 hover:bg-sand-50/10' : 'text-ink-700 hover:bg-sand-200 hover:text-ink-900'}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (<><path d="M6 6l12 12" /><path d="M18 6L6 18" /></>) : (<><path d="M4 7h16" /><path d="M4 13h10" /></>)}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`md:hidden ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <div
          className={`fixed inset-0 z-30 bg-ink-900 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="container-x flex h-full flex-col justify-between pb-12 pt-24">
            <nav className="flex flex-col">
              {NAV.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-sand-50/10 py-6 font-display text-3xl font-semibold tracking-tight text-sand-50"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:+996555811122"
              className="mt-6 flex items-center justify-between rounded-2xl bg-coffee-500 px-5 py-4 text-sand-50"
            >
              <span className="text-[11px] uppercase tracking-[0.18em] opacity-70">Позвонить</span>
              <span className="font-display text-xl">0555 81 11 22</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
