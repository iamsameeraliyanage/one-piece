'use client'

import { useEffect, useState } from 'react'
import OnePieceLogo from './OnePieceLogo'

const LINKS = [
  ['Crew', '#crew'],
  ['Abilities', '#abilities'],
  ['World', '#world'],
] as const

export default function NavBar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open
          ? 'bg-ink/90 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-black/55 to-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 sm:px-8 sm:py-3.5">
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
          <OnePieceLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="font-condensed text-sm tracking-wide-caps text-fog uppercase transition-colors hover:text-gold"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#crew"
            className="hidden rounded-full border border-gold/70 px-4 py-1.5 font-condensed text-xs tracking-wide-caps text-gold uppercase transition-colors hover:bg-gold hover:text-ink sm:block"
          >
            Meet the Crew
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
          >
            <span
              className="h-[2px] w-5 bg-bone transition-transform"
              style={{ transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="h-[2px] w-5 bg-bone transition-opacity"
              style={{ opacity: open ? 0 : 1 }}
            />
            <span
              className="h-[2px] w-5 bg-bone transition-transform"
              style={{ transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>
        </div>
      </div>

      {/* mobile sheet */}
      <div
        className="grid overflow-hidden border-t border-white/10 bg-ink/95 backdrop-blur-md transition-all duration-300 md:hidden"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 font-condensed text-base tracking-wide-caps text-bone uppercase"
              >
                {label}
              </a>
            ))}
            <a
              href="#crew"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-full border border-gold/70 px-4 py-2 text-center font-condensed text-sm tracking-wide-caps text-gold uppercase"
            >
              Meet the Crew
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
