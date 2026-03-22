import { Box, Typography } from '@mui/material';

export default function PosterMedia({
  title,
  posterSrc,
  posterAlt,
  wrapperSx,
  imageSx,
  placeholderLabel = 'Poster Placeholder',
  placeholderSx,
  placeholderTextVariant = 'subtitle1',
  placeholderTextSx,
}) {
  return (
    <Box sx={wrapperSx}>
      {posterSrc ? (
        <Box
          component="img"
          src={posterSrc}
          alt={posterAlt || `${title} poster`}
          sx={imageSx}
        />
      ) : (
        <Box sx={placeholderSx}>
          <Typography variant={placeholderTextVariant} sx={placeholderTextSx}>
            {placeholderLabel}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
