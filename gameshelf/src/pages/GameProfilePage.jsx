import { Box, Button, Container, Stack, Typography } from '@mui/material';
import StarRating from '../components/StarRating';
import * as styles from '../styles/appStyles';

function PopularReviewCard({ review }) {
  return (
    <Box sx={styles.profileReviewCardSx}>
      <Stack direction="row" spacing={2} alignItems="flex-start">
        <Box sx={styles.profileReviewAvatarSx}>☺</Box>
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#111216' }}>
            {review.username}
          </Typography>
          <Typography variant="body2" sx={{ color: '#6f7480', mt: 0.2 }}>
            {review.date}
          </Typography>
          <Box sx={{ mt: 0.8 }}>
            <StarRating value={review.rating} size={22} />
          </Box>
          <Typography variant="body1" sx={{ color: '#1b1c21', mt: 1.5, lineHeight: 1.55 }}>
            {review.reviewText}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}

export default function GameProfilePage({
  game,
  reviews,
  inLibrary,
  onBack,
  onAddToLibrary,
  onOpenReview,
}) {
  if (!game) {
    return (
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography variant="h3">Game not found</Typography>
        <Button sx={{ mt: 2 }} onClick={onBack}>
          Back
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth={false} disableGutters sx={styles.profilePageShellSx}>
      <Button onClick={onBack} sx={styles.backLinkSx}>
        ← Back
      </Button>

      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ xs: 4, lg: 6 }} sx={styles.profileTopRowSx}>
        <Box sx={styles.profileTextColumnSx}>
          <Typography variant="h2" sx={styles.profileTitleSx}>
            {game.title} ({game.releaseYear})
          </Typography>

          <Typography variant="h5" sx={styles.profileMetaLineSx}>
            <Box component="span" sx={styles.profileMetaLabelSx}>
              Developer:
            </Box>{' '}
            {game.developer}
          </Typography>

          <Typography variant="h5" sx={styles.profileMetaLineSx}>
            <Box component="span" sx={styles.profileMetaLabelSx}>
              Platforms:
            </Box>{' '}
            {game.platforms.join(', ')}
          </Typography>

          <Typography variant="h5" sx={styles.profileDescriptionSx}>
            {game.description}
          </Typography>

          <Typography variant="h3" sx={styles.profileReviewsHeadingSx}>
            Popular Reviews:
          </Typography>

          <Stack spacing={2.2} sx={{ maxWidth: 760 }}>
            {reviews.length ? (
              reviews.map((review) => <PopularReviewCard key={`game-review-${review.id}`} review={review} />)
            ) : (
              <Box sx={styles.profileReviewCardSx}>
                <Typography variant="body1">No reviews yet. Be the first to write one.</Typography>
              </Box>
            )}
          </Stack>
        </Box>

        <Box sx={styles.profilePosterColumnSx}>
          <Box
            component="img"
            src={game.posterUrl}
            alt={`${game.title} poster`}
            sx={styles.profilePosterImageSx}
          />
          <Stack direction="row" spacing={1.8} sx={styles.profileActionRowSx}>
            <Button variant="contained" sx={styles.profilePrimaryButtonSx} onClick={onOpenReview}>
              Leave a Review
            </Button>
            <Button variant="outlined" sx={styles.profileSecondaryButtonSx} onClick={onAddToLibrary}>
              {inLibrary ? 'Added to My Game Library' : 'Add to My Game Library'}
            </Button>
          </Stack>
        </Box>
      </Stack>

      <Box component="footer" sx={styles.profileFooterSx}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={{ xs: 1.5, md: 3.5 }}
          justifyContent="space-between"
          alignItems={{ xs: 'flex-start', md: 'center' }}
        >
          <Stack direction="row" spacing={2.2} alignItems="center" sx={{ color: '#6b6f79' }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 800, color: '#40559A' }}>
              GameShelf
            </Typography>
            <Typography variant="body2">Features</Typography>
            <Typography variant="body2">Learn more</Typography>
            <Typography variant="body2">Support</Typography>
          </Stack>
          <Stack direction="row" spacing={2} sx={{ color: '#6b6f79' }}>
            <Typography variant="body2">◎</Typography>
            <Typography variant="body2">in</Typography>
            <Typography variant="body2">X</Typography>
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
}
