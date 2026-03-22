export const layout = {
  appShell: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
<<<<<<< HEAD:src/styles/appStyles.js
=======
    backgroundColor: '#ffffff',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  main: {
    flex: 1,
    py: 0,
  },
<<<<<<< HEAD:src/styles/appStyles.js
  toolbarBetween: {
    justifyContent: 'space-between',
    px: { xs: 3, md: 8 },
=======
  sectionContainer: {
    width: '100%',
    maxWidth: 1440,
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    boxSizing: 'border-box',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  rowBetween: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
<<<<<<< HEAD:src/styles/appStyles.js
  },
  columnLeft: {
    textAlign: 'left',
  },
  contentInsetLeft: {
    pl: { xs: 0, md: 10 },
=======
    maxWidth: 1440,
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    boxSizing: 'border-box',
  },
  toolbarBetween: {
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 1440,
    mx: 'auto',
    px: { xs: 2, sm: 3, md: 4 },
    minHeight: 92,
    boxSizing: 'border-box',
  },
  columnLeft: {
    textAlign: 'left',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  sectionGapLg: {
    mt: { xs: 5, md: 6 },
  },
};

export const surfaces = {
  topBar: {
    height: 92,
    backgroundColor: '#fff',
    justifyContent: 'center',
    boxShadow: 'none',
<<<<<<< HEAD:src/styles/appStyles.js
  },
  footer: {
    backgroundColor: '#f5f5f5',
    borderTop: '1px solid #e0e0e0',
=======
    borderBottom: '1px solid #eceff4',
  },
  footer: {
    backgroundColor: '#f7f7f8',
    borderTop: '1px solid #e6e8ee',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
    py: 3,
    mt: 6,
  },
};

export const text = {
  muted: {
<<<<<<< HEAD:src/styles/appStyles.js
    color: '#555',
  },
  dark: {
    color: '#000000',
=======
    color: '#606775',
  },
  dark: {
    color: '#111216',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  inverse: {
    color: '#ffffff',
  },
};

export const buttons = {
  textLike: {
    p: 0,
    minWidth: 'auto',
    typography: 'subtitle1',
    textTransform: 'none',
    '&:hover': { backgroundColor: 'transparent' },
  },
  navActive: {
    color: '#40559A',
    fontWeight: 700,
  },
  navDefault: {
<<<<<<< HEAD:src/styles/appStyles.js
    color: '#000000',
=======
    color: '#111216',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
    fontWeight: 500,
  },
  primaryCta: {
    backgroundColor: '#40559A',
    color: '#fff',
    textTransform: 'none',
    borderRadius: 2,
<<<<<<< HEAD:src/styles/appStyles.js
    maxWidth: 'fit-content',
    px: 2.2,
    py: 0.9,
  },
  secondaryCta: {
    borderColor: '#0000002a',
    textTransform: 'none',
    borderRadius: 2,
    maxWidth: 'fit-content',
    px: 2.2,
    py: 0.9,
=======
    px: 2.2,
    py: 1,
    maxWidth: 'fit-content',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#364985',
      boxShadow: 'none',
    },
  },
  secondaryCta: {
    borderColor: '#cfd5e3',
    color: '#111216',
    textTransform: 'none',
    borderRadius: 2,
    px: 2.2,
    py: 1,
    maxWidth: 'fit-content',
    '&:hover': {
      borderColor: '#b9c0d0',
      backgroundColor: '#f8f9fc',
    },
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
};

export const media = {
  imageContain: {
    display: 'block',
    width: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
  fadeLeftToTransparentWrap: {
    position: 'relative',
<<<<<<< HEAD:src/styles/appStyles.js
=======
    width: { xs: '100%', md: '56%' },
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
    maxWidth: '100%',
    ml: 'auto',
    '&::after': {
      content: '""',
      position: 'absolute',
<<<<<<< HEAD:src/styles/appStyles.js
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background:
        'linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 45%)',
=======
      inset: 0,
      background:
        'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 42%)',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
      pointerEvents: 'none',
    },
  },
};

export const sections = {
  heroTextColumn: {
    ...layout.columnLeft,
<<<<<<< HEAD:src/styles/appStyles.js
    ...layout.contentInsetLeft,
=======
    width: { xs: '100%', md: '34%' },
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  heroActions: {
    mt: 3,
    alignItems: 'center',
  },
  featuredTitles: {
<<<<<<< HEAD:src/styles/appStyles.js
    px: { xs: 3, md: 10 },
=======
    ...layout.sectionContainer,
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
    ...layout.sectionGapLg,
  },
};

export const grids = {
  featuredGames: {
    mt: 4,
<<<<<<< HEAD:src/styles/appStyles.js
    px: { xs: 3, md: 10 },
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: 4,
    justifyContent: 'center',
=======
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, minmax(0, 1fr))',
      sm: 'repeat(3, minmax(0, 1fr))',
      md: 'repeat(4, minmax(0, 1fr))',
      lg: 'repeat(5, minmax(0, 1fr))',
      xl: 'repeat(6, minmax(0, 1fr))',
    },
    gap: { xs: 2, sm: 2.5, md: 3 },
    alignItems: 'start',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
};

export const cards = {
  featuredGame: {
    width: '100%',
<<<<<<< HEAD:src/styles/appStyles.js
    height: '100%',
=======
    maxWidth: 210,
    justifySelf: 'center',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
};

export const placeholders = {
  imageCard: {
    width: '100%',
    aspectRatio: '4 / 5',
    borderRadius: 3,
    border: '1px solid #d9deea',
<<<<<<< HEAD:src/styles/appStyles.js
    background: 'linear-gradient(145deg, #f3f5fa 0%, #e8ecf6 55%, #dfe6f4 100%)',
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45)',
=======
    backgroundColor: '#eef2f8',
    overflow: 'hidden',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
  posterWrap: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
<<<<<<< HEAD:src/styles/appStyles.js
    background: 'linear-gradient(145deg, #f3f5fa 0%, #e8ecf6 55%, #dfe6f4 100%)',
  },
  posterWrapInset: {
    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.45)',
=======
    backgroundColor: '#eef2f8',
  },
  posterWrapInset: {
    boxShadow: 'none',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
};

export const images = {
  cover: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
<<<<<<< HEAD:src/styles/appStyles.js
    display: 'block',
=======
    objectPosition: 'center top',
    display: 'block',
  },
  detailCover: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    display: 'block',
    backgroundColor: '#eef2f8',
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
  },
};

export const ratings = {
  active: '#f5c243',
  inactive: '#dbdde3',
<<<<<<< HEAD:src/styles/appStyles.js
  starSizeLg: 34,
=======
  starSizeLg: 50,
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
};

export const typography = {
  featuredHeading: {
    lineHeight: 1.05,
    letterSpacing: '0.01em',
  },
  featuredSubtitle: {
    ...text.muted,
    mt: 1.25,
    maxWidth: 520,
  },
};

<<<<<<< HEAD:src/styles/appStyles.js
=======
// Backward-compatible exports
>>>>>>> 972d8ea (add game images; Update poster cards to fill grid cleanly by switching storefront images to cover mode; align the overall design with lab 7 text description more literally):gameshelf/src/styles/appStyles.js
export const appShellSx = layout.appShell;
export const headerBarSx = surfaces.topBar;
export const toolbarSx = layout.toolbarBetween;
export const navButtonBaseSx = buttons.textLike;
export const navButtonActiveSx = buttons.navActive;
export const navButtonDefaultSx = buttons.navDefault;
export const mainSx = layout.main;
export const heroRowSx = layout.rowBetween;
export const heroTextColumnSx = sections.heroTextColumn;
export const heroTitleSx = {
  maxWidth: 520,
};
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
export const posterPlaceholderWrapSx = placeholders.posterWrap;
export const posterPlaceholderInsetSx = placeholders.posterWrapInset;
export const posterImageSx = images.cover;
export const detailPosterImageSx = images.detailCover;
export const ratingActiveColor = ratings.active;
export const ratingInactiveColor = ratings.inactive;
export const ratingStarSizeLg = ratings.starSizeLg;
export const heroImageWrapSx = media.fadeLeftToTransparentWrap;
export const heroImageSx = media.imageContain;
export const footerSx = surfaces.footer;

export const homeHeroWrapSx = {
  ...layout.sectionContainer,
  pt: { xs: 2.5, md: 1.4 },
  pb: { xs: 2.5, md: 3.2 },
};

export const homeSectionWrapSx = {
  ...layout.sectionContainer,
  pb: 3,
};

export const profilePageShellSx = {
  width: '100%',
  maxWidth: 1440,
  mx: 'auto',
  px: { xs: 2, sm: 3, md: 4 },
  py: { xs: 2.5, md: 1.2 },
  boxSizing: 'border-box',
};

export const backLinkSx = {
  mb: 2.5,
  px: 0,
  color: '#22242a',
  fontWeight: 700,
  textTransform: 'none',
  justifyContent: 'flex-start',
  '&:hover': { backgroundColor: 'transparent', textDecoration: 'underline' },
};

export const profileTopRowSx = {
  alignItems: 'flex-start',
};

export const profileTextColumnSx = {
  flex: 1,
  maxWidth: { xs: '100%', lg: 760 },
};

export const profileTitleSx = {
  fontSize: { xs: '2.2rem', md: '3.15rem' },
  fontWeight: 800,
  lineHeight: 1.05,
  mb: 2.8,
};

export const profileMetaLabelSx = {
  color: '#4f62aa',
  fontWeight: 700,
};

export const profileMetaLineSx = {
  color: '#555c68',
  fontSize: { xs: '1.25rem', md: '1.55rem' },
  mb: 0.7,
};

export const profileDescriptionSx = {
  color: '#202127',
  fontSize: { xs: '1.12rem', md: '1.28rem' },
  lineHeight: 1.5,
  maxWidth: 700,
  mt: 2.4,
  mb: 3.2,
};

export const profileReviewsHeadingSx = {
  fontSize: { xs: '1.9rem', md: '2.2rem' },
  fontWeight: 800,
  mb: 2.2,
};

export const profileReviewCardSx = {
  backgroundColor: '#efeff2',
  border: '1px solid #dddddf',
  borderRadius: '18px',
  p: { xs: 2, md: 2.4 },
  boxShadow: '0 1px 0 rgba(0,0,0,0.02)',
};

export const profileReviewAvatarSx = {
  width: 54,
  height: 54,
  borderRadius: '14px',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: '#e2e8ff',
  color: '#5a6ef0',
  fontSize: 24,
  flexShrink: 0,
};

export const profilePosterColumnSx = {
  width: { xs: '100%', lg: 305 },
  flexShrink: 0,
  ml: { lg: 'auto' },
};

export const profilePosterImageSx = {
  width: '100%',
  borderRadius: '8px',
  display: 'block',
  border: '1px solid #dbdde4',
  overflow: 'hidden',
  aspectRatio: '2 / 3',
  objectFit: 'contain',
  objectPosition: 'center',
  backgroundColor: '#eef2f8',
};

export const profileActionRowSx = {
  mt: 2,
  flexWrap: 'wrap',
};

export const profilePrimaryButtonSx = {
  ...buttons.primaryCta,
  minWidth: 160,
};

export const profileSecondaryButtonSx = {
  ...buttons.secondaryCta,
  minWidth: 215,
};

export const profileFooterSx = {
  mt: 4.5,
  pt: 2,
  pb: 1,
  borderTop: '1px solid #ececec',
};

export const reviewDialogPaperSx = {
  borderRadius: '20px',
  overflow: 'hidden',
};

export const reviewDialogContentSx = {
  px: 3,
  pt: 2.8,
  pb: 2.8,
};

export const reviewDialogCloseSx = {
  width: 34,
  height: 34,
  border: '1px solid #d7d9df',
  color: '#666b76',
  fontSize: 20,
};

export const reviewDialogLabelSx = {
  color: '#3e4450',
  mb: 0.8,
  fontWeight: 600,
};

export const reviewDialogInputSx = {
  alignItems: 'flex-start',
  borderRadius: '8px',
  '& textarea': {
    minHeight: '165px !important',
    fontSize: '0.98rem',
  },
};

export const reviewDialogErrorSx = {
  mt: 2,
  color: '#d35a38',
  fontWeight: 700,
};

export const reviewDialogPostButtonSx = {
  ...buttons.primaryCta,
  minWidth: 86,
};