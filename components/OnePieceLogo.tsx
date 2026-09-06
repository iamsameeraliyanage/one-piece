/**
 * Header logo modelled on the ONE PIECE live-action mark:
 * a straw-hat skull over crossed cutlasses inside a ring, next to the
 * "ONE PIECE" wordmark in beveled metallic blue with カタカナ set behind it.
 */

function OnePieceMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="op-blade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f3f7fd" />
          <stop offset="0.5" stopColor="#c3d4e9" />
          <stop offset="1" stopColor="#89a5c5" />
        </linearGradient>
        <linearGradient id="op-hilt" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f6cf7d" />
          <stop offset="1" stopColor="#a9781f" />
        </linearGradient>
        <linearGradient id="op-ring" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#dcebfb" />
          <stop offset="0.55" stopColor="#3f7fc4" />
          <stop offset="1" stopColor="#123c78" />
        </linearGradient>
      </defs>

      <circle cx="32" cy="33" r="21" stroke="url(#op-ring)" strokeWidth="3" />

      {/* crossed cutlasses: one path, mirrored across the centre line */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {[1, -1].map((s) => (
          <g
            key={s}
            transform={s === -1 ? 'translate(64,0) scale(-1,1)' : undefined}
          >
            <path
              d="M12 52 Q30 42 41 24 Q46 15 53 12"
              stroke="url(#op-blade)"
              strokeWidth="3.2"
            />
            <path d="M9 45 L20 53" stroke="url(#op-hilt)" strokeWidth="3" />
            <path d="M12 52 L7 57" stroke="url(#op-hilt)" strokeWidth="3" />
            <circle cx="6" cy="58" r="2.4" fill="url(#op-hilt)" />
          </g>
        ))}
      </g>

      {/* skull */}
      <path
        d="M32 21c-8.5 0-14 5.6-14 13 0 4.7 2.8 8.4 5.6 10.3 1 .7 1.7 1.8 1.7 3.4V51h13.4v-3.3c0-1.6.7-2.7 1.7-3.4C43.2 42.4 46 38.7 46 34c0-7.4-5.5-13-14-13Z"
        fill="#f4f1e7"
      />
      <g fill="var(--color-ink)">
        <circle cx="27" cy="35.5" r="3" />
        <circle cx="37" cy="35.5" r="3" />
        <path d="M30.5 42h3l-1.5 3.4z" />
      </g>

      {/* straw hat */}
      <path
        d="M16 24c2.8-5.4 9.4-8 16-8s13.2 2.6 16 8c-4.6-2.8-10.6-3.8-16-3.8S20.6 21.2 16 24Z"
        fill="#e7b95c"
      />
      <rect x="24" y="18.5" width="16" height="3.6" rx="1.8" fill="var(--color-pirate)" />
    </svg>
  )
}

export default function OnePieceLogo() {
  return (
    <>
      <OnePieceMark className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
      <span className="relative inline-block leading-none">
        <span
          aria-hidden
          className="op-logo-jp pointer-events-none absolute inset-0 flex items-center justify-center text-[10px] sm:text-[12px]"
        >
          ワンピース
        </span>
        <span className="op-logo-text relative block text-[21px] sm:text-[26px]">
          ONE&nbsp;PIECE
        </span>
      </span>
    </>
  )
}
