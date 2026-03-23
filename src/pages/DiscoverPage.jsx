import { useMemo, useState } from "react";
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GamePosterCard from "../components/GamePosterCard";

export default function DiscoverPage({ games, onOpenGame }) {
  const [query, setQuery] = useState("");

  const filteredGames = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return games;
    }

    return games.filter((game) => {
      const haystack = [game.title, game.developer, ...game.platforms]
        .join(" ")
        .toLowerCase();
      return haystack.includes(normalized);
    });
  }, [games, query]);

  return (
    <Container maxWidth="xl" sx={{ py: 5, px: { xs: 3, md: 8 } }}>
      <Stack spacing={2}>
        <Typography variant="h2">Discover</Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "#626a7a", maxWidth: 760 }}
        >
          Search by title, developer, or platform.
        </Typography>
        <TextField
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Quick search for a game"
          InputProps={{
            startAdornment: <InputAdornment position="start">⌕</InputAdornment>,
          }}
          sx={{ maxWidth: 520, mt: 1 }}
        />
      </Stack>

      <Box
        sx={{
          mt: 4,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
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
        <Typography variant="body1" sx={{ mt: 5, color: "#6a6d75" }}>
          No games match your search.
        </Typography>
      ) : null}
    </Container>
  );
}
