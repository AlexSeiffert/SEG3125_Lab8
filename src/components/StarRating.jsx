import { Box, IconButton } from '@mui/material';

export default function StarRating({
  value = 0,
  max = 5,
  size = 28,
  onChange,
  activeColor,
  inactiveColor,
  readOnly = true,
}) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const active = starValue <= value;

        if (readOnly) {
          return (
            <Box
              key={`rating-star-${starValue}`}
              component="span"
              sx={{
                fontSize: size,
                lineHeight: 1,
                color: active ? activeColor || '#f5c243' : inactiveColor || '#dbdde3',
              }}
            >
              ★
            </Box>
          );
        }

        return (
          <IconButton
            key={`rating-star-${starValue}`}
            onClick={() => onChange?.(starValue)}
            aria-label={`Set rating to ${starValue}`}
            sx={{ p: 0.2 }}
          >
            <Box
              component="span"
              sx={{
                fontSize: size,
                lineHeight: 1,
                color: active ? activeColor || '#f5c243' : inactiveColor || '#dbdde3',
              }}
            >
              ★
            </Box>
          </IconButton>
        );
      })}
    </Box>
  );
}
