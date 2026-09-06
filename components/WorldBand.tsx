import { WORLD } from './data'
import Reveal from './Reveal'

export default function WorldBand() {
  return (
    <section id="world" className="relative overflow-hidden bg-abyss px-5 py-24 sm:px-8 sm:py-32">
      {/* faint sea-chart wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,194,74,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,122,61,0.35), transparent 45%), repeating-linear-gradient(90deg, transparent 0 78px, rgba(255,255,255,0.06) 78px 79px), repeating-linear-gradient(0deg, transparent 0 78px, rgba(255,255,255,0.06) 78px 79px)',
        }}
      />

      <div className="relative mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-condensed text-xs tracking-mega text-gold uppercase">
            The World
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-[clamp(2.5rem,7vw,5rem)] text-bone">
            THE GRAND LINE AWAITS
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {WORLD.map((w, i) => (
            <Reveal key={w.k} delay={i * 80} className="bg-ink p-7">
              <p className="font-display text-5xl text-white/10">0{i + 1}</p>
              <h3 className="mt-3 font-condensed text-lg font-medium tracking-wide text-gold uppercase">
                {w.k}
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-fog">{w.v}</p>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal className="mt-20 flex flex-col items-center gap-6 rounded-3xl border border-gold/25 bg-gradient-to-b from-surface to-ink px-6 py-16 text-center">
          <p className="font-jp text-lg tracking-[0.3em] text-gold">
            海賊王に、おれはなる！
          </p>
          <h3 className="font-display text-[clamp(2rem,6vw,3.75rem)] text-bone">
            SET SAIL WITH THE CREW
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-fog">
            All eight episodes of the voyage across the East Blue are streaming now.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 font-condensed text-sm font-medium tracking-wide-caps text-ink uppercase transition-transform hover:scale-[1.03]"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.4-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
            </svg>
            Play Episode 1
          </a>
        </Reveal>
      </div>
    </section>
  )
}
