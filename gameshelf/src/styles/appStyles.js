export const layout = {
  appShell: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    flex: 1,
    py: 0,
  },
  toolbarBetween: {
    justifyContent: "space-between",
  },
  rowBetween: {
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  columnLeft: {
    textAlign: "left",
  },
  contentInsetLeft: {
    pl: 10,
  },
  sectionGapLg: {
    mt: 6,
  },
};

export const surfaces = {
  topBar: {
    height: 92,
    backgroundColor: "#fff",
    justifyContent: "center",
    boxShadow: "none",
  },
  footer: {
    backgroundColor: "#f5f5f5",
    borderTop: "1px solid #e0e0e0",
    py: 3,
    mt: 4,
  },
};

export const text = {
  muted: {
    color: "#555",
  },
  dark: {
    color: "#000000",
  },
  inverse: {
    color: "#ffffff",
  },
};

export const buttons = {
  textLike: {
    p: 0,
    minWidth: "auto",
    typography: "subtitle1",
    textTransform: "none",
    "&:hover": { backgroundColor: "transparent" },
  },
  primaryCta: {
    backgroundColor: "#40559A",
    color: "#fff",
    textTransform: "none",
    borderRadius: 2,
    maxWidth: "fit-content",
  },
  secondaryCta: {
    borderColor: "#0000002a",
    textTransform: "none",
    borderRadius: 2,
    maxWidth: "fit-content",
  },
};

export const media = {
  imageContain: {
    display: "block",
    width: "100%",
    height: "auto",
    objectFit: "contain",
  },
  fadeLeftToTransparentWrap: {
    position: "relative",
    width: "58%",
    maxWidth: "100%",
    ml: "auto",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 45%)",
      pointerEvents: "none",
    },
  },
};

export const sections = {
  heroTextColumn: {
    ...layout.columnLeft,
    ...layout.contentInsetLeft,
    width: "30%",
  },
  heroActions: {
    mt: 3,
    alignItems: "center",
  },
  featuredTitles: {
    ...layout.contentInsetLeft,
    ...layout.sectionGapLg,
  },
};

export const grids = {
  featuredGames: {
    mt: 4,
    display: "grid",
    gridTemplateColumns: "repeat(5, 230px)",
    gridAutoRows: "350px",
    gap: 4,
    justifyContent: "center",
  },
};

export const cards = {
  featuredGame: {
    width: "100%",
    height: "100%",
  },
};

export const placeholders = {
  imageCard: {
    width: "100%",
    aspectRatio: "4 / 5",
    borderRadius: 3,
    border: "1px solid #d9deea",
    background:
      "linear-gradient(145deg, #f3f5fa 0%, #e8ecf6 55%, #dfe6f4 100%)",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.45)",
  },
};

export const typography = {
  featuredHeading: {
    lineHeight: 1.05,
    letterSpacing: "0.01em",
  },
  featuredSubtitle: {
    ...text.muted,
    mt: 3,
    maxWidth: 520,
  },
};

// Backward-compatible exports currently used by App.jsx
export const appShellSx = layout.appShell;
export const headerBarSx = surfaces.topBar;
export const toolbarSx = layout.toolbarBetween;
export const navButtonBaseSx = buttons.textLike;
export const mainSx = layout.main;
export const heroRowSx = layout.rowBetween;
export const heroTextColumnSx = sections.heroTextColumn;
export const heroSubtitleSx = text.muted;
export const heroActionsSx = sections.heroActions;
export const heroPrimaryButtonSx = buttons.primaryCta;
export const heroSecondaryButtonSx = buttons.secondaryCta;
export const heroPrimaryButtonTextSx = text.inverse;
export const heroSecondaryButtonTextSx = text.dark;
export const featuredTitlesSx = sections.featuredTitles;
export const featuredHeadingSx = typography.featuredHeading;
export const featuredSubtitleSx = typography.featuredSubtitle;
export const featuredGamesGridSx = grids.featuredGames;
export const featuredGameCardSx = cards.featuredGame;
export const featuredGamePlaceholderSx = placeholders.imageCard;
export const heroImageWrapSx = media.fadeLeftToTransparentWrap;
export const heroImageSx = media.imageContain;
export const footerSx = surfaces.footer;
