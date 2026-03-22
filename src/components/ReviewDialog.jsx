import { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import StarRating from './StarRating';

export default function ReviewDialog({ open, gameTitle, onClose, onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!open) {
      setRating(0);
      setComment('');
      setErrorMessage('');
    }
  }, [open]);

  const handleSubmit = () => {
    if (!rating) {
      setErrorMessage('Error: review must contain star rating.');
      return;
    }

    onSubmit({ rating, comment: comment.trim() });
    setErrorMessage('');
  };

  return (
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
    </Dialog>
  );
}
