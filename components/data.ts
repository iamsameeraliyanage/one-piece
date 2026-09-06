/* Content for the ONE PIECE — Grand Line site.
   Bounties reflect the East Blue saga. */

export type Crew = {
  name: string
  epithet: string
  role: string
  bounty: string
  dream: string
  /** optional cutout portrait in /public/characters */
  portrait?: string
  accent: string
}

export const CREW: Crew[] = [
  {
    name: 'Monkey D. Luffy',
    epithet: 'Straw Hat',
    role: 'Captain',
    bounty: '30,000,000',
    dream: 'To become King of the Pirates.',
    portrait: '/characters/luffy-portrait.webp',
    accent: '#e5372a',
  },
  {
    name: 'Roronoa Zoro',
    epithet: 'Pirate Hunter',
    role: 'Swordsman',
    bounty: '60,000,000',
    dream: 'To become the world’s greatest swordsman.',
    accent: '#4b8b3b',
  },
  {
    name: 'Nami',
    epithet: 'Cat Burglar',
    role: 'Navigator',
    bounty: '16,000,000',
    dream: 'To draw a map of the entire world.',
    accent: '#f0902c',
  },
  {
    name: 'Usopp',
    epithet: 'Sniper King',
    role: 'Sniper',
    bounty: '30,000,000',
    dream: 'To become a brave warrior of the sea.',
    accent: '#c2543a',
  },
  {
    name: 'Sanji',
    epithet: 'Black Leg',
    role: 'Cook',
    bounty: '77,000,000',
    dream: 'To find the All Blue.',
    accent: '#e0c33a',
  },
]

export type Episode = {
  no: number
  title: string
  runtime: string
  synopsis: string
}

export const EPISODES: Episode[] = [
  {
    no: 1,
    title: 'Romance Dawn',
    runtime: '54m',
    synopsis:
      'A boy in a straw hat sets out alone, chasing a promise made under a mountain of treasure.',
  },
  {
    no: 2,
    title: 'The Man in the Straw Hat',
    runtime: '54m',
    synopsis:
      'Luffy recruits a pirate hunter tied to a Marine base, and a thief who works alone.',
  },
  {
    no: 3,
    title: 'Tell No Tales',
    runtime: '47m',
    synopsis:
      'A clown with a grudge holds a town hostage while the crew hunts for a map to the Grand Line.',
  },
  {
    no: 4,
    title: 'The Pirates Are Coming',
    runtime: '49m',
    synopsis:
      'At a cliffside mansion, a butler’s loyalty hides a plot years in the making.',
  },
  {
    no: 5,
    title: 'Eat at Baratie!',
    runtime: '53m',
    synopsis:
      'A floating restaurant, a hot-headed sous-chef, and a Warlord who arrives for dinner.',
  },
  {
    no: 6,
    title: 'The Chef and the Chore Boy',
    runtime: '48m',
    synopsis:
      'Sanji’s past surfaces as Don Krieg’s armada surrounds the Baratie.',
  },
  {
    no: 7,
    title: 'The Girl with the Sawfish Tattoo',
    runtime: '55m',
    synopsis:
      'The crew reaches Cocoyasi Village, where a fish-man crew rules the sea with maps and fear.',
  },
  {
    no: 8,
    title: 'Worst in the East',
    runtime: '58m',
    synopsis:
      'Arlong Park falls or the village does. Luffy makes a promise he intends to keep.',
  },
]

export type Trailer = {
  label: string
  duration: string
  title: string
  video?: string
  poster?: string
}

export const TRAILERS: Trailer[] = [
  {
    label: 'Teaser',
    duration: '0:04',
    title: 'The Captain',
    video: '/media/luffy-hero.webm',
    poster: '/media/luffy-hero-poster.webp',
  },
  {
    label: 'Official Trailer',
    duration: '2:32',
    title: 'Set Sail',
  },
  {
    label: 'Featurette',
    duration: '3:11',
    title: 'Building the Going Merry',
  },
]

export const WORLD = [
  {
    k: 'The East Blue',
    v: 'The weakest of the four seas — and where every legend starts small.',
  },
  {
    k: 'Devil Fruits',
    v: 'Eat one and the sea takes your strength but hands you the impossible.',
  },
  {
    k: 'The Grand Line',
    v: 'A belt of ocean where compasses lie and the real map is nerve.',
  },
  {
    k: 'The One Piece',
    v: 'Gold Roger left everything he owned in one place. Everyone is looking.',
  },
]
