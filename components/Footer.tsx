import OnePieceLogo from './OnePieceLogo'

const COLUMNS: [string, string[]][] = [
  ['The Crew', ['Luffy', 'Zoro', 'Nami', 'Usopp', 'Sanji']],
  ['Powers', ['Devil Fruits', 'Haki', 'Santoryu', 'Clima-Tact', 'Black Leg']],
  ['The World', ['East Blue', 'The Grand Line', 'The One Piece', 'Glossary']],
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-14 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-[1400px]">
        {/* the dream quote from the crew */}
        <p className="max-w-2xl font-jp text-lg leading-relaxed text-bone/90 sm:text-xl">
          夢があるから、人生は楽しい。
        </p>
        <p className="mt-2 max-w-2xl text-sm text-fog">
          &ldquo;Because when you stop dreaming, whatever happens is just a dream.&rdquo;
        </p>

        <div className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 sm:gap-3">
              <OnePieceLogo />
            </a>
            <p className="mt-4 max-w-xs text-xs leading-relaxed text-fog/70">
              A fan-made tribute to Eiichiro Oda&apos;s ONE PIECE and its crew. Not
              affiliated with Shueisha or Toei Animation.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 min-[560px]:grid-cols-3">
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
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-fog/60 sm:mt-14 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-x-4">
          <span>© {new Date().getFullYear()} Grand Line, a fan project.</span>
          <span>
            Designed &amp; developed by{' '}
            <a
              href="https://www.linkedin.com/in/sameera-liyanage/"
              target="_blank"
              rel="author noopener noreferrer"
              title="Sameera Liyanage — web developer portfolio"
              className="text-fog transition-colors hover:text-bone"
            >
              Sameera Liyanage
            </a>
          </span>
          <span className="font-condensed tracking-wide-caps uppercase">
            The sea is out there.
          </span>
        </div>
      </div>
    </footer>
  )
}
