'use client'

import { useEffect, useRef, useState } from 'react'

function PlayIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.4-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  )
}

/** Luffy leans toward the cursor — eased translate + a small pivot at his feet. */
function useMouseFollow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return
    }

    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth) * 2 - 1
      target.y = (e.clientY / window.innerHeight) * 2 - 1
    }

    const onLeave = () => {
      target.x = 0
      target.y = 0
    }

    const tick = () => {
      current.x += (target.x - current.x) * 0.06
      current.y += (target.y - current.y) * 0.06
      const tx = current.x * 28
      const ty = current.y * 16
      const rot = current.x * 2.6
      el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotate(${rot}deg)`
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return ref
}

export default function Hero() {
  const [showSynopsis, setShowSynopsis] = useState(false)
  const followRef = useMouseFollow()

  return (
    <section
      id="top"
      className="dusk-sky grain relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden pt-24"
    >
      {/* atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="anim-drift absolute -left-[12%] top-[16%] h-56 w-[60%] rounded-full bg-white/[0.06] blur-3xl" />
        <div
          className="anim-drift absolute right-[-8%] top-[34%] h-40 w-[45%] rounded-full bg-sunset/10 blur-3xl"
          style={{ animationDelay: '-8s' }}
        />
        <div className="absolute inset-x-0 bottom-[27%] h-px bg-white/15" />
        <div className="absolute inset-x-0 bottom-0 h-[27%] bg-gradient-to-t from-[#7d3b3a]/40 to-transparent" />
      </div>

      {/* Luffy — the captain */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 flex translate-x-[24%] items-end justify-end sm:translate-x-0 sm:pr-[4%]">
        <div
          ref={followRef}
          className="will-change-transform"
          style={{ transformOrigin: 'bottom center' }}
        >
          <div className="anim-bob relative">
            <video
              className="h-[46svh] w-auto max-w-none object-contain opacity-90 drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)] sm:h-[72svh] sm:opacity-100 lg:h-[82svh]"
              autoPlay
              loop
              muted
              playsInline
              poster="/media/luffy-hero-poster.webp"
            >
              <source src="/media/luffy-hero.webm" type="video/webm" />
            </video>
            <div className="anim-shadow absolute -bottom-1 left-1/2 h-5 w-[58%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-md" />
          </div>
        </div>
      </div>

      {/* legibility scrims */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-ink from-25% via-ink/75 to-ink/10 sm:via-ink/25 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink via-ink/55 to-transparent sm:via-ink/10" />

      {/* Japanese tagline */}
      <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 font-jp text-lg tracking-[0.4em] text-bone/75 [writing-mode:vertical-rl] lg:block">
        海賊王に、おれはなる！
      </div>

      {/* copy */}
      <div className="relative z-30 mx-auto w-full max-w-[1400px] px-5 pb-14 sm:px-8 sm:pb-24">
        <p className="mb-4 flex items-center gap-2.5 font-condensed text-xs tracking-mega text-fog uppercase">
          <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-pirate font-display text-[11px] text-white">
            N
          </span>
          Series · Live Action
        </p>

        <h1 className="font-display text-bone [font-size:clamp(3.4rem,15vw,11rem)]">
          ONE PIECE
        </h1>

        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-condensed text-sm tracking-wide-caps text-fog uppercase">
          <span className="text-gold">2026</span>
          <span className="h-1 w-1 rounded-full bg-fog/50" />
          <span>Adventure</span>
          <span className="h-1 w-1 rounded-full bg-fog/50" />
          <span>Season 1 · 8 Episodes</span>
          <span className="rounded border border-white/25 px-1.5 py-0.5 text-[11px] text-bone">
            16+
          </span>
        </div>

        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bone/85 sm:text-base">
          Gold Roger owned everything the world had to offer, and left it all in one
          place. Now a boy made of rubber sets out with an empty crew and a borrowed
          straw hat to find it.
          {showSynopsis && (
            <span className="mt-3 block text-fog">
              Monkey D. Luffy has never seen the sea he wants to conquer. Between him
              and the Grand Line stand the Marines, a circus of pirate captains, and a
              fish-man who runs the East Blue on fear. He&apos;ll need a swordsman, a
              navigator, a sniper and a cook — and none of them are looking to be
              found.
            </span>
          )}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#trailers"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-condensed text-sm font-medium tracking-wide-caps text-ink uppercase transition-transform hover:scale-[1.03]"
          >
            <PlayIcon className="h-4 w-4" />
            Play Trailer
          </a>
          <button
            type="button"
            onClick={() => setShowSynopsis((v) => !v)}
            aria-expanded={showSynopsis}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 font-condensed text-sm tracking-wide-caps text-bone uppercase backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10"
          >
            {showSynopsis ? 'Hide' : 'Synopsis'}
          </button>
        </div>
      </div>

      {/* scroll cue */}
      <a
        href="#crew"
        aria-label="Scroll to crew"
        className="absolute bottom-4 left-1/2 z-30 hidden -translate-x-1/2 sm:block"
      >
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/35 p-1">
          <span
            className="h-1.5 w-1.5 rounded-full bg-gold"
            style={{ animation: 'scroll-cue 1.8s var(--ease-out-expo) infinite' }}
          />
        </span>
      </a>
    </section>
  )
}
