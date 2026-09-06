import { CREW } from './data'
import JollyRoger from './JollyRoger'
import Reveal from './Reveal'

function Berry({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M6 4h7a4.5 4.5 0 0 1 0 9H9m-3-9v16M6 13h4m8 0a4 4 0 0 1-4 4H9m-5 1.5h9M4 15.5h9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Crew() {
  const [captain, ...rest] = CREW

  return (
    <section id="crew" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-condensed text-xs tracking-mega text-gold uppercase">
            The Straw Hat Pirates
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] text-bone">
            MEET THE CREW
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-fog">
            Five people who would never have met on land. Every one of them signed on
            for a different reason — and none of those reasons was safety.
          </p>
        </Reveal>

        {/* Captain — featured */}
        <Reveal className="mt-14 grid gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-surface to-ink-2 p-6 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-[320px]">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold/20 blur-3xl" />
            <img
              src={captain.portrait}
              alt={captain.name}
              className="mx-auto w-full drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)]"
              loading="lazy"
            />
            <span className="absolute -right-2 top-2 grid h-24 w-24 -rotate-12 place-items-center rounded-full border-[3px] border-pirate/80 text-center font-condensed text-[11px] font-semibold leading-tight tracking-wide-caps text-pirate uppercase">
              Dead
              <br />
              or
              <br />
              Alive
            </span>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-condensed text-xs tracking-mega text-gold uppercase">
              &ldquo;{captain.epithet}&rdquo; · {captain.role}
            </p>
            <h3 className="mt-2 font-display text-[clamp(2.2rem,6vw,4rem)] text-bone">
              {captain.name}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-fog">
              He can&apos;t swim, can&apos;t navigate, and can&apos;t cook. What he can
              do is refuse to let go — of a promise, of a friend, of the idea that the
              freest man on the sea wears the crown.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <div>
                <p className="font-condensed text-[10px] tracking-mega text-fog/70 uppercase">
                  Bounty
                </p>
                <p className="flex items-center gap-1.5 font-display text-2xl text-gold">
                  <Berry className="h-5 w-5" />
                  {captain.bounty}
                </p>
              </div>
              <div>
                <p className="font-condensed text-[10px] tracking-mega text-fog/70 uppercase">
                  Dream
                </p>
                <p className="font-display text-xl text-bone">
                  King of the Pirates
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Wanted posters */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {rest.map((c, i) => (
            <Reveal
              as="article"
              key={c.name}
              delay={i * 80}
              className="parchment group relative aspect-[3/4] overflow-hidden rounded-[10px] transition-transform duration-300 hover:-translate-y-1.5"
            >
              <div
                className="flex h-full flex-col border-2 border-[#5a3a14]/50 px-3 py-3 text-center"
                style={{ transform: `rotate(${(i % 2 ? 1 : -1) * 1.2}deg)` }}
              >
                <p className="font-display text-xl tracking-[0.12em] text-[#3a2a12] sm:text-2xl">
                  WANTED
                </p>
                <div className="relative my-2 flex flex-1 flex-col items-center justify-center gap-2 overflow-hidden border border-dashed border-[#5a3a14]/40 bg-[#d8c092]/60">
                  <span
                    className="absolute h-28 w-28 rounded-full opacity-25 blur-xl"
                    style={{ background: c.accent }}
                  />
                  <JollyRoger className="relative h-20 w-20 text-[#3a2a12]/45 sm:h-24 sm:w-24" />
                  <span className="relative font-condensed text-[8px] tracking-mega text-[#5a3a14]/70 uppercase">
                    Identity Unknown
                  </span>
                </div>
                <p className="font-display text-base leading-none text-[#2a1e0e] sm:text-lg">
                  {c.name}
                </p>
                <p className="mt-0.5 font-condensed text-[10px] tracking-wide-caps text-[#5a3a14] uppercase">
                  &ldquo;{c.epithet}&rdquo;
                </p>
                <p className="mt-1.5 flex items-center justify-center gap-1 font-display text-sm text-[#7a1a10]">
                  <Berry className="h-3.5 w-3.5" />
                  {c.bounty}
                </p>
                <p className="mt-1 font-condensed text-[8px] tracking-mega text-[#5a3a14]/80 uppercase">
                  {c.role} · Dead or Alive
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
