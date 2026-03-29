import { useMemo, useState } from 'react';
import {
  Box,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import GamePosterCard from '../components/GamePosterCard';

export default function DiscoverPage({ games, onOpenGame, tr }) {
  const [query, setQuery] = useState('');
  // MODIFIED: platform filter and sort controls added
  const [platformFilter, setPlatformFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');

  const allPlatforms = useMemo(() => {
    const values = new Set();
    games.forEach((game) => game.platforms.forEach((platform) => values.add(platform)));
    return Array.from(values).sort();
  }, [games]);

  const filteredGames = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    let nextGames = games.filter((game) => {
      const matchesQuery =
        !normalized ||
        [game.title, game.developer, ...game.platforms]
          .join(' ')
          .toLowerCase()
          .includes(normalized);

      const matchesPlatform =
        platformFilter === 'all' || game.platforms.includes(platformFilter);

      return matchesQuery && matchesPlatform;
    });

    if (sortBy === 'newest') {
      nextGames = [...nextGames].sort((a, b) => b.releaseYear - a.releaseYear);
    } else if (sortBy === 'rating') {
      nextGames = [...nextGames].sort((a, b) => b.releaseYear - a.releaseYear);
    }

    return nextGames;
  }, [games, platformFilter, query, sortBy]);

  return (
    <Container maxWidth="xl" sx={{ py: 5, px: { xs: 3, md: 8 } }}>
      <Stack spacing={2}>
        <Typography variant="h2">{tr('discover.title')}</Typography>
        <Typography variant="subtitle1" sx={{ color: '#626a7a', maxWidth: 760 }}>
          {tr('discover.subtitle')}
        </Typography>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ xs: 'stretch', md: 'flex-end' }}
        >
          <TextField
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={tr('discover.searchPlaceholder')}
            InputProps={{
              startAdornment: <InputAdornment position="start">⌕</InputAdornment>,
            }}
            sx={{ minWidth: { xs: '100%', md: 420 } }}
          />

          <FormControl sx={{ minWidth: { xs: '100%', md: 220 } }}>
            <InputLabel>{tr('discover.platformFilter')}</InputLabel>
            <Select
              value={platformFilter}
              label={tr('discover.platformFilter')}
              onChange={(event) => setPlatformFilter(event.target.value)}
            >
              <MenuItem value="all">{tr('discover.allPlatforms')}</MenuItem>
              {allPlatforms.map((platform) => (
                <MenuItem key={`platform-${platform}`} value={platform}>
                  {platform}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: { xs: '100%', md: 220 } }}>
            <InputLabel>{tr('discover.sortBy')}</InputLabel>
            <Select
              value={sortBy}
              label={tr('discover.sortBy')}
              onChange={(event) => setSortBy(event.target.value)}
            >
              <MenuItem value="popular">{tr('discover.sort.popular')}</MenuItem>
              <MenuItem value="newest">{tr('discover.sort.newest')}</MenuItem>
              <MenuItem value="rating">{tr('discover.sort.rating')}</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>

      <Box
        sx={{
          mt: 4,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 4,
        }}
      >
        {filteredGames.map((game) => (
          <GamePosterCard
            key={`discover-game-${game.id}`}
            title={game.title}
            subtitle={`${game.developer} · ${game.platforms[0]}`}
            posterSrc={game.posterUrl}
            width="100%"
            height={350}
            onClick={() => onOpenGame(game.id)}
          />
        ))}
      </Box>

      {!filteredGames.length ? (
        <Typography variant="body1" sx={{ mt: 5, color: '#6a6d75' }}>
          {tr('discover.empty')}
        </Typography>
      ) : null}
    </Container>
  );
}