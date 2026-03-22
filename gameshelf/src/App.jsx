import { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Stack,
  Container,
  Box,
  Typography,
  ThemeProvider,
  Button,
} from "@mui/material";
import homePageHero from "./assets/homePageHero.png";
import theme from "./theme";
import * as styles from "./styles/appStyles";
import GamePosterCard from "./components/GamePosterCard";
import GameReviewCard from "./components/GameReviewCard";
import SectionHeader from "./components/SectionHeader";
import { getHomeViewModel } from "./controllers/homeController";
import { FEATURED_SECTIONS, NAV_ITEMS } from "./constants/homeContent";

export default function App() {
  const [featuredGames, setFeaturedGames] = useState([]);
  const [featuredReviews, setFeaturedReviews] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const loadHomeData = async () => {
      const viewModel = await getHomeViewModel();

      if (!isMounted) {
        return;
      }

      setFeaturedGames(viewModel.featuredGames || []);
      setFeaturedReviews(viewModel.featuredReviews || []);
    };

    loadHomeData();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={styles.appShellSx}>
        <AppBar position="static" sx={styles.headerBarSx}>
          <Toolbar sx={styles.toolbarSx}>
            <Stack direction="row">
              <Typography variant="h2" sx={{ color: "#000", fontWeight: 800 }}>
                Game
              </Typography>
              <Typography
                variant="h2"
                sx={{ color: "#40559A", fontWeight: 800 }}
              >
                Shelf
              </Typography>
            </Stack>
            <Stack direction="row" spacing={9}>
              {NAV_ITEMS.map((item) => (
                <Button
                  key={`nav-item-${item.label}`}
                  disableRipple
                  sx={{
                    ...styles.navButtonBaseSx,
                    ...(item.isActive
                      ? styles.navButtonActiveSx
                      : styles.navButtonDefaultSx),
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Stack>
          </Toolbar>
        </AppBar>
        <Box component="main" sx={styles.mainSx}>
          <Container maxWidth={false} disableGutters>
            <Box id="homePageHero">
              <Stack direction="row" spacing={3} sx={styles.heroRowSx}>
                <Stack
                  direction="column"
                  spacing={3}
                  sx={styles.heroTextColumnSx}
                >
                  <Typography variant="h1">
                    Your home for video game discovery
                  </Typography>
                  <Typography variant="h5" sx={styles.heroSubtitleSx}>
                    Track what you play. Share what you think. Discover what's
                    next.
                  </Typography>
                  <Stack direction="row" spacing={3} sx={styles.heroActionsSx}>
                    <Button variant="contained" sx={styles.heroPrimaryButtonSx}>
                      <Typography
                        variant="h6"
                        sx={styles.heroPrimaryButtonTextSx}
                      >
                        Discover
                      </Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      sx={styles.heroSecondaryButtonSx}
                    >
                      <Typography
                        variant="h6"
                        sx={styles.heroSecondaryButtonTextSx}
                      >
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
                    sx={styles.featuredGameCardSx}
                  />
                ))}
              </Box>
            </Box>
          </Container>
          <Container maxWidth={false} disableGutters>
            <Box id="featuredReviews">
              <SectionHeader
                title={FEATURED_SECTIONS.reviews.title}
                subtitle={FEATURED_SECTIONS.reviews.subtitle}
              />
              <Stack
                direction="row"
                spacing={8}
                sx={{ mt: 4, py: 1, justifyContent: "center" }}
              >
                {featuredReviews.map((review) => (
                  <Box key={`featured-review-${review.id}`} sx={{ mt: 4 }}>
                    <GameReviewCard
                      title={review.title}
                      reviewText={review.reviewText}
                      username={review.username}
                      date={review.date}
                      posterSrc={review.posterUrl}
                    />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>
        <Box component="footer" sx={styles.footerSx}>
          <Container maxWidth="lg">
            <Typography variant="body2" color="textSecondary" align="center">
              © 2026 GameShelf. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
