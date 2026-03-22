import { Box } from "@mui/material";
import PosterMedia from "./PosterMedia";
import * as styles from "../styles/appStyles";

export default function GamePosterCard({
  title = "Game title",
  posterSrc,
  posterAlt,
  width = 275,
  height = 412.5,
  sx,
}) {
  return (
    <Box
      sx={{
        width,
        height,
        borderRadius: 3,
        overflow: "hidden",
        border: "1px solid #d9deea",
        backgroundColor: "#edf1f8",
        position: "relative",
        transition: "transform 180ms ease",
        transformOrigin: "center",
        willChange: "transform",
        "&:hover": {
          transform: "scale(1.03)",
        },
        ...sx,
      }}
    >
      <PosterMedia
        title={title}
        posterSrc={posterSrc}
        posterAlt={posterAlt}
        wrapperSx={{ width: "100%", height: "100%" }}
        imageSx={styles.posterImageSx}
        placeholderLabel={title}
        placeholderSx={{
          ...styles.posterPlaceholderWrapSx,
          ...styles.posterPlaceholderInsetSx,
        }}
        placeholderTextVariant="subtitle2"
        placeholderTextSx={{ color: "#60708f" }}
      />
    </Box>
  );
}
