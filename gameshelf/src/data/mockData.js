export const mockFeaturedGames = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Game ${index + 1}`,
  posterUrl: "",
}));

export const mockFeaturedReviews = Array.from({ length: 3 }, (_, index) => ({
  id: index + 1,
  title: `Game ${index + 1}`,
  reviewText: "Add your review text here.",
  username: "Username",
  date: "Month DD, YYYY",
  posterUrl: "",
}));
