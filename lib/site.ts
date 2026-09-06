/**
 * Central site config. Consumed by the metadata in app/layout.tsx, the
 * robots/sitemap/manifest route handlers, the OG image, and the JSON-LD.
 *
 * Set NEXT_PUBLIC_SITE_URL in your host (Vercel → Project → Settings →
 * Environment Variables) to the real deployment URL. The fallback below is only
 * used for local builds and should be corrected once the domain is known.
 */
const FALLBACK_URL = 'https://one-piece-sameera.vercel.app'

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL).replace(
  /\/+$/,
  '',
)

export const author = {
  name: 'Sameera Liyanage',
  role: 'Web Developer & Front-End Engineer',
  linkedin: 'https://www.linkedin.com/in/sameera-liyanage/',
  github: 'https://github.com/iamsameeraliyanage',
}

export const site = {
  name: 'ONE PIECE: Grand Line',
  shortName: 'Grand Line',
  title: 'ONE PIECE: Grand Line | Straw Hat Crew Character Site',
  description:
    'An animated ONE PIECE fan site built by Sameera Liyanage. Meet the Straw Hat Pirates, with their bounties, Devil Fruits, Haki and fighting styles, on a voyage from the East Blue to the Grand Line.',
  url: siteUrl,
  locale: 'en_US',
  author,
  keywords: [
    'Sameera Liyanage',
    'Sameera Liyanage portfolio',
    'Sameera Liyanage websites',
    'Sameera Liyanage projects',
    'Sameera Liyanage web developer',
    'Sameera Liyanage front-end developer',
    'front-end developer portfolio',
    'React developer portfolio',
    'Next.js developer',
    'creative web developer',
    'web animation portfolio',
    'ONE PIECE',
    'ONE PIECE fan site',
    'Straw Hat Pirates',
    'Monkey D. Luffy',
    'Grand Line',
  ],
}
