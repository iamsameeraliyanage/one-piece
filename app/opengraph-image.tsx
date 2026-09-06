import { ImageResponse } from 'next/og'
import { author, site } from '@/lib/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#0a0e1a',
          backgroundImage:
            'radial-gradient(circle at 78% 24%, rgba(255,194,74,0.18), transparent 46%)',
          color: '#f6f1e4',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 6,
              color: '#ffc24a',
            }}
          >
            A ONE PIECE FAN PROJECT
          </div>
          <svg width="132" height="132" viewBox="0 0 64 64" fill="none">
            <circle cx="32" cy="33" r="20" stroke="#3f7fc4" strokeWidth="3" />
            <path
              d="M14 44 L50 20"
              stroke="#c3d4e9"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <path
              d="M14 20 L50 44"
              stroke="#c3d4e9"
              strokeWidth="3.4"
              strokeLinecap="round"
            />
            <path
              d="M32 21c-8.5 0-14 5.6-14 13 0 4.7 2.8 8.4 5.6 10.3 1 .7 1.7 1.8 1.7 3.4V51h13.4v-3.3c0-1.6.7-2.7 1.7-3.4C43.2 42.4 46 38.7 46 34c0-7.4-5.5-13-14-13Z"
              fill="#f4f1e7"
            />
            <circle cx="27" cy="35.5" r="3" fill="#0a0e1a" />
            <circle cx="37" cy="35.5" r="3" fill="#0a0e1a" />
            <path
              d="M16 24c2.8-5.4 9.4-8 16-8s13.2 2.6 16 8c-4.6-2.8-10.6-3.8-16-3.8S20.6 21.2 16 24Z"
              fill="#e7b95c"
            />
            <rect x="24" y="18.5" width="16" height="3.6" rx="1.8" fill="#e5372a" />
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 150,
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: -2,
            }}
          >
            ONE PIECE
          </div>
          <div style={{ marginTop: 20, fontSize: 34, color: '#aeb9d4' }}>
            Grand Line · the Straw Hat crew, their bounties &amp; fighting styles
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid rgba(255,255,255,0.14)',
            paddingTop: 28,
          }}
        >
          <div style={{ display: 'flex', fontSize: 30, color: '#aeb9d4' }}>
            <span>Designed &amp; developed by&nbsp;</span>
            <span style={{ color: '#ffc24a', fontWeight: 700 }}>
              {author.name}
            </span>
          </div>
          <div style={{ fontSize: 24, color: '#8b97b5' }}>
            linkedin.com/in/sameera-liyanage
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
