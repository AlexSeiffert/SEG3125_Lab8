import { Box, Stack, Typography } from "@mui/material";
import PosterMedia from "./PosterMedia";
import StarRating from "./StarRating";
import {
  DEFAULT_REVIEW_RATING,
  MAX_REVIEW_RATING,
} from "../constants/homeContent";
import * as styles from "../styles/appStyles";

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
        <PosterMedia
          title={title}
          posterSrc={posterSrc}
          posterAlt={posterAlt}
          wrapperSx={{ width: "100%", height: "100%" }}
          imageSx={styles.posterImageSx}
          placeholderLabel="Poster Placeholder"
          placeholderSx={styles.posterPlaceholderWrapSx}
          placeholderTextVariant="subtitle1"
          placeholderTextSx={{ color: "#5f6f8d" }}
        />
      </Box>

      <Typography variant="h5" sx={{ color: "#0f1013", fontWeight: 700 }}>
        {title}
      </Typography>

      <StarRating
        value={DEFAULT_REVIEW_RATING}
        max={MAX_REVIEW_RATING}
        activeColor={styles.ratingActiveColor}
        inactiveColor={styles.ratingInactiveColor}
        size={styles.ratingStarSizeLg}
      />

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
