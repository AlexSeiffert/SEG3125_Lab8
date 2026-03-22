import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';
import { NAV_ITEMS } from '../constants/homeContent';
import * as styles from '../styles/appStyles';

export default function AppHeader({ currentPage, onNavigate }) {
<<<<<<< HEAD:src/components/AppHeader.jsx
=======
  const visibleNavItems = currentPage === 'home'
    ? NAV_ITEMS.filter((item) => item.key !== 'home')
    : NAV_ITEMS;

  const activeKey = currentPage === 'game' ? 'discover' : currentPage;

>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/AppHeader.jsx
  return (
    <AppBar position="static" sx={styles.headerBarSx}>
      <Toolbar sx={styles.toolbarSx}>
        <Stack
          direction="row"
          spacing={0}
          sx={{ cursor: 'pointer' }}
          onClick={() => onNavigate('home')}
          aria-label="Go to home page"
        >
          <Typography variant="h2" sx={{ color: '#000', fontWeight: 800 }}>
            Game
          </Typography>
          <Typography variant="h2" sx={{ color: '#40559A', fontWeight: 800 }}>
            Shelf
          </Typography>
        </Stack>

<<<<<<< HEAD:src/components/AppHeader.jsx
        <Stack direction="row" spacing={6}>
          {NAV_ITEMS.map((item) => (
=======
        <Stack direction="row" spacing={{ xs: 3, md: 6 }}>
          {visibleNavItems.map((item) => (
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/AppHeader.jsx
            <Button
              key={`nav-item-${item.key}`}
              disableRipple
              onClick={() => onNavigate(item.key)}
              sx={{
                ...styles.navButtonBaseSx,
<<<<<<< HEAD:src/components/AppHeader.jsx
                ...(currentPage === item.key
                  ? styles.navButtonActiveSx
                  : styles.navButtonDefaultSx),
=======
                ...(activeKey === item.key ? styles.navButtonActiveSx : styles.navButtonDefaultSx),
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/components/AppHeader.jsx
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
      <Box sx={{ borderBottom: '1px solid #edf0f4' }} />
    </AppBar>
  );
}
