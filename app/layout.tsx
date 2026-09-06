import type { Metadata } from 'next'
import { Anton, Inter, Oswald, Shippori_Mincho } from 'next/font/google'
import './globals.css'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const oswald = Oswald({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const shippori = Shippori_Mincho({
  weight: ['500', '700'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ONE PIECE — Grand Line | Live Action Series',
  description:
    'Meet the Straw Hat Pirates. A live-action voyage across the East Blue in search of the world&apos;s greatest treasure — the One Piece.',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} ${shippori.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
