import { useMemo, useState } from 'react';
import { Box, Container, Stack, TextField, Typography } from '@mui/material';
import GamePosterCard from '../components/GamePosterCard';
import SectionHeader from '../components/SectionHeader';
import * as styles from '../styles/appStyles';
import discoverPageHero from '../assets/discoverPageHero.png';

export default function DiscoverPage({ games, onOpenGame }) {
  const [query, setQuery] = useState('');

  const filteredGames = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return null; // Return null when no search is active
    }

    return games.filter((game) => {
      const haystack = [game.title, game.developer, ...game.platforms]
        .join(' ')
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [games, query]);

  const multiplayerGames = useMemo(() => {
    const list = games.filter(g => g.features && g.features.includes('Multiplayer'));
    if (list.length < 5) {
      const needed = 5 - list.length;
      const others = games.filter(g => !list.includes(g)).sort(() => 0.5 - Math.random());
      list.push(...others.slice(0, needed));
    }
    return list.slice(0, 5);
  }, [games]);
  
  const sportsGames = useMemo(() => {
    const list = games.filter(g => g.genres && g.genres.includes('Sports'));
    if (list.length < 5) {
      const needed = 5 - list.length;
      const others = games.filter(g => !list.includes(g)).sort(() => 0.5 - Math.random());
      list.push(...others.slice(0, needed));
    }
    return list.slice(0, 5);
  }, [games]);
  
  const similarToHades = useMemo(() => {
    const list = games.filter(g => g.genres && g.genres.includes('Action') && g.id !== 'hades2');
    if (list.length < 5) {
      const needed = 5 - list.length;
      const others = games.filter(g => !list.includes(g) && g.id !== 'hades2').sort(() => 0.5 - Math.random());
      list.push(...others.slice(0, needed));
    }
    return list.slice(0, 5);
  }, [games]);
  
  const topThisMonth = useMemo(() => 
    [...games].sort((a, b) => b.userScore - a.userScore).slice(0, 5), 
    [games]
  );

  return (
    <Box component="main" sx={styles.mainSx}>
      <Container maxWidth={false} disableGutters>
        <Box id="discoverPageHero" sx={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
          <Box 
            component="img" 
            src={discoverPageHero} 
            alt="GameShelf hero" 
            sx={{ 
              width: '100%', 
              height: { xs: 300, md: 400 }, 
              objectFit: 'cover'
            }} 
          />
          <Stack 
            direction="column" 
            spacing={4} 
            alignItems="center"
            sx={{ 
              position: 'absolute', 
              top: '50%', 
              transform: 'translateY(-50%)', 
              textAlign: 'center', 
              width: '100%', 
              maxWidth: '800px',
              px: { xs: 3, md: 5 } 
            }}
          >
            <Typography variant="h1" sx={{ color: 'black', fontWeight: 'bold' }}>
              Discover your next favorite game
            </Typography>
            
            <TextField
              fullWidth
              placeholder="Search by title, developer, or platform..."
              variant="outlined"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.9)', 
                borderRadius: 1,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'transparent',
                  },
                  '&:hover fieldset': {
                    borderColor: 'transparent',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'primary.main',
                  },
                },
              }}
            />
          </Stack>
        </Box>
      </Container>


      <Container maxWidth={false} disableGutters sx={{ py: 6 }}>
        {/* If user is actively searching, show search results grid */}
        {filteredGames !== null ? (
          <>
            <SectionHeader title="Search Results" subtitle={`Found ${filteredGames.length} games`} />
            <Box id="discoverGamesGrid" sx={styles.featuredGamesGridSx}>
              {filteredGames.map((game) => (
                <GamePosterCard
                  key={`discover-search-${game.id}`}
                  title={game.title}
                  posterSrc={game.posterUrl}
                  subtitle={`${game.developer} · ${game.releaseYear}`}
                  sx={styles.featuredGameCardSx}
                  onClick={() => onOpenGame(game.id)}
                />
              ))}
            </Box>

            {filteredGames.length === 0 && (
              <Typography variant="h6" sx={{ textAlign: 'center', color: 'text.secondary', mt: 4 }}>
                No games found matching your search.
              </Typography>
            )}
          </>
        ) : (
          /* If no search is active, show the discovery sections */
          <Stack spacing={8}>
            <Box>
              <SectionHeader title="Multiplayer Games" />
              <Box sx={styles.featuredGamesGridSx}>
                {multiplayerGames.map((game) => (
                  <GamePosterCard key={`multiplayer-${game.id}`} title={game.title} posterSrc={game.posterUrl} subtitle={`${game.developer} · ${game.releaseYear}`} sx={styles.featuredGameCardSx} onClick={() => onOpenGame(game.id)} />
                ))}
              </Box>
            </Box>

            <Box>
              <SectionHeader title="Sports Games" />
              <Box sx={styles.featuredGamesGridSx}>
                {sportsGames.map((game) => (
                  <GamePosterCard key={`sports-${game.id}`} title={game.title} posterSrc={game.posterUrl} subtitle={`${game.developer} · ${game.releaseYear}`} sx={styles.featuredGameCardSx} onClick={() => onOpenGame(game.id)} />
                ))}
              </Box>
            </Box>

            <Box>
              <SectionHeader title="Since You Liked Hades 2" />
              <Box sx={styles.featuredGamesGridSx}>
                {similarToHades.map((game) => (
                  <GamePosterCard key={`hades-similar-${game.id}`} title={game.title} posterSrc={game.posterUrl} subtitle={`${game.developer} · ${game.releaseYear}`} sx={styles.featuredGameCardSx} onClick={() => onOpenGame(game.id)} />
                ))}
              </Box>
            </Box>

            <Box>
              <SectionHeader title="Top Games This Month" />
              <Box sx={styles.featuredGamesGridSx}>
                {topThisMonth.map((game) => (
                  <GamePosterCard key={`top-${game.id}`} title={game.title} posterSrc={game.posterUrl} subtitle={`${game.developer} · ${game.releaseYear}`} sx={styles.featuredGameCardSx} onClick={() => onOpenGame(game.id)} />
                ))}
              </Box>
            </Box>
          </Stack>
        )}
      </Container>
      
    </Box>
  );
}
