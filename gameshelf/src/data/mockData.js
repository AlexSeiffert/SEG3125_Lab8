import arcRaidersPoster from '../assets/ARC Raiders.jpg';
import balatroPoster from '../assets/Balatro.jpg';
import eldenRingPoster from '../assets/Elden Ring.jpg';
import hadesIIPoster from '../assets/Hades II.webp';
import hollowKnightPoster from '../assets/Hollow Knight.webp';
import stardewValleyPoster from '../assets/Stardew Valley.png';
import residentEvilRequiem from '../assets/Resident Evil Requiem.avif';

export const mockGames = [
  {
    id: 1,
    title: 'ARC Raiders',
    releaseYear: 2025,
    developer: 'Embark Studios',
    platforms: ['PlayStation 5', 'Windows', 'Xbox Series X/S'],
    description:
      'ARC Raiders is a multiplayer extraction adventure, set in a lethal future earth, ravaged by a mysterious mechanized threat known as ARC. Enlist as a Raider and scavenge the surface to thrive in a desolate world. But beware of the machines. Beware of Raiders preying on others.',
    posterUrl: arcRaidersPoster,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Hades II',
    releaseYear: 2025,
    developer: 'Supergiant Games',
    platforms: ['Windows', 'Nintendo Switch 2'],
    description:
      'Hades II is a fast-paced action roguelike in which Melinoë fights through mythic realms, gathers arcane powers, and reshapes each run through repeated experimentation.',
    posterUrl: hadesIIPoster,
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Balatro',
    releaseYear: 2024,
    developer: 'LocalThunk',
    platforms: ['Windows', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X/S'],
    description:
      'Balatro is a poker-inspired deck-building roguelike focused on scoring synergies, risk-reward decisions, and compact strategic runs.',
    posterUrl: balatroPoster,
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Elden Ring',
    releaseYear: 2022,
    developer: 'FromSoftware',
    platforms: ['PlayStation 5', 'Windows', 'Xbox Series X/S'],
    description:
      'Elden Ring is an open-world action role-playing game built around difficult combat, large-scale exploration, and environmental storytelling.',
    posterUrl: eldenRingPoster,
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Hollow Knight',
    releaseYear: 2017,
    developer: 'Team Cherry',
    platforms: ['Windows', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X/S'],
    description:
      'Hollow Knight is a side-scrolling action adventure known for precise movement, atmospheric worldbuilding, and interconnected exploration.',
    posterUrl: hollowKnightPoster,
    isFeatured: true,
  },
  {
    id: 6,
    title: 'Stardew Valley',
    releaseYear: 2016,
    developer: 'ConcernedApe',
    platforms: ['Windows', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X/S', 'Mobile'],
    description:
      'Stardew Valley is a farming and life simulation game centered on routine, gradual progression, and a relaxed sense of discovery.',
    posterUrl: stardewValleyPoster,
    isFeatured: true,
  },
  {
    id: 7,
    title: 'Resident Evil Requiem',
    releaseYear: 2025,
    developer: 'Capcom',
    platforms: ['PlayStation 5', 'Windows', 'Xbox Series X/S'],
    description:
      'Resident Evil Requiem leans into horror atmosphere, survival pressure, and cinematic dread within a tightly controlled setting.',
    posterUrl: residentEvilRequiem,
    isFeatured: true,
  },
];

const gameById = Object.fromEntries(mockGames.map((game) => [game.id, game]));

export const mockReviews = [
  {
    id: 1,
    gameId: 1,
    title: 'ARC Raiders',
    reviewText:
      'Man just buy it, play it, and have fun. PvP, or PvE. Be good, be bad. In this game it does not matter. Don’t take the game too seriously and just have a good time.',
    username: 'KickedElk9421',
    date: 'March 8th, 2026',
    rating: 5,
    posterUrl: gameById[1].posterUrl,
    isFeatured: true,
  },
  {
    id: 2,
    gameId: 1,
    title: 'ARC Raiders',
    reviewText:
      'The atmosphere is strong and the scavenging loop works well. Early encounters could still explain risk a little more clearly.',
    username: 'SnowySniper77',
    date: 'March 6th, 2026',
    rating: 4,
    posterUrl: gameById[1].posterUrl,
    isFeatured: false,
  },
  {
    id: 3,
    gameId: 2,
    title: 'Hades II',
    reviewText:
      'Fast, elegant, and immediately readable. The combat rhythm feels excellent.',
    username: 'NightBloom',
    date: 'March 7th, 2026',
    rating: 5,
    posterUrl: gameById[2].posterUrl,
    isFeatured: false,
  },
  {
    id: 4,
    gameId: 3,
    title: 'Balatro',
    reviewText:
      'Very easy to start, very hard to stop. The scoring combos are surprisingly addictive.',
    username: 'CardShark',
    date: 'March 5th, 2026',
    rating: 5,
    posterUrl: gameById[3].posterUrl,
    isFeatured: false,
  },
];