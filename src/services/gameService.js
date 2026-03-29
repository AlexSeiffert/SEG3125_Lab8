import { mockGames } from '../data/mockData';
// MODIFIED: service now tries API first, then falls back to mocks.
import { getJson, hasApiBase } from './apiClient';

export async function listAllGames() {
  if (!hasApiBase()) {
    return mockGames;
  }

  try {
    return await getJson('/games');
  } catch {
    return mockGames;
  }
}

export async function listFeaturedGames() {
  if (!hasApiBase()) {
    return mockGames.filter((game) => game.isFeatured);
  }

  try {
    return await getJson('/games/featured');
  } catch {
    return mockGames.filter((game) => game.isFeatured);
  }
}

export async function getGameById(gameId) {
  if (!hasApiBase()) {
    return mockGames.find((game) => game.id === Number(gameId)) || null;
  }

  try {
    return await getJson(`/games/${gameId}`);
  } catch {
    return mockGames.find((game) => game.id === Number(gameId)) || null;
  }
}