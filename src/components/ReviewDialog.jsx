import { useEffect, useState } from 'react';
import {
<<<<<<< HEAD:src/components/ReviewDialog.jsx
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
=======
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/ReviewDialog.jsx
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import StarRating from './StarRating';
<<<<<<< HEAD:src/components/ReviewDialog.jsx

export default function ReviewDialog({ open, gameTitle, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
=======
import * as styles from '../styles/appStyles';

export default function ReviewDialog({ open, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('Test comment');
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/ReviewDialog.jsx
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!open) {
      setRating(0);
<<<<<<< HEAD:src/components/ReviewDialog.jsx
      setComment('');
=======
      setComment('Test comment');
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/ReviewDialog.jsx
      setErrorMessage('');
    }
  }, [open]);

  const handleSubmit = () => {
    if (!rating) {
<<<<<<< HEAD:src/components/ReviewDialog.jsx
      setErrorMessage('Error: review must contain star rating.');
=======
      setErrorMessage('Error: review must contain star rating');
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/ReviewDialog.jsx
      return;
    }

    onSubmit({ rating, comment: comment.trim() });
    setErrorMessage('');
  };

  return (
<<<<<<< HEAD:src/components/ReviewDialog.jsx
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 700 }}>Leave a Review</DialogTitle>
      <DialogContent>
        <Stack spacing={2.2} sx={{ pt: 1 }}>
          <Typography variant="body1" sx={{ color: '#596172' }}>
            Share your thoughts about {gameTitle}.
          </Typography>

          <Stack spacing={1}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
              Star rating
            </Typography>
            <StarRating value={rating} readOnly={false} onChange={setRating} size={36} />
          </Stack>

          <TextField
            label="Your review"
            multiline
            minRows={4}
            fullWidth
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="What stood out to you?"
          />

          {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}
        </Stack>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2.5 }}>
        <Button onClick={onClose} variant="text">
          X
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Post Review
        </Button>
      </DialogActions>
=======
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{ sx: styles.reviewDialogPaperSx }}
    >
      <DialogContent sx={styles.reviewDialogContentSx}>
        <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#14151a' }}>
            Leave a Review
          </Typography>
          <IconButton onClick={onClose} sx={styles.reviewDialogCloseSx} aria-label="Close review dialog">
            ×
          </IconButton>
        </Stack>

        <Box sx={{ mt: 2.4 }}>
          <StarRating value={rating} readOnly={false} onChange={setRating} size={34} />
        </Box>

        <Box sx={{ mt: 2.2 }}>
          <Typography variant="body2" sx={styles.reviewDialogLabelSx}>
            Comment
          </Typography>
          <TextField
            multiline
            minRows={6}
            fullWidth
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            placeholder="Share your thoughts"
            InputProps={{ sx: styles.reviewDialogInputSx }}
          />
        </Box>

        {errorMessage ? (
          <Typography variant="body2" sx={styles.reviewDialogErrorSx}>
            {errorMessage}
          </Typography>
        ) : null}

        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2.6 }}>
          <Button variant="contained" onClick={handleSubmit} sx={styles.reviewDialogPostButtonSx}>
            Post
          </Button>
        </Stack>
      </DialogContent>
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/ReviewDialog.jsx
    </Dialog>
  );
}
