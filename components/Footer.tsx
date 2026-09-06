import OnePieceLogo from './OnePieceLogo'

const COLUMNS: [string, string[]][] = [
  ['Series', ['Overview', 'Episodes', 'Trailers', 'The Crew']],
  ['World', ['East Blue', 'Devil Fruits', 'The Grand Line', 'Glossary']],
  ['More', ['Press Kit', 'Soundtrack', 'Behind the Scenes', 'Help']],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-[1400px]">
        {/* the dream quote from the crew */}
        <p className="max-w-2xl font-jp text-xl leading-relaxed text-bone/90">
          夢があるから、人生は楽しい。
        </p>
        <p className="mt-2 max-w-2xl text-sm text-fog">
          &ldquo;Because when you stop dreaming, whatever happens is just a dream.&rdquo;
        </p>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
              <OnePieceLogo />
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-fog/70">
              A fan-made concept site celebrating the live-action voyage. Not
              affiliated with Eiichiro Oda, Toei Animation, or Netflix.
            </p>
          </div>

          {COLUMNS.map(([heading, items]) => (
            <div key={heading}>
              <p className="font-condensed text-xs tracking-mega text-gold uppercase">
                {heading}
              </p>
              <ul className="mt-4 space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-fog transition-colors hover:text-bone"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-fog/60 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Grand Line — fan project.</span>
          <span className="font-condensed tracking-wide-caps uppercase">
            The sea is out there.
          </span>
        </div>
      </div>
    </footer>
  )
}
