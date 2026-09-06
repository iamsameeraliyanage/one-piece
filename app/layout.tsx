import type { Metadata } from 'next'
import { Anton, Inter, Oswald, Shippori_Mincho } from 'next/font/google'
import { author, site, siteUrl } from '@/lib/site'
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
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: '%s | ONE PIECE: Grand Line',
  },
  description: site.description,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: author.name, url: author.linkedin }],
  creator: author.name,
  publisher: author.name,
  category: 'Portfolio',
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${siteUrl}/#sameera`,
      name: author.name,
      url: siteUrl,
      jobTitle: author.role,
      sameAs: [author.linkedin, author.github],
      knowsAbout: [
        'Web Development',
        'Front-End Engineering',
        'React',
        'Next.js',
        'TypeScript',
        'UI Animation',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      description: site.description,
      inLanguage: 'en',
      author: { '@id': `${siteUrl}/#sameera` },
      creator: { '@id': `${siteUrl}/#sameera` },
    },
    {
      '@type': 'CreativeWork',
      '@id': `${siteUrl}/#project`,
      name: site.title,
      abstract:
        'A ONE PIECE fan site: character dossiers for the Straw Hat crew with bounties, Devil Fruits, Haki and fighting styles.',
      url: siteUrl,
      isPartOf: { '@id': `${siteUrl}/#website` },
      author: { '@id': `${siteUrl}/#sameera` },
      creator: { '@id': `${siteUrl}/#sameera` },
      keywords: site.keywords.join(', '),
      genre: 'Portfolio project',
      creativeWorkStatus: 'Published',
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${inter.variable} ${shippori.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
