import { Box, Button, Container, Stack, Typography } from '@mui/material';
import homePageHero from '../assets/homePageHero.png';
import GamePosterCard from '../components/GamePosterCard';
import SectionHeader from '../components/SectionHeader';
import {
  FEATURED_SECTIONS,
  HOME_HERO_SUBTITLE,
  HOME_HERO_TITLE,
} from '../constants/homeContent';
import * as styles from '../styles/appStyles';

export default function HomePage({ featuredGames, onNavigate, onOpenGame }) {
  return (
    <Box component="main" sx={styles.mainSx}>
      <Container maxWidth={false} disableGutters>
        <Box id="homePageHero" sx={styles.featuredTitlesSx}>
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 4, md: 3 }}
            sx={styles.heroRowSx}
          >
            <Stack direction="column" spacing={2.5} sx={styles.heroTextColumnSx}>
              <Typography variant="h1">
                {HOME_HERO_TITLE}
              </Typography>

              <Typography variant="h5" sx={styles.heroSubtitleSx}>
                {HOME_HERO_SUBTITLE}
              </Typography>

              <Stack direction="row" spacing={1.8} sx={styles.heroActionsSx}>
                <Button
                  variant="contained"
                  sx={styles.heroPrimaryButtonSx}
                  onClick={() => onNavigate('discover')}
                >
                  <Typography variant="subtitle1" sx={styles.heroPrimaryButtonTextSx}>
                    Discover
                  </Typography>
                </Button>

                <Button
                  variant="outlined"
                  sx={styles.heroSecondaryButtonSx}
                  onClick={() => onNavigate('library')}
                >
                  <Typography variant="subtitle1" sx={styles.heroSecondaryButtonTextSx}>
                    My Game Library
                  </Typography>
                </Button>
              </Stack>
            </Stack>

            <Box sx={styles.heroImageWrapSx}>
              <Box
                component="img"
                src={homePageHero}
                alt="GameShelf hero"
                sx={styles.heroImageSx}
              />
            </Box>
          </Stack>
        </Box>
      </Container>

      <Container maxWidth={false} disableGutters>
        <Box id="featuredGames" sx={styles.featuredTitlesSx}>
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
                sx={styles.featuredGameCardSx}
                onClick={() => onOpenGame(game.id)}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}