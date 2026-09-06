import { POWERS } from './data'
import Reveal from './Reveal'

export default function Abilities() {
  return (
    <section
      id="abilities"
      className="relative bg-abyss px-5 py-16 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-condensed text-xs tracking-mega text-gold uppercase">
            How They Fight
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.25rem,8vw,5rem)] text-bone">
            POWERS OF THE CREW
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
            Only the captain ate a Devil Fruit. Everyone else earned their edge
            with a blade, a slingshot, the weather, or their own two legs. And all of
            them are learning Haki.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {POWERS.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-surface to-ink p-5 transition-colors hover:border-gold/40 sm:p-6"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="min-w-0 font-display text-xl leading-none text-bone sm:text-2xl">
                  {p.name}
                </h3>
                <span className="shrink-0 font-jp text-base text-fog/50 sm:text-lg">
                  {p.jp}
                </span>
              </div>
              <p className="mt-2 font-condensed text-[11px] tracking-wide-caps text-gold uppercase">
                {p.holder} · {p.kind}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-fog">{p.blurb}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
