import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: 54,
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 650,
      fontSize: 42,
      lineHeight: 1,
    },
    h5: {
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 1.35,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.2,
    },
  },
});

export default theme;
