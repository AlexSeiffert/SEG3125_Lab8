import { Avatar, Box, Container, Stack, TextField, Typography } from '@mui/material';
import GamePosterCard from '../components/GamePosterCard';
import StarRating from '../components/StarRating';
import * as styles from '../styles/appStyles';
import SectionHeader from '../components/SectionHeader';



export default function LibraryPage({ libraryGames, onOpenGame }) {
  // Sort games to get top 3 locally. Since mock data doesn't have userScore, we'll just slice the first 3
  // If libraryGames is empty or undefined, use a filler array to ensure 3 spots exist
  const topThreeGames = libraryGames && libraryGames.length >= 3 
    ? [...libraryGames].slice(0, 3)
    : (libraryGames || []).slice(0, 3);
    
  // To show visually what the 3 games look like even if state is empty, we force it to show dummy placeholders if empty
  const filledTopThree = topThreeGames.length === 3 ? topThreeGames : [
    { id: 1, title: 'ARC Raiders', releaseYear: 2025, developer: 'Embark Studios', posterUrl: '' },
    { id: 2, title: 'Hades II', releaseYear: 2024, developer: 'Supergiant Games', posterUrl: '' },
    { id: 3, title: 'Balatro', releaseYear: 2024, developer: 'LocalThunk', posterUrl: '' }
  ];

  const gameNames = ['Hades II', 'ARC Raiders', 'Pokemon Pokopia', 'MarioKart World', 'Resident Evil', 'Marathon', 'Marvel Rivals', 'Slay the Spire II'];
  const getRandomGames = (min, max, rated) => {
    const count = Math.floor(Math.random() * (max - min + 1)) + min;
    const shuffled = [...gameNames].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count).map((name, idx) => ({
      id: `mock-${idx}-${name.replace(/\s+/g, '')}`,
      title: name,
      rating: rated ? Math.floor(Math.random() * 2) + 3 : undefined
    }));
  };

  const highestRated = getRandomGames(5, 7, true);
  const recentlyRated = getRandomGames(2, 4, true);
  const savedForLater = getRandomGames(4, 7, false);

  return (
     <Box component="main" sx={styles.mainSx}>
      <Stack direction="row" sx={{ mt: 4, px: { xs: 3, md: 8 } }}>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, gap: 2 }}>
              <Avatar sx={{ width: 80, height: 80 }} />
              <Box>
                <Typography variant="h4" sx={{ mb: 0 }}>
                  KickedElk9421
                </Typography>
                <Typography variant="h5" sx={{ mb: 0 }}>
                  useremail@email.com
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%', pr: { xs: 0, md: 4 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Username
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  KickedElk9421
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Email Account
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  useremail@email.com
                </Typography>
              </Box>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="body1" color="text.secondary">
                  Mobile Number
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">
                  123-456-7890
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Your Top 3 Games:</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 3, pt: 3 }}>
            {filledTopThree.map((game) => (
              <GamePosterCard
                key={`top-3-${game.id}`}
                title={game.title}
                posterSrc={game.posterUrl}
                subtitle={`${game.developer} · ${game.releaseYear}`}
                width={220}
                height={335}
                onClick={() => onOpenGame(game.id)}
              />
            ))}
          </Box>
        </Box>
      </Stack>

      <Box sx={{ mt: 8, px: { xs: 3, md: 8 }, pb: 6 }}>
        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Your Highest Rated Games
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'nowrap', overflowX: 'auto', pb: 2 }}>
            {highestRated.map((game) => (
              <Box key={game.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <GamePosterCard
                  title={game.title}
                  showTitle={false}
                  width={150}
                  height={220}
                  onClick={() => onOpenGame?.(game.id)}
                />
                <Box sx={{ mt: 1 }}>
                  <StarRating value={game.rating} max={5} size={20} readOnly />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Recently Rated
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'nowrap', overflowX: 'auto', pb: 2 }}>
            {recentlyRated.map((game) => (
              <Box key={game.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <GamePosterCard
                  title={game.title}
                  showTitle={false}
                  width={150}
                  height={220}
                  onClick={() => onOpenGame?.(game.id)}
                />
                <Box sx={{ mt: 1 }}>
                  <StarRating value={game.rating} max={5} size={20} readOnly />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Saved For Later
          </Typography>
          <Box sx={{ display: 'flex', gap: 3, flexWrap: 'nowrap', overflowX: 'auto', pb: 2 }}>
            {savedForLater.map((game) => (
              <Box key={game.id} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <GamePosterCard
                  title={game.title}
                  showTitle={false}
                  width={150}
                  height={220}
                  onClick={() => onOpenGame?.(game.id)}
                />
              </Box>
            ))}
          </Box>

          
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
            Your Reviews
          </Typography>
          

          
        </Box>
      </Box>
     </Box>
  );
}
