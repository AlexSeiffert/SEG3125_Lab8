import { Box, Typography } from "@mui/material";
import * as styles from "../styles/appStyles";

export default function SectionHeader({ title, subtitle }) {
  return (
    <Box sx={styles.featuredTitlesSx}>
      <Typography variant="h2" sx={styles.featuredHeadingSx}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={styles.featuredSubtitleSx}>
        {subtitle}
      </Typography>
    </Box>
  );
}
