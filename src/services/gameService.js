import { mockGames } from '../data/mockData';

export async function listAllGames() {
  return mockGames;
}

export async function listFeaturedGames() {
  return mockGames.filter((game) => game.isFeatured);
}

export async function getGameById(gameId) {
  return mockGames.find((game) => game.id === Number(gameId)) || null;
}
