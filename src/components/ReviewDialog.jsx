import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import StarRating from './StarRating';
import * as styles from '../styles/appStyles';

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
      setErrorMessage('Error: review must contain star rating');
      return;
    }

    onSubmit?.({
      rating,
      comment: comment.trim(),
    });

    setErrorMessage('');
  };

  return (
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

          <IconButton
            onClick={onClose}
            sx={styles.reviewDialogCloseSx}
            aria-label="Close review dialog"
          >
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
            placeholder={
              gameTitle ? `Share your thoughts about ${gameTitle}` : 'Share your thoughts'
            }
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
    </Dialog>
  );
}