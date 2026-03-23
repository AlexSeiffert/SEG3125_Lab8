import arcRaidersPoster from '../assets/ARC Raiders.jpg';
import balatroPoster from '../assets/Balatro.jpg';
import eldenRingPoster from '../assets/Elden Ring.jpg';
import hadesIIPoster from '../assets/Hades II.webp';
import hollowKnightPoster from '../assets/Hollow Knight.webp';
import stardewValleyPoster from '../assets/Stardew Valley.png';
import residentEvilRequiemPoster from '../assets/Resident Evil Requiem.avif';

const descriptions = {
  1: 'ARC Raiders is a cooperative extraction shooter set in a hostile future where scavengers descend from underground shelters to search for supplies and survive encounters with mechanical enemies.',
  2: 'Hades II is a fast-paced action roguelike that follows Melinoë through mythic battles, magical upgrades, and repeated escape attempts shaped by player choice.',
  3: 'Balatro blends poker-inspired deckbuilding with score-chasing strategy, rewarding experimentation with synergies, multipliers, and unusual card combinations.',
  4: 'Stardew Valley is a farming and life simulation game in which players restore a run-down farm, build relationships, and gradually shape the rhythm of daily life.',
  5: 'Elden Ring is a large-scale action role-playing game focused on exploration, build customization, and difficult encounters across an open fantasy world.',
  6: 'Hollow Knight is a hand-drawn action adventure game featuring atmospheric exploration, precision combat, and interconnected world design.',
  7: 'Resident Evil Requiem is a survival horror experience built around tension, resource management, and a cinematic atmosphere of dread.',
};

export const mockGames = [
  {
    id: 1,
    title: 'ARC Raiders',
    releaseYear: 2025,
    developer: 'Embark Studios',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description: descriptions[1],
    posterUrl: arcRaidersPoster,
    isFeatured: true,
  },
  {
    id: 2,
    title: 'Hades II',
    releaseYear: 2024,
    developer: 'Supergiant Games',
    platforms: ['PC'],
    description: descriptions[2],
    posterUrl: hadesIIPoster,
    isFeatured: true,
  },
  {
    id: 3,
    title: 'Balatro',
    releaseYear: 2024,
    developer: 'LocalThunk',
    platforms: ['PC', 'Nintendo Switch', 'PlayStation 5', 'Xbox Series X|S'],
    description: descriptions[3],
    posterUrl: balatroPoster,
    isFeatured: true,
  },
  {
    id: 4,
    title: 'Stardew Valley',
    releaseYear: 2016,
    developer: 'ConcernedApe',
    platforms: ['PC', 'Nintendo Switch', 'PlayStation 4', 'Xbox One', 'Mobile'],
    description: descriptions[4],
    posterUrl: stardewValleyPoster,
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Elden Ring',
    releaseYear: 2022,
    developer: 'FromSoftware',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description: descriptions[5],
    posterUrl: eldenRingPoster,
    isFeatured: true,
  },
  {
    id: 6,
    title: 'Hollow Knight',
    releaseYear: 2017,
    developer: 'Team Cherry',
    platforms: ['PC', 'Nintendo Switch', 'PlayStation 4', 'Xbox One'],
    description: descriptions[6],
    posterUrl: hollowKnightPoster,
    isFeatured: false,
  },
  {
    id: 7,
    title: 'Resident Evil Requiem',
    releaseYear: 2026,
    developer: 'Capcom',
    platforms: ['PC', 'PlayStation 5', 'Xbox Series X|S'],
    description: descriptions[7],
    posterUrl: residentEvilRequiemPoster,
    isFeatured: false,
  },
];

const gameById = Object.fromEntries(mockGames.map((game) => [game.id, game]));

export const mockReviews = [
  {
    id: 1,
    gameId: 1,
    title: 'ARC Raiders',
    reviewText:
      'The world already has a strong mood, and the cooperative tension makes every run feel meaningful.',
    username: 'Mina',
    date: 'March 20, 2026',
    rating: 4,
    posterUrl: gameById[1].posterUrl,
    isFeatured: true,
  },
  {
    id: 2,
    gameId: 3,
    title: 'Balatro',
    reviewText:
      'A brilliantly simple idea that keeps opening into deeper strategy the longer you play.',
    username: 'Rafael',
    date: 'March 18, 2026',
    rating: 5,
    posterUrl: gameById[3].posterUrl,
    isFeatured: true,
  },
  {
    id: 3,
    gameId: 4,
    title: 'Stardew Valley',
    reviewText:
      'Still one of the easiest games to recommend when someone wants a calm but rewarding routine.',
    username: 'Aisha',
    date: 'March 16, 2026',
    rating: 5,
    posterUrl: gameById[4].posterUrl,
    isFeatured: true,
  },
  {
    id: 4,
    gameId: 1,
    title: 'ARC Raiders',
    reviewText:
      'I like the premise, but I want a little more feedback during early missions.',
    username: 'Theo',
    date: 'March 14, 2026',
    rating: 3,
    posterUrl: gameById[1].posterUrl,
    isFeatured: false,
  },
  {
    id: 5,
    gameId: 2,
    title: 'Hades II',
    reviewText:
      'The combat feels sharp and the visual style is immediately recognizable.',
    username: 'Jun',
    date: 'March 13, 2026',
    rating: 5,
    posterUrl: gameById[2].posterUrl,
    isFeatured: false,
  },
  {
    id: 6,
    gameId: 5,
    title: 'Elden Ring',
    reviewText:
      'Massive world, memorable bosses, and an enormous amount of freedom in how you build your character.',
    username: 'Luca',
    date: 'March 11, 2026',
    rating: 5,
    posterUrl: gameById[5].posterUrl,
    isFeatured: false,
  },
  {
    id: 7,
    gameId: 7,
    title: 'Resident Evil Requiem',
    reviewText:
      'The atmosphere is excellent, and the presentation makes even slower moments feel tense.',
    username: 'Noah',
    date: 'March 10, 2026',
    rating: 4,
    posterUrl: gameById[7].posterUrl,
    isFeatured: false,
  },
];

export const mockFeaturedGames = mockGames.filter((game) => game.isFeatured);
export const mockFeaturedReviews = mockReviews.filter((review) => review.isFeatured);

export function getGameById(gameId) {
  return gameById[gameId] || null;
}

export function getReviewsByGameId(gameId) {
  return mockReviews.filter((review) => review.gameId === gameId);
}