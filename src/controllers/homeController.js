import { listFeaturedGames, listAllGames } from '../services/gameService';
import { listFeaturedReviews, listAllReviews } from '../services/reviewService';

export async function getHomeViewModel() {
  const [featuredGames, featuredReviews, allGames, allReviews] = await Promise.all([
    listFeaturedGames(),
    listFeaturedReviews(),
    listAllGames(),
    listAllReviews(),
  ]);

  return {
    featuredGames,
    featuredReviews,
    allGames,
    allReviews,
  };
}
