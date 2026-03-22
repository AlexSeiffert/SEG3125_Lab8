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
    <Box
      sx={{
        width: '100%',
        height: '100%',
        ...wrapperSx,
      }}
    >
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