import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";
import { NAV_ITEMS } from "../constants/homeContent";
import * as styles from "../styles/appStyles";

export default function AppHeader({ currentPage, onNavigate }) {
  const activeKey = currentPage === "game" ? "discover" : currentPage;

  return (
    <AppBar position="static" sx={styles.headerBarSx}>
      <Toolbar sx={styles.toolbarSx}>
        <Stack
          direction="row"
          spacing={0}
          sx={{ cursor: "pointer" }}
          onClick={() => onNavigate("home")}
          aria-label="Go to home page"
        >
          <Typography variant="h2" sx={{ color: "#000", fontWeight: 800 }}>
            Game
          </Typography>
          <Typography variant="h2" sx={{ color: "#40559A", fontWeight: 800 }}>
            Shelf
          </Typography>
        </Stack>

        <Stack direction="row" spacing={{ xs: 3, md: 6 }}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={`nav-item-${item.key}`}
              disableRipple
              onClick={() => onNavigate(item.key)}
              sx={{
                ...styles.navButtonBaseSx,
                ...(activeKey === item.key
                  ? styles.navButtonActiveSx
                  : styles.navButtonDefaultSx),
              }}
            >
              {item.label}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
