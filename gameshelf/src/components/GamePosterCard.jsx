import { Box, Typography } from "@mui/material";

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
            boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.45)",
          }}
        >
          <Typography variant="subtitle2" sx={{ color: "#60708f" }}>
            {title}
          </Typography>
        </Box>
      )}
    </Box>
  );
}
