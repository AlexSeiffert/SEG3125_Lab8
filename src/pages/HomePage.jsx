import { Box, Button, Container, Stack, Typography } from '@mui/material';
import homePageHero from '../assets/homePageHero.png';
import GamePosterCard from '../components/GamePosterCard';
import GameReviewCard from '../components/GameReviewCard';
import SectionHeader from '../components/SectionHeader';
import { FEATURED_SECTIONS } from '../constants/homeContent';
import * as styles from '../styles/appStyles';

export default function HomePage({
  featuredGames,
  featuredReviews,
  onNavigate,
  onOpenGame,
}) {
  return (
    <Box component="main" sx={styles.mainSx}>
      <Container maxWidth={false} disableGutters>
        <Box id="homePageHero">
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={3}
            sx={{ ...styles.heroRowSx, px: { xs: 3, md: 0 }, py: { xs: 5, md: 2 } }}
          >
            <Stack direction="column" spacing={3} sx={{ ...styles.heroTextColumnSx, width: { xs: '100%', md: '30%' } }}>
              <Typography variant="h1">Your home for video game discovery</Typography>
              <Typography variant="h5" sx={styles.heroSubtitleSx}>
                Track what you play. Share what you think. Discover what&apos;s next.
              </Typography>
              <Stack direction="row" spacing={2} sx={styles.heroActionsSx}>
                <Button variant="contained" sx={styles.heroPrimaryButtonSx} onClick={() => onNavigate('discover')}>
                  <Typography variant="subtitle1" sx={styles.heroPrimaryButtonTextSx}>
                    Discover
                  </Typography>
                </Button>
                <Button variant="outlined" sx={styles.heroSecondaryButtonSx} onClick={() => onNavigate('library')}>
                  <Typography variant="subtitle1" sx={styles.heroSecondaryButtonTextSx}>
                    My Game Library
                  </Typography>
                </Button>
              </Stack>
            </Stack>
            <Box sx={{ ...styles.heroImageWrapSx, width: { xs: '100%', md: '58%' } }}>
              <Box component="img" src={homePageHero} alt="GameShelf hero" sx={styles.heroImageSx} />
            </Box>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth={false} disableGutters>
        <Box id="featuredGames">
          <SectionHeader
            title={FEATURED_SECTIONS.games.title}
            subtitle={FEATURED_SECTIONS.games.subtitle}
          />
          <Box id="featuredGamesGrid" sx={styles.featuredGamesGridSx}>
            {featuredGames.map((game) => (
              <GamePosterCard
                key={`featured-game-${game.id}`}
                title={game.title}
                posterSrc={game.posterUrl}
                subtitle={`${game.developer} · ${game.releaseYear}`}
                sx={styles.featuredGameCardSx}
                onClick={() => onOpenGame(game.id)}
              />
            ))}
          </Box>
        </Box>
      </Container>

      <Container maxWidth={false} disableGutters>
        <Box id="featuredReviews" sx={{ pb: 4 }}>
          <SectionHeader
            title={FEATURED_SECTIONS.reviews.title}
            subtitle={FEATURED_SECTIONS.reviews.subtitle}
          />
          <Stack
            direction={{ xs: 'column', xl: 'row' }}
            spacing={4}
            sx={{ mt: 4, py: 1, justifyContent: 'center', px: { xs: 3, md: 10 } }}
          >
            {featuredReviews.map((review) => (
              <Box key={`featured-review-${review.id}`} sx={{ mt: { xl: 4 } }}>
                <GameReviewCard
                  title={review.title}
                  reviewText={review.reviewText}
                  username={review.username}
                  date={review.date}
                  rating={review.rating}
                  posterSrc={review.posterUrl}
                />
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
