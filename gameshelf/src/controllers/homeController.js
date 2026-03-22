import { listFeaturedGames } from "../services/gameService";
import { listFeaturedReviews } from "../services/reviewService";

export async function getHomeViewModel() {
  const [featuredGames, featuredReviews] = await Promise.all([
    listFeaturedGames(),
    listFeaturedReviews(),
  ]);

  return {
    featuredGames,
    featuredReviews,
  };
}
