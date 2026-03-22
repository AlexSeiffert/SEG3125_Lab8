import { Box, Stack } from "@mui/material";

export default function StarRating({
  value,
  max,
  activeColor,
  inactiveColor,
  size,
  sx,
}) {
  return (
    <Stack direction="row" spacing={0.4} sx={sx}>
      {Array.from({ length: max }, (_, starIndex) => (
        <Box
          key={`rating-star-${starIndex}`}
          component="span"
          sx={{
            color: starIndex < value ? activeColor : inactiveColor,
            fontSize: size,
            lineHeight: 0.9,
          }}
        >
          ★
        </Box>
      ))}
    </Stack>
  );
}
