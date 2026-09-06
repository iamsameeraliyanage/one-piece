import { CREW, type Member } from './data'
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

function Profile({ member: m, index }: { member: Member; index: number }) {
  const flip = index % 2 === 1

  return (
    <Reveal
      as="article"
      className="grid items-center gap-8 border-t border-white/10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16"
    >
      {/* portrait */}
      <div
        className={`relative mx-auto flex w-full max-w-[420px] flex-col items-center ${
          flip ? 'lg:order-2' : ''
        }`}
      >
        <div
          className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: m.accent }}
        />
        <JollyRoger className="absolute left-1/2 top-1/2 -z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 text-white/[0.045]" />
        <img
          src={m.portrait}
          alt={m.name}
          className="h-[360px] w-auto object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.55)] sm:h-[460px] lg:h-[500px]"
          loading="lazy"
        />
        <div className="mt-4 flex items-center gap-2 rounded-full border border-white/15 bg-ink/85 px-4 py-1.5 backdrop-blur-sm">
          <Berry className="h-4 w-4 text-gold" />
          <span className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
            Bounty
          </span>
          <span className="font-display text-base text-gold">{m.bounty}</span>
        </div>
      </div>

      {/* dossier */}
      <div className={flip ? 'lg:order-1' : ''}>
        <p
          className="font-condensed text-xs tracking-mega uppercase"
          style={{ color: m.accent }}
        >
          &ldquo;{m.epithet}&rdquo;
        </p>
        <h3 className="mt-2 font-display text-[clamp(2rem,5vw,3.5rem)] text-bone">
          {m.name}
        </h3>

        <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:max-w-md">
          <div>
            <dt className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
              Role
            </dt>
            <dd className="text-bone">{m.role}</dd>
          </div>
          <div>
            <dt className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
              From
            </dt>
            <dd className="text-bone">{m.origin}</dd>
          </div>
          <div>
            <dt className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
              Home Sea
            </dt>
            <dd className="text-bone">{m.sea}</dd>
          </div>
          <div>
            <dt className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
              Dream
            </dt>
            <dd className="text-bone">{m.dream}</dd>
          </div>
        </dl>

        <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-fog sm:text-sm">
          {m.about}
        </p>

        {/* powers */}
        <div className="mt-6">
          <p className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
            Powers &amp; Style
          </p>
          <p className="mt-1 font-condensed text-lg font-medium text-bone">
            {m.power}
          </p>
          <p className="text-xs text-fog/80">{m.powerType}</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {m.abilities.map((a) => (
              <li
                key={a}
                className="rounded-full border px-2.5 py-1 text-[11px] text-bone/90"
                style={{ borderColor: `${m.accent}66` }}
              >
                {a}
              </li>
            ))}
          </ul>
        </div>

        {/* traits + first bounty */}
        <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
          <ul className="space-y-1.5 text-[13px] text-fog">
            {m.traits.map((t) => (
              <li key={t} className="flex gap-2">
                <span style={{ color: m.accent }}>—</span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <div className="shrink-0 sm:text-right">
            <p className="font-condensed text-[10px] tracking-mega text-fog/60 uppercase">
              First Bounty
            </p>
            <p className="flex items-center gap-1.5 font-display text-lg text-bone sm:justify-end">
              <Berry className="h-4 w-4 text-fog" />
              {m.firstBounty}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function Crew() {
  return (
    <section id="crew" className="relative bg-ink px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <p className="font-condensed text-xs tracking-mega text-gold uppercase">
            The Straw Hat Pirates
          </p>
          <h2 className="mt-3 font-display text-[clamp(2.5rem,7vw,5rem)] text-bone">
            THE CREW
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-fog">
            Five members, five reasons for going to sea. Origins, bounties, dreams
            and every technique they bring to a fight.
          </p>
        </Reveal>

        {CREW.map((m, i) => (
          <Profile key={m.slug} member={m} index={i} />
        ))}
      </div>
    </section>
  )
}
