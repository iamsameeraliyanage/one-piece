/** The Straw Hat crew's mark: a skull under a wide straw hat, crossed bones. */
export default function JollyRoger({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" fill="none">
      {/* crossed bones */}
      <g stroke="currentColor" strokeWidth="3.4" strokeLinecap="round">
        <path d="M14 44 L50 20" />
        <path d="M14 20 L50 44" />
      </g>
      <g fill="currentColor">
        <circle cx="12.5" cy="18" r="4" />
        <circle cx="12.5" cy="24" r="4" />
        <circle cx="51.5" cy="18" r="4" />
        <circle cx="51.5" cy="24" r="4" />
        <circle cx="12.5" cy="40" r="4" />
        <circle cx="12.5" cy="46" r="4" />
        <circle cx="51.5" cy="40" r="4" />
        <circle cx="51.5" cy="46" r="4" />
      </g>
      {/* skull */}
      <path
        d="M32 20c-9 0-15 6-15 14 0 5 3 9 6 11 1 1 2 2 2 4v2h14v-2c0-2 1-3 2-4 3-2 6-6 6-11 0-8-6-14-15-14Z"
        fill="currentColor"
      />
      <g fill="var(--color-ink)">
        <circle cx="26.5" cy="35" r="3.4" />
        <circle cx="37.5" cy="35" r="3.4" />
        <path d="M30 42h4l-2 4z" />
      </g>
      {/* straw hat */}
      <path d="M13 22c3-6 11-9 19-9s16 3 19 9c-5-3-12-4-19-4s-14 1-19 4Z" fill="currentColor" />
      <rect x="21" y="16" width="22" height="4.5" rx="2" fill="var(--color-pirate)" />
    </svg>
  )
}
