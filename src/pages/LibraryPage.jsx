import { Box, Container, Typography } from '@mui/material';
import GamePosterCard from '../components/GamePosterCard';

export default function LibraryPage({ libraryGames, onOpenGame }) {
  return (
    <Container maxWidth="xl" sx={{ py: 5, px: { xs: 3, md: 8 } }}>
      <Typography variant="h2">My Game Library</Typography>
      <Typography variant="subtitle1" sx={{ color: '#5f6778', mt: 1, maxWidth: 760 }}>
        This page supports the planning process by letting users keep track of games they want to revisit or continue exploring.
      </Typography>

      {libraryGames.length ? (
        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 4,
          }}
        >
          {libraryGames.map((game) => (
            <GamePosterCard
              key={`library-game-${game.id}`}
              title={game.title}
              posterSrc={game.posterUrl}
              subtitle={`${game.developer} · ${game.releaseYear}`}
              width="100%"
              height={350}
              onClick={() => onOpenGame(game.id)}
            />
          ))}
        </Box>
      ) : (
        <Typography variant="body1" sx={{ mt: 5, color: '#666d7d' }}>
          Your library is empty. Add a title from a game profile page.
        </Typography>
      )}
    </Container>
  );
}
