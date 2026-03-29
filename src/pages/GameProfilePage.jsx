import {
  Box,
  Button,
  Chip,
  Container,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  Typography,
} from '@mui/material';
import GamePosterCard from '../components/GamePosterCard';
import GameReviewCard from '../components/GameReviewCard';

export default function GameProfilePage({
  game,
  reviews,
  libraryStatus,
  onBack,
  onAddToLibrary,
  onChangeLibraryStatus,
  onOpenReview,
  tr,
}) {
  if (!game) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3">{tr('profile.notFound')}</Typography>
        <Button sx={{ mt: 2 }} onClick={onBack}>
          {tr('profile.back')}
        </Button>
      </Container>
    );
  }

  // MODIFIED: average rating summary added
  const averageRating =
    reviews.length > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
      : '—';

  return (
    <Container maxWidth="xl" sx={{ py: 5, px: { xs: 3, md: 8 } }}>
      <Button onClick={onBack} sx={{ mb: 3, px: 0 }}>
        ← {tr('profile.back')}
      </Button>

      <Paper
        elevation={0}
        sx={{ border: '1px solid #e7eaf1', p: { xs: 3, md: 4 }, borderRadius: 4 }}
      >
        <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4}>
          <Box sx={{ width: { xs: '100%', lg: 280 }, flexShrink: 0 }}>
            <GamePosterCard
              title={game.title}
              posterSrc={game.posterUrl}
              width="100%"
              height={420}
              showTitle={false}
            />
          </Box>

          <Stack spacing={2} sx={{ flex: 1 }}>
            <Typography variant="h2">
              {game.title} ({game.releaseYear})
            </Typography>

            <Typography variant="subtitle1" sx={{ color: '#5f6778' }}>
              {tr('profile.developer')}: {game.developer}
            </Typography>

            <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
              {game.platforms.map((platform) => (
                <Chip key={`${game.id}-${platform}`} label={platform} variant="outlined" />
              ))}
            </Stack>

            <Stack direction="row" spacing={3} useFlexGap flexWrap="wrap">
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {tr('profile.averageRating')}: {averageRating}
              </Typography>
              <Typography variant="body1" sx={{ color: '#5f6778' }}>
                {tr('profile.reviewCount', { count: reviews.length })}
              </Typography>
            </Stack>

            <Typography variant="body1" sx={{ maxWidth: 900, color: '#20242d' }}>
              {game.description}
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button variant="contained" onClick={onOpenReview}>
                {tr('profile.leaveReview')}
              </Button>

              {!libraryStatus ? (
                <Button variant="outlined" onClick={onAddToLibrary}>
                  {tr('profile.addToLibrary')}
                </Button>
              ) : (
                // MODIFIED: replace static library state with editable status selector
                <FormControl sx={{ minWidth: 240 }}>
                  <InputLabel>{tr('profile.libraryStatus')}</InputLabel>
                  <Select
                    value={libraryStatus}
                    label={tr('profile.libraryStatus')}
                    onChange={(event) =>
                      onChangeLibraryStatus(game.id, event.target.value)
                    }
                  >
                    <MenuItem value="want_to_play">
                      {tr('library.status.want_to_play')}
                    </MenuItem>
                    <MenuItem value="playing">{tr('library.status.playing')}</MenuItem>
                    <MenuItem value="completed">{tr('library.status.completed')}</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Stack>
          </Stack>
        </Stack>
      </Paper>

      <Divider sx={{ my: 5 }} />

      <Stack spacing={2}>
        <Typography variant="h3">{tr('profile.reviews')}</Typography>
        <Typography variant="body1" sx={{ color: '#666d7d' }}>
          {tr('profile.readReviewsHelp')}
        </Typography>
      </Stack>

      <Stack direction={{ xs: 'column', xl: 'row' }} spacing={4} sx={{ mt: 4, alignItems: 'stretch' }}>
        {reviews.length ? (
          reviews.map((review) => (
            <GameReviewCard
              key={`game-review-${review.id}`}
              title={game.title}
              reviewText={review.reviewText}
              username={review.username}
              date={review.date}
              rating={review.rating}
              posterSrc={review.posterUrl}
            />
          ))
        ) : (
          <Paper
            elevation={0}
            sx={{ p: 3, border: '1px dashed #cdd3e1', borderRadius: 3, width: '100%' }}
          >
            <Typography variant="body1">{tr('profile.noReviews')}</Typography>
          </Paper>
        )}
      </Stack>
    </Container>
  );
}