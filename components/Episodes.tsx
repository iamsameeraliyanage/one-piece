'use client'

import { useRef } from 'react'
import { EPISODES } from './data'
import Reveal from './Reveal'

const GRADIENTS = [
  'linear-gradient(135deg,#1b2a4a,#3a1f3d)',
  'linear-gradient(135deg,#2a1a12,#5a2a1e)',
  'linear-gradient(135deg,#12212a,#1e4a4a)',
  'linear-gradient(135deg,#241633,#4a2740)',
  'linear-gradient(135deg,#3a2a12,#7a4a1e)',
  'linear-gradient(135deg,#1a1230,#3a1f5a)',
  'linear-gradient(135deg,#0d1a2a,#1e3a5a)',
  'linear-gradient(135deg,#2a1216,#7d3b3a)',
]

function Arrow({ dir }: { dir: 'l' | 'r' }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.4">
      <path
        d={dir === 'l' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Episodes() {
  const rail = useRef<HTMLDivElement>(null)

  const nudge = (dir: number) => {
    rail.current?.scrollBy({ left: dir * (rail.current.clientWidth * 0.8), behavior: 'smooth' })
  }

  return (
    <section id="episodes" className="relative bg-abyss px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-end justify-between gap-4">
          <div>
            <p className="font-condensed text-xs tracking-mega text-gold uppercase">
              Season 1
            </p>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] text-bone">
              EVERY EPISODE
            </h2>
          </div>
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() => nudge(-1)}
              aria-label="Previous episodes"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <Arrow dir="l" />
            </button>
            <button
              type="button"
              onClick={() => nudge(1)}
              aria-label="More episodes"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/20 text-bone transition-colors hover:border-gold hover:text-gold"
            >
              <Arrow dir="r" />
            </button>
          </div>
        </Reveal>

        <div
          ref={rail}
          className="rail mt-10 flex gap-5 overflow-x-auto pb-4"
        >
          {EPISODES.map((ep, i) => (
            <article
              key={ep.no}
              className="group w-[280px] shrink-0 sm:w-[320px]"
            >
              <div
                className="relative flex aspect-video items-end overflow-hidden rounded-xl p-4"
                style={{ backgroundImage: GRADIENTS[i % GRADIENTS.length] }}
              >
                <span className="absolute -right-2 -top-6 font-display text-[7rem] leading-none text-white/10">
                  {ep.no}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-bone/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.4-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                  </svg>
                </span>
              </div>
              <div className="mt-3 flex items-baseline justify-between gap-3">
                <h3 className="font-condensed text-base font-medium tracking-wide text-bone uppercase">
                  {ep.no}. {ep.title}
                </h3>
                <span className="shrink-0 font-condensed text-xs text-fog/70">
                  {ep.runtime}
                </span>
              </div>
              <p className="mt-1.5 text-[13px] leading-relaxed text-fog">
                {ep.synopsis}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
