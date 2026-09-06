/* Content for the ONE PIECE — Grand Line character site.
   A tribute to Eiichiro Oda's crew. Bounties are the current
   (post-Wano) figures; first bounties are noted alongside. */

export type Member = {
  slug: string
  name: string
  epithet: string
  role: string
  origin: string
  sea: string
  bounty: string
  firstBounty: string
  dream: string
  power: string
  powerType: string
  about: string
  abilities: string[]
  traits: string[]
  portrait: string
  accent: string
}

export const CREW: Member[] = [
  {
    slug: 'luffy',
    name: 'Monkey D. Luffy',
    epithet: 'Straw Hat',
    role: 'Captain',
    origin: 'Foosha Village, Dawn Island',
    sea: 'East Blue',
    bounty: '3,000,000,000',
    firstBounty: '30,000,000',
    dream: 'To become King of the Pirates.',
    power: 'Gomu Gomu no Mi',
    powerType: 'Paramecia — later revealed as the Mythical Zoan Hito Hito no Mi, Model: Nika',
    about:
      'Luffy ate a Devil Fruit as a child and turned to rubber — blunt hits and lightning pass straight through him. He cannot swim, barely understands a map, and picks his crew on instinct. What he never does is let go of a promise. His awakening, Gear 5, turns his body and the world around him cartoonishly elastic.',
    abilities: [
      'Gear 2: Boost',
      'Gear 3: Bone Balloon',
      'Gear 4: Boundman / Snakeman',
      'Gear 5: Liberation',
      'Red Roc',
      'King Kong Gun',
      'Conqueror’s, Armament & Observation Haki',
    ],
    traits: [
      'Bottomless appetite — meat above all',
      'Sinks like a stone in seawater',
      'Reads people faster than situations',
      'One of the few born with Conqueror’s Haki',
    ],
    portrait: '/characters/luffy.webp',
    accent: '#e5372a',
  },
  {
    slug: 'zoro',
    name: 'Roronoa Zoro',
    epithet: 'Pirate Hunter',
    role: 'Swordsman · First Mate',
    origin: 'Shimotsuki Village',
    sea: 'East Blue',
    bounty: '1,111,000,000',
    firstBounty: '60,000,000',
    dream: 'To become the world’s greatest swordsman.',
    power: 'Santoryu — Three-Sword Style',
    powerType: 'No Devil Fruit — pure swordsmanship',
    about:
      'Zoro fights with three blades — two in hand and Wado Ichimonji clenched in his teeth — a style he built to honour a childhood promise to Kuina. He trained under Dracule Mihawk after his first real defeat, learned to cut steel and, at Wano, awakened Conqueror’s Haki. His sense of direction, however, is beyond saving.',
    abilities: [
      'Oni Giri',
      'Tatsumaki — Dragon Twister',
      'Purgatory Onigiri',
      'Three-Sword Style: King of Hell',
      'Asura — nine-blade illusion',
      'Advanced Armament (Ryuo) & Conqueror’s Haki',
    ],
    traits: [
      'Carries Wado Ichimonji, Sandai Kitetsu & Enma',
      'Hopelessly, famously lost — always',
      'Drinks like a fish, sleeps like one too',
      'Pain tolerance with no known ceiling',
    ],
    portrait: '/characters/zoro.webp',
    accent: '#5fae3f',
  },
  {
    slug: 'nami',
    name: 'Nami',
    epithet: 'Cat Burglar',
    role: 'Navigator',
    origin: 'Cocoyasi Village, Conomi Islands',
    sea: 'East Blue',
    bounty: '366,000,000',
    firstBounty: '16,000,000',
    dream: 'To draw a complete map of the world.',
    power: 'Sorcery Clima-Tact',
    powerType: 'No Devil Fruit — weather science & navigation',
    about:
      'Nami can feel a change in the weather on her skin days before it arrives. Usopp built her the Clima-Tact so she could weaponise it — bending temperature and air pressure into mirages, wind blades and lightning. After Wano she wields Zeus, a thundercloud that answers to her staff.',
    abilities: [
      'Thunderbolt Tempo',
      'Mirage Tempo: Fata Morgana',
      'Cyclone Tempo',
      'Zeus Breeze Tempo',
      'Raitei — Thunder Lance',
      'Reads sky and current like text',
    ],
    traits: [
      'Loves money and tangerines, in that order',
      'Tends Bell-mère’s tangerine grove on deck',
      'The crew’s treasurer and sharpest tactician',
      'Temper you do not want to test',
    ],
    portrait: '/characters/nami.webp',
    accent: '#f2963a',
  },
  {
    slug: 'usopp',
    name: 'Usopp',
    epithet: 'God Usopp · Sogeking',
    role: 'Sniper · Inventor',
    origin: 'Syrup Village',
    sea: 'East Blue',
    bounty: '500,000,000',
    firstBounty: '30,000,000',
    dream: 'To become a brave warrior of the sea.',
    power: 'Kuro Kabuto & Pop Greens',
    powerType: 'No Devil Fruit — marksmanship & botany',
    about:
      'The son of a Red-Hair pirate, Usopp is a coward with a slingshot and the best aim on the crew. His Black Kabuto fires Pop Greens — weaponised seeds that bloom into thorn fields, venus fly traps and explosions. His Observation Haki is the strongest among the Straw Hats; at Dressrosa he briefly saw the future. His tall tales also have a habit of coming true.',
    abilities: [
      'Pop Green: Devil / Sky Wolf Fang',
      'Firebird Star',
      'Certain Death: Green Star',
      'Kuro Kabuto: Boaty Banana',
      'Observation Haki — future sight (glimpsed)',
    ],
    traits: [
      'Chronic “can’t-get-on-the-ship” disease',
      'Ship’s carpenter, painter and gadgeteer',
      'Lies constantly — reality keeps catching up',
      'Brave exactly when it counts',
    ],
    portrait: '/characters/usopp.webp',
    accent: '#d98b3c',
  },
  {
    slug: 'sanji',
    name: 'Sanji',
    epithet: 'Black Leg',
    role: 'Cook',
    origin: 'Germa Kingdom (raised at the Baratie)',
    sea: 'North Blue → East Blue',
    bounty: '1,032,000,000',
    firstBounty: '77,000,000',
    dream: 'To find the All Blue.',
    power: 'Black Leg Style · Diable Jambe',
    powerType: 'No Devil Fruit — martial arts (enhanced Vinsmoke physiology)',
    about:
      'Sanji fights only with his legs so his hands stay fit to cook. Friction heats his kicks white-hot in Diable Jambe, and after Whole Cake Island his suppressed Vinsmoke genes woke — an exoskeleton body and blue Ifrit flames. He would still rather starve than raise a hand against a woman, or let a crewmate go hungry.',
    abilities: [
      'Diable Jambe: Flambage Shot',
      'Ifrit Jambe: Bien Cuit Grill Shot',
      'Concassé',
      'Party Table Kick Course',
      'Sky Walk (Geppo)',
      'Armament & Observation Haki',
    ],
    traits: [
      'Chivalry to the point of self-destruction',
      'Chain-smoker; nosebleeds near beautiful women',
      'Enhanced strength, speed and healing',
      'Never lets the crew eat badly',
    ],
    portrait: '/characters/sanji.webp',
    accent: '#e8c53f',
  },
]

export type Power = {
  name: string
  jp: string
  holder: string
  kind: string
  blurb: string
}

export const POWERS: Power[] = [
  {
    name: 'Gomu Gomu no Mi',
    jp: 'ゴムゴムの実',
    holder: 'Luffy',
    kind: 'Devil Fruit · Paramecia / Mythical Zoan',
    blurb:
      'Turns the body to rubber — immune to blunt force and electricity. Its true name is the Hito Hito no Mi, Model: Nika, a fruit of freedom whose awakening lets Luffy stretch the world itself.',
  },
  {
    name: 'Santoryu',
    jp: '三刀流',
    holder: 'Zoro',
    kind: 'Sword style · no fruit',
    blurb:
      'Three katana at once — two gripped, one bitten. Armament Haki lets the blades cut through steel and Logia alike; the demonic aura of Asura conjures six phantom arms and nine swords.',
  },
  {
    name: 'Clima-Tact',
    jp: '天候棒',
    holder: 'Nami',
    kind: 'Weapon · weather science',
    blurb:
      'A three-piece staff that spins up heat, cold and static into artificial storms — mirages to confuse, wind to cut, lightning to finish. Fused with the homie Zeus for a living thundercloud.',
  },
  {
    name: 'Pop Greens',
    jp: 'ポップグリーン',
    holder: 'Usopp',
    kind: 'Ammunition · botany',
    blurb:
      'Carnivorous plant seeds fired from the Black Kabuto slingshot. They bloom on impact into thorn thickets, giant fly-traps and blast pods — backed by the crew’s sharpest Observation Haki.',
  },
  {
    name: 'Black Leg Style',
    jp: '黒足',
    holder: 'Sanji',
    kind: 'Martial art · no fruit',
    blurb:
      'Hands are for cooking, so everything is a kick. Friction ignites the leg in Diable Jambe; awakened Vinsmoke genes push it to the blue flames of Ifrit Jambe and an exoskeleton that shrugs off blades.',
  },
  {
    name: 'Haki',
    jp: '覇気',
    holder: 'The whole crew',
    kind: 'Willpower',
    blurb:
      'Armament hardens an invisible armour and lets you strike Logia users. Observation senses presence and predicts attacks. Conqueror’s — one in a million — overpowers weaker wills outright.',
  },
]

export const WORLD = [
  {
    k: 'East Blue',
    v: 'The weakest of the four seas, and where the crew was born one recruit at a time.',
  },
  {
    k: 'Devil Fruits',
    v: 'Eat one and the sea takes your ability to swim in exchange for the impossible. Paramecia, Zoan, Logia.',
  },
  {
    k: 'The Grand Line',
    v: 'A belt of ocean where compasses spin uselessly and a Log Pose is the only way through.',
  },
  {
    k: 'The One Piece',
    v: 'Everything Gol D. Roger owned, left in one place at the end of the Grand Line. The whole world is looking.',
  },
]
