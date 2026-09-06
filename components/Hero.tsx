'use client'

import { useEffect, useRef, useState } from 'react'

function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

/**
 * Scrub the hero video off horizontal mouse movement.
 *
 * Every `mousemove` compares against the previous X, turns the delta into a
 * fraction of the viewport width, and scales it to a slice of the clip:
 *   (delta / innerWidth) * SENSITIVITY * duration
 * `targetTime` accumulates (clamped to the clip) and a single in-flight seek is
 * kept: the `seeked` handler re-fires only if the target drifted while it was
 * busy, so fast flicks never flood the decoder.
 *
 * Touch / reduced-motion get a plain autoplaying loop instead.
 */
const SENSITIVITY = 0.8

function useVideoScrub() {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (!finePointer || reduceMotion) {
      video.loop = true
      video.play().catch(() => {})
      return
    }

    let prevX: number | null = null
    let targetTime = 0
    let seeking = false

    const seek = () => {
      if (!Number.isFinite(video.duration) || video.duration === 0) return
      seeking = true
      video.currentTime = targetTime
    }

    const onSeeked = () => {
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        seek()
      } else {
        seeking = false
      }
    }

    const onMove = (e: MouseEvent) => {
      if (!Number.isFinite(video.duration) || video.duration === 0) return
      if (prevX === null) {
        prevX = e.clientX
        return
      }
      const delta = e.clientX - prevX
      prevX = e.clientX

      targetTime += (delta / window.innerWidth) * SENSITIVITY * video.duration
      targetTime = Math.max(0, Math.min(video.duration, targetTime))

      if (!seeking) seek()
    }

    video.pause()
    video.addEventListener('seeked', onSeeked)
    window.addEventListener('mousemove', onMove, { passive: true })

    return () => {
      video.removeEventListener('seeked', onSeeked)
      window.removeEventListener('mousemove', onMove)
    }
  }, [])

  return ref
}

export default function Hero() {
  const [showSynopsis, setShowSynopsis] = useState(false)
  const videoRef = useVideoScrub()

  return (
    <section
      id="top"
      className="dusk-sky grain relative isolate flex min-h-[86svh] flex-col justify-end overflow-hidden pt-20 sm:min-h-svh sm:pt-24"
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

      {/* Luffy, the captain */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-10 flex translate-x-[14%] items-end justify-end sm:translate-x-0 sm:pr-[4%]">
        <div
          className="will-change-transform"
          style={{ transformOrigin: 'bottom center' }}
        >
          <div className="anim-bob relative">
            <video
              ref={videoRef}
              className="h-[50svh] w-auto max-w-none object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.6)] sm:h-[72svh] lg:h-[82svh]"
              muted
              playsInline
              preload="auto"
              poster="/media/luffy-hero-poster.webp"
            >
              <source src="/media/luffy-hero.webm" type="video/webm" />
            </video>
            <div className="anim-shadow absolute -bottom-1 left-1/2 h-5 w-[58%] -translate-x-1/2 rounded-[100%] bg-black/70 blur-md" />
          </div>
        </div>
      </div>

      {/* legibility scrims */}
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-ink from-30% via-ink/55 via-70% to-ink/5 sm:via-ink/25 sm:to-transparent" />
      <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-ink from-10% via-ink/35 to-transparent sm:from-0% sm:via-ink/10" />

      {/* Japanese tagline */}
      <div className="absolute right-5 top-1/2 z-30 hidden -translate-y-1/2 font-jp text-lg tracking-[0.4em] text-bone/75 [writing-mode:vertical-rl] lg:block">
        海賊王に、おれはなる！
      </div>

      {/* copy */}
      <div className="relative z-30 mx-auto w-full max-w-[1400px] px-5 pb-10 sm:px-8 sm:pb-24">
        <p className="mb-4 flex items-center gap-2.5 font-condensed text-xs tracking-mega text-fog uppercase">
          <span className="grid h-5 w-5 place-items-center rounded-[4px] bg-pirate font-display text-[11px] text-white">
            &#9760;
          </span>
          The Straw Hat Pirates
        </p>

        <h1 className="font-display text-bone [font-size:clamp(3rem,15vw,11rem)]">
          ONE PIECE
        </h1>

        <div className="mt-4 flex flex-wrap gap-1.5 font-condensed text-[11px] tracking-wide-caps text-fog uppercase sm:gap-2 sm:text-xs">
          <span className="rounded bg-white/[0.06] px-2 py-1 text-gold">
            Monkey D. Luffy
          </span>
          <span className="rounded bg-white/[0.06] px-2 py-1">Captain</span>
          <span className="rounded bg-white/[0.06] px-2 py-1">East Blue</span>
          <span className="rounded border border-white/20 px-2 py-1 text-bone">
            Gomu Gomu no Mi
          </span>
        </div>

        <p className="mt-5 max-w-xl text-sm leading-relaxed text-bone/85 sm:text-base">
          Five outcasts who would never have met on land: a rubber-bodied captain, a
          three-sword swordsman, a weather-witch navigator, a lying sniper and a
          kicking cook. This is who they are, where they come from, and what they can
          do.
          {showSynopsis && (
            <span className="mt-3 block text-fog">
              Gol D. Roger left everything he owned in one place at the end of the
              Grand Line and called it the One Piece. Luffy wants it, not for the
              gold, but for what finding it would make him: the freest man on the sea.
              First he needs a crew.
            </span>
          )}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href="#crew"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-condensed text-xs font-medium tracking-wide-caps text-ink uppercase transition-transform hover:scale-[1.03] sm:px-6 sm:py-3 sm:text-sm"
          >
            Meet the Crew
            <ArrowIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setShowSynopsis((v) => !v)}
            aria-expanded={showSynopsis}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 font-condensed text-xs tracking-wide-caps text-bone uppercase backdrop-blur-sm transition-colors hover:border-white/50 hover:bg-white/10 sm:px-6 sm:py-3 sm:text-sm"
          >
            {showSynopsis ? 'Less' : 'The Dream'}
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
