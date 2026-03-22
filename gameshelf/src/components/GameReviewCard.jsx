import { Box, Stack, Typography } from "@mui/material";

export default function GameReviewCard({
  title = "Game Title",
  reviewText = "Add your review text here.",
  username = "Username",
  date = "Month DD, YYYY",
  posterSrc,
  posterAlt,
  sx,
}) {
  return (
    <Box
      sx={{
        width: 340,
        backgroundColor: "#f2f3f5",
        border: "1px solid #d8dbe2",
        borderRadius: 4,
        p: 3,
        boxSizing: "border-box",
        ...sx,
      }}
    >
      <Box
        sx={{
          width: "88%",
          mx: "auto",
          aspectRatio: "2 / 3",
          borderRadius: 3,
          overflow: "hidden",
          mb: 2.5,
          backgroundColor: "#dee4ef",
        }}
      >
        {posterSrc ? (
          <Box
            component="img"
            src={posterSrc}
            alt={posterAlt || `${title} poster`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(145deg, #f3f5fa 0%, #e8ecf6 55%, #dfe6f4 100%)",
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "#5f6f8d" }}>
              Poster Placeholder
            </Typography>
          </Box>
        )}
      </Box>

      <Typography variant="h5" sx={{ color: "#0f1013", fontWeight: 700 }}>
        {title}
      </Typography>

      <Stack direction="row" spacing={0.4}>
        {[0, 1, 2, 3, 4].map((starIndex) => (
          <Box
            key={starIndex}
            component="span"
            sx={{
              color: starIndex < 4 ? "#f5c243" : "#dbdde3",
              fontSize: 50,
              lineHeight: 0.9,
            }}
          >
            ★
          </Box>
        ))}
      </Stack>

      <Typography variant="subtitle1" sx={{ color: "#16171b", mt: 1.6 }}>
        {reviewText}
      </Typography>

      <Stack direction="row" spacing={1.6} sx={{ mt: 2.6 }} alignItems="center">
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 2,
            backgroundColor: "#e8ebf1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#5b86ff",
            fontSize: 24,
            lineHeight: 1,
          }}
        >
          ☺
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            sx={{ color: "#111216", fontWeight: 700 }}
          >
            {username}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "#6a6d75" }}>
            {date}
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
