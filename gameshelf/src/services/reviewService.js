import { mockReviews } from '../data/mockData';

export async function listAllReviews() {
  return mockReviews;
}

export async function listFeaturedReviews() {
  return mockReviews.filter((review) => review.isFeatured);
}

export async function listReviewsByGameId(gameId) {
  return mockReviews.filter((review) => review.gameId === Number(gameId));
}
