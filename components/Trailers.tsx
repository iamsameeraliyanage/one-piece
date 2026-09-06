import { TRAILERS } from './data'
import Reveal from './Reveal'

const CARD_BG = [
  'linear-gradient(160deg,#241633,#7d3b3a)',
  'linear-gradient(160deg,#12212a,#1e4a4a)',
  'linear-gradient(160deg,#2a1a12,#5a2a1e)',
]

export default function Trailers() {
  return (
    <section id="trailers" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-condensed text-xs tracking-mega text-gold uppercase">
            Watch Now
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] text-bone">
            LATEST TRAILERS
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TRAILERS.map((t, i) => (
            <Reveal as="article" key={t.title} delay={i * 90} className="group">
              <div
                className="relative flex aspect-video items-end overflow-hidden rounded-xl"
                style={{ backgroundImage: CARD_BG[i % CARD_BG.length] }}
              >
                {t.video ? (
                  <video
                    className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-100"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={t.poster}
                  >
                    <source src={t.video} type="video/webm" />
                  </video>
                ) : null}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <span className="absolute left-3 top-3 font-display text-xs tracking-[0.14em] text-pirate">
                  N SERIES
                </span>
                <span className="absolute right-3 top-3 rounded bg-black/55 px-1.5 py-0.5 font-condensed text-[11px] text-bone backdrop-blur-sm">
                  {t.duration}
                </span>

                <div className="relative z-10 flex items-center gap-3 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-bone/80 text-bone transition-colors group-hover:border-gold group-hover:text-gold">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.4-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block font-condensed text-[10px] tracking-mega text-gold uppercase">
                      {t.label}
                    </span>
                    <span className="block font-condensed text-base font-medium tracking-wide text-bone uppercase">
                      {t.title}
                    </span>
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
