import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#40559A',
    },
    background: {
      default: '#ffffff',
      paper: '#f7f8fb',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: 54,
      lineHeight: 1.08,
    },
    h2: {
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 1.08,
    },
    h3: {
      fontWeight: 700,
      fontSize: 28,
      lineHeight: 1.12,
    },
    h5: {
      fontWeight: 500,
      fontSize: 22,
      lineHeight: 1.3,
    },
    subtitle1: {
      fontWeight: 400,
      fontSize: 17,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.55,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 14,
  },
});

export default theme;
